import { Typewriter } from 'react-simple-typewriter'
import { motion } from 'framer-motion'
import { FaDownload } from 'react-icons/fa'

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center gap-16 px-6 md:px-20 pt-24 bg-gradient-to-b from-white to-gray-100 dark:from-black dark:to-gray-900"
    >
      {/* Left Text */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="flex-1 text-center md:text-left"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-gray-900 dark:text-white">
          Hi, I'm <span className="text-indigo-600 dark:text-indigo-400">Prashant Tiwari</span>
        </h1>
        <h2 className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-6">
          <Typewriter
            words={['Full Stack Developer', 'ML Enthusiast', 'Problem Solver']}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={40}
            delaySpeed={1500}
          />
        </h2>

        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          <a
            href="/resume.pdf"
            download
            className="px-6 py-3 text-lg bg-indigo-600 hover:bg-indigo-500 text-white rounded-md shadow-md transition"
          >
            <FaDownload className="inline-block mr-2" />
            Resume
          </a>
          <a
            href="#contact"
            className="px-6 py-3 text-lg border border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400 rounded-md hover:bg-indigo-50 dark:hover:bg-gray-800 transition"
          >
            Contact Me
          </a>
        </div>
      </motion.div>

      {/* Right Image */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex-1 flex justify-center"
      >
        <img
          src="./assets/profile.jpg"
          alt="Prashant Tiwari"
          className="w-60 h-60 md:w-80 md:h-80 rounded-full object-cover shadow-lg border-4 border-indigo-500 dark:border-indigo-400"
        />
      </motion.div>
    </section>
  )
}
