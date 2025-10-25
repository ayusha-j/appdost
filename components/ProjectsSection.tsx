"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

// Helper function to extract a single color from gradient for border
const getBorderColor = (gradient: string) => {
  // Extract the first color from the gradient
  const colorMatch = gradient.match(/from-([^\s]+)/);
  if (colorMatch && colorMatch[1]) {
    const color = colorMatch[1];
    // Convert Tailwind color classes to hex/rgba if needed
    const colorMap: Record<string, string> = {
      'pink-500': 'rgba(236, 72, 153, 0.5)',
      'purple-500': 'rgba(168, 85, 247, 0.5)',
      'blue-500': 'rgba(59, 130, 246, 0.5)',
      'green-500': 'rgba(16, 185, 129, 0.5)',
      'yellow-500': 'rgba(234, 179, 8, 0.5)',
      'red-500': 'rgba(239, 68, 68, 0.5)'
    };
    return colorMap[color] || `rgba(255, 255, 255, 0.2)`;
  }
  return 'rgba(255, 255, 255, 0.2)';
};
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

const featuredProjects = [
  {
    title: "BEU Mate - Bihar Engineering",
    category: "EDUCATIONAL PLATFORM",
    description:
      "A comprehensive educational platform for Bihar Engineering University students offering personalized learning, course guidance, and educational progress tracking.",
    tags: ["React", "Node.js", "MongoDB"],
    gradient: "from-blue-600 to-cyan-600",
    image: "/images/beumate-logo.png",
    isImage: true,
    bgSize: "contain",
    bgPosition: "center",
    url: "https://beumate.app"
  },
  {
    title: "DevsRequest",
    category: "DEVELOPER PLATFORM",
    description:
      "An innovative platform designed to connect aspiring developers to transfer coding skills through hands-on projects and collaborative learning.",
    tags: ["Next.js", "TypeScript", "PostgreSQL"],
    gradient: "from-purple-600 to-pink-600",
    image: "💻",
    url: "https://devskillquest.com"
  },
  {
    title: "The Weddings Chapter",
    category: "WEDDING PLANNING PORTAL",
    description:
      "A beautiful wedding planning platform connecting couples with top vendors, venues, and services. Features vendor discovery and event management.",
    tags: ["React", "Firebase", "Tailwind"],
    gradient: "from-rose-600 to-orange-600",
    image: "/images/TWC Final Logo.jpg",
    isImage: true,
    bgSize: "cover",
    bgPosition: "center",
    url: "https://theweddingschapter.com"
  },
];

const openSourceProjects = [
  {
    title: "DeepFake Detection",
    subtitle: "AI/ML Research Project",
    description: "Advanced AI model for detecting deepfake content",
    gradient: "from-indigo-600 to-purple-600",
    icon: "🤖",
  },
  {
    title: "Neobot",
    subtitle: "Healthcare Chatbot Solution",
    description: "Intelligent healthcare assistant powered by AI",
    gradient: "from-green-600 to-emerald-600",
    icon: "🏥",
  },
  {
    title: "EduTools",
    subtitle: "Educational Toolkit",
    description: "Comprehensive tools for modern education",
    gradient: "from-pink-600 to-rose-600",
    icon: "📚",
  },
];

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="portfolio" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Featured Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Best solutions for real businesses - explored and successful projects
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {featuredProjects.map((project, index) => (
            <motion.a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="block h-full"
            >
              <motion.div
                whileHover={{ y: -10 }}
                className="h-full bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all group"
              >
                {/* Project Image/Icon */}
                <div className="h-48 group-hover:opacity-90 transition-opacity relative">
                  <div 
                    className={`h-full ${!project.isImage ? `bg-gradient-to-br ${project.gradient} flex items-center justify-center text-7xl` : ''} relative overflow-hidden`}
                    style={project.isImage ? {
                      backgroundImage: `url('${project.image}')`,
                      backgroundSize: project.bgSize || 'cover',
                      backgroundPosition: project.bgPosition || 'center',
                      backgroundRepeat: 'no-repeat'
                    } : {}}
                  >
                    {!project.isImage && (
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        transition={{ duration: 0.3 }}
                      >
                        {project.image}
                      </motion.div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <div className="absolute inset-0 bg-black/30"></div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <div className="mb-4">
                    <span className="text-sm font-medium text-gray-400">{project.category}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex-1 bg-gradient-to-r ${project.gradient} text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center justify-center space-x-2`}
                    >
                      <span>View Site</span>
                      <ExternalLink size={16} />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </motion.a>
          ))}
        </div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mb-20"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg hover:shadow-indigo-500/50 transition-shadow"
          >
            View All Projects →
          </motion.button>
        </motion.div>

        {/* Open Source Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Open Source & Innovation Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-green-600 to-emerald-600 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore our contributions to AI, automation, and educational technology
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {openSourceProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`relative h-full rounded-2xl p-8 text-center cursor-pointer group backdrop-blur-lg bg-white/10 border border-white/10 shadow-xl hover:shadow-2xl hover:bg-white/20 transition-all`}
                style={{
                  background: `linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)`,
                  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                  backdropFilter: 'blur(10px)',
                  border: `1px solid ${getBorderColor(project.gradient)}`
                }}
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="text-6xl mb-4"
                >
                  {project.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-white/80 text-sm font-medium mb-3">
                  {project.subtitle}
                </p>
                <p className="text-white/70 text-sm">
                  {project.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
