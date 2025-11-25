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
                Hello! I'm John, a full-stack developer passionate about creating things that live on the internet. 
                My interest in web development started back in 2018 when I decided to try building my first website — 
                turns out hacking together a custom WordPress theme taught me a lot about HTML & CSS!
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Fast-forward to today, and I've had the privilege of working at various companies, building products 
                for startups, and contributing to open-source projects. My main focus these days is building accessible, 
                inclusive products and digital experiences with cutting-edge technologies.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Here are a few technologies I've been working with recently:
              </p>

              <div className="grid grid-cols-2 gap-3">
                {["JavaScript (ES6+)", "React", "Node.js", "TypeScript", "Python", "MongoDB"].map((tech, index) => (
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
