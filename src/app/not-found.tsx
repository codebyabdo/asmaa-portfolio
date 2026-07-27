"use client";

import Link from "next/link";
import { LazyMotion, domAnimation, m } from "framer-motion";
import PageTransition from "@/components/effects/PageTransition";
import MagneticButton from "@/components/ui/MagneticButton";

export default function NotFound() {
  return (
    <LazyMotion features={domAnimation}>
      <PageTransition>
        <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-32 pb-20 ">
          {/* Background Glow */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <m.div
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.15, 0.3, 0.15],
                rotate: [0, 90, 0],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute left-1/2 top-1/2 h-160 w-160 -translate-x-1/2 -translate-y-1/2 rounded-full bg-luxury-gold/10 blur-[140px] "
            />
          </div>

          <div className="relative z-10 mx-auto max-w-5xl text-center">
            <m.span
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block mb-8 text-[10px] font-bold uppercase tracking-[0.45em] text-luxury-gold "
            >
              Error · 404
            </m.span>

            <m.h1
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-serif text-6xl leading-[0.9] tracking-tighter md:text-[8rem] "
            >
              Lost in
              <br />
              <span className="italic font-light">Translation</span>
            </m.h1>

            <m.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mx-auto mt-10 max-w-xl text-lg font-light leading-relaxed text-luxury-charcoal/60"
            >
              The page your&apos;s looking for doesn&apos;t exist or may have
              been moved. Let&apos;s guide you back to something meaningful.
            </m.p>

            <m.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className=" mt-14 flex flex-col items-center justify-center gap-5 sm:flex-row "
            >
              <Link href="/">
                <MagneticButton variant="primary">Return Home</MagneticButton>
              </Link>

              <Link
                href="/portfolio"
                className="border-b border-luxury-charcoal/10 pb-2 text-[10px] font-bold uppercase tracking-[0.3em] transition-all hover:border-luxury-gold "
              >
                Explore Portfolio
              </Link>
            </m.div>

            <div className="mx-auto mt-20 h-px w-40 bg-linear-to-r from-transparent via-luxury-gold/40 to-transparent " />
          </div>
        </main>
      </PageTransition>
    </LazyMotion>
  );
}
