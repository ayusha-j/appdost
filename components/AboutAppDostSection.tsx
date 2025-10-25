"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle, Trophy, Briefcase, Zap } from "lucide-react";

const stats = [
  {
    icon: CheckCircle,
    value: "100%",
    label: "Client Satisfaction",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Trophy,
    value: "15+",
    label: "Projects Delivered",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Briefcase,
    value: "24/7",
    label: "Support Available",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Zap,
    value: "Fast",
    label: "Turnaround Time",
    color: "from-purple-500 to-pink-500",
  },
];

const features = [
  {
    icon: "👤",
    title: "User-Centric Design",
    color: "text-pink-500",
  },
  {
    icon: "⚙️",
    title: "Cutting-Edge Technology",
    color: "text-purple-500",
  },
  {
    icon: "🛡️",
    title: "Client-Focused Approach",
    color: "text-yellow-500",
  },
];

export default function AboutAppDostSection() {
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
            ABOUT APPDOST
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-6"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <h3 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              Your Trusted Partner for Complete Digital Transformation
            </h3>
            
            <p className="text-base md:text-xl text-gray-400 leading-relaxed">
              AppDost is a full-service IT solutions provider founded in 2025. 
              We specialize in delivering comprehensive digital solutions that 
              drive business growth and innovation.
            </p>

            {/* Features */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="flex items-center space-x-4"
                >
                  <span className="text-2xl">{feature.icon}</span>
                  <span className={`text-base md:text-lg font-medium ${feature.color}`}>
                    {feature.title}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-lg font-medium flex items-center space-x-2 hover:shadow-lg hover:shadow-indigo-500/50 transition-shadow text-sm md:text-base"
            >
              <span>Discover Our Services</span>
              <span>→</span>
            </motion.button>
          </motion.div>

          {/* Right Content - Statistics Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.6 + index * 0.1,
                  ease: "easeOut"
                }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all group"
              >
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4 group-hover:shadow-lg transition-shadow`}
                >
                  <stat.icon size={24} className="text-white" />
                </motion.div>

                {/* Value */}
                <div className="text-3xl font-bold text-white mb-2">
                  {stat.value}
                </div>

                {/* Label */}
                <div className="text-sm text-gray-400 font-medium">
                  {stat.label}
                </div>

                {/* Hover Effect Border */}
                <div className={`mt-4 h-1 w-0 group-hover:w-full transition-all duration-500 bg-gradient-to-r ${stat.color} rounded-full`}></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
