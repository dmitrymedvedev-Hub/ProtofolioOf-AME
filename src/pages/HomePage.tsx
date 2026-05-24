import HeroSection from '../sections/HeroSection'
import ProjectsSection from '../sections/ProjectsSection'
import SkillsSection from '../sections/SkillsSection'
import AboutSnippet from '../sections/AboutSnippet'
import ContactSection from '../sections/ContactSection'
import Footer from '../components/Footer'
import useScrollAnimation from '../hooks/useScrollAnimation'

function HomePage() {
  useScrollAnimation()

  return (
    <>
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <AboutSnippet />
      <ContactSection />
      <Footer />
    </>
  )
}

export default HomePage
