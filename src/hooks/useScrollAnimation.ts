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
    if (headers.length) {
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
    }

    // Fade in + translateY for general elements
    const elements = document.querySelectorAll('[data-animate="fade"]')
    if (elements.length) {
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
    }

    // Fade up animation (new modern style)
    const fadeUpElements = document.querySelectorAll('[data-animate="fade-up"]')
    if (fadeUpElements.length) {
      fadeUpElements.forEach((el) => {
        const delay = parseFloat(el.getAttribute('data-delay') || '0')
        gsap.fromTo(
          el,
          { opacity: 0, y: 50, scale: 0.97 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            delay,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              once: true,
            },
          }
        )
      })
    }

    // Scale in animation
    const scaleElements = document.querySelectorAll('[data-animate="scale"]')
    if (scaleElements.length) {
      scaleElements.forEach((el) => {
        const delay = parseFloat(el.getAttribute('data-delay') || '0')
        gsap.fromTo(
          el,
          { opacity: 0, scale: 0.9 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.9,
            delay,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              once: true,
            },
          }
        )
      })
    }

    // Slide from left
    const slideLeft = document.querySelectorAll('[data-animate="slide-left"]')
    if (slideLeft.length) {
      slideLeft.forEach((el) => {
        const delay = parseFloat(el.getAttribute('data-delay') || '0')
        gsap.fromTo(
          el,
          { opacity: 0, x: -50 },
          {
            opacity: 1,
            x: 0,
            duration: 0.9,
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
    }

    // Staggered children
    const staggerContainers = document.querySelectorAll('[data-animate="stagger"]')
    if (staggerContainers.length) {
      staggerContainers.forEach((container) => {
        const children = container.children
        if (!children.length) return
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
    }

    // Slide from right
    const slideRight = document.querySelectorAll('[data-animate="slide-right"]')
    if (slideRight.length) {
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
    }

    // Parallax effect for elements with data-parallax
    const parallaxElements = document.querySelectorAll('[data-parallax]')
    if (parallaxElements.length) {
      parallaxElements.forEach((el) => {
        const speed = parseFloat(el.getAttribute('data-parallax') || '0.3')
        gsap.to(el, {
          yPercent: -50 * speed,
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        })
      })
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])
}

export default useScrollAnimation
