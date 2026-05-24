function ContactSection() {
  return (
    <section
      id="contact"
      className="relative"
      style={{
        zIndex: 1,
        padding: '120px 0',
        background: 'var(--color-text)'
      }}
    >
      <div className="max-w-[1200px] mx-auto px-5 md:px-10 text-center">
          <h2
            data-animate="header"
            className="font-display text-[32px] md:text-[48px]"
            style={{ color: 'var(--color-background)' }}
          >
            Let's collaborate
          </h2>

        <form
          data-animate="fade"
          data-delay="0.15"
          className="mt-12 mx-auto max-w-[600px] text-left"
          onSubmit={(e) => e.preventDefault()}
        >
          <div>
            <label
              className="font-body text-[14px] font-medium block mb-2"
                style={{ color: 'var(--color-background)' }}
            >
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
              onFocus={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-accent)'
                e.currentTarget.style.boxShadow = '0 0 0 3px rgba(var(--color-accent-rgb), 0.15)'
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-border)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            />
          </div>

          <div className="mt-5">
            <label
              className="font-body text-[14px] font-medium block mb-2"
                style={{ color: 'var(--color-background)' }}
            >
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
              onFocus={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-accent)'
                e.currentTarget.style.boxShadow = '0 0 0 3px rgba(var(--color-accent-rgb), 0.15)'
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-border)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            />
          </div>

          <div className="mt-5">
            <label
              className="font-body text-[14px] font-medium block mb-2"
                style={{ color: 'var(--color-background)' }}
            >
              Message
            </label>
            <textarea
              rows={5}
              className="w-full px-4 py-3 rounded-lg font-body text-[16px] outline-none resize-y transition-all duration-200"
                style={{
                background: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                color: 'var(--color-text)',
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-accent)'
                e.currentTarget.style.boxShadow = '0 0 0 3px rgba(var(--color-accent-rgb), 0.15)'
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-border)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            />
          </div>

          <button
            type="submit"
            className="font-body text-[16px] font-medium mt-7 px-12 py-4 rounded-full border-none cursor-pointer transition-colors duration-200"
            style={{
              background: 'var(--color-accent)',
              color: 'var(--color-background)',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--color-accent-600)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--color-accent)')}
          >
            Send Message
          </button>
        </form>

        <div data-animate="fade" data-delay="0.3" className="mt-10">
          <p
              className="font-body text-[14px]"
            style={{ color: 'rgba(var(--color-background-rgb, 246 241 238), 0.7)' }}
          >
            Or reach me at
          </p>
          <div className="flex items-center justify-center gap-6 mt-3">
            <a
              href="mailto:abdallahmohammedelmhady@gmail.com"
              className="font-body text-[15px] font-medium transition-colors duration-200"
              style={{ color: 'var(--color-background)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-accent)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-background)')}
            >
              abdallahmohammedelmhady@gmail.com
            </a>
            <a
              href="https://github.com/dmitrymedvedev-Hub"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-[15px] font-medium transition-colors duration-200"
              style={{ color: 'var(--color-background)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-accent)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-background)')}
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/abdallah-mohammed-elmhady-05928b338/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-[15px] font-medium transition-colors duration-200"
              style={{ color: 'var(--color-background)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-accent)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-background)')}
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
