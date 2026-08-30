'use client'

import { cn } from '../lib/utils'

interface SectionLabelProps {
  text: string
  className?: string
}

export default function SectionLabel({ text, className }: SectionLabelProps) {
  return (
    <div className={cn('flex items-center gap-3 mb-6', className)}>
      <div className="h-px w-8 bg-accent-cyan" />
      <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent-cyan font-sans">
        {text}
      </span>
    </div>
  )
}