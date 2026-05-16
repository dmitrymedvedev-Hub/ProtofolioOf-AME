import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

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

  const scrollToSection = (id: string) => {
    if (!isHome) return
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const navLinks = [
    { label: 'Work', id: 'projects', path: '/#projects' },
    { label: 'About', id: 'about', path: '/about' },
    { label: 'Contact', id: 'contact', path: '/#contact' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || !isHome
          ? 'bg-white/10 backdrop-blur-xl border-b border-white/20 shadow-lg shadow-black/20'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-5 md:px-10 flex items-center justify-between h-16">
        <Link
          to="/"
          className="font-body text-[16px] font-medium text-white transition-colors duration-200"
        >
          Abdallah Elmhady
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive =
              link.path === '/about'
                ? location.pathname === '/about'
                : isHome && link.id && location.hash === `#${link.id}`

            return link.path === '/about' ? (
              <Link
                key={link.label}
                to="/about"
                className={`font-body text-[15px] transition-colors duration-200 ${
                  isActive ? 'text-white' : 'text-white/80'
                }`}
              >
                {link.label}
              </Link>
            ) : (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.id)}
                className={`font-body text-[15px] transition-colors duration-200 bg-transparent border-none cursor-pointer ${
                  isActive ? 'text-white' : 'text-white/80'
                }`}
              >
                {link.label}
              </button>
            )
          })}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 bg-transparent border-none cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              mobileOpen ? 'rotate-45 translate-x-1 translate-y-1' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              mobileOpen ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              mobileOpen ? '-rotate-45 translate-x-1 -translate-y-1' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="md:hidden fixed inset-x-0 top-16 bottom-0 z-40"
        >
          <div
            className="absolute inset-0 bg-black/30"
            onClick={() => setMobileOpen(false)}
          />
          <div
            className="absolute right-0 top-0 w-[280px] h-full p-8 flex flex-col gap-6 bg-black"
          >
            {navLinks.map((link) =>
              link.path === '/about' ? (
                <Link
                  key={link.label}
                  to="/about"
                  className={`font-body text-lg transition-colors duration-200 ${
                    location.pathname === '/about' ? 'text-white' : 'text-white/80'
                  }`}
                >
                  {link.label}
                </Link>
              ) : (
                <button
                  key={link.label}
                  onClick={() => {
                    if (isHome) {
                      scrollToSection(link.id)
                      setMobileOpen(false)
                    }
                  }}
                  className="font-body text-lg text-left bg-transparent border-none cursor-pointer text-white/80 transition-colors duration-200"
                >
                  {link.label}
                </button>
              )
            )}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navigation
