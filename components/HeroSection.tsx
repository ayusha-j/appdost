"use client";

import { motion } from "framer-motion";
import { ArrowRight, Laptop, Smartphone, Zap, CheckCircle, Shield, Clock } from "lucide-react";

const floatingCards = [
  {
    icon: Laptop,
    title: "Web Development",
    subtitle: "+10 Projects",
    delay: 0,
    className: "top-20 right-10 md:right-20",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    subtitle: "+4 Apps",
    delay: 1,
    className: "top-40 right-32 md:right-48",
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    subtitle: "On Time",
    delay: 2,
    className: "top-64 right-20 md:right-32",
  },
];

const features = [
  { icon: CheckCircle, text: "100% Client Satisfaction" },
  { icon: Shield, text: "Secure & Scalable" },
  { icon: Clock, text: "24/7 Support" },
];

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 animated-gradient opacity-10"></div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2"
            >
              <span className="text-2xl">🚀</span>
              <span className="text-sm text-gray-300">
                Complete IT Solution Provider Since 2025
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
            >
              Transform Your{" "}
              <span className="gradient-text">Ideas</span> Into{" "}
              <span className="gradient-text">Digital Reality</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-gray-400 max-w-xl"
            >
              Your trusted partner for comprehensive IT solutions. From mobile
              apps to enterprise software, we bring innovation and excellence to
              every project with our expert team of developers.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-lg font-medium flex items-center space-x-2 hover:shadow-lg hover:shadow-indigo-500/50 transition-shadow"
              >
                <span>Explore Our Services</span>
                <ArrowRight size={20} />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors"
              >
                Get Free Consultation
              </motion.button>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-6 pt-4"
            >
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2 text-gray-300">
                  <feature.icon size={20} className="text-indigo-500" />
                  <span className="text-sm">{feature.text}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Floating Cards */}
          <div className="relative h-[500px] hidden lg:block">
            {floatingCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: card.delay * 0.2,
                }}
                className={`absolute ${card.className}`}
              >
                <motion.div
                  animate={{
                    y: [0, -20, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: card.delay,
                  }}
                  className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-2xl hover:shadow-indigo-500/20 transition-shadow"
                >
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-br from-indigo-600 to-purple-600 p-3 rounded-xl">
                      <card.icon size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">{card.title}</h3>
                      <p className="text-indigo-400 font-bold">{card.subtitle}</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-20 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Laptop, value: "10+", label: "WEB PROJECTS" },
              { icon: Smartphone, value: "4+", label: "ANDROID APPS" },
              { icon: "🎯", value: "1", label: "CRM PROJECT" },
              { icon: "🚀", value: "2025", label: "FOUNDED YEAR" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  {typeof stat.icon === "string" ? (
                    <span className="text-4xl">{stat.icon}</span>
                  ) : (
                    <stat.icon size={40} className="text-indigo-500" />
                  )}
                </div>
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
