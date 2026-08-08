import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/animations/staggerAnimations";
import ParticleBackground from "@/components/ParticleBackground";
import { ExternalLink } from "lucide-react";

const profiles = [
  {
    platform: "GitHub",
    username: "@Rohanrodrigues2002",
    stats: "repositories",
    link: "https://github.com/Rohanrodrigues2002",
    gradient: "from-neon-cyan to-neon-blue"
  },
  {
    platform: "LeetCode",
    username: "Rohan_Rodrigues1",
    stats: "problems solved",
    link: "https://leetcode.com",
    gradient: "from-neon-violet to-neon-pink"
  },
  {
    platform: "Stack Overflow",
    username: "Rohan Rodrigues",
    stats: "reputation",
    link: "https://stackoverflow.com",
    gradient: "from-neon-blue to-neon-violet"
  },
  {
    platform: "HackerRank",
    username: "Rohan Rodrigues",
    stats: "5 star rating",
    link: "https://www.hackerrank.com",
    gradient: "from-neon-cyan to-neon-pink"
  }
];

const CodingProfiles = () => {
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
            <span className="gradient-text">Coding Profiles</span>
          </motion.h2>

          <motion.p
            variants={staggerItem}
            className="text-center text-muted-foreground mb-16 text-lg"
          >
            Find me across the web
          </motion.p>

          {/* Grid updated: 1 column on mobile, 2 columns on md+ */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {profiles.map((profile, index) => (
              <motion.a
                key={profile.platform}
                href={profile.link}
                target="_blank"
                rel="noopener noreferrer"
                variants={staggerItem}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.98 }}
                className="glass rounded-2xl p-6 group relative overflow-hidden flex flex-col"
              >
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${profile.gradient}`} />
                
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                      {profile.platform}
                    </h3>
                    <p className="text-primary/70 text-sm font-mono">
                      {profile.username}
                    </p>
                  </div>
                  
                  <motion.div
                    whileHover={{ rotate: 45 }}
                    className="text-muted-foreground group-hover:text-primary transition-colors"
                  >
                    <ExternalLink size={20} />
                  </motion.div>
                </div>

                <p className="text-muted-foreground text-sm mt-auto">
                  {profile.stats}
                </p>

                <motion.div
                  className={`absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br ${profile.gradient} opacity-10 rounded-tl-full`}
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CodingProfiles;