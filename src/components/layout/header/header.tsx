"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, m } from "framer-motion";
import { Languages, X } from "lucide-react";
import { useTranslations } from "next-intl";

import LanguageSwitcher from "./lang-switcher";

const navigationLinks = [
  { key: "home", href: "/" },
  { key: "about", href: "/about" },
  { key: "services", href: "/services" },
  { key: "portfolio", href: "/portfolio" },
  { key: "evidence", href: "/case-studies" },
  { key: "experience", href: "/experience" },
  { key: "voices", href: "/testimonials" },
  { key: "contact", href: "/contact" },
];

export function Header() {
  const t = useTranslations("navigation");

  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let last = false;

    const onScroll = () => {
      const current = window.scrollY > 40;

      if (current !== last) {
        last = current;
        setIsScrolled(current);
      }
    };

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <m.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.35 }}
        className={`fixed left-1/2 top-4 z-100 -translate-x-1/2 w-[calc(100%-1rem)] max-w-[1600px] rounded-3xl border transition-all duration-300 md:w-[94%] xl:w-[90%] ${
          isScrolled
            ? "glass border-white/10 shadow-xl"
            : "border-transparent bg-background/50 backdrop-blur-xl"
        }`}
      >
        <div className="flex h-16 items-center justify-between gap-4 px-4 sm:px-5 md:px-6 lg:px-8">
          <Link
            href="/"
            className="flex shrink-0 items-center gap-2 md:gap-3"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-luxury-gold text-white md:h-10 md:w-10">
              <Languages size={18} />
            </div>

            <div className="leading-none">
              <h2 className="font-serif text-lg md:text-xl">
                {t("logo.name")}
              </h2>

              <p className="hidden text-[9px] uppercase tracking-[0.35em] text-luxury-charcoal/50 md:block">
                {t("logo.title")}
              </p>
            </div>
          </Link>

          <div className="hidden flex-1 text-center xl:block">
            <span className="text-[10px] uppercase tracking-[0.5em] text-luxury-charcoal/65">
              {t("center.label")}
            </span>
          </div>

          <div className="flex shrink-0 items-center gap-2 sm:gap-4">
            <LanguageSwitcher />

            <button
              type="button"
              aria-label={t("menu.button")}
              onClick={() => setIsOpen(true)}
              className="group flex items-center gap-2 rounded-full px-2 py-1 transition-colors hover:bg-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-luxury-gold"
            >
              <span className="hidden text-[10px] uppercase tracking-[0.25em] sm:block">
                {t("menu.button")}
              </span>

              <div className="flex flex-col gap-1">
                <span className="h-px w-6 bg-current" />
                <span className="ml-auto h-px w-4 bg-current" />
              </div>
            </button>
          </div>
        </div>
      </m.header>

      <AnimatePresence>
        {isOpen && (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-200 bg-luxury-charcoal text-white"
          >
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.1, duration: 0.25 }}
              className="flex h-full flex-col justify-between p-8 md:p-16"
            >
              <div className="flex items-center justify-between">
                <span className="font-serif text-2xl italic">
                  {t("logo.name")}
                </span>

                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setIsOpen(false)}
                  className="transition-colors hover:text-luxury-gold"
                >
                  <X size={34} />
                </button>
              </div>

              <nav className="space-y-5">
                {navigationLinks.map((item, index) => (
                  <div key={item.key}>
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="group flex items-center gap-6"
                    >
                      <span className="text-sm text-white/30">
                        0{index + 1}
                      </span>

                      <span className="font-serif text-3xl transition-colors group-hover:text-luxury-gold sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                        {t(`links.${item.key}`)}
                      </span>
                    </Link>
                  </div>
                ))}
              </nav>

              <div className="flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-8 md:flex-row md:items-center">
                <div className="flex flex-wrap gap-4 text-xs uppercase tracking-[0.25em] md:gap-8">
                  <a href="#">{t("social.linkedin")}</a>
                  <a href="#">{t("social.email")}</a>
                  <a href="#">{t("social.whatsapp")}</a>
                </div>

                <p className="text-xs uppercase tracking-[0.3em] text-white/30">
                  {t("location")}
                </p>
              </div>
            </m.div>
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
}