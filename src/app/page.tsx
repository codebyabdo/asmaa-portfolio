'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform, AnimatePresence, useMotionValue, useSpring } from 'framer-motion'
import { ChevronDown, ArrowRight, Sparkles } from 'lucide-react'
import { Navigation } from '@/components/layout/navbar/navigation'

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHoveringCTA, setIsHoveringCTA] = useState(false)
  const { scrollYProgress } = useScroll()

  // Advanced scroll transforms
  const heroOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0])
  const heroScale = useTransform(scrollYProgress, [0, 0.25], [1, 0.8])
  const heroRotate = useTransform(scrollYProgress, [0, 0.25], [0, -5])
  const blur = useTransform(scrollYProgress, [0, 0.25], [0, 20])

  // Mouse position tracking for immersive effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect()
        const x = (e.clientX / window.innerWidth - 0.5) * 2
        const y = (e.clientY / window.innerHeight - 0.5) * 2
        setMousePosition({ x: x * 20, y: y * 20 })
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Character animation for headline
  const renderAnimatedText = (text: string) => {
    return text.split('').map((char, i) => (
      <motion.span
        key={i}
        initial={{ opacity: 0, y: 40, rotateX: 90 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{
          delay: 0.1 + i * 0.03,
          duration: 0.6,
          ease: 'easeOut',
        }}
        style={{
          display: char === ' ' ? 'inline-block' : 'inline-block',
          width: char === ' ' ? '0.3em' : 'auto',
          perspective: 1200,
        }}
      >
        {char}
      </motion.span>
    ))
  }

  return (
    <main ref={containerRef} className="relative bg-background overflow-hidden">
      <Navigation />

      {/* Experimental Background - Multi-layer cinematic */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        {/* Layer 1: Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background opacity-100" />

        {/* Layer 2: Animated morphing blobs */}
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 opacity-3"
          style={{
            background:
              'radial-gradient(circle, var(--accent-primary), transparent)',
            filter: 'blur(80px)',
          }}
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Layer 3: Counter-moving blob */}
        <motion.div
          className="absolute bottom-1/4 left-1/3 w-80 h-80 opacity-2"
          style={{
            background:
              'radial-gradient(circle, var(--accent-secondary), transparent)',
            filter: 'blur(100px)',
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -60, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        />

        {/* Layer 4: Vignette overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/20 opacity-40" />
      </div>

      {/* ===== EXPERIMENTAL HERO SECTION ===== */}
      <motion.section
        ref={heroRef}
        style={{
          opacity: heroOpacity,
          scale: heroScale,
          rotateZ: heroRotate,
          filter: blur,
        }}
        className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-4 sm:px-6 lg:px-8 perspective"
      >
        {/* Floating accent elements */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            x: mousePosition.x,
            y: mousePosition.y,
          }}
          transition={{ type: 'spring', damping: 30, mass: 0.5 }}
        >
          <motion.div
            className="absolute top-20 left-10 w-64 h-64 rounded-full opacity-4"
            style={{
              background:
                'radial-gradient(circle, var(--accent-primary), transparent)',
              filter: 'blur(60px)',
            }}
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </motion.div>

        {/* Hero Content - Cinematic Composition */}
        <div className="max-w-6xl mx-auto text-center space-y-12 z-10 relative">
          {/* Premium Badge */}
          <motion.div
            className="inline-block"
            initial={{ opacity: 0, y: 30, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              delay: 0.2,
              duration: 0.8,
              ease: 'easeOut',
            }}
          >
            <div className="glass-lg px-6 py-3 rounded-full text-sm font-medium text-accent-primary flex items-center gap-2 backdrop-blur-3xl">
              <Sparkles className="w-4 h-4 animate-pulse" />
              <span style={{ fontFamily: 'var(--font-accent)' }}>
                Transforming Communication Globally
              </span>
              <div className="w-2 h-2 bg-accent-primary rounded-full animate-pulse" />
            </div>
          </motion.div>

          {/* Main Headline - Experimental Typography */}
          <motion.div className="space-y-8 overflow-hidden">
            <div className="text-hero-xl font-bold leading-none tracking-tighter">
              <motion.div
                style={{ fontFamily: 'var(--font-display)' }}
                className="inline-block"
              >
                <motion.div className="relative inline-block">
                  {renderAnimatedText('Bridging')}
                </motion.div>
              </motion.div>

              <motion.div
                className="relative my-4"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.6,
                  duration: 0.8,
                  ease: 'easeOut',
                }}
              >
                <motion.span
                  style={{ fontFamily: 'var(--font-display)' }}
                  className="text-accent-primary relative inline-block animate-accent-shift"
                  animate={{
                    textShadow: [
                      '0 0 20px rgba(212, 175, 55, 0.3)',
                      '0 0 40px rgba(212, 175, 55, 0.5)',
                      '0 0 20px rgba(212, 175, 55, 0.3)',
                    ],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  Languages
                </motion.span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.8,
                  duration: 0.8,
                  ease: 'easeOut',
                }}
              >
                <span style={{ fontFamily: 'var(--font-display)' }}>
                  & Cultures
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* Subheading - Refined Typography */}
          <motion.p
            style={{ fontFamily: 'var(--font-body)' }}
            className="text-fluid-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.9,
              duration: 0.8,
            }}
          >
            Premium translation & localization expertise that elevates global brands through precision, cultural
            intelligence, and authentic communication.
          </motion.p>

          {/* Advanced CTA with experimental interaction */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 1.1,
              duration: 0.8,
            }}
          >
            {/* Primary CTA */}
            <motion.a
              href="#work"
              className="relative group overflow-hidden px-8 py-4 rounded-md font-semibold text-foreground"
              style={{ fontFamily: 'var(--font-accent)' }}
              onHoverStart={() => setIsHoveringCTA(true)}
              onHoverEnd={() => setIsHoveringCTA(false)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Animated background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-primary"
                animate={{
                  backgroundPosition: isHoveringCTA
                    ? ['0% 50%', '100% 50%', '0% 50%']
                    : ['0% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 3,
                  repeat: isHoveringCTA ? Infinity : 0,
                }}
              />

              <span className="relative z-10 flex items-center gap-3">
                Explore My Work
                <motion.div
                  animate={{ x: isHoveringCTA ? [0, 6, 0] : 0 }}
                  transition={{
                    repeat: isHoveringCTA ? Infinity : 0,
                    duration: 1.5,
                  }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </span>
            </motion.a>

            {/* Secondary CTA */}
            <motion.a
              href="#contact"
              className="px-8 py-4 rounded-md font-semibold border-2 text-accent-primary hover:bg-accent-primary/10 backdrop-blur-sm transition-all duration-300"
              style={{
                fontFamily: 'var(--font-accent)',
                borderColor: 'var(--accent-primary)',
              }}
              whileHover={{ scale: 1.05, opacity: 0.8 }}
              whileTap={{ scale: 0.95 }}
            >
              Let&apos;s Connect
            </motion.a>
          </motion.div>
        </div>

        {/* Scroll Indicator - Experimental */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-3"
          animate={{ y: [0, 12, 0] }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <p
            className="text-sm text-muted-foreground"
            style={{ fontFamily: 'var(--font-accent)' }}
          >
            Scroll to experience
          </p>
          <motion.div
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            <ChevronDown className="w-5 h-5 text-accent-primary" />
          </motion.div>
        </motion.div>
      </motion.section>

      {/* ===== EXPERIMENTAL SERVICES SECTION - Asymmetrical Grid ===== */}
      <section className="relative section-rhythm px-4 sm:px-6 lg:px-8 bg-background cinematic-overlay">
        <div className="container-wide">
          {/* Section Header - Staggered entrance */}
          <motion.div
            className="mb-24"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <motion.p
              className="text-accent-primary font-medium mb-6"
              style={{ fontFamily: 'var(--font-accent)' }}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              viewport={{ once: true, margin: '-100px' }}
            >
              PREMIUM SERVICES
            </motion.p>

            <motion.h2
              style={{ fontFamily: 'var(--font-headings)' }}
              className="text-hero-lg font-bold mb-8"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true, margin: '-100px' }}
            >
              Transformative Solutions
            </motion.h2>

            <motion.p
              style={{ fontFamily: 'var(--font-body)' }}
              className="text-fluid-lg text-muted-foreground max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true, margin: '-100px' }}
            >
              Each service crafted with meticulous attention to cultural nuance, linguistic precision, and strategic
              impact.
            </motion.p>
          </motion.div>

          {/* Experimental asymmetrical grid */}
          <div className="grid grid-experimental gap-8 mb-12">
            {/* Featured Service - Large */}
            <motion.div
              className="glass-lg p-12 rounded-lg overflow-hidden group relative"
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                delay: 0.2,
                duration: 0.8,
                ease: 'easeOut',
              }}
              viewport={{ once: true, margin: '-100px' }}
              whileHover={{ scale: 1.02, y: -4 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent-tertiary to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-500" />

              <motion.div className="relative z-10">
                <div className="text-5xl mb-6 opacity-30">✦</div>
                <h3 style={{ fontFamily: 'var(--font-accent)' }} className="text-4xl font-bold mb-6">
                  Strategic Translation
                </h3>
                <p
                  style={{ fontFamily: 'var(--font-body)' }}
                  className="text-lg text-muted-foreground mb-8 leading-relaxed"
                >
                  Beyond words—cultural transformation. Every translation considers context, tone, and market dynamics
                  to ensure your message resonates authentically.
                </p>

                {/* Feature list */}
                <ul className="space-y-3 mb-8">
                  {['English-Arabic expertise', 'Cultural adaptation', 'Brand voice consistency'].map((item, i) => (
                    <motion.li
                      key={i}
                      className="flex items-center gap-3 text-muted-foreground"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.4 + i * 0.1,
                        duration: 0.6,
                      }}
                      viewport={{ once: true, margin: '-100px' }}
                    >
                      <div className="w-2 h-2 bg-accent-primary rounded-full" />
                      <span style={{ fontFamily: 'var(--font-body)' }}>{item}</span>
                    </motion.li>
                  ))}
                </ul>

                <motion.div
                  className="flex items-center gap-2 text-accent-primary font-medium group/link cursor-pointer"
                  whileHover={{ x: 6 }}
                >
                  <span style={{ fontFamily: 'var(--font-accent)' }}>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Secondary Services - 2 cards */}
            <div className="space-y-8">
              {[
                { icon: '◆', title: 'Localization', desc: 'Markets speak different languages—we ensure yours fits perfectly.' },
                { icon: '✧', title: 'Content Strategy', desc: 'Multilingual campaigns that drive engagement and conversions.' },
              ].map((service, i) => (
                <motion.div
                  key={i}
                  className="glass p-8 rounded-lg group hover:shadow-lg transition-all duration-300"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.4 + i * 0.15,
                    duration: 0.6,
                    ease: 'easeOut',
                  }}
                  viewport={{ once: true, margin: '-100px' }}
                  whileHover={{ y: -4 }}
                >
                  <motion.div
                    className="text-4xl mb-4 opacity-50"
                    animate={{ rotate: [0, 10, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 4,
                      delay: i * 0.5,
                    }}
                  >
                    {service.icon}
                  </motion.div>
                  <h4 style={{ fontFamily: 'var(--font-accent)' }} className="text-2xl font-bold mb-2">
                    {service.title}
                  </h4>
                  <p style={{ fontFamily: 'var(--font-body)' }} className="text-muted-foreground">
                    {service.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Additional Services - Experimental staggered layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Quality Assurance', icon: '✓' },
              { title: 'Express Delivery', icon: '⚡' },
              { title: 'Ongoing Support', icon: '🔄' },
            ].map((service, i) => (
              <motion.div
                key={i}
                className="glass-lg p-8 rounded-lg relative overflow-hidden"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.5 + i * 0.1,
                  duration: 0.6,
                }}
                viewport={{ once: true, margin: '-100px' }}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <div className="text-3xl mb-3 opacity-40">{service.icon}</div>
                <h5 style={{ fontFamily: 'var(--font-accent)' }} className="text-lg font-bold">
                  {service.title}
                </h5>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== NARRATIVE SECTION ===== */}
      <section className="relative section-rhythm px-4 sm:px-6 lg:px-8 bg-card cinematic-overlay">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left: Narrative */}
            <motion.div
              className="space-y-12"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: '-100px' }}
            >
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                viewport={{ once: true, margin: '-100px' }}
              >
                <motion.p
                  className="text-accent-primary font-medium"
                  style={{ fontFamily: 'var(--font-accent)' }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  viewport={{ once: true, margin: '-100px' }}
                >
                  MY JOURNEY
                </motion.p>

                <motion.h2
                  style={{ fontFamily: 'var(--font-headings)' }}
                  className="text-hero-lg font-bold"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  viewport={{ once: true, margin: '-100px' }}
                >
                  Language is the Bridge
                </motion.h2>
              </motion.div>

              <motion.div
                className="space-y-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                viewport={{ once: true, margin: '-100px' }}
              >
                <p style={{ fontFamily: 'var(--font-body)' }} className="text-lg text-muted-foreground leading-relaxed">
                  With over a decade of dedicated experience, I&apos;ve transformed how global brands communicate
                  across cultures. Every project is an opportunity to create meaningful connections between different
                  worlds.
                </p>

                <p style={{ fontFamily: 'var(--font-body)' }} className="text-lg text-muted-foreground leading-relaxed">
                  Whether it&apos;s translating marketing campaigns, localizing digital platforms, or crafting
                  multilingual strategies, I bring precision, creativity, and cultural intelligence to every word.
                </p>
              </motion.div>
            </motion.div>

            {/* Right: Stats with glass morphism */}
            <motion.div
              className="glass-lg p-12 rounded-lg relative overflow-hidden"
              initial={{ opacity: 0, x: 60, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true, margin: '-100px' }}
            >
              <div className="space-y-10">
                {[
                  { label: 'Years of Excellence', value: '10+', accent: 'from-accent-primary' },
                  { label: 'Global Projects', value: '200+', accent: 'from-accent-secondary' },
                  { label: 'Brand Partners', value: '50+', accent: 'from-accent-tertiary' },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    className="border-b border-border/30 pb-8 last:border-b-0 last:pb-0"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.4 + i * 0.15,
                      duration: 0.6,
                    }}
                    viewport={{ once: true, margin: '-100px' }}
                  >
                    <p
                      style={{ fontFamily: 'var(--font-accent)' }}
                      className="text-accent-primary text-sm font-medium mb-3 uppercase tracking-widest"
                    >
                      {stat.label}
                    </p>
                    <motion.p
                      style={{ fontFamily: 'var(--font-display)' }}
                      className={`text-5xl font-bold bg-gradient-to-r ${stat.accent} to-accent-secondary bg-clip-text text-transparent`}
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{
                        delay: 0.6 + i * 0.1,
                        repeat: Infinity,
                        duration: 3,
                      }}
                    >
                      {stat.value}
                    </motion.p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== CINEMATIC CTA SECTION ===== */}
      <section className="relative section-rhythm px-4 sm:px-6 lg:px-8 overflow-hidden full-bleed">
        {/* Experimental animated background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-accent-tertiary via-accent-primary to-accent-secondary opacity-10"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <div className="container-wide relative z-10">
          <motion.div
            className="max-w-5xl mx-auto text-center space-y-10"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <motion.h2
              style={{ fontFamily: 'var(--font-display)' }}
              className="text-hero-xl font-bold leading-tight tracking-tighter"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true, margin: '-100px' }}
            >
              <motion.span
                className="relative"
                animate={{
                  textShadow: [
                    '0 0 20px rgba(212, 175, 55, 0.3)',
                    '0 0 40px rgba(212, 175, 55, 0.5)',
                    '0 0 20px rgba(212, 175, 55, 0.3)',
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                Transform Your Global Impact
              </motion.span>
            </motion.h2>

            <motion.p
              style={{ fontFamily: 'var(--font-body)' }}
              className="text-fluid-lg text-muted-foreground max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true, margin: '-100px' }}
            >
              Ready to take your brand&apos;s multilingual strategy to the next level? Let&apos;s create something
              extraordinary together.
            </motion.p>

            <motion.a
              href="#contact"
              className="inline-block px-10 py-5 bg-gradient-to-r from-accent-primary to-accent-secondary text-foreground font-bold rounded-md hover:shadow-lg transition-all duration-300 relative overflow-hidden group"
              style={{ fontFamily: 'var(--font-accent)' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true, margin: '-100px' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-white/10"
                animate={{ x: ['-100%', '100%'] }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  ease: 'easeInOut',
                }}
              />
              <span className="relative z-10">Let&apos;s Get Started</span>
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* ===== EXPERIMENTAL CONTACT SECTION ===== */}
      <section id="contact" className="relative section-rhythm-compact px-4 sm:px-6 lg:px-8 bg-background cinematic-overlay">
        <div className="container-wide">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <p className="text-accent-primary font-medium mb-4" style={{ fontFamily: 'var(--font-accent)' }}>
              LET&apos;S CONNECT
            </p>
            <h2 style={{ fontFamily: 'var(--font-headings)' }} className="text-hero-lg font-bold">
              Ready to Collaborate?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { title: 'Email', value: 'hello@asmaaadel.com', icon: '✉', delay: 0.1 },
              { title: 'Location', value: 'Global, Remote', icon: '🌍', delay: 0.2 },
              { title: 'Response', value: 'Within 24 hours', icon: '⏱', delay: 0.3 },
            ].map((contact, i) => (
              <motion.div
                key={i}
                className="glass-lg p-8 rounded-lg text-center group hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  delay: contact.delay,
                  duration: 0.6,
                  ease: 'easeOut',
                }}
                viewport={{ once: true, margin: '-100px' }}
                whileHover={{ y: -6, scale: 1.02 }}
              >
                <motion.div
                  className="text-5xl mb-4"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 4,
                    delay: i * 0.3,
                  }}
                >
                  {contact.icon}
                </motion.div>
                <p style={{ fontFamily: 'var(--font-accent)' }} className="text-accent-primary font-medium text-sm mb-2 uppercase">
                  {contact.title}
                </p>
                <p style={{ fontFamily: 'var(--font-body)' }} className="text-lg font-medium text-foreground">
                  {contact.value}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PREMIUM FOOTER ===== */}
      <footer className="border-t border-border py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="container-wide">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="md:col-span-2">
              <h4 style={{ fontFamily: 'var(--font-accent)' }} className="font-bold text-lg mb-4">
                Asmaa Adel
              </h4>
              <p style={{ fontFamily: 'var(--font-body)' }} className="text-sm text-muted-foreground leading-relaxed">
                Premium translation & localization specialist. Bridging languages, cultures, and creating meaningful
                global connections.
              </p>
            </div>

            {[
              { title: 'Services', links: ['Translation', 'Localization', 'Strategy'] },
              { title: 'Company', links: ['About', 'Portfolio', 'Process'] },
              { title: 'Connect', links: ['LinkedIn', 'Email', 'WhatsApp'] },
            ].map((col, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.1 * i,
                  duration: 0.6,
                }}
                viewport={{ once: true }}
              >
                <h5 style={{ fontFamily: 'var(--font-accent)' }} className="font-semibold mb-4">
                  {col.title}
                </h5>
                <ul className="space-y-2">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        style={{ fontFamily: 'var(--font-body)' }}
                        className="text-sm text-muted-foreground hover:text-accent-primary transition-colors duration-300"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p style={{ fontFamily: 'var(--font-body)' }} className="text-sm text-muted-foreground">
              © 2024 Asmaa Adel. Crafted with precision and luxury.
            </p>
            <p style={{ fontFamily: 'var(--font-body)' }} className="text-sm text-muted-foreground">
              Experimental design with Awwwards inspiration.
            </p>
          </motion.div>
        </div>
      </footer>
    </main>
  )
}
