'use client'

import { motion } from 'framer-motion'
import { Lock, Clock, CheckCircle2 } from 'lucide-react'

interface Project {
  id: string
  title: string
  category: string
  languages: string
  accuracy: number
  timeline: string
  description: string
}

const projects: Project[] = [
  {
    id: '1',
    title: 'International Medical Report Translation',
    category: 'Medical Translation',
    languages: 'English → Arabic',
    accuracy: 98,
    timeline: '5 days',
    description: 'Comprehensive translation of a 150-page medical diagnostic report for a leading hospital network.',
  },
  {
    id: '2',
    title: 'E-Commerce Platform Localization',
    category: 'Website Localization',
    languages: 'English → Arabic',
    accuracy: 99,
    timeline: '3 weeks',
    description: 'Complete localization of product descriptions, UI elements, and customer support documentation.',
  },
  {
    id: '3',
    title: 'Legal Contract Bundle',
    category: 'Legal Translation',
    languages: 'English ↔ Arabic',
    accuracy: 99,
    timeline: '2 weeks',
    description: 'Certified translation of 12 complex international commercial contracts with legal terminology.',
  },
]

export function FeaturedProjects() {
  return (
    <section id="featured" className="relative py-32 px-6 md:px-8 bg-card overflow-hidden">
      <div className="absolute inset-0 pointer-events-none -z-10">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-accent-primary/5 rounded-full blur-3xl"
          animate={{ y: [0, 40, 0], x: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="container-wide relative z-10">
        {/* Section Header */}
        <motion.div
          className="mb-20 space-y-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-accent-primary font-medium" style={{ fontFamily: 'var(--font-accent)' }}>
            FEATURED WORK
          </p>
          <h2
            className="text-6xl md:text-7xl font-black tracking-tighter"
            style={{ fontFamily: 'var(--font-headings)' }}
          >
            Premium Translation Projects
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group relative"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Card */}
              <motion.div
                className="h-full p-8 rounded-xl border border-border/30 bg-linear-to-br from-white/50 to-white/20 dark:from-white/5 dark:to-white/2 backdrop-blur-xl hover:border-accent-primary/30 transition-all duration-300 shadow-sm hover:shadow-lg"
                whileHover={{ y: -8 }}
              >
                {/* Header */}
                <div className="mb-6 space-y-2">
                  <p className="text-xs font-semibold text-accent-primary uppercase tracking-widest">
                    {project.category}
                  </p>
                  <h3
                    className="text-2xl font-bold text-foreground leading-tight"
                    style={{ fontFamily: 'var(--font-headings)' }}
                  >
                    {project.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-8 leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                  {project.description}
                </p>

                {/* Metrics */}
                <div className="space-y-4 mb-8 pt-6 border-t border-border/20">
                  {/* Accuracy */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent-primary" />
                      <span className="text-sm text-muted-foreground">Translation Accuracy</span>
                    </div>
                    <span className="text-sm font-bold text-accent-primary">{project.accuracy}%</span>
                  </div>

                  {/* Timeline */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-accent-primary" />
                      <span className="text-sm text-muted-foreground">Delivery</span>
                    </div>
                    <span className="text-sm font-bold text-accent-primary">{project.timeline}</span>
                  </div>

                  {/* Confidential */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Lock className="w-4 h-4 text-accent-primary" />
                      <span className="text-sm text-muted-foreground">Status</span>
                    </div>
                    <span className="text-sm font-bold text-accent-primary">Confidential</span>
                  </div>
                </div>

                {/* Languages */}
                <p className="text-xs text-accent-secondary font-medium" style={{ fontFamily: 'var(--font-accent)' }}>
                  {project.languages}
                </p>

                {/* Hover Indicator */}
                <motion.div
                  className="absolute inset-0 rounded-xl pointer-events-none border border-accent-primary/0 group-hover:border-accent-primary/20"
                  animate={{ borderColor: 'rgba(212, 175, 55, 0)' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
