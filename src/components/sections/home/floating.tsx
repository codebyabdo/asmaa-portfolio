"use client";

export function Floating() {
  return (
    <section className="py-20 border-y border-luxury-charcoal/5 bg-white/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 overflow-hidden">
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-24 opacity-30 grayscale hover:opacity-100 transition-opacity cursor-default">
          <span className="text-2xl font-serif font-bold tracking-widest uppercase">
            Vodafone
          </span>
          <span className="text-2xl font-serif font-bold tracking-widest uppercase">
            LingoHub
          </span>
          <span className="text-2xl font-serif font-bold tracking-widest uppercase">
            SmartLocal
          </span>
          <span className="text-2xl font-serif font-bold tracking-widest uppercase">
            ProTranslate
          </span>
        </div>
      </div>
    </section>
  );
}
