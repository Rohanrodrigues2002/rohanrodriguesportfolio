import { motion } from "framer-motion";
import { fadeInUp } from "@/animations/fadeAnimations";
import { staggerContainer, staggerItem } from "@/animations/staggerAnimations";
import AnimatedButton from "@/components/AnimatedButton";
import ParticleBackground from "@/components/ParticleBackground";
import { Link } from "react-router-dom";
import { ArrowRight, Code, Sparkles, Zap } from "lucide-react";

const CTA = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground />
      
      <motion.div
        className="container mx-auto px-4 z-10"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            variants={staggerItem}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
              <Sparkles className="text-primary" size={20} />
              <span className="text-sm font-medium">Available for new projects</span>
            </div>
          </motion.div>

          <motion.h2
            variants={staggerItem}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            <span className="gradient-text">Let's Build Something</span>
            <br />
            <span className="text-foreground">Amazing Together</span>
          </motion.h2>

          <motion.p
            variants={staggerItem}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            I'm currently available for freelance work, collaborations, or full-time opportunities. 
            Let's create something extraordinary that makes a difference.
          </motion.p>

          <motion.div
            variants={staggerItem}
            className="grid md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto"
          >
            {[
              { icon: <Code />, title: "Clean Code", desc: "Well-structured and maintainable" },
              { icon: <Zap />, title: "Fast Delivery", desc: "Quick turnaround times" },
              { icon: <Sparkles />, title: "Modern Tech", desc: "Latest technologies" }
            ].map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="glass rounded-xl p-6"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 text-primary">
                  {feature.icon}
                </div>
                <h3 className="font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={staggerItem}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link to="/contact">
              <AnimatedButton variant="primary">
                Start a Project <ArrowRight size={20} className="ml-2" />
              </AnimatedButton>
            </Link>
            <Link to="/projects">
              <AnimatedButton variant="outline">
                View My Work
              </AnimatedButton>
            </Link>
          </motion.div>
        </div>
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-background pointer-events-none" />
    </section>
  );
};

export default CTA;
