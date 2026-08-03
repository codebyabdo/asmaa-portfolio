"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { m } from "framer-motion";
import { Languages } from "lucide-react";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function change() {
    router.replace(pathname, { locale: locale === "en" ? "ar" : "en" });
  }

  return (
    <m.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={change}
      className="group relative flex items-center gap-2 rounded-full px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.2em] transition-all duration-300 hover:bg-luxury-gold/10"
    >
      {/* Icon */}
      <Languages size={12} className="text-luxury-charcoal/40 transition-colors group-hover:text-luxury-gold" />
      
      {/* Language text */}
      <span className="text-luxury-charcoal/60 transition-colors group-hover:text-luxury-gold">
        {locale === "en" ? "العربية" : "English"}
      </span>
      
      {/* Underline indicator */}
      <span className="absolute bottom-0 left-1/2 h-px w-0 bg-luxury-gold transition-all duration-300 group-hover:w-4/5 group-hover:left-[10%]" />
    </m.button>
  );
}