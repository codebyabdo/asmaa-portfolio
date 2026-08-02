"use client";

import { m } from "framer-motion";

import MagneticButton from "@/components/ui/MagneticButton";
import { useTranslations } from "next-intl";
import { SERVICE_ICONS } from "@/data/services";

export function ServiceCard() {
  const t = useTranslations("services");

  const SERVICES = t.raw("services") as {
    title: string;
    description: string;
    category: string;
  }[];

  return (
    <section className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3">
      {SERVICES.map((service, index) => {
        const icons = SERVICE_ICONS[index].icon;
        return (
          <m.article
            key={service.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.15,
              duration: 0.9,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="group relative min-h-155 overflow-hidden rounded-[2.5rem] bg-linear-to-br from-luxury-charcoal to-[#141414] p-10 transition-all duration-700 "
          >
            <div
              className={` absolute inset-0 opacity-20 transition-all duration-1000 group-hover:opacity-40 ${SERVICE_ICONS[index].gradient}
            `}
            />

            <div className="relative z-10 flex h-full flex-col">
              <div>
                <span className="mb-6 block text-[10px] font-bold uppercase tracking-[0.4em] text-luxury-gold/60">
                  {service.category}
                </span>

                <h2 className="font-serif text-4xl leading-tight text-white md:text-5xl">
                  {service.title}
                </h2>
              </div>

              <div className="mt-auto">
                <p className="mb-10 text-base font-light leading-relaxed text-white/65 opacity-100 translate-y-0 md:translate-y-8 md:opacity-0 md:transition-all md:duration-700 md:group-hover:translate-y-0 md:group-hover:opacity-100 ">
                  {service.description}
                </p>

                <MagneticButton variant="secondary" className="w-full">
                  {t("buttons.learnMore")}
                </MagneticButton>
              </div>
            </div>
          </m.article>
        );
      })}
    </section>
  );
}
