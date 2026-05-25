import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const isHome = location.pathname === '/'
  const isStartProject = location.pathname === '/start-project'

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.8)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  useEffect(() => {
    if (!isHome || !location.hash) return

    const id = location.hash.slice(1)
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }, [isHome, location.hash])

  const goToSection = (id: string) => {
    navigate(`/#${id}`)
  }

  const navLinks = [
    { label: 'Home', path: '/', type: 'route' as const },
    { label: 'Work', path: '/work', type: 'route' as const },
    { label: 'About', path: '/about', type: 'route' as const },
    { label: 'Contact', path: '/start-project', type: 'route' as const },
  ]

  const mobileItems = navLinks.map((link, index) => ({
    ...link,
    delayClass: ['delay-[120ms]', 'delay-[190ms]', 'delay-[260ms]', 'delay-[330ms]'][index] || 'delay-0',
  }))

  // Determine if we're on a dark-themed page
  const isDarkPage = isHome || isStartProject || location.pathname === '/work' || location.pathname === '/about' || location.pathname === '/about-more'

  const themeClasses = isDarkPage
    ? {
        // Dark theme for all main pages - consistent modern gradient
        shell: scrolled
          ? 'bg-gradient-to-r from-[var(--color-text)]/95 via-[var(--color-text)]/85 to-[var(--color-text)]/95 backdrop-blur-2xl border-b border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)]'
          : 'bg-gradient-to-r from-[var(--color-text)]/70 via-[var(--color-text)]/50 to-[var(--color-text)]/70 backdrop-blur-xl border-b border-white/5',
        brand: 'text-white font-semibold',
        link: 'text-white/70 hover:text-white transition-all duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:w-0 after:bg-[var(--color-accent)] after:rounded-full after:transition-all after:duration-300 hover:after:w-full',
        activeLink: 'text-white font-semibold after:w-full',
        icon: 'bg-white',
        mobileOverlay: 'bg-black/70 backdrop-blur-md',
        mobilePanel:
          'bg-gradient-to-b from-[var(--color-text)] via-[rgba(var(--color-text-rgb),0.98)] to-[var(--color-text)] text-white border-l border-white/10',
        mobileLink: 'text-white/75 hover:text-white',
      }
    : {
        // Light theme for other pages - clean modern style
        shell: 'bg-white/95 backdrop-blur-2xl border-b border-gray-200 shadow-[0_8px_32px_rgba(0,0,0,0.08)]',
        brand: 'text-[var(--color-text)] font-semibold',
        link: 'text-gray-600 hover:text-[var(--color-accent)] transition-all duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:w-0 after:bg-[var(--color-accent)] after:rounded-full after:transition-all after:duration-300 hover:after:w-full',
        activeLink: 'text-[var(--color-text)] font-semibold after:w-full',
        icon: 'bg-[var(--color-text)]',
        mobileOverlay: 'bg-gray-900/30 backdrop-blur-md',
        mobilePanel:
          'bg-gradient-to-b from-white via-gray-50 to-white text-[var(--color-text)] border-l border-gray-200',
        mobileLink: 'text-gray-600 hover:text-[var(--color-accent)]',
      }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${themeClasses.shell}`}
    >
      <div className="max-w-[1200px] mx-auto px-5 md:px-10 flex items-center justify-between h-16">
        <Link
          to="/"
          className={`group flex items-center gap-3 font-body text-[16px] font-medium transition-colors duration-300 ${themeClasses.brand}`}
        >
          <span className="relative flex size-2.5 items-center justify-center">
            <span className="absolute inset-0 rounded-full bg-[var(--color-accent)]/20 blur-sm transition-all duration-300 group-hover:scale-150" />
            <span className="relative size-2.5 rounded-full bg-current transition-transform duration-300 group-hover:scale-110" />
          </span>
          <span className="relative overflow-hidden">
            <span className="block transition-transform duration-300 group-hover:-translate-y-full">Abdallah Elmhady</span>
            <span className="absolute left-0 top-0 block translate-y-full transition-transform duration-300 group-hover:translate-y-0">
              Abdallah Elmhady
            </span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive =
              link.type === 'route'
                ? location.pathname === link.path
                : isHome && link.id && location.hash === `#${link.id}`

            return link.type === 'route' ? (
              <Link
                key={link.label}
                to={link.path}
                className={`group relative font-body text-[15px] transition-colors duration-300 ${
                  isActive ? themeClasses.activeLink : themeClasses.link
                }`}
              >
                {link.label}
                <span
                  className={`absolute left-0 -bottom-2 h-px w-full origin-left rounded-full transition-transform duration-300 ${
                    isActive ? 'scale-x-100 bg-current' : 'scale-x-0 bg-current group-hover:scale-x-100'
                  }`}
                />
              </Link>
            ) : (
              <button
                key={link.label}
                type="button"
                onClick={() => goToSection(link.id)}
                className={`group relative bg-transparent border-none cursor-pointer font-body text-[15px] transition-colors duration-300 ${
                  isActive ? themeClasses.activeLink : themeClasses.link
                }`}
              >
                {link.label}
                <span
                  className={`absolute left-0 -bottom-2 h-px w-full origin-left rounded-full transition-transform duration-300 ${
                    isActive ? 'scale-x-100 bg-current' : 'scale-x-0 bg-current group-hover:scale-x-100'
                  }`}
                />
              </button>
            )
          })}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="group md:hidden flex flex-col gap-1.5 rounded-full border border-current/10 p-2.5 bg-current/5 backdrop-blur-sm cursor-pointer transition-all duration-300 hover:bg-current/10"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-6 origin-center rounded-full transition-all duration-300 ease-out ${themeClasses.icon} ${
              mobileOpen ? 'rotate-45 translate-x-1 translate-y-1' : ''
            }`}
          />
          <span
            className={`block h-0.5 w-6 origin-center rounded-full transition-all duration-300 ease-out ${themeClasses.icon} ${
              mobileOpen ? 'scale-x-0 opacity-0' : 'scale-x-100 opacity-100'
            }`}
          />
          <span
            className={`block h-0.5 w-6 origin-center rounded-full transition-all duration-300 ease-out ${themeClasses.icon} ${
              mobileOpen ? '-rotate-45 translate-x-1 -translate-y-1' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 z-[60] transition-all duration-300 ${
          mobileOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        <button
          type="button"
          aria-label="Close menu overlay"
          className={`absolute inset-0 border-none p-0 text-left transition-opacity duration-300 ${themeClasses.mobileOverlay} ${
            mobileOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 h-full w-[min(88vw,360px)] border-l p-5 sm:p-7 shadow-[0_32px_80px_rgba(0,0,0,0.3)] backdrop-blur-2xl transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${themeClasses.mobilePanel} ${
            mobileOpen ? 'translate-x-0 opacity-100' : 'translate-x-[105%] opacity-0'
          }`}
        >
          <div className="flex items-center justify-between gap-4 pb-5">
            <div>
              <p className="font-body text-[12px] uppercase tracking-[2px] text-current/50">Navigation</p>
              <h2 className="mt-1 font-display text-[22px] leading-none">Menu</h2>
            </div>
            <button
              type="button"
              className="rounded-full border border-current/10 bg-current/5 px-3 py-2 text-[13px] font-medium text-current/75 transition-colors hover:bg-current/10 hover:text-current"
              onClick={() => setMobileOpen(false)}
              aria-label="Close sidebar"
            >
              Close
            </button>
          </div>

          <div className="h-px w-full bg-current/10" />

          <div className="mt-5 flex flex-col gap-2">
            {mobileItems.map((link) =>
              link.type === 'route' ? (
                <Link
                  key={link.label}
                  to={link.path}
                  onClick={() => setMobileOpen(false)}
                  className={`group relative overflow-hidden rounded-2xl border border-transparent px-4 py-3 font-body text-[17px] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${link.delayClass} ${
                    location.pathname === link.path
                      ? 'translate-x-0 opacity-100'
                      : mobileOpen
                        ? 'translate-x-0 opacity-100'
                        : 'translate-x-8 opacity-0'
                  } ${
                    location.pathname === link.path
                      ? `${themeClasses.activeLink} bg-gradient-to-r from-[var(--color-accent)]/15 to-transparent border-[var(--color-accent)]/20`
                      : themeClasses.mobileLink
                  }`}
                >
                  <span className="relative z-10 flex items-center justify-between">
                    <span className="transition-transform duration-300 group-hover:translate-x-1">{link.label}</span>
                    <span className="text-[12px] uppercase tracking-[2px] text-current/35 transition-transform duration-300 group-hover:translate-x-1">{link.label === 'Home' ? '01' : link.label === 'Work' ? '02' : link.label === 'About' ? '03' : '04'}</span>
                  </span>
                  <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[var(--color-accent)]/10 to-transparent opacity-0 transition-all duration-300 group-hover:opacity-100" />
                  <span className="absolute left-0 top-1/2 h-8 w-1 -translate-y-1/2 -translate-x-1 rounded-r-full bg-[var(--color-accent)] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                </Link>
              ) : (
                <button
                  key={link.label}
                  type="button"
                  onClick={() => {
                    goToSection(link.id)
                    setMobileOpen(false)
                  }}
                  className={`group relative overflow-hidden rounded-2xl border border-transparent bg-transparent px-4 py-3 text-left font-body text-[17px] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${link.delayClass} ${
                    mobileOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                  } ${themeClasses.mobileLink}`}
                >
                  <span className="relative z-10 flex items-center justify-between">
                    <span className="transition-transform duration-300 group-hover:translate-x-1">{link.label}</span>
                    <span className="text-[12px] uppercase tracking-[2px] text-current/35 transition-transform duration-300 group-hover:translate-x-1">05</span>
                  </span>
                  <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[var(--color-accent)]/10 to-transparent opacity-0 transition-all duration-300 group-hover:opacity-100" />
                  <span className="absolute left-0 top-1/2 h-8 w-1 -translate-y-1/2 -translate-x-1 rounded-r-full bg-[var(--color-accent)] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                </button>
              )
            )}
          </div>

          <div className="mt-6 rounded-3xl border border-current/10 bg-current/5 p-4 text-current/70">
            <p className="text-[13px] leading-relaxed">
              A clean, focused sidebar built to keep navigation simple, readable, and consistent on every screen.
            </p>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
