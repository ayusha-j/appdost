"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
// Removed icon imports as they are no longer needed

const processes = [
  {
    number: "1",
    title: "Discovery & Planning",
    description:
      "We deep-dive into your ideas, dreams, understand your business goals, analyze competitors, and create a comprehensive project roadmap with clear milestones.",
    color: "from-cyan-500 to-blue-500",
  },
  {
    number: "2",
    title: "Design & Prototype",
    description:
      "Our design team creates intuitive wireframes, mockups, and interactive prototypes that bring your vision to life before development begins.",
    color: "from-purple-500 to-pink-500",
  },
  {
    number: "3",
    title: "Development & Testing",
    description:
      "Expert developers build scalable code using the latest tech stacks, performing rigorous testing to ensure flawless functionality across all devices and platforms.",
    color: "from-orange-500 to-red-500",
  },
  {
    number: "4",
    title: "Deployment & Support",
    description:
      "We handle the complete deployment process and provide ongoing support, updates, and 24/7 technical assistance to keep your services running smoothly.",
    color: "from-green-500 to-emerald-500",
  },
];

export default function DevelopmentProcess() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/10 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our Development Process
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A proven methodology that ensures quality, efficiency, and client satisfaction
          </p>
        </motion.div>

        {/* Process Cards */}
        <div className="space-y-24">
          {processes.map((process, index) => {
            // Determine layout: odd indices (0,2) have badge+title on left, even indices (1,3) have badge+title on right
            const badgeOnLeft = index % 2 === 0;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.3,
                  ease: "easeOut"
                }}
              >
                <motion.div>
                  {/* Mobile Layout - Stacked */}
                  <div className="sm:hidden">
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ 
                        duration: 0.6, 
                        delay: index * 0.2,
                        ease: "easeOut"
                      }}
                      className="flex flex-col items-center text-center mb-12"
                    >
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className={`w-16 h-16 rounded-full bg-gradient-to-br ${process.color} flex items-center justify-center text-white font-bold text-2xl shadow-lg mb-4`}
                      >
                        {process.number}
                      </motion.div>
                      <h3 className="text-3xl font-bold text-white mb-4">
                        {process.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed">
                        {process.description}
                      </p>
                    </motion.div>
                  </div>

                  {/* Desktop Layout - Original */}
                  <div className="hidden sm:flex items-start gap-6">
                    {/* Left/Right side for badge + title */}
                    <motion.div
                      initial={{ 
                        opacity: 0, 
                        x: badgeOnLeft ? -100 : 100 
                      }}
                      animate={isInView ? { 
                        opacity: 1, 
                        x: 0 
                      } : {}}
                      transition={{ 
                        duration: 0.8, 
                        delay: index * 0.3 + 0.1,
                        ease: "easeOut"
                      }}
                      className={`flex items-start gap-4 ${badgeOnLeft ? 'order-1' : 'order-2'}`}
                    >
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className={`flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br ${process.color} flex items-center justify-center text-white font-bold text-2xl shadow-lg transform -translate-y-2`}
                      >
                        {process.number}
                      </motion.div>
                      <h3 className="text-5xl font-bold text-white">
                        {process.title}
                      </h3>
                    </motion.div>

                    {/* Right/Left side for description */}
                    <motion.div
                      initial={{ 
                        opacity: 0, 
                        x: badgeOnLeft ? 100 : -100 
                      }}
                      animate={isInView ? { 
                        opacity: 1, 
                        x: 0 
                      } : {}}
                      transition={{ 
                        duration: 0.8, 
                        delay: index * 0.3 + 0.2,
                        ease: "easeOut"
                      }}
                      className={`flex-1 ${badgeOnLeft ? 'order-2' : 'order-1'}`}
                    >
                      <p className="text-xl text-gray-400 leading-relaxed">
                        {process.description}
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
