'use client'

import { cn } from '../lib/utils'
import { FaGithub, FaLinkedin, FaTwitter, FaDribbble } from 'react-icons/fa'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  github: FaGithub,
  linkedin: FaLinkedin,
  twitter: FaTwitter,
  dribbble: FaDribbble,
}

interface SocialLinksProps {
  links: { name: string; url: string; icon: string }[]
  className?: string
  iconClassName?: string
  size?: 'sm' | 'md' | 'lg'
}

const sizeMap = {
  sm: 'w-8 h-8',
  md: 'w-10 h-10',
  lg: 'w-12 h-12',
}

const iconSizeMap = {
  sm: 'w-4 h-4',
  md: 'w-5 h-5',
  lg: 'w-6 h-6',
}

export default function SocialLinks({ 
  links, 
  className, 
  iconClassName,
  size = 'md' 
}: SocialLinksProps) {
  return (
    <div className={cn('flex items-center gap-3', className)}>
      {links.map((link) => {
        const Icon = iconMap[link.icon] || FaGithub
        return (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.name}
            className={cn(
              sizeMap[size],
              'flex items-center justify-center rounded-full',
              'bg-white/5 border border-white/10',
              'text-text-secondary hover:text-accent-cyan hover:border-accent-cyan/50',
              'hover:bg-accent-cyan/10 transition-all duration-200',
              iconClassName
            )}
          >
            <Icon className={iconSizeMap[size]} />
          </a>
        )
      })}
    </div>
  )
}