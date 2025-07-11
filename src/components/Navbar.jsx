import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { FaBars, FaTimes } from 'react-icons/fa'
import ThemeToggle from './ThemeToggle'

const navLinks = ['home', 'about', 'projects', 'experience', 'skills', 'contact']

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 dark:bg-black/80 backdrop-blur-xl shadow-md py-3'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="home"
          smooth
          duration={500}
          offset={-60}
          className="text-2xl md:text-3xl font-bold tracking-wide cursor-pointer text-indigo-600 dark:text-indigo-400"
        >
          MyPortfolio
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link}
              to={link}
              smooth
              duration={500}
              offset={-60}
              spy={true}
              activeClass="border-b-2 border-indigo-600 dark:border-indigo-400"
              className="capitalize text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition cursor-pointer pb-1"
            >
              {link}
            </Link>
          ))}
        </div>

        {/* Theme toggle + hamburger */}
        <div className="flex items-center gap-4 md:gap-6">
          <ThemeToggle />
          <button
            onClick={() => setNavOpen(!navOpen)}
            className="md:hidden text-xl text-gray-700 dark:text-gray-200"
            aria-label="Menu toggle"
          >
            {navOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {navOpen && (
        <div className="fixed inset-0 bg-white dark:bg-black bg-opacity-95 flex flex-col items-center justify-center space-y-6 text-xl font-medium text-gray-800 dark:text-gray-200 z-40 transition-all">
          {navLinks.map((link) => (
            <Link
              key={link}
              to={link}
              smooth
              duration={500}
              offset={-60}
              onClick={() => setNavOpen(false)}
              className="capitalize hover:text-indigo-600 dark:hover:text-indigo-400 transition"
            >
              {link}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
