'use client'

import { ArrowUp } from 'lucide-react'
import { personalInfo } from '../lib/data'
import SocialLinks from './SocialLinks'
import GradientText from './GradientText'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background-primary border-t border-white/[0.06] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6">
          <GradientText as="span" className="font-display text-2xl font-bold">
            {personalInfo.name}
          </GradientText>
          
          <p className="text-text-secondary text-center max-w-md">
            Building digital experiences with passion, precision, and pixel-perfect attention to detail.
          </p>

          <SocialLinks links={personalInfo.socials} />

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-text-tertiary mt-4">
            <a href="#home" className="hover:text-accent-cyan transition-colors">Home</a>
            <a href="#about" className="hover:text-accent-cyan transition-colors">About</a>
            <a href="#skills" className="hover:text-accent-cyan transition-colors">Skills</a>
            <a href="#projects" className="hover:text-accent-cyan transition-colors">Projects</a>
            <a href="#contact" className="hover:text-accent-cyan transition-colors">Contact</a>
          </div>

          <div className="flex items-center gap-4 mt-4">
            <p className="text-sm text-text-tertiary">
              © {currentYear} {personalInfo.name}. Built with Next.js & Tailwind CSS
            </p>
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="mt-4 p-3 rounded-full bg-white/5 border border-white/10 text-text-secondary
                       hover:text-accent-cyan hover:border-accent-cyan/50 hover:bg-accent-cyan/10
                       transition-all duration-300"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  )
}