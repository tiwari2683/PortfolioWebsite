import { motion } from 'framer-motion'

const education = [
  {
    title: 'MCA – Sardar Patel Institute of Technology, Mumbai',
    subtitle: 'Semester I – 9.23 CGPA, Semester II – 9.44 CGPA',
    duration: 'Aug 2024 – Present',
  },
  {
    title: 'B.Sc – St John’s College, Agra',
    subtitle: '66.4%',
    duration: 'Aug 2020 – May 2023',
  },
  {
    title: 'Higher Secondary – St Joseph’s, Chandauli',
    subtitle: '81.4%',
    duration: '2017 – 2019',
  },
  {
    title: 'Secondary – St Joseph’s, Chandauli',
    subtitle: '10 CGPA',
    duration: '2015 – 2017',
  },
]

export default function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-16 max-w-7xl mx-auto">
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-indigo-600 dark:text-indigo-400 mb-16 text-center"
      >
        About Me
      </motion.h2>

      {/* Grid Layout */}
      <div className="grid md:grid-cols-2 gap-12">
        {/* Left - Personal Description */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed"
        >
          <p className="mb-5">
            I'm a passionate software developer and MCA student at SPIT Mumbai, deeply fascinated by the intersection of full-stack development and machine learning. I love building fast, functional, and elegant solutions to real-world problems.
          </p>
          <p className="mb-5">
            From designing sleek user interfaces with React and Tailwind CSS to building scalable APIs with Node.js and MongoDB, I enjoy working across the entire stack. I'm also enthusiastic about deploying data-driven solutions using Python and ML libraries.
          </p>
          <p className="mb-5">
            With over 150+ DSA problems solved across LeetCode and CodeChef, I’m always seeking to sharpen my problem-solving mindset. I believe in writing code that is not only correct but clean and purposeful.
          </p>
          <p className="mb-5">
            I’m also an advocate for learning in public and mentoring peers. My long-term goal is to build tools and platforms that empower others to learn, grow, and solve meaningful problems through technology.
          </p>
        </motion.div>

        {/* Right - Education Timeline */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          {education.map((edu, i) => (
            <div
              key={i}
              className="border-l-4 border-indigo-600 dark:border-indigo-400 pl-4 pb-4"
            >
              <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400">
                {edu.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{edu.subtitle}</p>
              <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">{edu.duration}</p>
            </div>
          ))}

          {/* Badge */}
          <div className="mt-6">
            <span className="inline-block px-4 py-2 bg-indigo-100 dark:bg-indigo-800 text-indigo-800 dark:text-white rounded-full text-sm font-semibold shadow">
              AIR 46 – MAH MCA-CET
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
