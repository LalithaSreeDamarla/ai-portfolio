import { motion } from 'framer-motion'
import { Calendar, ArrowRight } from 'lucide-react'

const blogPosts = [
  {
    title: "Automating the Backend: How Smithy Code Generation Reduced 80% of Our API Setup Time",
    excerpt: "Learn how we leveraged Smithy code generation to dramatically reduce backend development time and improve API consistency across our microservices architecture.",
    date: "2024-10-20",
    readTime: "8 min read",
    url: "https://medium.com/@lalithasreedamarla30/automating-the-backend-how-smithy-code-generation-reduced-80-of-our-api-setup-time-1232a116d7b3"
  },
  {
    title: "Building Interactive Data Clustering Applications with PyQt",
    excerpt: "A comprehensive guide to creating desktop GUI applications for machine learning workflows using PyQt and scikit-learn.",
    date: "2024-10-15",
    readTime: "6 min read",
    url: "https://github.com/LalithaSreeDamarla/clustering-pyqt-app"
  },
  {
    title: "Ensemble Clustering for Student Behavior Analysis",
    excerpt: "Deep dive into using multiple clustering algorithms to analyze and predict student behavior patterns with machine learning.",
    date: "2024-10-10",
    readTime: "10 min read",
    url: "https://github.com/LalithaSreeDamarla/student-behavior-ensemble-clustering"
  }
]

export default function Blog() {
  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest Articles</h2>
          <p className="text-xl text-gray-600">Insights on AI, cloud architecture, and engineering</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  {new Date(post.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                  <span className="mx-2">•</span>
                  {post.readTime}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors"
                >
                  Read more
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}