'use client'

import { motion } from 'framer-motion'

interface Props {
  text: string
  className?: string
}

export function AnimatedText({
  text,
  className,
}: Props) {
  return (
    <div className={className}>
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          initial={{
            opacity: 0,
            y: 40,
            rotateX: 90,
          }}
          animate={{
            opacity: 1,
            y: 0,
            rotateX: 0,
          }}
          transition={{
            delay: 0.1 + i * 0.03,
            duration: 0.6,
          }}
          style={{
            display: 'inline-block',
            width: char === ' ' ? '0.3em' : 'auto',
          }}
        >
          {char}
        </motion.span>
      ))}
    </div>
  )
}