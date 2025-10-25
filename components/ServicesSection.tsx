"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import {
  Smartphone,
  Globe,
  Palette,
  Database,
  Cloud,
  Shield,
  CheckCircle,
} from "lucide-react";

const services = [
  {
    icon: Smartphone,
    title: "Android App Development",
    description:
      "Creating Android applications built with the latest technologies to bring your vision to life.",
    features: ["Native & Hybrid Apps", "Play Store Deployment", "Maintenance & Support"],
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Responsive and scalable web applications tailored to your business needs.",
    features: ["Responsive Design", "E-commerce Solutions", "Progressive Web Apps"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Palette,
    title: "UI/UX Development",
    description:
      "Beautiful, intuitive user interfaces that enhance user experience and engagement.",
    features: ["User Research", "Wireframing", "Brand Identity"],
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: Database,
    title: "CRM Software",
    description:
      "Comprehensive CRM solutions to manage customer relationships and streamline operations.",
    features: ["Custom Development", "Integration Services", "Training & Support"],
    color: "from-purple-500 to-violet-500",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description:
      "Scalable cloud infrastructure and migration services for modern businesses.",
    features: ["AWS, Azure, GCP", "Migration Services", "Performance Testing"],
    color: "from-indigo-500 to-blue-500",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description:
      "Protect your business with robust security solutions and best practices.",
    features: ["Security Audits", "Penetration Testing", "Compliance"],
    color: "from-orange-500 to-red-500",
  },
];

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  
  const controls = useAnimation();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollDistance, setScrollDistance] = useState(0);

  // Calculate scroll distance based on content width
  useEffect(() => {
    if (scrollRef.current) {
      const itemWidth = 320; // Width of each service card (w-80 = 20rem = 320px)
      const gap = 32; // space-x-8 = 2rem = 32px
      const totalWidth = (itemWidth + gap) * services.length;
      setScrollDistance(totalWidth);
      
      // Start animation after calculating distance
      controls.start({
        x: [-totalWidth, 0],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 60, // Time for one complete cycle (in seconds)
            ease: "linear"
          }
        }
      });
    }
  }, [controls]);

  // Set up the animation
  useEffect(() => {
    if (scrollRef.current) {
      const itemWidth = 320; // Width of each service card (w-80 = 20rem = 320px)
      const gap = 32; // space-x-8 = 2rem = 32px
      const totalWidth = (itemWidth + gap) * services.length;
      setScrollDistance(totalWidth);
    }
  }, []);
  
  // Continuous animation setup
  

  return (
    <section id="services" className="py-20 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/10 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We deliver end-to-end IT solutions that drive business and digital transformation
          </p>
        </motion.div>

        {/* Infinite Services Carousel */}
        <div className="relative overflow-hidden py-8">
          {/* Left & Right gradient fades */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black via-black/70 via-black/30 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black via-black/70 via-black/30 to-transparent z-10 pointer-events-none" />
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-black/60 to-transparent z-5 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-black/60 to-transparent z-5 pointer-events-none" />
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-purple-900/20 via-indigo-900/10 to-transparent z-15 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-purple-900/20 via-indigo-900/10 to-transparent z-15 pointer-events-none" />

          {/* Motion Carousel */}
          <motion.div
            ref={scrollRef}
            className="flex space-x-8 w-max"
            animate={controls}
            drag="x"
            dragConstraints={{ left: -scrollDistance, right: 0 }}
            dragElastic={0.1}
            onDragStart={() => {
              document.body.style.cursor = "grabbing";
            }}
            onDragEnd={() => {
              document.body.style.cursor = "";
            }}
          >
            {/* Duplicate services for seamless loop */}
            {[...services, ...services].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: (index % services.length) * 0.1 }}
                className="flex-shrink-0 w-80"
              >
                <motion.div
                  whileHover={{ y: -5 }}
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
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>

                  {/* Description */}
                  <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>

                  {/* Features */}
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <CheckCircle size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Hover border */}
                  <div
                    className={`mt-6 h-1 w-0 group-hover:w-full transition-all duration-500 bg-gradient-to-r ${service.color} rounded-full`}
                  ></div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
