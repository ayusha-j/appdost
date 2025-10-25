"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Palette,
  Laptop,
  Globe,
  Smartphone,
  Wrench,
  Rocket,
} from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "UI/UX Design Excellence",
    description: "Crafting intuitive, user-centric designs that guarantee exceptional user satisfaction and engagement. We believe great design is invisible—it just works.",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: Laptop,
    title: "Custom Software Development",
    description: "Building robust, scalable enterprise solutions tailored to your unique business requirements. From concept to deployment, we deliver excellence at every stage.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Globe,
    title: "Web Application Development",
    description: "Creating responsive, high-performance web applications using the latest frameworks and technologies. Your digital presence, perfected.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Developing native and cross-platform mobile applications that users love. iOS, Android, or hybrid—we've got you covered.",
    color: "from-purple-500 to-violet-500",
  },
  {
    icon: Wrench,
    title: "Full-Stack Development",
    description: "End-to-end development expertise covering frontend elegance, backend power, database optimization, and cloud infrastructure.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Rocket,
    title: "Digital Transformation Consulting",
    description: "Strategic guidance to help businesses navigate their digital journey, from legacy system modernization to cloud migration.",
    color: "from-indigo-500 to-blue-500",
  },
];

export default function WhatWeDoSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/10 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center mr-4"
            >
              <span className="text-2xl">💼</span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold">What We Do</h2>
          </div>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Our Core Expertise
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
            >
              <motion.div
                whileHover={{ 
                  y: -10,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className="h-full bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all group"
              >
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:shadow-lg transition-shadow`}
                >
                  <service.icon size={32} className="text-white" />
                </motion.div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>

                {/* Hover Effect Border */}
                <div className={`mt-6 h-1 w-0 group-hover:w-full transition-all duration-500 bg-gradient-to-r ${service.color} rounded-full`}></div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
