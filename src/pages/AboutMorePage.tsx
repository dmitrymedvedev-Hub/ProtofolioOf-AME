import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import useScrollAnimation from '../hooks/useScrollAnimation'

const highlights = [
  {
    title: 'Production-first mindset',
    description: 'I focus on reliability, clarity, and maintainability so the work stays useful after launch.',
  },
  {
    title: 'Product thinking',
    description: 'I shape features around real user needs, business value, and simple paths to completion.',
  },
  {
    title: 'Modern execution',
    description: 'I build with current frontend patterns, clean component boundaries, and strong visual polish.',
  },
]

const journey = [
  {
    year: 'Now',
    title: 'Full-stack delivery',
    text: 'Building polished web experiences end-to-end with a strong eye for interaction, performance, and clarity.',
  },
  {
    year: 'Before',
    title: 'Frontend craftsmanship',
    text: 'Turning design ideas into responsive interfaces that feel fast, structured, and easy to use.',
  },
  {
    year: 'Always',
    title: 'Continuous improvement',
    text: 'Refining systems, UX, and code quality with each project so the next version is easier to ship.',
  },
]

function AboutMorePage() {
  useScrollAnimation()

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[var(--color-text)] pt-[120px] pb-[80px]">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-[var(--color-accent)]/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-white/3 blur-3xl" />
        </div>

        <div className="relative max-w-[1200px] mx-auto px-5 md:px-10">
          <div className="max-w-[800px]" data-animate="fade-up">
            <span className="inline-block px-4 py-2 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] text-[13px] uppercase tracking-[3px] font-medium mb-6">
              About Me
            </span>
            <h1 className="font-display text-[42px] md:text-[64px] leading-tight text-white">
              Clear thinking. <span className="text-[var(--color-accent)]">Calm execution.</span> Strong outcomes.
            </h1>
            <p className="font-body text-[17px] md:text-[18px] leading-relaxed mt-6 text-white/60 max-w-[640px]">
              I design and build modern digital products with a practical approach: understand the problem, shape the solution carefully, and deliver work that is fast, elegant, and easy to maintain.
            </p>
          </div>
        </div>
      </section>

      {/* Focus Section */}
      <section className="relative z-10 bg-[var(--color-surface)] py-[80px]">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10 grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-12 lg:gap-16 items-start">
          <div data-animate="fade-up" className="lg:sticky lg:top-24">
            <h2 className="font-display text-[32px] md:text-[44px] leading-tight text-[var(--color-text)]">
              A short summary of how I work
            </h2>
            <div className="h-1 w-16 bg-[var(--color-accent)] rounded-full mt-4" />
          </div>

          <div className="space-y-6" data-animate="fade-up" data-delay="0.1">
            <p className="font-body text-[16px] leading-relaxed text-[var(--color-text)]/70">
              I care about the complete experience, not just the visible screen. That means thoughtful information hierarchy, smooth interaction, responsible performance, and a tone that feels professional without being cold.
            </p>
            <p className="font-body text-[16px] leading-relaxed text-[var(--color-text)]/70">
              I work best when the goal is clear and the finish line matters. My process is to reduce complexity, organize the moving parts, and leave behind a codebase that is readable and ready for the next step.
            </p>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="relative z-10 bg-[var(--color-surface)] py-[60px]">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6" data-animate="stagger">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="group p-6 rounded-2xl bg-white border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-[var(--color-accent)]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <div className="w-3 h-3 rounded-full bg-[var(--color-accent)]" />
                </div>
                <h3 className="font-body text-[18px] font-semibold text-[var(--color-text)] mb-3">
                  {item.title}
                </h3>
                <p className="font-body text-[15px] leading-relaxed text-[var(--color-text)]/60">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Section */}
      <section className="relative z-10 bg-[var(--color-surface)] py-[60px]">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10">
          <figure
            className="relative overflow-hidden rounded-[32px] shadow-2xl"
            data-animate="scale"
          >
            <div className="relative h-[500px] overflow-hidden">
              <img
                src="/images/imageTow.png"
                alt="Professional portrait of Abdallah Elmhady"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-text)]/40 to-transparent" />
            </div>
            <figcaption className="absolute bottom-0 left-0 right-0 p-8">
              <p className="text-white/90 font-body text-[16px]">
                Building digital experiences with precision and care
              </p>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Journey Section */}
      <section className="relative z-10 bg-[var(--color-text)] py-[80px]">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10">
          <div className="text-center mb-12" data-animate="fade-up">
            <span className="inline-block px-4 py-2 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] text-[13px] uppercase tracking-[3px] font-medium mb-4">
              Journey
            </span>
            <h2 className="font-display text-[32px] md:text-[48px] text-white">
              Career snapshot
            </h2>
          </div>

          <div className="grid gap-6 max-w-[900px] mx-auto" data-animate="stagger">
            {journey.map((item) => (
              <div
                key={item.title}
                className="flex gap-6 p-6 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white/[0.06] hover:border-[var(--color-accent)]/30"
              >
                <div className="flex-shrink-0">
                  <span className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-[var(--color-accent)]/15 text-[var(--color-accent)] font-display text-[20px] font-semibold">
                    {item.year}
                  </span>
                </div>
                <div>
                  <h3 className="font-body text-[20px] font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="font-body text-[15px] leading-relaxed text-white/60">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 bg-[var(--color-text)] py-[80px]">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10 text-center" data-animate="fade-up">
          <h2 className="font-display text-[28px] md:text-[40px] text-white leading-tight">
            If you need a careful builder with a modern eye, <span className="text-[var(--color-accent)]">I'm ready to help.</span>
          </h2>
          <p className="font-body text-[16px] mt-4 text-white/60 max-w-[600px] mx-auto">
            I can help shape a portfolio, product site, internal tool, or full-stack web app from concept to delivery.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <Link
              to="/work"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[var(--color-accent)] text-[var(--color-background)] font-body text-[16px] font-medium transition-all duration-300 hover:shadow-[0_10px_30px_rgba(var(--color-accent-rgb),0.3)] hover:-translate-y-0.5"
            >
              View Work
            </Link>
            <Link
              to="/start-project"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-white/20 text-white font-body text-[16px] font-medium transition-all duration-300 hover:bg-white/10 hover:border-white/30"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default AboutMorePage