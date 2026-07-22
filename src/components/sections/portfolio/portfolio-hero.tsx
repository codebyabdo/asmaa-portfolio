'use client'

import { motion } from 'framer-motion'
import { ChevronDown, Sparkles } from 'lucide-react'

export function PortfolioHero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-32 pb-20 px-6">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 rounded-full opacity-5"
          style={{ background: 'radial-gradient(circle, var(--accent-primary), transparent)' }}
          animate={{ y: [0, 80, 0], x: [-30, 30, -30] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full opacity-4"
          style={{ background: 'radial-gradient(circle, var(--accent-secondary), transparent)' }}
          animate={{ y: [0, -60, 0], x: [40, -40, 40] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
      </div>

      <motion.div
        className="max-w-5xl text-center space-y-8 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Premium Badge */}
        <motion.div
          className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-accent-primary/20 bg-accent-primary/5 backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          <Sparkles className="w-4 h-4 text-accent-primary animate-pulse" />
          <span className="text-sm font-medium text-accent-primary">Featured Case Studies</span>
        </motion.div>

        {/* Main Heading */}
        <div className="space-y-6">
          <motion.h1
            className="text-7xl md:text-8xl lg:text-9xl font-black leading-[0.9] tracking-tighter text-foreground"
            style={{ fontFamily: 'var(--font-display)' }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Crafting
            <motion.span
              className="block text-accent-primary relative inline-block ml-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Accurate
              <motion.div
                className="absolute inset-0 rounded-full blur-3xl glow-accent-lg"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </motion.span>
            <br />
            & Culturally Intelligent<br />
            Translation Experiences
          </motion.h1>

          <motion.p
            style={{ fontFamily: 'var(--font-body)' }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Professional translation, localization, and confidential language solutions across legal, medical, academic, and business industries. Every project is a masterclass in precision and cultural intelligence.
          </motion.p>
        </div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <motion.a
            href="#featured"
            className="px-8 py-4 rounded-md font-medium bg-gradient-to-r from-accent-primary to-accent-secondary text-primary shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Explore Projects
          </motion.a>
          <motion.a
            href="#archive"
            className="px-8 py-4 rounded-md font-medium border-2 border-accent-primary/30 text-accent-primary hover:border-accent-primary/60 backdrop-blur-sm transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            View Archive
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <p className="text-sm text-muted-foreground" style={{ fontFamily: 'var(--font-body)' }}>
          Scroll to explore
        </p>
        <ChevronDown className="w-5 h-5 text-accent-primary" />
      </motion.div>
    </section>
  )
}
