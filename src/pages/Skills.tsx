import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/animations/staggerAnimations";
import ParticleBackground from "@/components/ParticleBackground";

// Simple Icons (SiMatplotlib removed)
import {
  SiSpringboot,
  SiSpringsecurity,
  SiHibernate,
  SiFastapi,
  SiFlask,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiGithub,
  SiPostman,
  SiTensorflow,
  SiScikitlearn,
  SiPandas,
  SiTypescript,
  SiNumpy,
  SiLangchain,
  SiTailwindcss,
} from "react-icons/si";

import { BiCodeAlt } from "react-icons/bi";
import { MdOutlineRssFeed } from "react-icons/md";

// Font Awesome icons
import {
  FaReact,
  FaJsSquare,
  FaJava,
  FaPython,
  FaGitAlt,
  FaDocker,
  FaAws,
  FaNodeJs,
  FaBrain,
  FaRobot,
  FaDatabase,
  FaCogs,
  FaHtml5,
  FaCss3Alt,
  FaChartLine, // for Matplotlib
} from "react-icons/fa";

// Map skill names to icons
const skillIcons: Record<string, { icon: React.ElementType; defaultColor: string }> = {
  React: { icon: FaReact, defaultColor: "#61dafb" },
  "Tailwind CSS": { icon: SiTailwindcss, defaultColor: "#38bdf8" },
  JavaScript: { icon: FaJsSquare, defaultColor: "#f7df1e" },
  TypeScript: { icon: SiTypescript, defaultColor: "#3178c6" },
  HTML5: { icon: FaHtml5, defaultColor: "#e34f26" },
  CSS3: { icon: FaCss3Alt, defaultColor: "#1572b6" },
  Java: { icon: FaJava, defaultColor: "#b07219" },
  "Spring Boot": { icon: SiSpringboot, defaultColor: "#6db33f" },
  "Spring Security": { icon: SiSpringsecurity, defaultColor: "#6db33f" },
  "JPA / Hibernate": { icon: SiHibernate, defaultColor: "#59666c" },
  Python: { icon: FaPython, defaultColor: "#3776ab" },
  FastAPI: { icon: SiFastapi, defaultColor: "#009688" },
  Flask: { icon: SiFlask, defaultColor: "#ffffff" }, // changed to white
  "REST APIs": { icon: BiCodeAlt, defaultColor: "#ff6b6b" },
  MySQL: { icon: SiMysql, defaultColor: "#4479a1" },
  PostgreSQL: { icon: SiPostgresql, defaultColor: "#336791" },
  MongoDB: { icon: SiMongodb, defaultColor: "#47a248" },
  Git: { icon: FaGitAlt, defaultColor: "#f05032" },
  GitHub: { icon: SiGithub, defaultColor: "#181717" },
  Docker: { icon: FaDocker, defaultColor: "#2496ed" },
  AWS: { icon: FaAws, defaultColor: "#ff9900" },
  Postman: { icon: SiPostman, defaultColor: "#ff6c37" },
  "Machine Learning": { icon: FaRobot, defaultColor: "#ff6f00" },
  IoT: { icon: MdOutlineRssFeed, defaultColor: "#00bcd4" },
  TensorFlow: { icon: SiTensorflow, defaultColor: "#ff6f00" },
  "Scikit-learn": { icon: SiScikitlearn, defaultColor: "#f7931e" },
  Pandas: { icon: SiPandas, defaultColor: "#150458" },
  NumPy: { icon: SiNumpy, defaultColor: "#013243" },
  Matplotlib: { icon: FaChartLine, defaultColor: "#11557c" },
  RAG: { icon: FaBrain, defaultColor: "#6c5ce7" },
  LangChain: { icon: SiLangchain, defaultColor: "#1c3e4a" },
  "Generative AI": { icon: FaRobot, defaultColor: "#ff6b6b" },
  "Vector Database": { icon: FaDatabase, defaultColor: "#00bcd4" },
  "Agentic AI": { icon: FaCogs, defaultColor: "#f7931e" },
};

const skillCategories = [
  {
  title: "Frontend",
  skills: [
    { name: "React", color: "#61dafb" },
    { name: "JavaScript", color: "#f7df1e" },
    { name: "TypeScript", color: "#3178c6" },
    { name: "HTML5", color: "#e34f26" },
    { name: "CSS3", color: "#1572b6" },
    { name: "Tailwind CSS", color: "#38bdf8" },
  ],
},
  {
    title: "Backend & APIs",
    skills: [
      { name: "Java", color: "#b07219" },
      { name: "Spring Boot", color: "#6db33f" },
      { name: "Spring Security", color: "#6db33f" },
      { name: "JPA / Hibernate", color: "#59666c" },
      { name: "Python", color: "#3776ab" },
      { name: "FastAPI", color: "#009688" },
      { name: "Flask", color: "#ffffff" }, // 🔥 changed from black to white
      { name: "REST APIs", color: "#ff6b6b" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MySQL", color: "#4479a1" },
      { name: "PostgreSQL", color: "#336791" },
      { name: "MongoDB", color: "#47a248" },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git", color: "#f05032" },
      { name: "GitHub", color: "#181717" },
      { name: "Docker", color: "#2496ed" },
      { name: "AWS", color: "#ff9900" },
      { name: "Postman", color: "#ff6c37" },
    ],
  },
  {
    title: "AI, Data & Emerging Tech",
    skills: [
      { name: "Pandas", color: "#150458" },
      { name: "NumPy", color: "#013243" },
      { name: "Matplotlib", color: "#11557c" },
      { name: "RAG", color: "#6c5ce7" },
      { name: "LangChain", color: "#1c3e4a" },
      { name: "Generative AI", color: "#ff6b6b" },
      { name: "Vector Database", color: "#00bcd4" },
      { name: "Agentic AI", color: "#f7931e" },
    ],
  },
  {
    title: "Additional",
    skills: [
      { name: "Machine Learning", color: "#ff6f00" },
      { name: "IoT", color: "#00bcd4" },
      { name: "TensorFlow", color: "#ff6f00" },
      { name: "Scikit-learn", color: "#f7931e" },
    ],
  },
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
                  {category.skills.map((skill) => {
                    const iconData = skillIcons[skill.name];
                    const IconComponent = iconData?.icon || FaNodeJs;
                    const iconColor = skill.color || "#ffffff";
                    return (
                      <motion.div
                        key={skill.name}
                        whileHover={{ scale: 1.1 }}
                        className="flex flex-col items-center gap-3"
                      >
                        <IconComponent
                          size={48}
                          color={iconColor}
                          className="transition-transform"
                        />
                        <span className="text-lg font-semibold text-center">
                          {skill.name}
                        </span>
                      </motion.div>
                    );
                  })}
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