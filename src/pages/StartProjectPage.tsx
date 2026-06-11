import { useState, type ChangeEvent, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import useScrollAnimation from '../hooks/useScrollAnimation'

const services = ['Portfolio websites', 'Product landing pages', 'Dashboards', 'Web apps']
const qualities = ['Clean structure', 'Clear communication', 'Fast turnaround', 'Polished visuals']
const processSteps = [
  {
    title: 'Understand',
    description: 'We define the goal, audience, and the simplest path to a useful result.',
  },
  {
    title: 'Design',
    description: 'I shape the layout, content flow, and interface direction into a modern system.',
  },
  {
    title: 'Build',
    description: 'The final product is implemented with clean code, responsive behavior, and a professional finish.',
  },
]

function StartProjectPage() {
  useScrollAnimation()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    details: '',
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
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: `Project Type: ${formData.projectType}\n\nDetails:\n${formData.details}`,
        }),
      })

      const result = await response.json()

      if (response.ok && result.success) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', projectType: '', details: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Error submitting project brief:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }

    setTimeout(() => setSubmitStatus('idle'), 3000)
  }

  return (
    <>
      <section className="page-shell-dark section-pad-hero">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10 grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
          <div data-animate="fade">
            <p className="font-accent text-[18px] md:text-[24px] text-[var(--color-accent)]">Start Project</p>
            <h1 className="mt-4 font-display text-[42px] md:text-[74px] leading-[0.95] section-title section-title-dark max-w-[10ch]">
              Let's build something modern and polished.
            </h1>
            <p className="mt-6 max-w-[720px] font-body text-[17px] md:text-[19px] section-copy-dark">
              Share your goal and I'll help turn it into a clean, professional experience from the first screen to the last detail.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link to="/about-more" className="btn-primary font-body text-[16px] font-medium px-10 py-4 inline-flex justify-center">
                About Me
              </Link>
              <Link to="/work" className="btn-secondary border-white/20 text-[var(--color-background)] font-body text-[16px] font-medium px-10 py-4 inline-flex justify-center hover:bg-white hover:text-[var(--color-text)]">
                View Work
              </Link>
            </div>
          </div>

          <div data-animate="stagger" className="grid gap-4">
            <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 md:p-8 backdrop-blur-sm shadow-[0_18px_50px_rgba(0,0,0,0.18)]">
              <p className="font-body text-[14px] font-semibold uppercase tracking-[2px] text-[var(--color-text)]">Best for</p>
              <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {services.map((item) => (
                  <li key={item} className="surface-card-soft px-4 py-3 text-[var(--color-text)]">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-[rgba(var(--color-accent-rgb),0.12)] p-6 md:p-8 backdrop-blur-sm">
              <p className="font-body text-[14px] font-semibold uppercase tracking-[2px] text-[var(--color-text)]">What you get</p>
              <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {qualities.map((item) => (
                  <li key={item} className="surface-card-soft px-4 py-3 text-[var(--color-text)]">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad-xl bg-[var(--color-background)]">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10">
          <div data-animate="header">
            <h2 className="font-display text-[32px] md:text-[48px] section-title">Simple process, clear result</h2>
            <div className="mt-3 accent-rule" />
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6" data-animate="stagger">
            {processSteps.map((step) => (
              <div key={step.title} className="surface-card p-7">
                <h3 className="font-body text-[22px] font-medium text-[var(--color-text)]">{step.title}</h3>
                <p className="mt-4 section-copy">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad-xl bg-[var(--color-surface)]">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10 grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-12 items-start">
          <div data-animate="fade">
            <p className="section-eyebrow">Contact</p>
            <h2 className="mt-3 font-display text-[32px] md:text-[48px] leading-[1.1] section-title max-w-[11ch]">
              Tell me what you want to create
            </h2>
            <p className="mt-6 section-copy max-w-[640px]">
              Use the form to send your project details. If you already have a brief, timeline, or reference links, include them here.
            </p>
          </div>

          <form data-animate="fade" data-delay="0.1" className="surface-card p-6 md:p-8" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="mb-2 block font-body text-[14px] font-medium text-[var(--color-text)]">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="input-modern"
                  placeholder="Your name"
                  aria-label="Your name"
                  required
                />
              </div>
              <div>
                <label className="mb-2 block font-body text-[14px] font-medium text-[var(--color-text)]">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="input-modern"
                  placeholder="you@example.com"
                  aria-label="Your email"
                  required
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="mb-2 block font-body text-[14px] font-medium text-[var(--color-text)]">Project type</label>
              <input
                type="text"
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                placeholder="Website, dashboard, redesign, or custom app"
                className="input-modern"
              />
            </div>

            <div className="mt-4">
              <label className="mb-2 block font-body text-[14px] font-medium text-[var(--color-text)]">Project details</label>
              <textarea
                rows={6}
                name="details"
                value={formData.details}
                onChange={handleChange}
                placeholder="Share your goals, timeline, and any useful links or notes."
                className="textarea-modern"
              />
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`btn-primary font-body text-[16px] font-medium px-10 py-4 inline-flex items-center justify-center gap-2 ${
                  isSubmitting ? 'opacity-70 cursor-wait' : ''
                }`}
              >
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
                    Sent Successfully!
                  </>
                ) : (
                  'Send Project Brief'
                )}
              </button>
              <a
                href="mailto:abdallahmohammedelmhady@gmail.com"
                className="btn-secondary font-body text-[16px] font-medium px-10 py-4 inline-flex justify-center items-center gap-2 group"
              >
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email Me Directly
              </a>
            </div>

            {submitStatus === 'error' && (
              <p className="mt-4 text-red-500 text-sm">Something went wrong. Please try again or email me directly.</p>
            )}
          </form>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default StartProjectPage