import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import useScrollAnimation from '../hooks/useScrollAnimation'

const values = [
  {
    number: '01',
    title: 'Readable, Maintainable Code',
    description:
      'I deliver code that is well-structured, documented, and easy to iterate on — reducing friction for teams and speeding development.',
  },
  {
    number: '02',
    title: 'User-Centered Outcomes',
    description:
      'Product decisions prioritize accessibility, performance, and usability to create measurable value for end users.',
  },
  {
    number: '03',
    title: 'Continuous Improvement',
    description:
      'I adopt modern workflows, testing, and observability to ensure systems remain reliable and easy to evolve.',
  },
]

const timelineItems = [
  {
    year: '2020 — Present',
    role: 'Full-Stack Developer — Freelance',
    description:
      'Delivered full-stack web applications, handling architecture, implementation, and deployment for client projects.',
  },
  {
    year: '2018 — 2020',
    role: 'Frontend Developer — TechStart Agency',
    description:
      'Built responsive interfaces for e-commerce and SaaS products, working closely with designers to implement polished UIs.',
  },
  {
    year: '2016 — 2018',
    role: 'Junior Developer — Digital Solutions Co.',
    description:
      'Began as a frontend developer, learning core web fundamentals and progressing into full-stack responsibilities.',
  },
]

function AboutPage() {
  useScrollAnimation()

  return (
    <>
      {/* Hero */}
      <section
        style={{
          background: 'var(--color-background)',
          paddingTop: '160px',
          paddingBottom: '80px',
        }}
      >
          <div className="max-w-[1200px] mx-auto px-5 md:px-10">
            <p
              data-animate="fade"
              className="font-accent text-[24px] md:text-[32px]"
              style={{ color: 'var(--color-accent)' }}
            >
              Get to know me
            </p>
            <h1
              data-animate="fade"
              data-delay="0.15"
              className="font-display text-[40px] md:text-[64px] leading-[1.1] mt-2"
              style={{ color: 'var(--color-text)' }}
            >
              About Me
            </h1>
            <p
              data-animate="fade"
              data-delay="0.3"
              className="font-body text-[16px] md:text-[18px] mt-4 max-w-[560px]"
              style={{ color: 'rgba(var(--color-text-rgb), 0.7)' }}
            >
              I build dependable web applications with a focus on usability,
              performance, and long-term maintainability.
            </p>
        </div>
      </section>

      {/* My Story */}
      <section
        style={{
          background: 'var(--color-surface)',
          padding: '120px 0',
        }}
      >
          <div className="max-w-[1200px] mx-auto px-5 md:px-10">
            <div className="grid grid-cols-1 md:grid-cols-[55%_45%] gap-16 items-center">
              <div>
                <span
                  data-animate="fade"
                  className="font-body text-[14px] font-medium tracking-[2px] uppercase"
                  style={{ color: 'rgba(var(--color-text-rgb), 0.5)' }}
                >
                  My Journey
                </span>
                <h2
                  data-animate="fade"
                  data-delay="0.1"
                  className="font-display text-[28px] md:text-[36px] leading-[1.3] mt-3"
                  style={{ color: 'var(--color-text)' }}
                >
                    A practical approach to building web products
                </h2>
                <p
                  data-animate="fade"
                  data-delay="0.2"
                  className="font-body text-[16px] leading-relaxed mt-5"
                  style={{ color: 'rgba(var(--color-text-rgb), 0.7)' }}
                >
                  I started as a curious tinkerer and grew into a developer who values
                  clarity, reliability, and measurable results. My work focuses on
                  delivering features that solve real problems and scale with the business.
                </p>
                <p
                  data-animate="fade"
                  data-delay="0.3"
                  className="font-body text-[16px] leading-relaxed mt-4"
                  style={{ color: 'rgba(var(--color-text-rgb), 0.7)' }}
                >
                  Over the years I have partnered with startups and product teams to
                  design and ship customer-facing applications, internal tools, and APIs.
                  I bring pragmatic engineering, attention to UX, and a commitment to
                  long-term maintainability.
                </p>
                <p
                  data-animate="fade"
                  data-delay="0.4"
                  className="font-body text-[16px] leading-relaxed mt-4"
                  style={{ color: 'rgba(var(--color-text-rgb), 0.7)' }}
                >
                  Outside of work I contribute to open-source projects and keep up with
                  emerging best practices in performance, accessibility, and tooling.
                </p>
            </div>
            <div data-animate="slide-right" data-delay="0.2">
                  <img
                    src="/images/imageTow.png"
                    alt="Abdallah Elmhady professional portrait"
                    loading="lazy"
                    className="w-full max-w-[400px] mx-auto rounded-xl object-cover"
                    style={{
                      height: '520px',
                      boxShadow: '0 8px 32px rgba(var(--color-text-rgb), 0.08)',
                    }}
                  />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section
        style={{
          background: 'var(--color-background)',
          padding: '120px 0',
        }}
      >
          <div className="max-w-[1200px] mx-auto px-5 md:px-10">
            <div data-animate="header">
              <h2
                className="font-display text-[32px] md:text-[48px]"
                style={{ color: 'var(--color-text)' }}
              >
                What I Value
              </h2>
            <div
              className="mt-3"
              style={{
                width: '80px',
                height: '3px',
                background: 'var(--color-accent)',
              }}
            />
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
            data-animate="stagger"
          >
              {values.map((value) => (
                <div
                  key={value.number}
                  className="rounded-xl p-9"
                  style={{
                    background: 'var(--color-surface)',
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ background: 'rgba(var(--color-accent-rgb), 0.08)' }}
                  >
                    <span
                      className="font-body text-[16px] font-medium"
                      style={{ color: 'var(--color-accent)' }}
                    >
                      {value.number}
                    </span>
                  </div>
                  <h3
                    className="font-body text-[22px] font-medium mt-5"
                    style={{ color: 'var(--color-text)' }}
                  >
                    {value.title}
                  </h3>
                  <p
                    className="font-body text-[15px] leading-relaxed mt-3"
                    style={{ color: 'rgba(var(--color-text-rgb), 0.7)' }}
                  >
                    {value.description}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section
        style={{
          background: 'var(--color-text)',
          padding: '120px 0',
        }}
      >
        <div className="max-w-[1200px] mx-auto px-5 md:px-10">
          <div data-animate="header">
            <h2
              className="font-display text-[32px] md:text-[48px]"
              style={{ color: 'var(--color-background)' }}
            >
              My Experience
            </h2>
            <div
              className="mt-3"
              style={{
                width: '80px',
                height: '3px',
                background: 'var(--color-accent)',
              }}
            />
          </div>

          <div className="relative mt-16 max-w-[800px] mx-auto">
            <div
              className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5"
              style={{ background: 'var(--color-accent)' }}
            />

            <div className="flex flex-col gap-16">
              {timelineItems.map((item, index) => {
                const isLeft = index % 2 === 0

                return (
                  <div
                    key={item.year}
                    data-animate="fade"
                    data-delay={`${index * 0.15}`}
                    className={`relative pl-12 md:pl-0 ${
                      isLeft ? 'md:pr-[52%] md:text-right' : 'md:pl-[52%] md:text-left'
                    }`}
                  >
                    <div
                      className="absolute top-1 w-3 h-3 rounded-full"
                      style={{
                        background: 'var(--color-accent)',
                        left: '12px',
                        transform: 'translateX(-50%)',
                      }}
                    />
                    <span
                      className="font-body text-[14px] font-medium tracking-[1px]"
                      style={{ color: 'var(--color-accent)' }}
                    >
                      {item.year}
                    </span>
                    <h3
                      className="font-body text-[20px] font-medium mt-2"
                      style={{ color: 'var(--color-background)' }}
                    >
                      {item.role}
                    </h3>
                    <p
                      className="font-body text-[15px] leading-relaxed mt-3"
                      style={{ color: 'rgba(var(--color-background-rgb), 0.7)' }}
                    >
                      {item.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section
        style={{
          background: 'var(--color-background)',
          padding: '100px 0',
        }}
      >
        <div className="max-w-[1200px] mx-auto px-5 md:px-10 text-center">
          <h2
            data-animate="header"
            className="font-display text-[28px] md:text-[40px] leading-[1.3]"
            style={{ color: 'var(--color-text)' }}
          >
            Ready to collaborate? Let's talk.
          </h2>
          <p
            data-animate="fade"
            data-delay="0.1"
            className="font-body text-[16px] mt-3"
            style={{ color: 'rgba(var(--color-text-rgb), 0.7)' }}
          >
            Have a project in mind? I'd love to hear about it.
          </p>
          <div
            data-animate="fade"
            data-delay="0.2"
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8"
          >
            <Link
              to="/#contact"
              className="font-body text-[16px] font-medium px-10 py-4 rounded-full transition-colors duration-200"
              style={{
                background: 'var(--color-accent)',
                color: 'var(--color-background)',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--color-accent-600)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--color-accent)')}
            >
              Get in Touch
            </Link>
            <Link
              to="/work"
              className="font-body text-[16px] font-medium px-10 py-4 rounded-full border-[1.5px] transition-all duration-200"
              style={{
                background: 'transparent',
                borderColor: 'var(--color-text)',
                color: 'var(--color-text)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--color-text)'
                e.currentTarget.style.color = 'var(--color-background)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent'
                e.currentTarget.style.color = 'var(--color-text)'
              }}
            >
              View My Work
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default AboutPage
