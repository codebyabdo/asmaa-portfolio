"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";

import MagneticButton from "@/components/ui/MagneticButton";

export function ContactForm() {
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

      <form
        className="space-y-8"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="space-y-2">
          <label className="ml-1 text-[10px] font-bold uppercase tracking-[0.35em] text-luxury-charcoal/40">
            Full Name
          </label>

          <input
            type="text"
            placeholder="Enter your name"
            className="w-full border-b border-luxury-charcoal/10 bg-transparent pb-4 font-light outline-none transition-colors focus:border-luxury-gold"
          />
        </div>

        <div className="space-y-2">
          <label className="ml-1 text-[10px] font-bold uppercase tracking-[0.35em] text-luxury-charcoal/40">
            Email Address
          </label>

          <input
            type="email"
            placeholder="hello@example.com"
            className="w-full border-b border-luxury-charcoal/10 bg-transparent pb-4 font-light outline-none transition-colors focus:border-luxury-gold"
          />
        </div>

        <div className="space-y-2">
          <label className="ml-1 text-[10px] font-bold uppercase tracking-[0.35em] text-luxury-charcoal/40">
            Message
          </label>

          <textarea
            rows={5}
            placeholder="Tell me about your project..."
            className="w-full resize-none border-b border-luxury-charcoal/10 bg-transparent pb-4 font-light outline-none transition-colors focus:border-luxury-gold"
          />
        </div>

        <MagneticButton className="w-full">
          <span className="flex items-center justify-center gap-3">
            Send Message
            <Send size={16} />
          </span>
        </MagneticButton>
      </form>
    </motion.section>
  );
}