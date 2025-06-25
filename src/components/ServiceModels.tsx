import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Zap, Sparkles, Settings } from 'lucide-react';

const ServiceModels: React.FC = () => {
  const models = [
    {
      icon: Zap,
      title: "The 'Dip Your Toes' Package",
      perfectFor: "First-time AI explorers",
      features: [
        "One custom AI assistant for your biggest pain point",
        "30-day trial period",
        "Full training and support"
      ],
      price: "Starting at $299/month",
      tagline: "Test drive the future of work without the commitment.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Rocket,
      title: "The 'All-In' Experience",
      perfectFor: "Businesses ready to transform",
      features: [
        "Complete AI assistant suite",
        "Custom website or app",
        "Brand refresh",
        "6 months of optimization"
      ],
      price: "Starting at $2,999/month",
      tagline: "Everything you need to make work feel like play.",
      gradient: "from-purple-500 to-indigo-500"
    },
    {
      icon: Sparkles,
      title: "The 'Sky's The Limit' Partnership",
      perfectFor: "Visionaries and game-changers",
      features: [
        "Completely custom solution built just for you",
        "Dedicated team of designers and developers",
        "Ongoing innovation and updates"
      ],
      price: "Investment starting at $10,000",
      tagline: "Let's build something the world has never seen before.",
      gradient: "from-pink-500 to-rose-500"
    }
  ];

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.08),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(236,72,153,0.08),transparent_50%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full text-indigo-700 font-medium mb-6">
            <Settings className="w-4 h-4" />
            <span>Service Models</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-indigo-900 bg-clip-text text-transparent">
              Choose Your Adventure
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We know every business is different, so we've created flexible ways to work together.
          </p>
        </div>

        {/* Service Models */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {models.map((model, index) => {
            const IconComponent = model.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="relative bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${model.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {model.title}
                    </h3>
                    <p className="text-indigo-600 font-medium mb-6">
                      Perfect for: {model.perfectFor}
                    </p>
                    <ul className="space-y-3 mb-6">
                      {model.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-indigo-500 mr-2">•</span>
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-xl font-bold text-gray-900 mb-4">
                      {model.price}
                    </p>
                    <p className="text-gray-600 italic">
                      "{model.tagline}"
                    </p>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                  <div className="absolute -top-4 -left-4 w-32 h-32 bg-gradient-to-r from-pink-100 to-rose-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceModels; 