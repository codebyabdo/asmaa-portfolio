'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface ArchiveProject {
  id: string
  title: string
  category: string
  languages: string
  featured?: boolean
}

const allProjects: ArchiveProject[] = [
  {
    id: '1',
    title: 'Corporate Legal Agreement',
    category: 'Legal',
    languages: 'English → Arabic',
    featured: true,
  },
  {
    id: '2',
    title: 'Medical Device Manual',
    category: 'Medical',
    languages: 'English ↔ Arabic',
  },
  {
    id: '3',
    title: 'Academic Research Paper',
    category: 'Academic',
    languages: 'English → Arabic',
  },
  {
    id: '4',
    title: 'E-Commerce Product Catalog',
    category: 'Localization',
    languages: 'English → Arabic',
    featured: true,
  },
  {
    id: '5',
    title: 'Marketing Campaign Copy',
    category: 'Marketing',
    languages: 'English ↔ Arabic',
  },
  {
    id: '6',
    title: 'Technical API Documentation',
    category: 'Technical',
    languages: 'English → Arabic',
  },
  {
    id: '7',
    title: 'Financial Audit Report',
    category: 'Business',
    languages: 'English → Arabic',
  },
  {
    id: '8',
    title: 'Website UI Localization',
    category: 'Localization',
    languages: 'English ↔ Arabic',
    featured: true,
  },
]

const categories = [
  'All',
  'Legal',
  'Medical',
  'Academic',
  'Business',
  'Localization',
  'Marketing',
  'Technical',
]

export function ProjectArchive() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredProjects =
    activeCategory === 'All'
      ? allProjects
      : allProjects.filter((p) => p.category === activeCategory)

  return (
    <section id="archive" className="relative py-32 px-6 md:px-8 bg-card">
      <div className="container-wide">
        {/* Header */}
        <motion.div
          className="mb-20 space-y-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-accent-primary font-medium" style={{ fontFamily: 'var(--font-accent)' }}>
            COMPLETE PORTFOLIO
          </p>
          <h2
            className="text-6xl md:text-7xl font-black tracking-tighter"
            style={{ fontFamily: 'var(--font-headings)' }}
          >
            Project Archive
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl" style={{ fontFamily: 'var(--font-body)' }}>
            Browse all completed projects filtered by specialization and industry.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="mb-16 flex flex-wrap gap-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-accent-primary text-primary shadow-lg'
                  : 'bg-background border border-border/50 text-foreground hover:border-accent-primary/30'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                className="group relative"
              >
                <motion.div
                  className="h-full p-6 rounded-xl bg-background border border-border/30 hover:border-accent-primary/50 transition-all duration-300 cursor-pointer"
                  whileHover={{ y: -4 }}
                >
                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="mb-4 inline-block px-2 py-1 rounded-full bg-accent-primary/10 text-xs font-bold text-accent-primary">
                      Featured
                    </div>
                  )}

                  {/* Title */}
                  <h3
                    className="text-lg font-bold text-foreground mb-2 group-hover:text-accent-primary transition-colors"
                    style={{ fontFamily: 'var(--font-headings)' }}
                  >
                    {project.title}
                  </h3>

                  {/* Category & Languages */}
                  <div className="space-y-2 mb-4">
                    <p className="text-xs font-medium text-accent-primary uppercase">{project.category}</p>
                    <p className="text-sm text-muted-foreground" style={{ fontFamily: 'var(--font-body)' }}>
                      {project.languages}
                    </p>
                  </div>

                  {/* Hover Action */}
                  <motion.div
                    className="mt-4 flex items-center gap-2 text-accent-primary font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={{ opacity: 0, x: -10 }}
                    whileHover={{ opacity: 1, x: 0 }}
                  >
                    View Details
                    <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            className="text-center py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-muted-foreground">No projects found in this category.</p>
          </motion.div>
        )}
      </div>
    </section>
  )
}
