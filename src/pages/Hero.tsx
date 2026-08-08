import { motion } from "framer-motion";
import { fadeInUp } from "@/animations/fadeAnimations";
import { staggerContainer, staggerItem } from "@/animations/staggerAnimations";
import AnimatedButton from "@/components/AnimatedButton";
import ParticleBackground from "@/components/ParticleBackground";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import profileImg from "@/assets/profile.jpeg";
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
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center max-w-6xl mx-auto">
          {/* Text column */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <motion.div variants={staggerItem} className="mb-6">
              <span className="text-primary text-sm md:text-base font-mono">
                Hi, my name is
              </span>
            </motion.div>

            <motion.h1
              variants={staggerItem}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4"
            >
              <span className="gradient-text">Rohan Rodrigues J</span>
            </motion.h1>

            <motion.h2
              variants={staggerItem}
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-muted-foreground mb-8"
            >
              Full Stack Developer
            </motion.h2>

            <motion.p
              variants={staggerItem}
              className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-12 leading-relaxed"
            >
              I'm a passionate developer specializing in building exceptional digital experiences.
              Currently focused on creating accessible, human-centered products with modern technologies.
            </motion.p>

            <motion.div
              variants={staggerItem}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12"
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
              className="flex gap-6 justify-center lg:justify-start"
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

          {/* Photo column */}
          <motion.div
            variants={staggerItem}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <motion.div
              className="relative"
              animate={{ y: [0, -14, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            >
              {/* Glow behind the photo */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-primary/40 via-primary/10 to-transparent blur-2xl" />

              {/* Rotating gradient ring */}
              <motion.div
                className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-primary via-primary/30 to-transparent"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
              />

              {/* Photo */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-background glass">
                <img
                  src={profileImg}
                  alt="Rohan Rodrigues J"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating badge */}
              <motion.div
                className="absolute -bottom-2 -right-2 sm:bottom-2 sm:right-2 glass rounded-full px-4 py-2 border border-primary/30"
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.5 }}
              >
                <span className="text-sm font-mono text-primary">{"</>"}</span>
              </motion.div>
            </motion.div>
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