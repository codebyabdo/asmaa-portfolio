"use client";

import { useActionState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

import MagneticButton from "@/components/ui/MagneticButton";
import {
  ContactFormState,
  submitContactForm,
} from "@/actions/send-contact-email";

const initialState: ContactFormState = {
  success: false,
  error: null,
};

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    submitContactForm,
    initialState,
  );

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass rounded-[2.5rem] border border-luxury-charcoal/5 p-8 md:p-12"
    >
      <h2 className="mb-10 font-serif text-3xl italic">
        Send a Message
      </h2>

      <form action={formAction} className="space-y-8">
        {/* Name */}
        <div className="space-y-2">
          <label className="ml-1 text-[10px] font-bold uppercase tracking-[0.35em] text-luxury-charcoal/40">
            Full Name
          </label>

          <input
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Enter your name"
            className="w-full border-b border-luxury-charcoal/10 bg-transparent pb-4 font-light outline-none transition-colors placeholder:text-luxury-charcoal/30 focus:border-luxury-gold"
          />
        </div>

        {/* Email */}
        <div className="space-y-2">
          <label className="ml-1 text-[10px] font-bold uppercase tracking-[0.35em] text-luxury-charcoal/40">
            Email Address
          </label>

          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="hello@example.com"
            className="w-full border-b border-luxury-charcoal/10 bg-transparent pb-4 font-light outline-none transition-colors placeholder:text-luxury-charcoal/30 focus:border-luxury-gold"
          />
        </div>

        {/* Subject */}
        <div className="space-y-2">
          <label className="ml-1 text-[10px] font-bold uppercase tracking-[0.35em] text-luxury-charcoal/40">
            Subject
          </label>

          <input
            name="subject"
            type="text"
            required
            autoComplete="off"
            placeholder="What is this regarding?"
            className="w-full border-b border-luxury-charcoal/10 bg-transparent pb-4 font-light outline-none transition-colors placeholder:text-luxury-charcoal/30 focus:border-luxury-gold"
          />
        </div>

        {/* Message */}
        <div className="space-y-2">
          <label className="ml-1 text-[10px] font-bold uppercase tracking-[0.35em] text-luxury-charcoal/40">
            Message
          </label>

          <textarea
            name="message"
            required
            rows={5}
            placeholder="Tell me about your project..."
            className="w-full resize-none border-b border-luxury-charcoal/10 bg-transparent pb-4 font-light outline-none transition-colors placeholder:text-luxury-charcoal/30 focus:border-luxury-gold"
          />
        </div>

        <MagneticButton
          type="submit"
          disabled={isPending}
          className="w-full disabled:pointer-events-none disabled:opacity-60"
        >
          <span className="flex items-center justify-center gap-3">
            {isPending ? "Sending..." : "Send Message"}
            <Send size={16} />
          </span>
        </MagneticButton>
      </form>

      {state.success && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 rounded-2xl border border-green-200 bg-green-50 p-5"
        >
          <h3 className="mb-2 font-medium text-green-800">
            Message Sent Successfully
          </h3>

          <p className="text-sm leading-relaxed text-green-700">
            Thank you for reaching out. A confirmation email has been sent to
            your inbox, and I&apos;ll review your message as soon as possible.
          </p>
        </motion.div>
      )}

      {state.error && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 rounded-2xl border border-red-200 bg-red-50 p-5"
        >
          <h3 className="mb-2 font-medium text-red-800">
            Unable to Send Message
          </h3>

          <p className="text-sm leading-relaxed text-red-700">
            {state.error}
          </p>
        </motion.div>
      )}
    </motion.section>
  );
}