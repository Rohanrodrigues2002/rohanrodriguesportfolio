import { motion } from "framer-motion";
import { fadeInUp } from "@/animations/fadeAnimations";
import { staggerContainer, staggerItem } from "@/animations/staggerAnimations";
import AnimatedButton from "@/components/AnimatedButton";
import ParticleBackground from "@/components/ParticleBackground";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground />
      
      <motion.div
        className="container mx-auto px-4 z-10"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            variants={staggerItem}
            className="mb-6"
          >
            <span className="text-primary text-sm md:text-base font-mono">
              Hi, my name is
            </span>
          </motion.div>

          <motion.h1
            variants={staggerItem}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4"
          >
            <span className="gradient-text">Rohan Rodrigues J</span>
          </motion.h1>

          <motion.h2
            variants={staggerItem}
            className="text-2xl md:text-4xl lg:text-5xl font-bold text-muted-foreground mb-8"
          >
            Full Stack Developer
          </motion.h2>

          <motion.p
            variants={staggerItem}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            I'm a passionate developer specializing in building exceptional digital experiences. 
            Currently focused on creating accessible, human-centered products with modern technologies.
          </motion.p>

          <motion.div
            variants={staggerItem}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Link to="/projects">
              <AnimatedButton variant="primary">
                View My Work
              </AnimatedButton>
            </Link>
            <Link to="/contact">
              <AnimatedButton variant="outline">
                Get In Touch
              </AnimatedButton>
            </Link>
          </motion.div>

          <motion.div
            variants={staggerItem}
            className="flex gap-6 justify-center"
          >
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github size={28} />
            </motion.a>
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin size={28} />
            </motion.a>
            <motion.a
              href="mailto:contact@example.com"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail size={28} />
            </motion.a>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ArrowDown className="text-primary" size={32} />
        </motion.div>
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none" />
    </section>
  );
};

export default Hero;
