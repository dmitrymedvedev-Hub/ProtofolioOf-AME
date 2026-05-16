import { Link } from 'react-router-dom'

function AboutSnippet() {
  return (
    <section
      id="about"
      className="relative"
      style={{
        background: '#f8f8f8',
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
              style={{ color: '#b04a3e' }}
            >
              About Me
            </p>
            <h2
              data-animate="fade"
              data-delay="0.1"
              className="font-display text-[28px] md:text-[36px] leading-[1.3] mt-3"
              style={{ color: '#3c1c10' }}
            >
              Passionate about building things that work beautifully
            </h2>
            <p
              data-animate="fade"
              data-delay="0.2"
              className="font-body text-[16px] leading-relaxed mt-5 max-w-[520px]"
              style={{ color: 'rgba(60, 28, 16, 0.7)' }}
            >
              I'm a full-stack developer with over 2 years of experience crafting
              web applications. I enjoy solving complex problems and creating
              intuitive user experiences. When I'm not coding, you'll find me
              exploring new technologies or contributing to open-source projects.
            </p>
            <Link
              to="/about"
              data-animate="fade"
              data-delay="0.3"
              className="inline-flex items-center gap-1 font-body text-[16px] font-medium mt-7 transition-all duration-200 group"
              style={{ color: '#b04a3e' }}
            >
              More About Me
              <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
                &rarr;
              </span>
            </Link>
          </div>

          <div data-animate="slide-right" data-delay="0.2">
            <img
              src="/images/portrait.jpg"
              alt="Abdallah MohammedElmhady portrait"
              loading="lazy"
              className="w-full max-w-[400px] mx-auto rounded-xl object-cover"
              style={{
                height: '500px',
                boxShadow: '0 8px 32px rgba(60, 28, 16, 0.1)',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSnippet
