import Hero from './components/Hero'
import Projects from './components/Projects'
import TechStack from './components/TechStack'
import Blog from './components/Blog'
import Contact from './components/Contact'
import SreeBot from './components/SreeBot'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      <Projects />
      <TechStack />
      <Blog />
      <Contact />
      <SreeBot />
    </div>
  )
}

export default App