import { FormEvent, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

interface FinalCTAProps {
  onReplay: () => void;
}

// EmailJS Configuration
const SERVICE_ID = 'service_2f7eucd';
const TEMPLATE_ID = 'template_jf567e9';
const PUBLIC_KEY = 'pYnJDuspmKnRxV3xo';

export default function FinalCTA({ onReplay }: FinalCTAProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsSending(true);
    setError('');
    setSubmitted(false);

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        {
          publicKey: PUBLIC_KEY,
        }
      );

      setSubmitted(true);

      // Clear the form after successful email delivery
      setFormData({
        name: '',
        email: '',
        message: '',
      });

      window.setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error('Email sending failed:', error);
      setError(
        'Sorry, your message could not be sent. Please try again or contact me directly by email.'
      );
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-white/10 px-6 py-20 sm:px-10 lg:px-16"
    >
      {/* Cinematic background glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            'radial-gradient(circle at center, rgba(236,72,153,0.18), transparent 55%)',
        }}
      />

      <div className="relative mx-auto max-w-3xl">
        {/* Section heading */}
        <div className="text-center">
          <p className="mb-3 text-xs font-bold tracking-[0.35em] text-pink-400">
            LET&apos;S CONNECT
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Contact Me
          </h2>

          <p className="mt-4 text-base text-zinc-400 sm:text-lg">
            Let&apos;s connect — feel free to send me a message.
          </p>
        </div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="mt-10 space-y-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          {/* Name */}
          <input
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={(event) =>
              setFormData((current) => ({
                ...current,
                name: event.target.value,
              }))
            }
            required
            disabled={isSending}
            className="w-full rounded-xl border border-white/10 bg-black/40 px-5 py-4 text-white outline-none transition duration-300 placeholder:text-zinc-500 focus:border-pink-500 focus:ring-1 focus:ring-pink-500/30 disabled:cursor-not-allowed disabled:opacity-60"
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={(event) =>
              setFormData((current) => ({
                ...current,
                email: event.target.value,
              }))
            }
            required
            disabled={isSending}
            className="w-full rounded-xl border border-white/10 bg-black/40 px-5 py-4 text-white outline-none transition duration-300 placeholder:text-zinc-500 focus:border-pink-500 focus:ring-1 focus:ring-pink-500/30 disabled:cursor-not-allowed disabled:opacity-60"
          />

          {/* Message */}
          <textarea
            placeholder="Your Message"
            rows={6}
            value={formData.message}
            onChange={(event) =>
              setFormData((current) => ({
                ...current,
                message: event.target.value,
              }))
            }
            required
            disabled={isSending}
            className="w-full resize-none rounded-xl border border-white/10 bg-black/40 px-5 py-4 text-white outline-none transition duration-300 placeholder:text-zinc-500 focus:border-pink-500 focus:ring-1 focus:ring-pink-500/30 disabled:cursor-not-allowed disabled:opacity-60"
          />

          {/* Send button */}
          <motion.button
            type="submit"
            disabled={isSending}
            whileHover={!isSending ? { scale: 1.02 } : {}}
            whileTap={!isSending ? { scale: 0.98 } : {}}
            className="w-full rounded-xl bg-gradient-to-r from-pink-500 to-fuchsia-600 px-6 py-4 font-bold tracking-wide text-white shadow-lg shadow-pink-500/20 transition disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSending
              ? 'Sending Message...'
              : submitted
                ? 'Message Sent Successfully!'
                : 'Send Message'}
          </motion.button>
        </motion.form>

        {/* Success message */}
        {submitted && (
          <motion.p
            className="mt-4 text-center text-sm text-green-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Thank you for reaching out! Your message has been sent successfully.
            I&apos;ll get back to you soon.
          </motion.p>
        )}

        {/* Error message */}
        {error && (
          <motion.p
            className="mt-4 text-center text-sm text-red-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {error}
          </motion.p>
        )}

        {/* Social Links */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="https://www.linkedin.com/in/yogeswari-boreddi-2161022a7/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/15 px-7 py-3 text-sm font-bold tracking-wide text-white transition hover:border-pink-500 hover:text-pink-400"
          >
            LINKEDIN ↗
          </a>

          <a
            href="https://github.com/B-YOGESWARI"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/15 px-7 py-3 text-sm font-bold tracking-wide text-white transition hover:border-pink-500 hover:text-pink-400"
          >
            GITHUB ↗
          </a>

          <a
            href="mailto:yogeswariboreddi@gmail.com"
            className="rounded-full border border-white/15 px-7 py-3 text-sm font-bold tracking-wide text-white transition hover:border-pink-500 hover:text-pink-400"
          >
            EMAIL ↗
          </a>
        </div>

        {/* Footer actions */}
        <div className="mt-12 flex flex-wrap justify-center gap-6 text-xs font-semibold tracking-[0.2em] text-zinc-500">
          <button
            type="button"
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: 'smooth',
              })
            }
            className="transition hover:text-pink-400"
          >
            ↻ BACK TO TOP
          </button>

          <button
            type="button"
            onClick={onReplay}
            className="transition hover:text-pink-400"
          >
            ▶ REPLAY INTRO
          </button>
        </div>

        {/* Portfolio Footer */}
        <div className="mt-8 text-center">
          <p className="text-sm text-zinc-500">
            © 2026 Yogeswari Boreddi. Designed and developed with creativity
            and code.
          </p>

          <p className="mt-2 text-xs tracking-[0.2em] text-zinc-600">
            BUILT WITH PASSION · POWERED BY TECHNOLOGY
          </p>
        </div>
      </div>
    </section>
  );
}