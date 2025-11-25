import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/animations/staggerAnimations";
import ParticleBackground from "@/components/ParticleBackground";
import SkillIcon from "@/components/SkillIcon";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 90, color: "#00ffff" },
      { name: "JavaScript", level: 85, color: "#8b5cf6" },
      { name: "HTML5", level: 95, color: "#ec4899" },
      { name: "CSS3", level: 90, color: "#00ffff" }
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "Python", level: 80, color: "#8b5cf6" },
      { name: "Java", level: 75, color: "#ec4899" },
      { name: "MongoDB", level: 70, color: "#00ffff" },
      { name: "MySQL", level: 75, color: "#8b5cf6" }
    ]
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", level: 85, color: "#ec4899" }
    ]
  }
];

const AnimatedCounter = ({ target, inView }: { target: number; inView: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (inView) {
      const duration = 2000;
      const steps = 60;
      const increment = target / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [target, inView]);

  return <span>{count}%</span>;
};

const Skills = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section className="relative min-h-screen py-20 overflow-hidden">
      <ParticleBackground />
      
      <div ref={ref} className="container mx-auto px-4 z-10 relative">
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
            <span className="gradient-text">Skills & Expertise</span>
          </motion.h2>

          <motion.p
            variants={staggerItem}
            className="text-center text-muted-foreground mb-16 text-lg"
          >
            Technologies I work with
          </motion.p>

          <div className="space-y-12">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={staggerItem}
                className="glass rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold mb-8 text-primary">
                  {category.title}
                </h3>

                <div className="grid gap-8">
                  {category.skills.map((skill, index) => (
                    <div key={skill.name} className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <SkillIcon name={skill.name} color={skill.color} />
                          <span className="text-lg font-semibold">{skill.name}</span>
                        </div>
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={inView ? { opacity: 1 } : {}}
                          transition={{ delay: categoryIndex * 0.2 + index * 0.1 }}
                          className="text-lg font-mono text-primary"
                        >
                          <AnimatedCounter target={skill.level} inView={inView} />
                        </motion.span>
                      </div>

                      <div className="relative h-3 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : {}}
                          transition={{ 
                            duration: 1.5, 
                            delay: categoryIndex * 0.2 + index * 0.1,
                            ease: "easeOut"
                          }}
                          className="absolute inset-y-0 left-0 rounded-full"
                          style={{
                            background: `linear-gradient(90deg, ${skill.color}, ${skill.color}80)`
                          }}
                        >
                          <motion.div
                            className="absolute inset-0"
                            animate={{
                              boxShadow: [
                                `0 0 10px ${skill.color}40`,
                                `0 0 20px ${skill.color}60`,
                                `0 0 10px ${skill.color}40`
                              ]
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                          />
                        </motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
