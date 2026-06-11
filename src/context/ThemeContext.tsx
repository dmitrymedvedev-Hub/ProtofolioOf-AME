import { createContext, useContext, useState, useEffect } from 'react'
import type { ReactNode } from 'react'

type Theme = 'light' | 'dark'

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = window.localStorage.getItem('theme') as Theme | null
        if (saved) return saved
      } catch {
        // Ignore localStorage read failures (private mode / restricted storage)
      }

      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark'
      }
    }

    return 'dark'
  })

  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        window.localStorage.setItem('theme', theme)
      } catch {
        // Ignore localStorage write failures (private mode / restricted storage)
      }
    }

    if (typeof document === 'undefined') return
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
      root.classList.remove('light')
    } else {
      root.classList.add('light')
      root.classList.remove('dark')
    }
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark')
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}