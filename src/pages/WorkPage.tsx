import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Footer from '../components/Footer'
import useScrollAnimation from '../hooks/useScrollAnimation'

const projects = [
  {
    id: 'day-stride-scheduling',
    title: 'Day-Stride Scheduling',
    summary:
      'An end-to-end scheduling platform with secure payments, inventory controls, and an admin dashboard built for scale.',
    description:
      'A polished scheduling experience for teams that need dependable planning, simple payments, and a clear back-office workflow.',
    challenge:
      'The main challenge was balancing a dense feature set with a calm, easy-to-read interface that still felt premium.',
    approach:
      'I structured the product around fast booking flows, strong hierarchy, and data-driven panels that keep critical actions visible.',
    outcome:
      'The result is a professional management tool that makes complex scheduling feel lightweight and practical.',
    tags: ['React', 'Node.js', 'MongoDB'],
    image: '/images/image.png',
  },
  {
    id: 'task-management-app',
    title: 'Task Management App',
    summary:
      'Collaborative task management with real-time sync, team workspaces, and cross-device continuity.',
    description:
      'A focused workspace for modern teams that need to organize tasks, track progress, and move quickly across devices.',
    challenge:
      'The goal was to make planning and collaboration feel immediate without cluttering the interface with too many controls.',
    approach:
      'I used clear grouping, compact patterns, and responsive layouts to keep the system usable from desktop to mobile.',
    outcome:
      'The product supports smooth task tracking and gives teams a strong foundation for daily execution.',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL'],
    image: '/images/project-taskapp.jpg',
  },
  {
    id: 'portfolio-cms',
    title: 'Portfolio CMS',
    summary:
      'A custom content system for creative professionals with optimized media delivery, galleries, and SEO tooling.',
    description:
      'A CMS designed for creators who need flexible editing, strong presentation, and a fast publishing workflow.',
    challenge:
      'The challenge was to keep the system flexible for content editing while preserving visual consistency across pages.',
    approach:
      'I focused on reusable blocks, media-friendly layout rules, and a simple editing flow that supports growth over time.',
    outcome:
      'The final product makes it easier to publish high-quality content without sacrificing design quality.',
    tags: ['Vue.js', 'Express', 'AWS'],
    image: '/images/project-cms.jpg',
  },
]

function WorkPage() {
  useScrollAnimation()
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) return

    const id = location.hash.slice(1)
    const el = document.getElementById(id)
    if (el) {
      window.requestAnimationFrame(() => {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      })
    }
  }, [location.hash])

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
          <div className="absolute -top-28 -left-20 h-80 w-80 rounded-full bg-[var(--color-accent)]/15 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-white/5 blur-3xl" />
        </div>

        <div className="relative max-w-[1200px] mx-auto px-5 md:px-10">
          <div className="max-w-[760px]" data-animate="fade">
            <p className="font-accent text-[18px] md:text-[24px]" style={{ color: 'var(--color-accent)' }}>
              Work
            </p>
            <h1 className="font-display text-[42px] md:text-[72px] leading-[1.05] mt-4" style={{ color: 'var(--color-background)' }}>
              Detailed views of selected projects
            </h1>
            <p className="font-body text-[17px] md:text-[19px] leading-relaxed mt-6 max-w-[700px]" style={{ color: 'rgba(var(--color-background-rgb), 0.72)' }}>
              Each project below includes the problem, the thinking, and the result. The goal is to show not just
              the visual layer, but the structure and decisions behind the finished experience.
            </p>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--color-background)', padding: '120px 0' }}>
        <div className="max-w-[1200px] mx-auto px-5 md:px-10">
          <div className="grid gap-6" data-animate="stagger">
            {projects.map((project, index) => (
              <article
                id={project.id}
                key={project.id}
                className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 rounded-[28px] border border-[var(--color-border)] bg-[var(--color-surface)] p-5 md:p-7 shadow-[0_18px_50px_rgba(var(--color-text-rgb),0.06)]"
              >
                <div className="overflow-hidden rounded-[22px] bg-[var(--color-ghost)]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    style={{ minHeight: '320px' }}
                  />
                </div>

                <div className="flex flex-col justify-between rounded-[22px] bg-[var(--color-background)] p-6 md:p-8">
                  <div>
                    <p className="font-body text-[13px] uppercase tracking-[2px]" style={{ color: 'rgba(var(--color-text-rgb), 0.5)' }}>
                      Project {String(index + 1).padStart(2, '0')}
                    </p>
                    <h2 className="font-display text-[28px] md:text-[40px] leading-[1.15] mt-3" style={{ color: 'var(--color-text)' }}>
                      {project.title}
                    </h2>
                    <p className="font-body text-[16px] leading-relaxed mt-4" style={{ color: 'rgba(var(--color-text-rgb), 0.74)' }}>
                      {project.summary}
                    </p>
                    <p className="font-body text-[15px] leading-relaxed mt-4" style={{ color: 'rgba(var(--color-text-rgb), 0.68)' }}>
                      {project.description}
                    </p>

                    <div className="grid gap-4 mt-6">
                      <div>
                        <h3 className="font-body text-[15px] font-medium" style={{ color: 'var(--color-text)' }}>
                          Challenge
                        </h3>
                        <p className="font-body text-[15px] leading-relaxed mt-2" style={{ color: 'rgba(var(--color-text-rgb), 0.68)' }}>
                          {project.challenge}
                        </p>
                      </div>
                      <div>
                        <h3 className="font-body text-[15px] font-medium" style={{ color: 'var(--color-text)' }}>
                          Approach
                        </h3>
                        <p className="font-body text-[15px] leading-relaxed mt-2" style={{ color: 'rgba(var(--color-text-rgb), 0.68)' }}>
                          {project.approach}
                        </p>
                      </div>
                      <div>
                        <h3 className="font-body text-[15px] font-medium" style={{ color: 'var(--color-text)' }}>
                          Outcome
                        </h3>
                        <p className="font-body text-[15px] leading-relaxed mt-2" style={{ color: 'rgba(var(--color-text-rgb), 0.68)' }}>
                          {project.outcome}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-transparent px-4 py-1.5 font-body text-[13px] transition-colors duration-200 hover:border-[var(--color-accent)]"
                        style={{ background: 'var(--color-ghost)', color: 'var(--color-text)' }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-16" data-animate="fade">
            <p className="font-body text-[16px]" style={{ color: 'rgba(var(--color-text-rgb), 0.72)' }}>
              Want to see more or discuss a similar project?
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
              <Link
                to="/start-project"
                className="font-body text-[16px] font-medium px-10 py-4 rounded-full transition-colors duration-200"
                style={{ background: 'var(--color-accent)', color: 'var(--color-background)' }}
                onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--color-accent-600)')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--color-accent)')}
              >
                Start a Project
              </Link>
              <Link
                to="/about-more"
                className="font-body text-[16px] font-medium px-10 py-4 rounded-full border-[1.5px] transition-all duration-200"
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
                About Me
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default WorkPage
