"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Award, BookOpen, Clock } from "lucide-react";

const VALUES = [
  {
    icon: Award,
    title: "Precision First",
    text: "Every comma matters. Accuracy isn't a goal; it's the standard.",
  },
  {
    icon: Clock,
    title: "Time Critical",
    text: "Global markets move fast. Delivery and reliability remain essential.",
  },
  {
    icon: BookOpen,
    title: "Continuous Flow",
    text: "Following linguistic evolution and localization technology.",
  },
];

export function ImageValuesSection() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="lg:col-span-7 aspect-16/10 rounded-[2rem] overflow-hidden relative bg-luxury-charcoal"
      >
        <Image
          src="/about-workspace.png"
          alt="Asmaa workspace"
          fill
          className="object-cover opacity-70 grayscale hover:grayscale-0 hover:scale-105 transition-all duration-1000"
        />

        <div className="absolute bottom-10 left-10">
          <p className="text-xs uppercase tracking-widest text-white/50">
            Based in Beni Swif, Egypt
          </p>

          <p className="font-serif text-3xl italic text-white">
            Serving Global Clients
          </p>
        </div>
      </motion.div>

      <div className="lg:col-span-5 flex flex-col justify-center gap-12">
        {VALUES.map((item) => {
          const Icon = item.icon;

          return (
            <motion.div
              whileHover={{ x: 8 }}
              transition={{ duration: 0.3 }}
              key={item.title}
              className="flex gap-6"
            >
              <div className="w-12 h-12 rounded-full border border-luxury-gold flex items-center justify-center text-luxury-gold shrink-0 ">
                <Icon size={20} />
              </div>

              <div>
                <h3 className="font-serif text-xl mb-2 ">{item.title}</h3>

                <p className="font-light text-luxury-charcoal/60 ">
                  {item.text}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
