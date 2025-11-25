import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/animations/staggerAnimations";
import ParticleBackground from "@/components/ParticleBackground";
import AnimatedButton from "@/components/AnimatedButton";
import { Download, Briefcase, GraduationCap } from "lucide-react";

const experience = [
  {
    title: "Senior Full Stack Developer",
    company: "Tech Corp",
    period: "2022 - Present",
    description: "Leading development of scalable web applications using React, Node.js, and cloud technologies."
  },
  {
    title: "Full Stack Developer",
    company: "StartUp Inc",
    period: "2020 - 2022",
    description: "Built and maintained multiple client projects, focusing on performance optimization and user experience."
  },
  {
    title: "Junior Developer",
    company: "Web Agency",
    period: "2018 - 2020",
    description: "Developed responsive websites and learned modern web development practices."
  }
];

const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    school: "University Name",
    period: "2014 - 2018",
    description: "Graduated with honors. Focused on software engineering and web technologies."
  }
];

const Resume = () => {
  const handleDownload = () => {
    // In a real app, this would download the actual resume file
    alert("Resume download would start here!");
  };

  return (
    <section className="relative min-h-screen py-20 overflow-hidden">
      <ParticleBackground />
      
      <div className="container mx-auto px-4 z-10 relative">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <motion.h2
            variants={staggerItem}
            className="text-4xl md:text-6xl font-bold mb-4 text-center"
          >
            <span className="gradient-text">Resume</span>
          </motion.h2>

          <motion.p
            variants={staggerItem}
            className="text-center text-muted-foreground mb-12 text-lg"
          >
            My professional journey
          </motion.p>

          <motion.div variants={staggerItem} className="flex justify-center mb-16">
            <AnimatedButton onClick={handleDownload} variant="primary">
              <Download size={20} className="mr-2" />
              Download Resume
            </AnimatedButton>
          </motion.div>

          <div className="space-y-12">
            <motion.div variants={staggerItem}>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Briefcase className="text-primary" size={24} />
                </div>
                <h3 className="text-3xl font-bold">Experience</h3>
              </div>

              <div className="space-y-6">
                {experience.map((job, index) => (
                  <motion.div
                    key={job.title}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="glass rounded-xl p-6 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h4 className="text-xl font-bold">{job.title}</h4>
                      <span className="text-primary font-mono text-sm">{job.period}</span>
                    </div>
                    <p className="text-primary/80 mb-3">{job.company}</p>
                    <p className="text-muted-foreground">{job.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={staggerItem}>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                  <GraduationCap className="text-secondary" size={24} />
                </div>
                <h3 className="text-3xl font-bold">Education</h3>
              </div>

              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={edu.degree}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="glass rounded-xl p-6 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h4 className="text-xl font-bold">{edu.degree}</h4>
                      <span className="text-secondary font-mono text-sm">{edu.period}</span>
                    </div>
                    <p className="text-secondary/80 mb-3">{edu.school}</p>
                    <p className="text-muted-foreground">{edu.description}</p>
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

export default Resume;
