export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  metrics: string[];
  demoUrl?: string;
  githubUrl?: string;
  imageUrl: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "student-behavior-clustering",
    title: "Student Behavior Ensemble Clustering",
    description: "ML-powered student behavior analysis using ensemble clustering techniques",
    longDescription: "Advanced machine learning project implementing ensemble clustering algorithms to analyze and predict student behavior patterns. Uses multiple clustering techniques for robust behavioral insights.",
    tech: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
    metrics: ["Multiple clustering algorithms", "Behavioral pattern analysis", "Data visualization"],
    githubUrl: "https://github.com/LalithaSreeDamarla/student-behavior-ensemble-clustering",
    imageUrl: "/projects/clustering.png",
    featured: true
  },
  {
    id: "clustering-pyqt-app",
    title: "Clustering PyQt Desktop Application",
    description: "Desktop GUI application for data clustering with interactive visualizations",
    longDescription: "Built a comprehensive desktop application using PyQt for interactive data clustering analysis. Features real-time visualization, multiple clustering algorithms, and user-friendly interface for data scientists.",
    tech: ["Python", "PyQt", "Scikit-learn", "Matplotlib", "Pandas"],
    metrics: ["Interactive GUI", "Real-time clustering", "Multiple algorithms"],
    githubUrl: "https://github.com/LalithaSreeDamarla/clustering-pyqt-app",
    imageUrl: "/projects/pyqt.png",
    featured: true
  },
  {
    id: "task-manager-bot",
    title: "Task Manager with AI Bot",
    description: "Intelligent task management system with integrated chatbot functionality",
    longDescription: "Developed a smart task management application featuring an AI-powered chatbot for natural language task creation, scheduling, and management. Combines productivity tools with conversational AI.",
    tech: ["Python", "Flask", "NLP", "SQLite", "JavaScript"],
    metrics: ["AI-powered assistance", "Natural language processing", "Task automation"],
    githubUrl: "https://github.com/LalithaSreeDamarla/task-manager-with-bot",
    imageUrl: "/projects/taskbot.png",
    featured: true
  },
  {
    id: "warehouse-management",
    title: "Warehouse Management System",
    description: "Enterprise-grade warehouse management system with inventory tracking",
    longDescription: "Comprehensive warehouse management solution featuring inventory tracking, order management, and analytics dashboard. Built with modern web technologies for scalable enterprise operations.",
    tech: ["Java", "Spring Boot", "React", "PostgreSQL", "REST API"],
    metrics: ["Inventory optimization", "Real-time tracking", "Analytics dashboard"],
    githubUrl: "https://github.com/LalithaSreeDamarla/Warehouse-Management-System",
    imageUrl: "/projects/warehouse.png",
    featured: true
  }
];