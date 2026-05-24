import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import AboutMorePage from './pages/AboutMorePage'
import WorkPage from './pages/WorkPage'
import StartProjectPage from './pages/StartProjectPage'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/about-more" element={<AboutMorePage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/start-project" element={<StartProjectPage />} />
      </Route>
    </Routes>
  )
}

export default App
