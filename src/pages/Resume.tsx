import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/animations/staggerAnimations";
import ParticleBackground from "@/components/ParticleBackground";
import { Briefcase, GraduationCap } from "lucide-react";

const experience = [
  {
    title: "Java Backend Developer",
    company: "Corpfield Technology Solutions",
    location: "Nagercoil, Tamil Nadu",
    period: "Aug 2025 – Present",
    description:
      "Design and maintain RESTful services and modular Spring Boot components for business applications, applying service-layer and MVC architecture. Implement secure authentication and role-based access control using Spring Security and JWT. Design persistence logic and efficient queries using JPA/Hibernate with PostgreSQL and MySQL, while integrating MongoDB for schema-flexible services. Build reusable React components, integrate backend APIs through Axios and manage state across responsive, data-driven interfaces. Designed CSV ingestion workflows with validation and exception handling, automated scheduled email notifications, and manage code via Git/GitHub with Agile delivery."
  },
  {
    title: "Python Software Developer",
    company: "HiTech Solutions",
    location: "Nagercoil, Tamil Nadu",
    period: "Oct 2024 – Aug 2025",
    description:
      "Developed 20+ Python applications across web development, data processing, machine learning and IoT. Built full-stack Flask applications with MySQL and PostgreSQL, designing REST APIs for frontend and third-party integrations. Used Pandas and NumPy for data cleaning and transformation, and Scikit-learn/TensorFlow for classification and prediction solutions. Mentored junior developers on Python practices, project structure and troubleshooting."
  },
  {
    title: "Machine Learning in IoT Intern",
    company: "Srishti Innovative Computer Systems Pvt. Ltd.",
    location: "Trivandrum, Kerala",
    period: "Jul 2022 – Aug 2022",
    description:
      "Developed deep-learning and IoT prototypes using Python, TensorFlow, Scikit-learn, sensors and Raspberry Pi. Applied image and sensor-data processing for classification, object detection and embedded real-time inference."
  }
];

const education = [
  {
    degree: "B.E. in Electronics and Communication Engineering",
    school: "Ponjesly College of Engineering",
    location: "Tamil Nadu",
    period: "2020 – 2024",
    description: "Graduated with a Bachelor's degree in Electronics and Communication Engineering."
  }
];

const Resume = () => {
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
            <span className="gradient-text">Qualification & Experience</span>
          </motion.h2>

          <motion.p
            variants={staggerItem}
            className="text-center text-muted-foreground mb-16 text-lg"
          >
            My professional journey
          </motion.p>

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
                    key={`${job.title}-${job.company}`}
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
                    <p className="text-primary/80 mb-1">{job.company}</p>
                    <p className="text-muted-foreground text-sm mb-3">{job.location}</p>
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
                    <p className="text-secondary/80 mb-1">{edu.school}</p>
                    <p className="text-muted-foreground text-sm mb-3">{edu.location}</p>
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