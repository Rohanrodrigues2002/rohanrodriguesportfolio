import { motion } from "framer-motion";
import { fadeInUp } from "@/animations/fadeAnimations";
import { staggerContainer, staggerItem } from "@/animations/staggerAnimations";
import ParticleBackground from "@/components/ParticleBackground";
import ThreeIcon from "@/three/IconScene";

const About = () => {
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

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={staggerItem}>
              <ThreeIcon icon="react" speed={0.5} color="#00ffff" />
            </motion.div>

            <motion.div variants={staggerItem} className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate Java Developer with one year of hands-on experience building efficient, scalable, and user-focused applications. I enjoy transforming complex problems into clean, maintainable code and continuously improving my skill set through real-world projects and learning.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                During my experience, I've worked with Java, Spring Boot, REST APIs, MySQL, and Git, contributing to backend development, debugging, API integration, and performance improvements. I take pride in writing readable, well-structured code and collaborating closely with teams to deliver high-quality features on time.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                What drives me is the opportunity to grow, solve meaningful problems, and contribute to a team that values innovation, clean architecture, and continuous learning. I'm eager to join an environment where I can add value, take ownership, and further strengthen my expertise in backend development and Java technologies.
              </p>

              <div className="grid grid-cols-2 gap-3">
                {["Java", "Spring Boot", "REST APIs", "MySQL", "Git", "Backend Development"].map((tech, index) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex items-center gap-2 text-foreground/80"
                  >
                    <span className="text-primary">▹</span>
                    <span>{tech}</span>
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
