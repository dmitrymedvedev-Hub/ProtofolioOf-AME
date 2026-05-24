import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import useScrollAnimation from '../hooks/useScrollAnimation'

const processSteps = [
  {
    title: '1. Share the idea',
    description:
      'Tell me what you want to build, who it is for, and what success should look like.',
  },
  {
    title: '2. Shape the scope',
    description:
      'I help organize the structure, define the features, and keep the work practical and focused.',
  },
  {
    title: '3. Build with clarity',
    description:
      'I turn the plan into a polished product with clean code, strong visuals, and thoughtful interaction.',
  },
]

const services = [
  'Portfolio websites',
  'Business websites',
  'Product landing pages',
  'Dashboards and admin tools',
  'Custom web applications',
  'Redesign and modernization',
]

const qualities = [
  'Professional visual style',
  'Fast and responsive UX',
  'Maintainable code structure',
  'Clear communication',
  'Modern design system',
  'Mobile-first layout',
]

function StartProjectPage() {
  useScrollAnimation()

  return (
    <>
      <section
        className="relative overflow-hidden"
        style={{
          background:
            'linear-gradient(180deg, rgba(var(--color-text-rgb), 0.98) 0%, rgba(var(--color-text-rgb), 0.92) 100%)',
          padding: '160px 0 110px',
        }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-[var(--color-accent)]/15 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-white/5 blur-3xl" />
        </div>

        <div className="relative max-w-[1200px] mx-auto px-5 md:px-10 grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
          <div data-animate="fade">
            <p className="font-accent text-[18px] md:text-[24px]" style={{ color: 'var(--color-accent)' }}>
              Start Project
            </p>
            <h1 className="font-display text-[42px] md:text-[72px] leading-[1.05] mt-4" style={{ color: 'var(--color-background)' }}>
              Let’s build something modern, useful, and polished.
            </h1>
            <p
              className="font-body text-[17px] md:text-[19px] leading-relaxed mt-6 max-w-[680px]"
              style={{ color: 'rgba(var(--color-background-rgb), 0.72)' }}
            >
              This is the best place to begin a new website or product. Share your goal, and I’ll help turn it into a
              clean, professional experience that feels strong from the first screen to the final detail.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link
                to="/#contact"
                className="font-body text-[16px] font-medium px-10 py-4 rounded-full transition-colors duration-200"
                style={{ background: 'var(--color-accent)', color: 'var(--color-background)' }}
                onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--color-accent-600)')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--color-accent)')}
              >
                Quick Contact
              </Link>
              <Link
                to="/work"
                className="font-body text-[16px] font-medium px-10 py-4 rounded-full border-[1.5px] transition-all duration-200"
                style={{ borderColor: 'rgba(var(--color-background-rgb), 0.26)', color: 'var(--color-background)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--color-background)'
                  e.currentTarget.style.color = 'var(--color-text)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent'
                  e.currentTarget.style.color = 'var(--color-background)'
                }}
              >
                View Work
              </Link>
            </div>
          </div>

          <div data-animate="stagger" className="grid gap-4">
            <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 md:p-8 backdrop-blur-sm shadow-[0_18px_50px_rgba(0,0,0,0.18)]">
              <p className="font-body text-[13px] uppercase tracking-[2px]" style={{ color: 'rgba(var(--color-background-rgb), 0.55)' }}>
                Best for
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-5">
                {services.map((item) => (
                  <li
                    key={item}
                    className="rounded-2xl border border-white/10 bg-black/10 px-4 py-3 font-body text-[15px]"
                    style={{ color: 'var(--color-background)' }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-[var(--color-accent)]/10 p-6 md:p-8 backdrop-blur-sm">
              <p className="font-body text-[13px] uppercase tracking-[2px]" style={{ color: 'rgba(var(--color-background-rgb), 0.7)' }}>
                What you get
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-5">
                {qualities.map((item) => (
                  <li
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 font-body text-[15px]"
                    style={{ color: 'var(--color-background)' }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--color-background)', padding: '120px 0' }}>
        <div className="max-w-[1200px] mx-auto px-5 md:px-10">
          <div data-animate="header">
            <h2 className="font-display text-[32px] md:text-[48px]" style={{ color: 'var(--color-text)' }}>
              Simple process, clear result
            </h2>
            <div className="mt-3 h-[3px] w-20 rounded-full bg-[var(--color-accent)]" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16" data-animate="stagger">
            {processSteps.map((step) => (
              <div
                key={step.title}
                className="rounded-[26px] border border-[var(--color-border)] bg-[var(--color-surface)] p-7 shadow-[0_14px_40px_rgba(var(--color-text-rgb),0.05)]"
              >
                <h3 className="font-body text-[22px] font-medium" style={{ color: 'var(--color-text)' }}>
                  {step.title}
                </h3>
                <p className="font-body text-[15px] leading-relaxed mt-4" style={{ color: 'rgba(var(--color-text-rgb), 0.72)' }}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--color-surface)', padding: '120px 0' }}>
        <div className="max-w-[1200px] mx-auto px-5 md:px-10 grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-12 items-start">
          <div data-animate="fade">
            <p className="font-body text-[14px] uppercase tracking-[2px]" style={{ color: 'rgba(var(--color-text-rgb), 0.5)' }}>
              Contact
            </p>
            <h2 className="font-display text-[32px] md:text-[48px] leading-[1.15] mt-3" style={{ color: 'var(--color-text)' }}>
              Tell me what you want to create
            </h2>
            <p className="font-body text-[16px] leading-relaxed mt-6" style={{ color: 'rgba(var(--color-text-rgb), 0.72)' }}>
              Use the form to send your project details. If you already have a brief, timeline, or reference links,
              include them here so I can respond with a focused next step.
            </p>
          </div>

          <form
            data-animate="fade"
            data-delay="0.1"
            className="rounded-[28px] border border-[var(--color-border)] bg-[var(--color-background)] p-6 md:p-8 shadow-[0_18px_50px_rgba(var(--color-text-rgb),0.06)]"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="font-body text-[14px] font-medium block mb-2" style={{ color: 'var(--color-text)' }}>
                  Name
                </label>
                <input
                  type="text"
                  className="w-full h-12 px-4 rounded-lg font-body text-[16px] outline-none transition-all duration-200"
                  style={{
                    background: 'var(--color-surface)',
                    border: '1px solid var(--color-border)',
                    color: 'var(--color-text)',
                  }}
                />
              </div>
              <div>
                <label className="font-body text-[14px] font-medium block mb-2" style={{ color: 'var(--color-text)' }}>
                  Email
                </label>
                <input
                  type="email"
                  className="w-full h-12 px-4 rounded-lg font-body text-[16px] outline-none transition-all duration-200"
                  style={{
                    background: 'var(--color-surface)',
                    border: '1px solid var(--color-border)',
                    color: 'var(--color-text)',
                  }}
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="font-body text-[14px] font-medium block mb-2" style={{ color: 'var(--color-text)' }}>
                Project type
              </label>
              <input
                type="text"
                placeholder="Website, dashboard, redesign, or custom app"
                className="w-full h-12 px-4 rounded-lg font-body text-[16px] outline-none transition-all duration-200"
                style={{
                  background: 'var(--color-surface)',
                  border: '1px solid var(--color-border)',
                  color: 'var(--color-text)',
                }}
              />
            </div>

            <div className="mt-4">
              <label className="font-body text-[14px] font-medium block mb-2" style={{ color: 'var(--color-text)' }}>
                Project details
              </label>
              <textarea
                rows={6}
                placeholder="Share your goals, timeline, and any useful links or notes."
                className="w-full px-4 py-3 rounded-lg font-body text-[16px] outline-none resize-y transition-all duration-200"
                style={{
                  background: 'var(--color-surface)',
                  border: '1px solid var(--color-border)',
                  color: 'var(--color-text)',
                }}
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <button
                type="submit"
                className="font-body text-[16px] font-medium px-10 py-4 rounded-full transition-colors duration-200"
                style={{ background: 'var(--color-accent)', color: 'var(--color-background)' }}
                onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--color-accent-600)')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--color-accent)')}
              >
                Send Project Brief
              </button>
              <a
                href="mailto:abdallahmohammedelmhady@gmail.com"
                className="font-body text-[16px] font-medium px-10 py-4 rounded-full border-[1.5px] transition-all duration-200 text-center"
                style={{ borderColor: 'var(--color-border)', color: 'var(--color-text)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--color-text)'
                  e.currentTarget.style.color = 'var(--color-background)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent'
                  e.currentTarget.style.color = 'var(--color-text)'
                }}
              >
                Email Me Directly
              </a>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default StartProjectPage
