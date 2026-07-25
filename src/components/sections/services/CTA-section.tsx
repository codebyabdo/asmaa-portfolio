"use client";

import { motion } from "framer-motion";

import MagneticButton from "@/components/ui/MagneticButton";

export function CTASection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1],
      }}
      className=" relative overflow-hidden rounded-[3rem] bg-luxury-charcoal px-8 py-20 text-center text-white md:px-16 "
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, rgba(212,175,55,.14) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-2xl">
        <h2 className="mb-8 font-serif text-4xl italic md:text-5xl">
          Need a Tailored Localization Strategy?
        </h2>

        <p className="mb-12 text-lg font-light leading-relaxed text-white/60">
          Every project deserves a thoughtful linguistic approach. Let&apos;s discuss
          your goals and build communication that resonates across cultures.
        </p>

        <MagneticButton variant="secondary">
          Schedule a Consultation
        </MagneticButton>
      </div>
    </motion.section>
  );
}