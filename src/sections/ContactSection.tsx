import { useState, type ChangeEvent, type FormEvent } from 'react'

function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      
      const result = await response.json()
      
      if (response.ok && result.success) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Error submitting contact form:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
    
    setTimeout(() => setSubmitStatus('idle'), 3000)
  }

  return (
    <section id="contact" className="relative z-10 section-pad-xl bg-[var(--color-text)] overflow-hidden">
      {/* Animated background elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 left-[-5rem] w-96 h-96 bg-[var(--color-accent)]/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-[-5rem] w-96 h-96 bg-[var(--color-accent)]/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative max-w-[1200px] mx-auto px-5 md:px-10">
        {/* Header */}
        <div className="text-center" data-animate="fade-up">
          <span className="inline-block px-4 py-2 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] text-[13px] uppercase tracking-[3px] font-medium mb-6">
            Get in Touch
          </span>
          <h2 className="font-display text-[36px] md:text-[52px] text-white leading-tight">
            Let's Build Something
            <span className="block text-[var(--color-accent)]">Extraordinary</span>
          </h2>
          <p className="mt-6 text-[17px] text-white/60 max-w-[580px] mx-auto leading-relaxed">
            Have a project in mind? I'd love to hear about it. Let's collaborate and bring your vision to life.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="mt-16 mx-auto max-w-[640px]"
          data-animate="fade-up"
          data-delay="0.2"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name field */}
            <div className="group">
              <label htmlFor="contact-name" className="block text-[13px] uppercase tracking-[2px] text-white/50 mb-3 font-medium">
                Your Name
              </label>
              <div className="relative">
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-white/30 outline-none transition-all duration-300 group-hover:border-[var(--color-accent)]/30 focus:border-[var(--color-accent)] focus:bg-white/[0.07] focus:shadow-[0_0_30px_rgba(var(--color-accent-rgb),0.1)]"
                  placeholder="John Doe"
                  required
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[var(--color-accent)]/20 to-transparent opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </div>

            {/* Email field */}
            <div className="group">
              <label htmlFor="contact-email" className="block text-[13px] uppercase tracking-[2px] text-white/50 mb-3 font-medium">
                Email Address
              </label>
              <div className="relative">
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-white/30 outline-none transition-all duration-300 group-hover:border-[var(--color-accent)]/30 focus:border-[var(--color-accent)] focus:bg-white/[0.07] focus:shadow-[0_0_30px_rgba(var(--color-accent-rgb),0.1)]"
                  placeholder="john@example.com"
                  required
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[var(--color-accent)]/20 to-transparent opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Message field */}
          <div className="mt-6 group">
            <label htmlFor="contact-message" className="block text-[13px] uppercase tracking-[2px] text-white/50 mb-3 font-medium">
              Your Message
            </label>
            <div className="relative">
              <textarea
                id="contact-message"
                rows={5}
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-white/30 outline-none transition-all duration-300 group-hover:border-[var(--color-accent)]/30 focus:border-[var(--color-accent)] focus:bg-white/[0.07] focus:shadow-[0_0_30px_rgba(var(--color-accent-rgb),0.1)] resize-none"
                placeholder="Tell me about your project, timeline, and goals..."
                required
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[var(--color-accent)]/20 to-transparent opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          </div>

          {/* Submit button */}
          <div className="mt-8">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`group relative w-full md:w-auto px-12 py-5 rounded-full font-body text-[16px] font-semibold text-[var(--color-background)] transition-all duration-500 ${
                isSubmitting
                  ? 'bg-[var(--color-accent)]/70 cursor-wait'
                  : 'bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-600)] hover:shadow-[0_15px_40px_rgba(var(--color-accent-rgb),0.3)] hover:-translate-y-1'
              }`}
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                {isSubmitting ? (
                  <>
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : submitStatus === 'success' ? (
                  <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Message Sent!
                  </>
                ) : (
                  <>
                    Send Message
                    <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </>
                )}
              </span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>
        </form>

        {/* Contact info */}
        <div className="mt-20" data-animate="fade-up" data-delay="0.4">
          <p className="text-center text-[14px] text-white/40 uppercase tracking-[2px]">
            Or connect directly
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 mt-6">
            <a
              href="mailto:abdallahmohammedelmhady@gmail.com"
              className="group flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white/70 transition-all duration-300 hover:bg-white/10 hover:border-[var(--color-accent)]/30 hover:text-white"
            >
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="font-body text-[15px]">abdallahmohammedelmhady@gmail.com</span>
            </a>
            <a
              href="https://github.com/dmitrymedvedev-Hub"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white/70 transition-all duration-300 hover:bg-white/10 hover:border-[var(--color-accent)]/30 hover:text-white"
            >
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.920.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              <span className="font-body text-[15px]">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/abdallah-mohammed-elmhady-05928b338/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white/70 transition-all duration-300 hover:bg-white/10 hover:border-[var(--color-accent)]/30 hover:text-white"
            >
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span className="font-body text-[15px]">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection