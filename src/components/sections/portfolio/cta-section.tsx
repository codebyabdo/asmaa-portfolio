'use client'

import { m } from 'framer-motion'

export function PortfolioCtaSection() {
  return (
    <section className="relative py-32 px-6 md:px-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <m.div
          className="absolute inset-0 bg-linear-to-br from-accent-tertiary/10 via-background to-background"
          animate={{ backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
      </div>

      <div className="container-wide relative z-10">
        <m.div
          className="text-center max-w-4xl mx-auto space-y-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2
            className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9]"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Ready to Transform Your Content?
          </h2>

          <p
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Let&apos;s discuss your translation and localization needs. I deliver precision, cultural intelligence, and
            professional excellence on every project.
          </p>

          <m.div
            className="flex flex-col sm:flex-row gap-4 justify-center pt-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <m.a
              href="/contact"
              className="px-10 py-4 rounded-md font-medium bg-linear-to-r from-accent-primary to-accent-secondary text-primary shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Start Your Project
            </m.a>
            <m.a
              href="/about"
              className="px-10 py-4 rounded-md font-medium border-2 border-accent-primary/50 text-accent-primary hover:border-accent-primary bg-accent-primary/5 backdrop-blur-sm transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Learn More About Me
            </m.a>
          </m.div>
        </m.div>
      </div>
    </section>
  )
}
