'use client'

import { motion, Variants } from 'framer-motion'
import { ChevronDown, Circle } from 'lucide-react'
import { personalInfo } from '../lib/data'
import GradientText from '../components/GradientText'
import SocialLinks from '../components/SocialLinks'

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.6, 
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number] 
    },
  },
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-background-primary">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-cyan/10 rounded-full blur-[128px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-purple/10 rounded-full blur-[128px] animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-success/10 border border-success/20 text-success text-sm font-medium">
              <Circle className="w-2 h-2 fill-success animate-pulse" />
              Available for work
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-text-primary mb-6"
          >
            Hi, I&apos;m {personalInfo.name}
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8"
          >
            <GradientText>{personalInfo.tagline}</GradientText>
          </motion.h2>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-text-secondary max-w-2xl mb-10 leading-relaxed"
          >
            Specialized in building modern web applications with cutting-edge technologies.
            Turning complex problems into elegant, user-friendly solutions.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <a
              href="#projects"
              className="px-8 py-3.5 rounded-full bg-gradient-accent text-background-primary font-semibold
                         hover:shadow-glow transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3.5 rounded-full border border-white/20 text-text-primary font-semibold
                         hover:bg-white/5 hover:border-accent-cyan/50 transition-all duration-300"
            >
              Contact Me
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants}>
            <SocialLinks links={personalInfo.socials} />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-6 h-6 text-text-tertiary" />
        </motion.div>
      </motion.div>
    </section>
  )
}