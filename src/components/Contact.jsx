import { FaEnvelope, FaGithub, FaLinkedin, FaCode, FaPhoneAlt } from 'react-icons/fa'

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 md:px-16 max-w-4xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-indigo-600 dark:text-indigo-400">
        Let’s Connect
      </h2>

      <div className="grid md:grid-cols-2 gap-8 items-center text-gray-800 dark:text-gray-200">
        {/* Left Column */}
        <div className="space-y-6">
          <p className="text-lg">
            Whether you have an idea for a project, want to collaborate, or just want to say hi —
            feel free to drop a message! I’m always open to discussing exciting tech and opportunities.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-indigo-500" />
              <a
                href="tel:+919140964638"
                className="hover:underline text-base"
              >
                +91 9140964638
              </a>
            </div>

            <div className="flex items-center gap-3">
              <FaEnvelope className="text-indigo-500" />
              <a
                href="mailto:stiwari26878@gmail.com"
                className="hover:underline text-base"
              >
                stiwari26878@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-3">
              <FaGithub className="text-indigo-500" />
              <a
                href="https://github.com/tiwari2683"
                target="_blank"
                rel="noreferrer"
                className="hover:underline text-base"
              >
                github.com/tiwari2683
              </a>
            </div>

            <div className="flex items-center gap-3">
              <FaCode className="text-indigo-500" />
              <a
                href="https://leetcode.com/u/prashanttiwari121/"
                target="_blank"
                rel="noreferrer"
                className="hover:underline text-base"
              >
                leetcode.com/u/prashanttiwari121/
              </a>
            </div>
          </div>
        </div>

        {/* Right Column - Optional illustration */}
        <div className="flex justify-center md:justify-end">
          <img
            src="./assets/contact-illustration.svg"
            alt="Contact Illustration"
            className="w-72 md:w-96"
          />
        </div>
      </div>
    </section>
  )
}
