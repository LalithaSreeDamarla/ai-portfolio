import { motion } from 'framer-motion'
import { Mail, MapPin, Send } from 'lucide-react'
import { bio } from '../data/bio'

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600">Let's discuss your next AI or cloud project</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Let's Connect</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-blue-600 mr-3" />
                <a href={`mailto:${bio.email}`} className="text-gray-700 hover:text-blue-600">
                  {bio.email}
                </a>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-blue-600 mr-3" />
                <span className="text-gray-700">{bio.location}</span>
              </div>
            </div>
            
            <div className="mt-8">
              <p className="text-gray-600 mb-4">
                I'm always interested in discussing:
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• AI/ML engineering projects</li>
                <li>• Cloud architecture consulting</li>
                <li>• Code generation frameworks</li>
                <li>• ETL pipeline optimization</li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <form 
              action={`mailto:${bio.email}?subject=Portfolio Contact&body=Name: [Your Name]%0D%0AEmail: [Your Email]%0D%0AMessage: [Your Message]`}
              method="get"
              className="space-y-6"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  const form = e.currentTarget.closest('form') as HTMLFormElement;
                  const formData = new FormData(form);
                  const name = formData.get('name') || 'Not provided';
                  const email = formData.get('email') || 'Not provided';
                  const message = formData.get('message') || 'Not provided';
                  const subject = 'Portfolio Contact from ' + name;
                  const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;
                  window.location.href = `mailto:${bio.email}?subject=${encodeURIComponent(subject)}&body=${body}`;
                }}
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}