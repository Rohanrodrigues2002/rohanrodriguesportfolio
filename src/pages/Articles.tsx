import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/animations/staggerAnimations";
import ParticleBackground from "@/components/ParticleBackground";
import { Calendar, Clock, ExternalLink } from "lucide-react";

const articles = [
  {
    title: "Building Scalable React Applications",
    excerpt: "Learn how to structure large-scale React applications for maintainability and performance.",
    date: "Dec 15, 2024",
    readTime: "8 min read",
    link: "https://example.com",
    tags: ["React", "Architecture", "Performance"]
  },
  {
    title: "Modern CSS Techniques for 2024",
    excerpt: "Explore the latest CSS features including container queries, cascade layers, and more.",
    date: "Dec 10, 2024",
    readTime: "6 min read",
    link: "https://example.com",
    tags: ["CSS", "Frontend", "Web Design"]
  },
  {
    title: "TypeScript Best Practices",
    excerpt: "Discover patterns and practices that will make your TypeScript code more robust and maintainable.",
    date: "Dec 5, 2024",
    readTime: "10 min read",
    link: "https://example.com",
    tags: ["TypeScript", "Best Practices", "Development"]
  },
  {
    title: "Introduction to Three.js",
    excerpt: "Get started with 3D graphics in the browser using Three.js and React Three Fiber.",
    date: "Nov 28, 2024",
    readTime: "12 min read",
    link: "https://example.com",
    tags: ["Three.js", "3D", "WebGL"]
  }
];

const Articles = () => {
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
            <span className="gradient-text">Articles & Blog</span>
          </motion.h2>

          <motion.p
            variants={staggerItem}
            className="text-center text-muted-foreground mb-16 text-lg"
          >
            Thoughts on development and design
          </motion.p>

          <div className="grid md:grid-cols-2 gap-8">
            {articles.map((article, index) => (
              <motion.article
                key={article.title}
                variants={staggerItem}
                whileHover={{ y: -10 }}
                className="glass rounded-2xl p-6 group cursor-pointer"
              >
                <div className="mb-4">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-mono bg-primary/10 text-primary rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <Calendar size={16} />
                      {article.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={16} />
                      {article.readTime}
                    </span>
                  </div>

                  <motion.a
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="text-primary"
                  >
                    <ExternalLink size={20} />
                  </motion.a>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Articles;
