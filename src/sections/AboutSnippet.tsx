import { Link } from 'react-router-dom'

function AboutSnippet() {
  return (
    <section
      id="about"
      className="relative"
      style={{
        background: 'var(--color-surface)',
        zIndex: 1,
        padding: '120px 0',
      }}
    >
      <div className="max-w-[1200px] mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-[55%_45%] gap-16 items-center">
          <div>
            <p
              data-animate="fade"
              className="font-accent text-[24px] md:text-[32px]"
              style={{ color: 'var(--color-accent)' }}
            >
              About Me
            </p>
            <h2
              data-animate="fade"
              data-delay="0.1"
              className="font-display text-[28px] md:text-[36px] leading-[1.3] mt-3"
              style={{ color: 'var(--color-text)' }}
            >
              I craft elegant, reliable web experiences
            </h2>
            <p
              data-animate="fade"
              data-delay="0.2"
              className="font-body text-[16px] leading-relaxed mt-5 max-w-[520px]"
              style={{ color: 'rgba(var(--color-text-rgb), 0.7)' }}
            >
              I'm a full-stack engineer focused on building production-ready web
              applications. I prioritize performance, accessibility, and clear
              architecture to deliver solutions that scale.
            </p>
            <Link
              to="/about-more"
              data-animate="fade"
              data-delay="0.3"
              className="inline-flex items-center gap-1 font-body text-[16px] font-medium mt-7 transition-all duration-200 group"
              style={{ color: 'var(--color-accent)' }}
            >
              Read More
              <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
                &rarr;
              </span>
            </Link>
          </div>

          <div data-animate="slide-right" data-delay="0.2">
            <img
              src="/images/imageTow.png"
              alt="Abdallah MohammedElmhady portrait"
              loading="lazy"
              className="w-full max-w-[400px] mx-auto rounded-xl object-cover"
              style={{
                height: '500px',
                boxShadow: '0 8px 32px rgba(var(--color-text-rgb), 0.08)',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSnippet
