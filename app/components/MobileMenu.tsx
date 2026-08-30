'use client'

import { motion } from 'framer-motion'
import { cn } from '../lib/utils'

interface MobileMenuProps {
  links: { name: string; href: string }[]
  onClose: () => void
  onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void
  activeSection: string
}

export default function MobileMenu({ links, onClose, onNavClick, activeSection }: MobileMenuProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-40 md:hidden"
    >
      <div className="absolute inset-0 bg-background-primary/95 backdrop-blur-xl" onClick={onClose} />
      
      <motion.nav
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="absolute right-0 top-0 bottom-0 w-3/4 max-w-sm bg-background-secondary border-l border-white/10 p-8 pt-24"
      >
        <div className="flex flex-col gap-6">
          {links.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              onClick={(e) => onNavClick(e, link.href)}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className={cn(
                'text-2xl font-display font-semibold transition-colors',
                activeSection === link.href.slice(1)
                  ? 'text-accent-cyan'
                  : 'text-text-primary hover:text-accent-cyan'
              )}
            >
              {link.name}
            </motion.a>
          ))}
          
          <motion.a
            href="#contact"
            onClick={(e) => onNavClick(e, '#contact')}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: links.length * 0.1 }}
            className="mt-4 px-6 py-3 rounded-full bg-gradient-accent text-background-primary font-semibold text-center
                       hover:shadow-glow transition-all duration-300"
          >
            Let&apos;s Talk
          </motion.a>
        </div>
      </motion.nav>
    </motion.div>
  )
}