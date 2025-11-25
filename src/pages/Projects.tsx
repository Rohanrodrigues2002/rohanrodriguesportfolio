import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/animations/staggerAnimations";
import { shadowPop } from "@/animations/glowEffects";
import ParticleBackground from "@/components/ParticleBackground";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment integration.",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com",
    demo: "https://demo.com",
    gradient: "from-neon-cyan to-neon-blue"
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    tech: ["React", "Firebase", "Tailwind CSS"],
    github: "https://github.com",
    demo: "https://demo.com",
    gradient: "from-neon-violet to-neon-pink"
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather application with geolocation support, 7-day forecast, and interactive maps using modern APIs.",
    tech: ["React", "OpenWeather API", "Chart.js"],
    github: "https://github.com",
    demo: "https://demo.com",
    gradient: "from-neon-pink to-neon-cyan"
  },
  {
    title: "Social Media Analytics",
    description: "Analytics dashboard for social media metrics with data visualization, insights generation, and report export functionality.",
    tech: ["Python", "Flask", "React", "D3.js"],
    github: "https://github.com",
    demo: "https://demo.com",
    gradient: "from-neon-blue to-neon-violet"
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
            Some things I've built
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
