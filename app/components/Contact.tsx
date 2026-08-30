'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Copy, Check, Send, Loader2 } from 'lucide-react'
import { personalInfo } from '../lib/data'
import SectionLabel from '../components/SectionLabel'
import SocialLinks from '../components/SocialLinks'

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const [formState, setFormState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const validate = () => {
    const newErrors: Record<string, string> = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format'
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required'
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setFormState('loading')
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    setFormState('success')
    setFormData({ name: '', email: '', subject: '', message: '' })
    
    setTimeout(() => setFormState('idle'), 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    if (errors[e.target.name]) {
      setErrors(prev => { const n = { ...prev }; delete n[e.target.name]; return n })
    }
  }

  return (
    <section id="contact" className="py-24 md:py-32 bg-background-primary relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <SectionLabel text="Get In Touch" className="justify-center" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Let&apos;s Work Together
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto">
            Open for freelance, full-time, or collaboration opportunities. Let&apos;s build something amazing.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-display text-xl font-semibold text-text-primary mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-background-tertiary border border-white/[0.06]">
                  <div className="p-3 rounded-lg bg-accent-cyan/10 text-accent-cyan">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm text-text-tertiary mb-0.5">Email</div>
                    <div className="text-text-primary font-medium truncate">{personalInfo.email}</div>
                  </div>
                  <button
                    onClick={copyEmail}
                    className="p-2 rounded-lg hover:bg-white/5 text-text-secondary hover:text-accent-cyan transition-colors"
                    aria-label="Copy email"
                  >
                    {copied ? <Check className="w-4 h-4 text-success" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-background-tertiary border border-white/[0.06]">
                  <div className="p-3 rounded-lg bg-accent-purple/10 text-accent-purple">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-text-tertiary mb-0.5">Location</div>
                    <div className="text-text-primary font-medium">{personalInfo.location}</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium text-text-tertiary uppercase tracking-wider mb-4">
                Follow Me
              </h4>
              <SocialLinks links={personalInfo.socials} size="lg" />
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-background-tertiary border border-white/[0.06]
                             text-text-primary placeholder:text-text-tertiary
                             focus:outline-none focus:border-accent-cyan/50 focus:ring-1 focus:ring-accent-cyan/50
                             transition-all"
                    placeholder="John Doe"
                  />
                  {errors.name && <p className="mt-1 text-xs text-error">{errors.name}</p>}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-background-tertiary border border-white/[0.06]
                             text-text-primary placeholder:text-text-tertiary
                             focus:outline-none focus:border-accent-cyan/50 focus:ring-1 focus:ring-accent-cyan/50
                             transition-all"
                    placeholder="john@example.com"
                  />
                  {errors.email && <p className="mt-1 text-xs text-error">{errors.email}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-text-secondary mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-background-tertiary border border-white/[0.06]
                           text-text-primary placeholder:text-text-tertiary
                           focus:outline-none focus:border-accent-cyan/50 focus:ring-1 focus:ring-accent-cyan/50
                           transition-all"
                  placeholder="Project Inquiry"
                />
                {errors.subject && <p className="mt-1 text-xs text-error">{errors.subject}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-background-tertiary border border-white/[0.06]
                           text-text-primary placeholder:text-text-tertiary resize-none
                           focus:outline-none focus:border-accent-cyan/50 focus:ring-1 focus:ring-accent-cyan/50
                           transition-all"
                  placeholder="Tell me about your project..."
                />
                {errors.message && <p className="mt-1 text-xs text-error">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={formState === 'loading' || formState === 'success'}
                className="w-full py-3.5 rounded-full bg-gradient-accent text-background-primary font-semibold
                         hover:shadow-glow transition-all duration-300 hover:scale-[1.01] active:scale-[0.99]
                         disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {formState === 'loading' ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : formState === 'success' ? (
                  <>
                    <Check className="w-5 h-5" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>

              {formState === 'success' && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-sm text-success"
                >
                  Thank you! I&apos;ll get back to you soon.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}