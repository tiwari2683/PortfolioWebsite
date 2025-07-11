import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Contact from './components/Contact'
import ScrollToTop from './components/ScrollToTop'
import './index.css'

function App() {
  return (
    <div className="bg-white dark:bg-black text-gray-900 dark:text-white">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
      <ScrollToTop />
    </div>
  )
}

export default App
