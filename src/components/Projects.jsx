import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Blood Bank App',
    image: '/assets/bloodbank.jpg',
    desc: 'Role-based MERN app with inventory tracking, Tailwind UI, and Redux state management.',
    github: 'https://github.com/tiwari2683/Blood-bank-app',
  },
  {
    title: 'E-Learning Platform',
    image: '/assets/elearning.jpg',
    desc: 'JWT-secured MERN-based e-learning site with Razorpay and Cloudinary integrations.',
    github: 'https://github.com/tiwari2683/Study-Notion',
  },
  {
    title: 'Crop Recommendation System (ML)',
    image: '/assets/crop-recommendation.png',
    desc: '99.84% accurate hybrid ML model with Streamlit UI and IEEE-benchmark beating results.',
    github: 'https://github.com/tiwari2683/Blood-bank-app',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 md:px-16 max-w-7xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-indigo-600 dark:text-indigo-400">
        Projects
      </h2>
      <div className="grid md:grid-cols-3 gap-10">
        {projects.map((proj, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow hover:shadow-lg transition"
          >
            <img src={proj.image} alt={proj.title} className="h-48 w-full object-cover" />
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2 text-indigo-600 dark:text-indigo-400">{proj.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm">{proj.desc}</p>
              <a
                href={proj.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-500 hover:underline font-medium text-sm"
              >
                View Code →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
