import { motion } from 'framer-motion'
import {
  FaCode,
  FaDatabase,
  FaTools,
  FaReact,
  FaNetworkWired,
  FaLinux,
  FaWindows,
} from 'react-icons/fa'
import {
  SiTailwindcss,
  SiMongodb,
  SiJavascript,
  SiPython,
  SiRedux,
  SiPostman,
  SiSpringboot,
} from 'react-icons/si'

const skillCategories = [
  {
    icon: <FaCode className="text-xl text-indigo-500" />,
    title: 'Languages',
    skills: ['Java', 'JavaScript', 'SQL', 'Python'],
  },
  {
    icon: <FaReact className="text-xl text-indigo-500" />,
    title: 'Frameworks / Libraries',
    skills: ['ReactJS', 'Node.js', 'Spring Boot'],
  },
  {
    icon: <SiRedux className="text-xl text-indigo-500" />,
    title: 'State Management',
    skills: ['Redux', 'Context API'],
  },
  {
    icon: <SiTailwindcss className="text-xl text-indigo-500" />,
    title: 'Web & Styling',
    skills: ['HTML', 'CSS', 'Tailwind CSS'],
  },
  {
    icon: <SiMongodb className="text-xl text-indigo-500" />,
    title: 'Databases',
    skills: ['MongoDB', 'MySQL'],
  },
  {
    icon: <FaTools className="text-xl text-indigo-500" />,
    title: 'Tools & Platforms',
    skills: ['VS Code', 'Postman', 'Git', 'IntelliJ IDEA'],
  },
  {
    icon: <FaLinux className="text-xl text-indigo-500" />,
    title: 'Operating Systems',
    skills: ['Linux (Ubuntu)', 'Windows'],
  },
  {
    icon: <FaNetworkWired className="text-xl text-indigo-500" />,
    title: 'Networking & Protocols',
    skills: ['HTTP', 'TCP/IP', 'REST APIs'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 md:px-16 max-w-6xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-indigo-600 dark:text-indigo-400">
        Skills & Tools
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {skillCategories.map((cat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition"
          >
            <div className="flex items-center gap-3 mb-4">
              {cat.icon}
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{cat.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-indigo-100 text-indigo-800 dark:bg-indigo-700 dark:text-white text-sm rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
