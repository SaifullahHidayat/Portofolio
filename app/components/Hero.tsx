'use client';

import { motion } from 'framer-motion';
import { ChevronDown, Circle } from 'lucide-react';
import { personalInfo } from '../lib/data';
import SocialLinks from './SocialLinks';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
} as const;

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      
      {/* Background Minimalis (Hanya warna dasar, tanpa glow/gradien aneh) */}
      <div className="absolute inset-0 bg-background-primary" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="flex flex-col items-center">
          
          {/* Status Badge */}
          <motion.div variants={itemVariants} className="mb-8">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-background-secondary border border-border-subtle text-text-secondary text-sm font-mono">
              <Circle className="w-2 h-2 fill-success text-success animate-pulse" />
              Available for work
            </span>
          </motion.div>

          {/* Headline Utama */}
          <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-text-primary mb-6">
            Hi, I&apos;m {personalInfo.name}.<br />
            <span className="text-text-tertiary">
              {personalInfo.tagline}
            </span>
          </motion.h1>

          {/* Deskripsi */}
          <motion.p variants={itemVariants} className="text-lg text-text-secondary max-w-2xl mb-10 leading-relaxed">
            Saya membangun aplikasi web modern dengan fokus pada performa, skalabilitas, 
            dan pengalaman pengguna yang bersih.
          </motion.p>

          {/* Tombol Aksi */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-14">
            <a 
              href="#projects" 
              className="px-8 py-3.5 rounded-lg bg-white text-black font-semibold hover:bg-gray-200 transition-colors"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3.5 rounded-lg border border-border-strong text-text-primary font-semibold hover:bg-background-secondary transition-colors"
            >
              Contact Me
            </a>
          </motion.div>

          {/* Ikon Sosial Media (Dikembalikan) */}
          <motion.div variants={itemVariants}>
            <SocialLinks links={personalInfo.socials} size="md" />
          </motion.div>

        </motion.div>
      </div>

      {/* Panah ke bawah */}
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 1 }} 
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}>
          <ChevronDown className="w-6 h-6 text-text-tertiary" />
        </motion.div>
      </motion.div>
      
    </section>
  );
}