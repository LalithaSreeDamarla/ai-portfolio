import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Download } from 'lucide-react'
import { bio } from '../data/bio'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Hi, I'm <span className="text-blue-600">{bio.name}</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            {bio.tagline}
          </p>
          <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
            {bio.description}
          </p>
          
          <div className="flex justify-center space-x-6 mb-12">
            <motion.a
              href={bio.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow"
            >
              <Github className="w-6 h-6 text-gray-700" />
            </motion.a>
            <motion.a
              href={bio.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow"
            >
              <Linkedin className="w-6 h-6 text-blue-600" />
            </motion.a>
            <motion.a
              href={`mailto:${bio.email}`}
              whileHover={{ scale: 1.1 }}
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow"
            >
              <Mail className="w-6 h-6 text-green-600" />
            </motion.a>
          </div>

          <motion.a
            href={bio.resume}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            <Download className="w-5 h-5 mr-2" />
            Download Resume
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}