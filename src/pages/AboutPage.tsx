import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import useScrollAnimation from '../hooks/useScrollAnimation'

const values = [
  {
    number: '01',
    title: 'Clean Code',
    description:
      'I write code that is readable, maintainable, and well-documented. I believe that clean code is a form of respect — for my future self, my teammates, and anyone who reads it.',
  },
  {
    number: '02',
    title: 'User-First Design',
    description:
      'Every feature I build starts with the user in mind. I care about performance, accessibility, and creating experiences that feel intuitive and enjoyable to use.',
  },
  {
    number: '03',
    title: 'Continuous Growth',
    description:
      'Technology never stands still, and neither do I. I\'m always learning new tools, exploring better patterns, and pushing myself to grow as a developer and as a problem solver.',
  },
]

const timelineItems = [
  {
    year: '2020 — Present',
    role: 'Full-Stack Developer — Freelance',
    description:
      'Building web applications for clients across industries. Managing full project lifecycles from concept to deployment.',
  },
  {
    year: '2018 — 2020',
    role: 'Frontend Developer — TechStart Agency',
    description:
      'Developed responsive web interfaces for e-commerce and SaaS clients. Collaborated with design teams to implement pixel-perfect UIs.',
  },
  {
    year: '2016 — 2018',
    role: 'Junior Developer — Digital Solutions Co.',
    description:
      'Started my professional journey building websites and learning the fundamentals of full-stack development.',
  },
]

function AboutPage() {
  useScrollAnimation()

  return (
    <>
      {/* Hero */}
      <section
        style={{
          background: '#f6f1ee',
          paddingTop: '160px',
          paddingBottom: '80px',
        }}
      >
        <div className="max-w-[1200px] mx-auto px-5 md:px-10">
          <p
            data-animate="fade"
            className="font-accent text-[24px] md:text-[32px]"
            style={{ color: '#b04a3e' }}
          >
            Get to know me
          </p>
          <h1
            data-animate="fade"
            data-delay="0.15"
            className="font-display text-[40px] md:text-[64px] leading-[1.1] mt-2"
            style={{ color: '#3c1c10' }}
          >
            About Me
          </h1>
          <p
            data-animate="fade"
            data-delay="0.3"
            className="font-body text-[16px] md:text-[18px] mt-4 max-w-[560px]"
            style={{ color: 'rgba(60, 28, 16, 0.7)' }}
          >
            The story behind the code — how I got here and what drives me forward.
          </p>
        </div>
      </section>

      {/* My Story */}
      <section
        style={{
          background: '#f8f8f8',
          padding: '120px 0',
        }}
      >
        <div className="max-w-[1200px] mx-auto px-5 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-[55%_45%] gap-16 items-center">
            <div>
              <span
                data-animate="fade"
                className="font-body text-[14px] font-medium tracking-[2px] uppercase"
                style={{ color: 'rgba(60, 28, 16, 0.5)' }}
              >
                My Journey
              </span>
              <h2
                data-animate="fade"
                data-delay="0.1"
                className="font-display text-[28px] md:text-[36px] leading-[1.3] mt-3"
                style={{ color: '#3c1c10' }}
              >
                From curiosity to a career in code
              </h2>
              <p
                data-animate="fade"
                data-delay="0.2"
                className="font-body text-[16px] leading-relaxed mt-5"
                style={{ color: 'rgba(60, 28, 16, 0.7)' }}
              >
                My journey into web development started with a simple curiosity about
                how websites work. What began as tinkering with HTML and CSS in my free
                time quickly grew into a passion for building full-scale applications. I
                was fascinated by the ability to create something that people around the
                world could interact with.
              </p>
              <p
                data-animate="fade"
                data-delay="0.3"
                className="font-body text-[16px] leading-relaxed mt-4"
                style={{ color: 'rgba(60, 28, 16, 0.7)' }}
              >
                Over the past 5 years, I've worked with startups, agencies, and freelance
                clients — building everything from e-commerce platforms to internal tools.
                Each project taught me something new, and I carry those lessons into every
                line of code I write today. I believe great software is built at the
                intersection of solid engineering and thoughtful design.
              </p>
              <p
                data-animate="fade"
                data-delay="0.4"
                className="font-body text-[16px] leading-relaxed mt-4"
                style={{ color: 'rgba(60, 28, 16, 0.7)' }}
              >
                When I'm not at the keyboard, I'm usually reading about new technologies,
                contributing to open-source projects, or mentoring junior developers. I
                believe in continuous learning and the power of community.
              </p>
            </div>
            <div data-animate="slide-right" data-delay="0.2">
              <img
                src="/images/portrait.jpg"
                alt="Abdallah Elmhady professional portrait"
                loading="lazy"
                className="w-full max-w-[400px] mx-auto rounded-xl object-cover"
                style={{
                  height: '520px',
                  boxShadow: '0 8px 32px rgba(60, 28, 16, 0.08)',
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section
        style={{
          background: '#f6f1ee',
          padding: '120px 0',
        }}
      >
        <div className="max-w-[1200px] mx-auto px-5 md:px-10">
          <div data-animate="header">
            <h2
              className="font-display text-[32px] md:text-[48px]"
              style={{ color: '#3c1c10' }}
            >
              What I Value
            </h2>
            <div
              className="mt-3"
              style={{
                width: '80px',
                height: '3px',
                background: '#b04a3e',
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
                  background: '#f8f8f8',
                }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ background: 'rgba(176, 74, 62, 0.1)' }}
                >
                  <span
                    className="font-body text-[16px] font-medium"
                    style={{ color: '#b04a3e' }}
                  >
                    {value.number}
                  </span>
                </div>
                <h3
                  className="font-body text-[22px] font-medium mt-5"
                  style={{ color: '#3c1c10' }}
                >
                  {value.title}
                </h3>
                <p
                  className="font-body text-[15px] leading-relaxed mt-3"
                  style={{ color: 'rgba(60, 28, 16, 0.7)' }}
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
          background: '#3c1c10',
          padding: '120px 0',
        }}
      >
        <div className="max-w-[1200px] mx-auto px-5 md:px-10">
          <div data-animate="header">
            <h2
              className="font-display text-[32px] md:text-[48px]"
              style={{ color: '#f6f1ee' }}
            >
              My Experience
            </h2>
            <div
              className="mt-3"
              style={{
                width: '80px',
                height: '3px',
                background: '#b04a3e',
              }}
            />
          </div>

          <div className="relative mt-16 max-w-[800px] mx-auto">
            {/* Timeline line */}
            <div
              className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5"
              style={{ background: '#b04a3e' }}
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
                      isLeft
                        ? 'md:pr-[52%] md:text-right'
                        : 'md:pl-[52%] md:text-left'
                    }`}
                  >
                    {/* Dot */}
                    <div
                      className="absolute top-1 w-3 h-3 rounded-full"
                      style={{
                        background: '#b04a3e',
                        left: '12px',
                        transform: 'translateX(-50%)',
                      }}
                    />
                    <span
                      className="font-body text-[14px] font-medium tracking-[1px]"
                      style={{ color: '#b04a3e' }}
                    >
                      {item.year}
                    </span>
                    <h3
                      className="font-body text-[20px] font-medium mt-2"
                      style={{ color: '#f6f1ee' }}
                    >
                      {item.role}
                    </h3>
                    <p
                      className="font-body text-[15px] leading-relaxed mt-2"
                      style={{ color: 'rgba(246, 241, 238, 0.6)' }}
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
          background: '#f6f1ee',
          padding: '100px 0',
        }}
      >
        <div className="max-w-[1200px] mx-auto px-5 md:px-10 text-center">
          <h2
            data-animate="header"
            className="font-display text-[28px] md:text-[40px] leading-[1.3]"
            style={{ color: '#3c1c10' }}
          >
            Let's build something great together
          </h2>
          <p
            data-animate="fade"
            data-delay="0.1"
            className="font-body text-[16px] mt-3"
            style={{ color: 'rgba(60, 28, 16, 0.7)' }}
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
                background: '#b04a3e',
                color: '#f6f1ee',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = '#c45a4e')}
              onMouseLeave={(e) => (e.currentTarget.style.background = '#b04a3e')}
            >
              Get in Touch
            </Link>
            <Link
              to="/#projects"
              className="font-body text-[16px] font-medium px-10 py-4 rounded-full border-[1.5px] transition-all duration-200"
              style={{
                background: 'transparent',
                borderColor: '#3c1c10',
                color: '#3c1c10',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#3c1c10'
                e.currentTarget.style.color = '#f6f1ee'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent'
                e.currentTarget.style.color = '#3c1c10'
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
