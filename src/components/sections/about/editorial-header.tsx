"use client";

import { m } from "framer-motion";
import { useTranslations } from "next-intl";

export function EditorialHeader() {
  const t = useTranslations("about.editorial");
  return (
    <section
      className="
      grid
      grid-cols-1
      lg:grid-cols-2
      gap-16
      items-end
      mb-24
    "
    >
      <div>
        <m.span
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="
            block
            mb-6
            text-[10px]
            uppercase
            tracking-[0.4em]
            font-bold
            text-luxury-gold
          "
        >
          {t("eyebrow")}
        </m.span>

        <m.h1
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
            duration: 0.8,
          }}
          className="font-serif text-6xl leading-[0.85] tracking-tighter md:text-8xl"
        >
          {t("title.first")}
          <br />
          <span className="italic font-light">{t("title.second")}</span>
        </m.h1>
      </div>

      <m.p
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          delay: 0.3,
        }}
        className="lg:ml-auto max-w-md text-lg md:text-xl font-light leading-relaxed text-luxury-charcoal/60         "
      >
        {t("description")}
      </m.p>
    </section>
  );
}
