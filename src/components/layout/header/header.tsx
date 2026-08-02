"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, m } from "framer-motion";
import { Languages, X } from "lucide-react";
import LanguageSwitcher from "./lang-switcher";
import { useTranslations } from "next-intl";

const navigationLinks = [
  { key: "home", href: "/" },
  { key: "about", href: "/about" },
  { key: "services", href: "/services" },
  { key: "portfolio", href: "/portfolio" },
  { key: "evidence", href: "/case-studies" },
  { key: "experience", href: "/experience" },
  { key: "voices", href: "/testimonials" },
  { key: "contact", href: "/contact" }
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const t = useTranslations("navigation");

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <m.header
        initial={{ y: -60, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          width: isScrolled ? "88%" : "92%",
        }}
        transition={{
          duration: 0.7,
          ease: [0.16, 1, 0.3, 1],
        }}
        className={`fixed left-1/2 top-6 z-100 -translate-x-1/2 rounded-full border transition-all duration-300 ${
          isScrolled
            ? "glass border-white/10 shadow-2xl"
            : "border-transparent bg-background/50 backdrop-blur-md"
        }`}
      >
        <div className="flex h-16 items-center justify-between px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-luxury-gold text-white">
              <Languages size={18} />
            </div>

            <div className="leading-none">
              <h2 className="font-serif text-xl">{t("logo.name")}</h2>

              <p className="text-[9px] uppercase tracking-[0.4em] text-luxury-charcoal/50">
                {t("logo.title")}
              </p>
            </div>
          </Link>

          {/* Center */}
          <div className="hidden lg:block">
            <span className="text-[10px] uppercase tracking-[0.5em] text-luxury-charcoal/65">
              {t("center.label")}
            </span>
          </div>

          {/* Right */}
          <div className="flex items-center gap-6">
            <LanguageSwitcher />

            <button
              onClick={() => setIsOpen(true)}
              className="group flex items-center gap-3"
            >
              <span className="text-[10px] uppercase tracking-[0.3em]">
                {t("menu.button")}
              </span>

              <div className="flex flex-col gap-1">
                <span className="h-px w-6 bg-current transition-all group-hover:w-8" />
                <span className="ml-auto h-px w-4 bg-current transition-all group-hover:w-6" />
              </div>
            </button>
          </div>
        </div>
      </m.header>

      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-200 bg-luxury-charcoal text-white"
          >
            <m.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex h-full flex-col justify-between p-10 md:p-16"
            >
              {/* Header */}
              <div className="flex items-center justify-between">
                <span className="font-serif text-2xl italic">
                  {t("logo.name")}
                </span>

                <button
                  onClick={() => setIsOpen(false)}
                  className="transition hover:rotate-90"
                >
                  <X size={36} />
                </button>
              </div>

              {/* Navigation */}
              <div className="space-y-5">
                {navigationLinks.map((item, index) => (
                  <m.div
                    key={item.key}
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: index * 0.08,
                    }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="group flex items-center gap-6"
                    >
                      <span className="text-sm text-white/30">
                        0{index + 1}
                      </span>

                      <span className="font-serif text-5xl md:text-7xl transition group-hover:text-luxury-gold group-hover:italic">
                        {t(`links.${item.key}`)}
                      </span>
                    </Link>
                  </m.div>
                ))}
              </div>

              {/* Footer */}
              <div className="flex flex-wrap items-center justify-between gap-8 border-t border-white/10 pt-8">
                <div className="flex gap-8 text-xs uppercase tracking-[0.3em]">
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
