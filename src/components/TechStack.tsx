import { motion } from 'framer-motion'

const techCategories = [
  {
    title: "Programming Languages",
    techs: ["Java", "C#", "Python", "JavaScript", "C++", "SQL"]
  },
  {
    title: "Frontend & Frameworks",
    techs: ["React.js", "Angular", "ASP.NET MVC", ".NET Core", "TypeScript", "jQuery"]
  },
  {
    title: "Backend & APIs",
    techs: ["Spring Boot", "Node.js", "Django", "GraphQL", "REST APIs", "Microservices"]
  },
  {
    title: "Cloud & DevOps",
    techs: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "CI/CD"]
  },
  {
    title: "AI/ML & GenAI",
    techs: ["TensorFlow", "PyTorch", "LLM Fine-tuning", "RAG Pipelines", "MLOps", "Hugging Face"]
  },
  {
    title: "Databases & ETL",
    techs: ["PostgreSQL", "MongoDB", "Oracle", "SQL Server", "DynamoDB", "ETL Pipelines"]
  }
]

export default function TechStack() {
  return (
    <section id="tech" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Tech Stack</h2>
          <p className="text-xl text-gray-600">Technologies I use to build amazing products</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-4">{category.title}</h3>
              <div className="space-y-2">
                {category.techs.map((tech) => (
                  <div
                    key={tech}
                    className="px-3 py-2 bg-gray-100 rounded-lg text-sm text-gray-700"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}