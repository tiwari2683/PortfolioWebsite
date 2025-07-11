import { motion } from 'framer-motion'

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 md:px-16 max-w-4xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-indigo-600 dark:text-indigo-400">
        Experience
      </h2>
      <motion.div
        className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
          Educational Content Creator – Infinity Learn
        </h3>
        <p className="text-sm text-gray-500 mb-4">June 2023 – Sept 2023</p>
        <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300 text-sm">
          <li>Created video solutions and simplified complex math topics (grades 10-12)</li>
          <li>Enhanced student learning through engaging, targeted video content</li>
        </ul>
      </motion.div>
    </section>
  )
}
