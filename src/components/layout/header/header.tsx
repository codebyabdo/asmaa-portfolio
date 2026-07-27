"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Globe, Languages, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Evidence", href: "/case-studies" },
  { name: "Experience", href: "/experience" },
  { name: "Voices", href: "/testimonials" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
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
              <h2 className="font-serif text-xl">
                Asmaa Adel
              </h2>

              <p className="text-[9px] uppercase tracking-[0.4em] text-luxury-charcoal/50">
                Translator
              </p>
            </div>
          </Link>

          {/* Center */}
          <div className="hidden lg:block">
            <span className="text-[10px] uppercase tracking-[0.5em] text-luxury-charcoal/65">
              Linguistic Artistry
            </span>
          </div>

          {/* Right */}
          <div className="flex items-center gap-6">
            <button className="hidden sm:flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-luxury-charcoal/60 transition hover:text-luxury-gold">
              <Globe size={12} />
              Arabic / English
            </button>

            <button
              onClick={() => setIsOpen(true)}
              className="group flex items-center gap-3"
            >
              <span className="text-[10px] uppercase tracking-[0.3em]">
                Menu
              </span>

              <div className="flex flex-col gap-1">
                <span className="h-px w-6 bg-current transition-all group-hover:w-8" />
                <span className="ml-auto h-px w-4 bg-current transition-all group-hover:w-6" />
              </div>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-200 bg-luxury-charcoal text-white"
          >
            <motion.div
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
                  Asmaa Adel
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
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
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
                        {item.name}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Footer */}
              <div className="flex flex-wrap items-center justify-between gap-8 border-t border-white/10 pt-8">
                <div className="flex gap-8 text-xs uppercase tracking-[0.3em]">
                  <a href="#">LinkedIn</a>
                  <a href="#">Email</a>
                  <a href="#">WhatsApp</a>
                </div>

                <p className="text-xs uppercase tracking-[0.3em] text-white/30">
                  Cairo — Egypt
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}