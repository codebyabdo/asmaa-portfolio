"use client";

import { CONTACTS } from "@/data/social-links";
import { motion } from "framer-motion";

export function SocialLink() {
  return (
    <section>
      <motion.span
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="mb-6 block text-[10px] font-bold uppercase tracking-[0.4em] text-luxury-gold"
      >
        Get In Touch
      </motion.span>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-10 font-serif text-6xl leading-[0.85] tracking-tighter md:text-8xl"
      >
        Let&apos;s
        <br />
        <span className="font-light italic">Connect.</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="mb-16 max-w-md text-lg font-light leading-relaxed text-luxury-charcoal/60"
      >
        Available for freelance projects, localization partnerships, and
        international collaborations.
      </motion.p>

      <div className="space-y-10">
        {CONTACTS.map((item) => {
          const Icon = item.icon;

          return (
            <a
              key={item.title}
              href={item.href}
              target={item.title === "LinkedIn" ? "_blank" : undefined}
              rel={item.title === "LinkedIn" ? "noopener noreferrer" : undefined}
              className="group flex items-center gap-6"
            >
              <div className="glass flex h-16 w-16 items-center justify-center rounded-full border border-luxury-gold/20 text-luxury-gold transition-all duration-500 group-hover:bg-luxury-gold group-hover:text-white">
                <Icon size={22} />
              </div>

              <div>
                <span className="mb-1 block text-[10px] font-bold uppercase tracking-[0.35em] text-luxury-charcoal/65">
                  {item.title}
                </span>

                <p className="font-serif text-2xl transition-colors group-hover:text-luxury-gold">
                  {item.value}
                </p>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}