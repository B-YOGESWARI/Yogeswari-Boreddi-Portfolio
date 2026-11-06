
import sharp from 'sharp';
import { mkdirSync, existsSync } from 'node:fs';

// ==========================================
// YOGESWARI BOREDI - PORTFOLIO IMAGE BUILDER
// ==========================================

const OUT = 'public/assets';

const HIGH_RES_IMAGE = 'pic1.jpeg';
const CUTOUT_IMAGE = 'pic.png';

mkdirSync(OUT, { recursive: true });

// ==========================================
// STEP 1: VALIDATE SOURCE IMAGES
// ==========================================

if (!existsSync(HIGH_RES_IMAGE)) {
  throw new Error(`Missing source image: ${HIGH_RES_IMAGE}`);
}

if (!existsSync(CUTOUT_IMAGE)) {
  throw new Error(`Missing transparent cutout: ${CUTOUT_IMAGE}`);
}

const hi = sharp(HIGH_RES_IMAGE);
const { width, height } = await hi.metadata();

if (!width || !height) {
  throw new Error('Unable to read high-resolution image dimensions.');
}

const cutoutMetadata = await sharp(CUTOUT_IMAGE).metadata();

if (!cutoutMetadata.hasAlpha) {
  throw new Error(
    'pic.png must have a transparent background with an alpha channel.'
  );
}

console.log(`Source image: ${width} x ${height}`);

// ==========================================
// STEP 2: EXTRACT AND UPSCALE ALPHA MASK
// ==========================================

const alpha = await sharp(CUTOUT_IMAGE)
  .ensureAlpha()
  .extractChannel('alpha')
  .resize(width, height, {
    fit: 'fill',
    kernel: 'lanczos3'
  })
  .blur(0.8)
  .raw()
  .toBuffer();

// ==========================================
// STEP 3: APPLY MASK TO HIGH-RES PHOTO
// ==========================================

const rgb = await sharp(HIGH_RES_IMAGE)
  .removeAlpha()
  .raw()
  .toBuffer();

const rgba = Buffer.alloc(width * height * 4);

for (let i = 0; i < width * height; i++) {
  rgba[i * 4] = rgb[i * 3];
  rgba[i * 4 + 1] = rgb[i * 3 + 1];
  rgba[i * 4 + 2] = rgb[i * 3 + 2];
  rgba[i * 4 + 3] = alpha[i];
}

const cutout = await sharp(rgba, {
  raw: {
    width,
    height,
    channels: 4
  }
})
  .png()
  .toBuffer();

// ==========================================
// STEP 4: GENERATE RESPONSIVE PORTRAITS
// ==========================================

for (const w of [1100, 720, 420]) {
  await sharp(cutout)
    .resize({
      width: w,
      kernel: 'lanczos3'
    })
    .webp({
      quality: 90,
      alphaQuality: 95,
      effort: 6
    })
    .toFile(`${OUT}/portrait-${w}.webp`);

  console.log(`Generated portrait-${w}.webp`);
}

// ==========================================
// STEP 5: PREPARE SOCIAL SHARE PORTRAIT
// ==========================================

const portrait = await sharp(cutout)
  .resize({
    width: 520,
    height: 630,
    fit: 'inside',
    kernel: 'lanczos3'
  })
  .png()
  .toBuffer();

// ==========================================
// STEP 6: CREATE CINEMATIC OG IMAGE
// ==========================================

const background = Buffer.from(`
<svg width="1200" height="630"
xmlns="http://www.w3.org/2000/svg">

  <defs>
    <radialGradient id="glow"
      cx="78%" cy="45%" r="48%">

      <stop offset="0%"
        stop-color="#e00083"
        stop-opacity="0.55"/>

      <stop offset="55%"
        stop-color="#9200b9"
        stop-opacity="0.20"/>

      <stop offset="100%"
        stop-color="#07070a"
        stop-opacity="0"/>

    </radialGradient>

    <linearGradient id="accent"
      x1="0%" y1="0%"
      x2="100%" y2="100%">

      <stop offset="0%"
        stop-color="#ff2868"/>

      <stop offset="100%"
        stop-color="#9200b9"/>

    </linearGradient>
  </defs>

  <rect width="1200"
    height="630"
    fill="#07070a"/>

  <rect width="1200"
    height="630"
    fill="url(#glow)"/>

  <circle cx="940" cy="310" r="250"
    fill="none"
    stroke="#ff2868"
    stroke-opacity="0.45"
    stroke-width="2"/>

  <path d="M0 580 Q200 510 400 590 T800 570"
    fill="none"
    stroke="#e00083"
    stroke-opacity="0.5"
    stroke-width="2"/>

  <text x="75" y="105"
    font-family="Arial, sans-serif"
    font-size="20"
    font-weight="600"
    letter-spacing="8"
    fill="#ff4b91">
    &lt;/&gt; DEVELOPER
  </text>

  <text x="72" y="270"
    font-family="Arial, sans-serif"
    font-size="88"
    font-weight="800"
    letter-spacing="1"
    fill="#ffffff">
    YOGESWARI
  </text>

  <text x="76" y="365"
    font-family="Arial, sans-serif"
    font-size="82"
    font-weight="800"
    letter-spacing="2"
    fill="url(#accent)">
    BOREDDI
  </text>

  <text x="78" y="430"
    font-family="Arial, sans-serif"
    font-size="18"
    font-weight="600"
    letter-spacing="1.5"
    fill="#ffffff">
    PYTHON FULL STACK DEVELOPER
  </text>

  <text x="78" y="468"
    font-family="Arial, sans-serif"
    font-size="17"
    font-weight="600"
    letter-spacing="1"
    fill="#ff4b91">
    BUSINESS APPLICATION DEVELOPER (ZOHO)
  </text>

  <text x="78" y="506"
    font-family="Arial, sans-serif"
    font-size="18"
    font-weight="600"
    letter-spacing="2"
    fill="#c9a4d5">
    AGENTIC AI
  </text>

  <text x="78" y="565"
    font-family="Arial, sans-serif"
    font-size="14"
    font-weight="500"
    letter-spacing="2"
    fill="#aaa6b5">
    BUILDING SMART APPLICATIONS • EXPLORING AI
  </text>

</svg>
`);

// ==========================================
// STEP 7: COMBINE BACKGROUND AND PORTRAIT
// ==========================================

await sharp({
  create: {
    width: 1200,
    height: 630,
    channels: 4,
    background: '#07070a'
  }
})
  .composite([
    {
      input: background,
      left: 0,
      top: 0
    },
    {
      input: portrait,
      gravity: 'southeast'
    }
  ])
  .jpeg({
    quality: 92,
    mozjpeg: true
  })
  .toFile(`${OUT}/og-image.jpg`);

// ==========================================
// STEP 8: COMPLETED
// ==========================================

console.log('');
console.log('======================================');
console.log(' YOGESWARI PORTFOLIO IMAGES GENERATED ');
console.log('======================================');
console.log(' portrait-1100.webp');
console.log(' portrait-720.webp');
console.log(' portrait-420.webp');
console.log(' og-image.jpg');
console.log('======================================');