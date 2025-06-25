import React from 'react';
import { Zap, Mail, Phone, MapPin, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';
import { motion } from 'framer-motion';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.15),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(236,72,153,0.15),transparent_50%)]"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
          {/* Company Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-3 group"
          >
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-2xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -inset-1 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-2xl opacity-20 blur group-hover:opacity-40 transition-opacity duration-300"></div>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-gray-900 via-indigo-900 to-gray-900 bg-clip-text text-transparent">
              Invincx
            </span>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap justify-center gap-8"
          >
            <a href="mailto:hello@invincx.com" className="group flex items-center space-x-3 text-gray-600 hover:text-indigo-600 transition-all duration-300">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-4 h-4 text-indigo-600" />
              </div>
              <span className="font-medium">hello@invincx.com</span>
            </a>
            <a href="tel:+919876543210" className="group flex items-center space-x-3 text-gray-600 hover:text-indigo-600 transition-all duration-300">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-4 h-4 text-purple-600" />
              </div>
              <span className="font-medium">+91 98765 43210</span>
            </a>
            <div className="group flex items-center space-x-3 text-gray-600">
              <div className="w-10 h-10 bg-gradient-to-br from-pink-50 to-orange-50 rounded-xl flex items-center justify-center">
                <MapPin className="w-4 h-4 text-pink-600" />
              </div>
              <span className="font-medium">Mumbai, India</span>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex space-x-4"
          >
            {[
              { icon: Instagram, href: '#', color: 'from-pink-500 to-purple-500', iconColor: 'text-pink-500' },
              { icon: Youtube, href: '#', color: 'from-red-500 to-red-600', iconColor: 'text-red-500' },
              { icon: Twitter, href: '#', color: 'from-blue-400 to-blue-500', iconColor: 'text-blue-500' },
              { icon: Linkedin, href: '#', color: 'from-blue-600 to-blue-700', iconColor: 'text-blue-600' }
            ].map((social, index) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  className="group relative"
                >
                  <div className={`w-10 h-10 bg-gradient-to-br ${social.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`w-5 h-5 text-white`} />
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-300"></div>
                </a>
              );
            })}
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 pt-8 border-t border-gray-100 text-center"
        >
          <p className="text-sm text-gray-500">
            © {currentYear} Invincx. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};