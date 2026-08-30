'use client'

import { cn } from '../lib/utils'
import { motion } from 'framer-motion'

interface GlassCardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

export default function GlassCard({ children, className, hover = true }: GlassCardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -4, scale: 1.01 } : undefined}
      transition={{ duration: 0.3 }}
      className={cn(
        'rounded-2xl bg-background-tertiary border border-white/[0.06]',
        'p-6 md:p-8',
        hover && 'hover:border-accent-cyan/30 hover:shadow-glow transition-all duration-300',
        className
      )}
    >
      {children}
    </motion.div>
  )
}