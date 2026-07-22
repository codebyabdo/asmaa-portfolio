'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'

interface TranslationPair {
  id: string
  category: string
  original: string
  translated: string
  notes: string
  improvements: string[]
}

const translations: TranslationPair[] = [
  {
    id: '1',
    category: 'Legal Contract',
    original:
      'The aforementioned party agrees to indemnify and hold harmless the other party from any and all claims arising from breach of this agreement.',
    translated:
      'تتعهد الجهة المذكورة بالتعويض وحماية الجهة الأخرى من أي مطالبات ناشئة عن انتهاك هذا الاتفاق وتحملها مسؤولية ذلك.',
    notes: 'Legal terminology adapted for Arabic legal context',
    improvements: ['Preserved legal precision', 'Culturally appropriate tone', 'Maintained contractual authority'],
  },
  {
    id: '2',
    category: 'Medical Report',
    original:
      'The patient presents with acute symptoms of hypertension requiring immediate pharmaceutical intervention and lifestyle modification.',
    translated:
      'يعاني المريض من أعراض حادة لارتفاع ضغط الدم تتطلب تدخلاً دوائياً فوريّاً وتعديل نمط الحياة.',
    notes: 'Medical terminology localized for Arabic healthcare system',
    improvements: ['Technical accuracy maintained', 'Clarity for Arabic-speaking patients', 'Professional tone preserved'],
  },
  {
    id: '3',
    category: 'Website Localization',
    original:
      'Experience the future of technology with our groundbreaking suite of enterprise solutions designed for global scale.',
    translated:
      'اختبر مستقبل التكنولوجيا من خلال مجموعتنا الرائدة من حلول المؤسسات المصممة للنمو العالمي.',
    notes: 'Marketing copy adapted for Arabic markets',
    improvements: ['Brand voice preserved', 'Culturally resonant messaging', 'Market-specific terminology'],
  },
]

export function BeforeAfterTranslation() {
  const [activeId, setActiveId] = useState(translations[0].id)
  const [sliderPosition, setSliderPosition] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)

  const active = translations.find((t) => t.id === activeId)!

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const newPosition = ((e.clientX - rect.left) / rect.width) * 100
    setSliderPosition(Math.max(0, Math.min(100, newPosition)))
  }

  return (
    <section className="relative py-32 px-6 md:px-8 bg-background">
      <div className="container-wide">
        {/* Section Header */}
        <motion.div
          className="mb-24 space-y-6 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-accent-primary font-medium" style={{ fontFamily: 'var(--font-accent)' }}>
            TRANSFORMATION SHOWCASE
          </p>
          <h2
            className="text-6xl md:text-7xl font-black tracking-tighter"
            style={{ fontFamily: 'var(--font-headings)' }}
          >
            Before &amp; After
          </h2>
          <p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            See how precision translation transforms content across industries. Drag the slider to compare.
          </p>
        </motion.div>

        {/* Main Comparison */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Slider Comparison */}
          <div className="lg:col-span-2 space-y-6">
            <motion.div
              ref={containerRef}
              className="relative h-96 rounded-xl overflow-hidden bg-card border border-border shadow-lg cursor-col-resize group"
              onMouseMove={handleMouseMove}
              onMouseLeave={() => setSliderPosition(50)}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Original Text */}
              <div className="absolute inset-0 p-8 flex flex-col justify-center bg-linear-to-br from-muted/50 to-background/50">
                <p className="text-sm font-medium text-accent-primary mb-4" style={{ fontFamily: 'var(--font-accent)' }}>
                  ORIGINAL
                </p>
                <p
                  className="text-lg leading-relaxed text-foreground"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {active.original}
                </p>
              </div>

              {/* Translated Text - Clipped */}
              <motion.div
                className="absolute inset-0 p-8 flex flex-col justify-center bg-linear-to-br from-accent-tertiary/10 to-accent-primary/5 pointer-events-none"
                style={{ clipPath: `inset(0 0 0 ${100 - sliderPosition}%)` }}
                animate={{ clipPath: `inset(0 0 0 ${100 - sliderPosition}%)` }}
              >
                <p className="text-sm font-medium text-accent-primary mb-4" style={{ fontFamily: 'var(--font-accent)' }}>
                  TRANSLATED
                </p>
                <p
                  className="text-lg leading-relaxed text-foreground"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {active.translated}
                </p>
              </motion.div>

              {/* Slider Handle */}
              <motion.div
                className="absolute top-0 bottom-0 w-1 bg-accent-primary shadow-lg"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent-primary rounded-full p-3">
                  <div className="flex items-center gap-1 text-white text-xs font-bold">
                    <div className="w-1 h-3 bg-white rounded-full" />
                    <div className="w-1 h-3 bg-white rounded-full" />
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Translation Notes */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="p-6 rounded-lg bg-card border border-border/50">
                <p className="text-sm font-medium text-accent-primary mb-2" style={{ fontFamily: 'var(--font-accent)' }}>
                  NOTES
                </p>
                <p className="text-sm text-muted-foreground" style={{ fontFamily: 'var(--font-body)' }}>
                  {active.notes}
                </p>
              </div>

              <div className="p-6 rounded-lg bg-card border border-border/50">
                <p className="text-sm font-medium text-accent-primary mb-3" style={{ fontFamily: 'var(--font-accent)' }}>
                  KEY IMPROVEMENTS
                </p>
                <ul className="space-y-2">
                  {active.improvements.map((imp, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-accent-primary font-bold">•</span>
                      <span>{imp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Category Selection */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p
              className="text-sm font-medium text-accent-primary uppercase tracking-widest"
              style={{ fontFamily: 'var(--font-accent)' }}
            >
              Example Categories
            </p>

            <div className="space-y-3">
              {translations.map((translation) => (
                <motion.button
                  key={translation.id}
                  onClick={() => setActiveId(translation.id)}
                  className={`w-full text-left p-4 rounded-lg border transition-all duration-300 ${
                    activeId === translation.id
                      ? 'bg-accent-primary/10 border-accent-primary/50 shadow-lg'
                      : 'bg-card border-border/30 hover:border-border'
                  }`}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <p
                    className={`font-medium ${activeId === translation.id ? 'text-accent-primary' : 'text-foreground'}`}
                  >
                    {translation.category}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">{translation.original.substring(0, 40)}...</p>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
