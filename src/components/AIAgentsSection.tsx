import React, { useState } from 'react';
import { Bot, MessageCircle, TrendingUp, Brain, Building2, Users, DollarSign, ArrowRight, ShoppingCart, Mail, BarChart3, FileText, Shield, Globe, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { aiAgents } from '../services/data';

export const AIAgentsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('Customer Support');

  const categories = [
    { id: 'Customer Support', name: 'Customer Service', icon: MessageCircle },
    { id: 'Sales', name: 'Sales & Marketing', icon: TrendingUp },
    { id: 'Operations', name: 'Business Operations', icon: Building2 },
    { id: 'Human Resources', name: 'HR & Team', icon: Users },
    { id: 'Finance', name: 'Finance & Accounting', icon: DollarSign },
    { id: 'E-commerce', name: 'E-commerce & Retail', icon: ShoppingCart },
    { id: 'Marketing', name: 'Digital Marketing', icon: Mail },
    { id: 'Analytics', name: 'Business Analytics', icon: BarChart3 },
    { id: 'Documentation', name: 'Document Management', icon: FileText },
    { id: 'Security', name: 'Security & Compliance', icon: Shield },
    { id: 'International', name: 'International Business', icon: Globe }
  ];

  const filteredAgents = aiAgents.filter(agent => 
    agent.category === selectedCategory
  );

  return (
    <section id="ai-agents" className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.08),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(236,72,153,0.08),transparent_50%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full text-indigo-700 font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            <span>AI Solutions</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-indigo-900 bg-clip-text text-transparent">
              AI Solutions for Your Business
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Choose the right AI solution to automate your business tasks and scale your operations
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/25'
                    : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50 hover:border-indigo-200'
                }`}
              >
                <IconComponent className="w-4 h-4" />
                <span>{category.name}</span>
              </motion.button>
            );
          })}
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAgents.map((agent, index) => (
            <motion.div
              key={agent.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 hover:border-indigo-100"
            >
              <div className="p-6">
                {/* Header Section */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
                      {agent.name}
              </h3>
                    <span className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-700 rounded-full group-hover:from-indigo-100 group-hover:to-purple-100 transition-colors duration-300">
                      {agent.category}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 line-clamp-2">{agent.description}</p>
            </div>

                {/* ROI Badge */}
                <div className="mb-4">
                  <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-3 border border-indigo-100 group-hover:border-indigo-200 transition-colors duration-300">
                    <p className="text-sm font-semibold text-indigo-700">{agent.roi}</p>
              </div>
            </div>

                {/* Key Benefits */}
                <div className="mb-4">
                  <ul className="space-y-1.5">
                    {agent.features.slice(0, 2).map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        <span className="line-clamp-2">{feature}</span>
                      </li>
                    ))}
                  </ul>
          </div>

                {/* Pricing and CTA */}
                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <div>
                    <p className="text-lg font-bold text-gray-900">₹{agent.pricing.monthly.toLocaleString()}/mo</p>
                    <p className="text-xs text-gray-500">Setup: ₹{agent.pricing.setup.toLocaleString()}</p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:shadow-md hover:shadow-indigo-500/20 transition-all duration-300"
                  >
                    Learn More
                  </motion.button>
                </div>
              </div>
            </motion.div>
                ))}
              </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-md hover:shadow-indigo-500/20 transition-all duration-300"
          >
            <span>Talk to an Expert</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </motion.button>
        </div>
      </div>
    </section>
  );
};