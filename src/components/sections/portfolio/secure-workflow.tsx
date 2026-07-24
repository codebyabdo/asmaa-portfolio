'use client'

import { motion } from 'framer-motion'
import { Shield, Lock, Eye, FileText } from 'lucide-react'

export function SecureWorkflow() {
  const steps = [
    {
      icon: FileText,
      title: 'Confidential Upload',
      description: 'Secure document submission with end-to-end encryption',
    },
    {
      icon: Lock,
      title: 'Access Control',
      description: 'NDA-protected project environment with role-based access',
    },
    {
      icon: Eye,
      title: 'Quality Review',
      description: 'Multi-stage review process with confidentiality maintained',
    },
    {
      icon: Shield,
      title: 'Secure Delivery',
      description: 'Watermarked files delivered through secure channels',
    },
  ]

  return (
    <section className="relative py-32 px-6 md:px-8 bg-background overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <motion.div
          className="absolute top-1/4 left-0 w-96 h-96 bg-accent-primary/3 rounded-full blur-3xl"
          animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="container-wide relative z-10">
        {/* Header */}
        <motion.div
          className="max-w-3xl mb-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-accent-primary font-medium mb-4" style={{ fontFamily: 'var(--font-accent)' }}>
            SECURITY & WORKFLOW
          </p>
          <h2
            className="text-6xl md:text-7xl font-black tracking-tighter mb-8"
            style={{ fontFamily: 'var(--font-headings)' }}
          >
            Secure Translation Workflow
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
            Every project is handled with meticulous attention to confidentiality and professional security standards.
            Your documents remain protected at every stage.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon
            return (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.8 }}
                viewport={{ once: true }}
              >
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-20 -right-4 w-8 h-0.5 bg-gradient-to-r from-accent-primary/50 to-accent-primary/0" />
                )}

                {/* Card */}
                <motion.div
                  className="h-full p-8 rounded-xl bg-card border border-border/50 hover:border-accent-primary/30 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -4 }}
                >
                  {/* Icon */}
                  <div className="mb-6 inline-block p-3 rounded-lg bg-accent-primary/10">
                    <IconComponent className="w-6 h-6 text-accent-primary" />
                  </div>

                  {/* Content */}
                  <h3
                    className="text-xl font-bold mb-3 text-foreground"
                    style={{ fontFamily: 'var(--font-headings)' }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                    {step.description}
                  </p>

                  {/* Step Number */}
                  <div className="mt-6 inline-block px-3 py-1 rounded-full bg-accent-primary/10 text-xs font-bold text-accent-primary">
                    Step {index + 1}
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </div>

        {/* Security Statement */}
        <motion.div
          className="mt-20 p-8 rounded-xl bg-gradient-to-r from-accent-primary/5 to-accent-secondary/5 border border-accent-primary/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-center text-muted-foreground leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
            All projects are subject to strict confidentiality agreements and professional conduct standards. Your
            documents are encrypted, protected, and handled with the utmost discretion. Zero data collection. Complete
            privacy assurance.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
