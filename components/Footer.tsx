"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="relative bg-black/50 border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <div className="text-2xl font-bold mb-2">
                <span className="text-white">App</span>
                <span className="gradient-text">Dost</span>
              </div>
              <p className="text-sm text-gray-400 mb-4">COMPLETE IT SOLUTION</p>
              <p className="text-gray-400 max-w-md">
                Transform your ideas into digital reality. We bring innovation and
                excellence to every project with our expert team of developers.
              </p>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "Services", "Portfolio", "Careers", "Blog"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-gray-400">
                <Mail size={18} className="mt-1 flex-shrink-0" />
                <span className="text-sm">info@appdost.in</span>
              </li>
              <li className="flex items-start space-x-2 text-gray-400">
                <Phone size={18} className="mt-1 flex-shrink-0" />
                <span className="text-sm">+91 XXX XXX XXXX</span>
              </li>
              <li className="flex items-start space-x-2 text-gray-400">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span className="text-sm">India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-8">
          {[
            { icon: Github, href: "#" },
            { icon: Linkedin, href: "#" },
            { icon: Twitter, href: "#" },
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="bg-white/5 p-3 rounded-full hover:bg-white/10 transition-colors"
            >
              <social.icon size={20} className="text-gray-400 hover:text-white" />
            </motion.a>
          ))}
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 AppDost. All rights reserved. | Made with ❤️ in India
          </p>
        </div>
      </div>
    </footer>
  );
}
