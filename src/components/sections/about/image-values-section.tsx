"use client";

import Image from "next/image";
import { m } from "framer-motion";
import { Award, BookOpen, Clock } from "lucide-react";
import { useTranslations } from "next-intl";

const icons = [Award, BookOpen, Clock];

export function ImageValuesSection() {
  const t = useTranslations("about");

  const VALUES = t.raw("values") as {
    title: string;
    text: string;
  }[];

  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
      <m.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="lg:col-span-7 aspect-16/10 rounded-[2rem] overflow-hidden relative bg-luxury-charcoal"
      >
        <Image
          src="/about-workspace.png"
          alt={t("image.alt")}
          fill
          className="object-cover opacity-70 grayscale hover:grayscale-0 hover:scale-105 transition-all duration-1000"
        />

        <div className="absolute bottom-10 left-10">
          <p className="text-xs uppercase tracking-widest text-white/50">
            {t("image.location")}
          </p>

          <p className="font-serif text-3xl italic text-white">
            {t("image.caption")}
          </p>
        </div>
      </m.div>

      <div className="lg:col-span-5 flex flex-col justify-center gap-12">
        {VALUES.map((item, index) => {
          const Icon = icons[index];

          return (
            <m.div
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
            </m.div>
          );
        })}
      </div>
    </section>
  );
}
