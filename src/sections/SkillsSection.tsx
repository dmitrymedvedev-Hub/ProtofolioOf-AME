const skillGroups = [
  {
    label: 'FRONTEND',
    skills: 'React, Vue, Next.js, TypeScript, Tailwind CSS',
  },
  {
    label: 'BACKEND',
    skills: 'Node.js, Express, Python, Django, REST APIs',
  },
  {
    label: 'DATABASE',
    skills: 'PostgreSQL, MongoDB, Redis, Prisma ORM',
  },
  {
    label: 'DEVOPS',
    skills: 'Docker, AWS, Vercel, CI/CD, Git',
  },
  {
    label: 'DESIGN',
    skills: 'Figma, Adobe XD, Responsive Design, UI/UX',
  },
  {
    label: 'OTHER',
    skills: 'GraphQL, WebSockets, Testing, Performance',
  },
]

function SkillsSection() {
  return (
    <section
      className="relative"
      style={{
        background: 'var(--color-text)',
        zIndex: 1,
        padding: '120px 0',
      }}
    >
      <div className="max-w-[1200px] mx-auto px-5 md:px-10">
        <div data-animate="header">
            <h2
              className="font-display text-[32px] md:text-[48px]"
              style={{ color: 'var(--color-background)' }}
            >
              Skills & Expertise
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
          className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10 mt-16"
          data-animate="stagger"
        >
          {skillGroups.map((group) => (
            <div key={group.label}>
              <div className="flex items-center gap-3">
                <div
                  className="rounded-full"
                  style={{
                    width: '8px',
                    height: '8px',
                    background: 'var(--color-accent)',
                  }}
                />
                <span
                  className="font-body text-[14px] tracking-[2px]"
                  style={{ color: 'rgba(var(--color-background-rgb, 246 241 238), 0.5)' }}
                >
                  {group.label}
                </span>
              </div>
              <p
                className="font-body text-[18px] mt-2 ml-[20px]"
                style={{ color: 'var(--color-background)' }}
              >
                {group.skills}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillsSection
