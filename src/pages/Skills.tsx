import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/animations/staggerAnimations";
import ParticleBackground from "@/components/ParticleBackground";
import SkillIcon from "@/components/SkillIcon";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", color: "#00ffff" },
      { name: "JavaScript", color: "#8b5cf6" },
      { name: "HTML5", color: "#ec4899" },
      { name: "CSS3", color: "#00ffff" }
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "Python", color: "#8b5cf6" },
      { name: "Java", color: "#ec4899" },
      { name: "MongoDB", color: "#00ffff" },
      { name: "MySQL", color: "#8b5cf6" }
    ]
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", color: "#ec4899" }
    ]
  }
];

const Skills = () => {
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
            <span className="gradient-text">Skills & Expertise</span>
          </motion.h2>

          <motion.p
            variants={staggerItem}
            className="text-center text-muted-foreground mb-16 text-lg"
          >
            Technologies I work with
          </motion.p>

          <div className="space-y-12">
            {skillCategories.map((category) => (
              <motion.div
                key={category.title}
                variants={staggerItem}
                className="glass rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold mb-8 text-primary">
                  {category.title}
                </h3>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {category.skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ scale: 1.1 }}
                      className="flex flex-col items-center gap-3"
                    >
                      <SkillIcon name={skill.name} color={skill.color} />
                      <span className="text-lg font-semibold text-center">{skill.name}</span>
                    </motion.div>
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
