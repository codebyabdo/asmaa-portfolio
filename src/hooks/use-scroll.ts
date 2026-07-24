'use client'

import { useScroll, useTransform } from 'framer-motion'

export function useHeroScroll() {
  const { scrollYProgress } = useScroll()

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.25],
    [1, 0]
  )

  const scale = useTransform(
    scrollYProgress,
    [0, 0.25],
    [1, 0.8]
  )

  const rotate = useTransform(
    scrollYProgress,
    [0, 0.25],
    [0, -5]
  )

  const blur = useTransform(
    scrollYProgress,
    [0, 0.25],
    [0, 20]
  )

  return {
    opacity,
    scale,
    rotate,
    blur,
  }
}