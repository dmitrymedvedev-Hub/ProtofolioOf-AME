import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useScrollAnimation() {
  const initialized = useRef(false)

  useEffect(() => {
    if (initialized.current) return
    initialized.current = true

    // Fade in + translateY for section headers
    const headers = document.querySelectorAll('[data-animate="header"]')
    headers.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            once: true,
          },
        }
      )
    })

    // Fade in + translateY for general elements
    const elements = document.querySelectorAll('[data-animate="fade"]')
    elements.forEach((el) => {
      const delay = parseFloat(el.getAttribute('data-delay') || '0')
      gsap.fromTo(
        el,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            once: true,
          },
        }
      )
    })

    // Staggered children
    const staggerContainers = document.querySelectorAll('[data-animate="stagger"]')
    staggerContainers.forEach((container) => {
      const children = container.children
      gsap.fromTo(
        children,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: container,
            start: 'top 80%',
            once: true,
          },
        }
      )
    })

    // Slide from right
    const slideRight = document.querySelectorAll('[data-animate="slide-right"]')
    slideRight.forEach((el) => {
      const delay = parseFloat(el.getAttribute('data-delay') || '0')
      gsap.fromTo(
        el,
        { opacity: 0, x: 30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          delay,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            once: true,
          },
        }
      )
    })

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])
}

export default useScrollAnimation
