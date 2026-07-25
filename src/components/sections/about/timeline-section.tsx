"use client";

import { MILESTONES } from "@/data/timeline";
import { motion } from "framer-motion";


export function TimelineSection() {
  return (
    <section className="relative pt-16">
      <div className="absolute top-0 left-0 w-full h-px bg-luxury-gold/15" />

      <h2 className="font-serif text-5xl italic mb-16 ">The Journey</h2>

      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 ">
        {MILESTONES.map((item, index) => (
          <motion.article
            key={item.year}
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: index * 0.1,
            }}
          >
            <span className="block mb-5 font-serif italic text-6xl text-luxury-gold/50 ">
              {item.year}
            </span>

            <h3 className="uppercase font-bold text-base tracking-[0.15em] mb-4 ">
              {item.title}
            </h3>

            <p className="text-base font-light leading-relaxed text-luxury-charcoal/60 ">
              {item.desc}
            </p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
