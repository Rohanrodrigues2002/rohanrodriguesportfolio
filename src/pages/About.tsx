import { motion } from "framer-motion";
import { fadeInUp } from "@/animations/fadeAnimations";
import { staggerContainer, staggerItem } from "@/animations/staggerAnimations";
import ParticleBackground from "@/components/ParticleBackground";
import ThreeIcon from "@/three/IconScene";
import { Code, Database, Server, Zap } from "lucide-react";

const About = () => {
  const highlights = [
    { label: "Year Experience", value: "1+" },
    { label: "Projects Completed", value: "10+" },
    { label: "Technologies", value: "6+" },
    { label: "Lines of Code", value: "50K+" },
  ];

  const whatIDo = [
    { icon: Server, title: "Backend Development", desc: "Building robust server-side applications with Java and Spring Boot" },
    { icon: Database, title: "Database Design", desc: "Designing efficient MySQL schemas and optimizing queries" },
    { icon: Code, title: "API Development", desc: "Creating RESTful APIs with clean architecture and documentation" },
    { icon: Zap, title: "Performance Optimization", desc: "Identifying bottlenecks and improving application performance" },
  ];

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
            className="text-4xl md:text-6xl font-bold mb-8 text-center"
          >
            <span className="gradient-text">About Me</span>
          </motion.h2>

          <div className="flex flex-col items-center gap-12">
            <motion.div variants={staggerItem} className="w-48 h-48">
              <ThreeIcon icon="react" speed={0.5} color="#00ffff" />
            </motion.div>

            <motion.div variants={staggerItem} className="space-y-6 text-center max-w-3xl">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate Java Developer with one year of hands-on experience building efficient, scalable, and user-focused applications. I enjoy transforming complex problems into clean, maintainable code and continuously improving my skill set through real-world projects and learning. During my experience, I've worked with Java, Spring Boot, REST APIs, MySQL, and Git, contributing to backend development, debugging, API integration, and performance improvements. I take pride in writing readable, well-structured code and collaborating closely with teams to deliver high-quality features on time. What drives me is the opportunity to grow, solve meaningful problems, and contribute to a team that values innovation, clean architecture, and continuous learning. I'm eager to join an environment where I can add value, take ownership, and further strengthen my expertise in backend development and Java technologies.
              </p>

              <div className="flex flex-wrap justify-center gap-3 pt-4">
                {["Java", "Spring Boot", "REST APIs", "MySQL", "Git", "Backend Development"].map((tech, index) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex items-center gap-2 text-foreground/80 px-3 py-1 rounded-full border border-primary/30 bg-primary/5"
                  >
                    <span className="text-primary">▹</span>
                    <span>{tech}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Highlights Section */}
            <motion.div 
              variants={staggerItem}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-4xl mt-8"
            >
              {highlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="text-center p-6 rounded-xl border border-primary/20 bg-card/50 backdrop-blur-sm"
                >
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">{item.value}</div>
                  <div className="text-sm text-muted-foreground">{item.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* What I Do Section */}
            <motion.div variants={staggerItem} className="w-full max-w-5xl mt-12">
              <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">
                <span className="gradient-text">What I Do</span>
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {whatIDo.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15, duration: 0.5 }}
                    className="p-6 rounded-xl border border-primary/20 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-colors group"
                  >
                    <item.icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                    <h4 className="text-lg font-semibold text-foreground mb-2">{item.title}</h4>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
