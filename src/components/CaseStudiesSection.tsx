import React, { useState } from 'react';
import { Search, Filter, ArrowRight, TrendingUp, Clock, Users, Award, ExternalLink, ArrowUpRight } from 'lucide-react';
import { caseStudies } from '../services/data';
import { motion } from 'framer-motion';

export const CaseStudiesSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSize, setSelectedSize] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['All', ...Array.from(new Set(caseStudies.map(cs => cs.category)))];
  const companySizes = ['All', 'startup', 'small', 'medium', 'enterprise'];

  const filteredCaseStudies = caseStudies.filter(cs => {
    const matchesCategory = selectedCategory === 'All' || cs.category === selectedCategory;
    const matchesSize = selectedSize === 'All' || cs.companySize === selectedSize;
    const matchesSearch = cs.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         cs.industry.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesSize && matchesSearch;
  });

  return (
    <section id="case-studies" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full text-indigo-700 font-medium mb-6">
            <Award className="w-4 h-4" />
            <span>Success Stories</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-indigo-900 bg-clip-text text-transparent">
              Success Stories
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Real transformations, measurable impact. See how we've helped businesses achieve extraordinary growth.
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 mb-16">
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search success stories..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all duration-300"
              />
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all duration-300 bg-white"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>

            {/* Company Size Filter */}
            <select
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
              className="px-4 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all duration-300 bg-white"
            >
              <option value="All">All Company Sizes</option>
              <option value="startup">Startup</option>
              <option value="small">Small Business</option>
              <option value="medium">Medium Enterprise</option>
              <option value="enterprise">Large Enterprise</option>
            </select>
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCaseStudies.map((caseStudy, index) => (
            <motion.div
              key={caseStudy.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 group-hover:border-indigo-200">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={caseStudy.image}
                    alt={caseStudy.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  {/* Badges */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2 py-0.5 bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-medium rounded-full">
                      {caseStudy.category}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="px-2 py-0.5 bg-indigo-600 text-white text-xs font-medium rounded-full capitalize">
                      {caseStudy.companySize}
                    </span>
                  </div>
                  
                  {/* Client Info */}
                  <div className="absolute bottom-3 left-3 text-white">
                    <h3 className="text-lg font-bold mb-0.5">{caseStudy.title}</h3>
                    <p className="text-white/80 text-xs">{caseStudy.client} • {caseStudy.industry}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  {/* Meta Info */}
                  <div className="flex items-center space-x-4 mb-3 text-xs text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{caseStudy.timeline}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-3 h-3" />
                      <span>{caseStudy.companySize}</span>
                    </div>
                  </div>

                  {/* Challenge & Solution */}
                  <div className="space-y-2 mb-3">
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm mb-1">Challenge</h4>
                      <p className="text-gray-600 text-xs leading-relaxed line-clamp-2">{caseStudy.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm mb-1">Solution</h4>
                      <p className="text-gray-600 text-xs leading-relaxed line-clamp-2">{caseStudy.solution}</p>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="mb-3">
                    <h4 className="font-semibold text-gray-900 text-sm mb-2 flex items-center space-x-1">
                      <TrendingUp className="w-3 h-3 text-indigo-500" />
                      <span>Key Results</span>
                    </h4>
                    <div className="space-y-1">
                      {caseStudy.results.slice(0, 1).map((result, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <div className="w-4 h-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                          </div>
                          <span className="text-xs text-gray-700 font-medium line-clamp-2">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-3">
                    <h4 className="font-semibold text-gray-900 text-sm mb-2">Technologies</h4>
                    <div className="flex flex-wrap gap-1">
                      {caseStudy.technologies.slice(0, 3).map((tech, idx) => (
                        <span key={idx} className="px-2 py-0.5 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 text-xs font-medium rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <button className="group inline-flex items-center space-x-1 text-indigo-600 hover:text-indigo-700 font-semibold text-sm transition-colors">
                    <span>Read Full Case Study</span>
                    <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <a 
            href="/case-studies"
            className="group inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-2xl hover:shadow-lg hover:shadow-indigo-500/25 transform hover:-translate-y-0.5 transition-all duration-300"
          >
            <span>View All Success Stories</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
};