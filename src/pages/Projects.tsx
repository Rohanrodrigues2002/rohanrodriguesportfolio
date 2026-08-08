import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/animations/staggerAnimations";
import { shadowPop } from "@/animations/glowEffects";
import ParticleBackground from "@/components/ParticleBackground";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "CSV Import to Database (Multiple Entities)",
    description:
      "Developed a backend module using Spring Boot to parse CSV files and insert records into multiple related entities with validation and mapping. Handled complex relational data efficiently.",
    tech: ["Java", "Spring Boot", "MySQL", "JPA/Hibernate"],
    github: "https://github.com/Rohanrodrigues2002/csv_import_db-for-multiple-entities-using-springboot",
    demo: "#",
    gradient: "from-neon-cyan to-neon-blue"
  },
  {
    title: "Reminder Mail for Active Users",
    description:
      "Built an automated reminder system using Spring Boot scheduling and email integration. Notifies active users based on their activity status, improving user engagement.",
    tech: ["Java", "Spring Boot", "Spring Mail", "Scheduling"],
    github: "https://github.com/Rohanrodrigues2002/Remainder-Mail-For-Active-users-Using-SpringBoot",
    demo: "#",
    gradient: "from-neon-violet to-neon-pink"
  },
  {
    title: "Spring Boot CRUD with MongoDB",
    description:
      "Implemented full RESTful CRUD operations with MongoDB integration using Spring Boot. Designed a scalable data layer for NoSQL storage and efficient querying.",
    tech: ["Java", "Spring Boot", "MongoDB", "REST APIs"],
    github: "https://github.com/Rohanrodrigues2002/Spring-Boot-CRUD-with-MongoDB",
    demo: "#",
    gradient: "from-neon-pink to-neon-cyan"
  },
  {
    title: "Seizure Detection with Raspberry Pi",
    description:
      "Developed a deep learning‑based medical image analysis system and deployed it on Raspberry Pi for edge inference. Used TensorFlow/Keras for model training and classification.",
    tech: ["Python", "TensorFlow", "Raspberry Pi", "Deep Learning"],
    github: "https://github.com/Rohanrodrigues2002/Seizure-Detection_ai",
    demo: "#",
    gradient: "from-neon-blue to-neon-violet"
  },
  {
    title: "Task Management System",
    description:
      "A full-featured task management application with user authentication, project boards, and real-time updates. Built with FastAPI for high-performance backend APIs and React for a dynamic frontend.",
    tech: ["FastAPI", "React", "PostgreSQL", "JWT","Pydantic", "Alembic", "SQLAlchemy"],
    github: "https://github.com/Rohanrodrigues2002/TODO_-APP_USING_FASTAPI",
    demo: "#",
    gradient: "from-neon-green to-neon-teal" // adjust gradient if needed
  },
  {
    title: "E-Commerce Website",
    description:
      "A full-stack e-commerce platform with product catalog, shopping cart, order management, and payment integration. Built with Spring Boot for robust backend services and React for interactive UI.",
    tech: ["Spring Boot", "React", "PostgreSQL","JWT","Spring Security","JPA/Hibernate" ,"Stripe","Lombok"],
    github: "https://github.com/Rohanrodrigues2002/E-commerce-website-using-SpringBoot-And-React",
    demo: "#",
    gradient: "from-neon-orange to-neon-red" // adjust gradient if needed
  }
];

const Projects = () => {
  return (
    <section className="relative min-h-screen py-20 overflow-hidden">
      <ParticleBackground />
      
      <div className="container mx-auto px-4 z-10 relative">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <motion.h2
            variants={staggerItem}
            className="text-4xl md:text-6xl font-bold mb-4 text-center"
          >
            <span className="gradient-text">Featured Projects</span>
          </motion.h2>

          <motion.p
            variants={staggerItem}
            className="text-center text-muted-foreground mb-16 text-lg"
          >
            Real‑world applications I've built
          </motion.p>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={staggerItem}
                custom={index}
                {...shadowPop}
                className="glass rounded-2xl p-6 group"
              >
                <div className={`h-2 w-20 bg-gradient-to-r ${project.gradient} rounded-full mb-6`} />
                
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-mono bg-primary/10 text-primary rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github size={24} />
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink size={24} />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;