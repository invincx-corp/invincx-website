import React from 'react';
import { Bot, Sparkles, ArrowRight, CheckCircle2, Code, Palette, BarChart, Shield, ChevronRight, Database, Smartphone } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    id: 'ai-agents',
    name: 'AI Agents',
    description: 'Smart automation that works for you',
    icon: Bot,
    isFlagship: true,
    features: [
      'Chatbots that understand your customers',
      'Smart document processing',
      'Automated workflows that save time',
      'Industry-specific solutions',
      'Always learning and improving'
    ],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=60'
  },
  {
    id: 'software-dev',
    name: 'Software Development',
    description: 'Custom software that grows with you',
    icon: Database,
    features: [
      'Tailored business software',
      'Cloud-based solutions',
      'Seamless system connections',
      'Fast and secure databases',
      'Built for scale'
    ],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=60'
  },
  {
    id: 'app-dev',
    name: 'App Development',
    description: 'Mobile apps that people love to use',
    icon: Smartphone,
    features: [
      'Native iOS and Android apps',
      'Cross-platform solutions',
      'Smart app features',
      'Works offline',
      'Easy to find and download'
    ],
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop&q=60'
  },
  {
    id: 1,
    name: "Brand Design",
    description: "Create a unique and memorable brand identity that resonates with your audience",
    icon: Palette,
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&auto=format&fit=crop&q=60",
    features: [
      "Logo design",
      "Brand guidelines",
      "Visual identity",
      "Brand strategy"
    ]
  },
  {
    id: 2,
    name: "Web Development",
    description: "Build modern, responsive websites that drive results",
    icon: Code,
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&auto=format&fit=crop&q=60",
    features: [
      "Custom Development",
      "E-commerce Solutions",
      "Web Applications",
      "Mobile First Design"
    ]
  },
  {
    id: 3,
    name: "Digital Marketing",
    description: "Grow your online presence and reach more customers",
    icon: BarChart,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60",
    features: [
      "SEO optimization",
      "Social media marketing",
      "Content strategy",
      "Email marketing"
    ]
  },
  {
    id: 'maintenance',
    name: 'Support & Maintenance',
    description: 'Keep your tech running smoothly',
    icon: Shield,
    features: [
      '24/7 system monitoring',
      'Automatic backups',
      'Security protection',
      'Quick tech support'
    ],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=60'
  }
];

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full text-indigo-700 font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Our Services</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-indigo-900 bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We don't just build one thing—we create your complete digital ecosystem. Then we make it so smart and efficient that it practically runs your business for you.
          </p>
        </div>

        {/* Service Cards */}
        <div className="space-y-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex flex-col lg:flex-row">
                  {/* Content Section */}
                  <div className={`lg:w-3/5 p-8 flex flex-col ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-r from-gray-100 to-gray-200 group-hover:from-indigo-100 group-hover:to-purple-100">
                        <IconComponent className="w-6 h-6 text-gray-600 group-hover:text-indigo-600" />
                  </div>
                  
                      <div>
                        <h3 className="text-3xl font-bold text-gray-900 mb-2">
                    {service.name}
                  </h3>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2 bg-gray-50 rounded-lg p-2">
                          <CheckCircle2 className="w-6 h-6 text-indigo-600 flex-shrink-0" />
                          <span className="text-lg text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <button className="group inline-flex items-center justify-center space-x-2 bg-indigo-50 text-indigo-600 px-6 py-2.5 rounded-lg hover:bg-indigo-100 font-medium text-lg mt-6 transition-all duration-300 border border-indigo-100">
                      <span>Work with us</span>
                      <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                  
                  {/* Image Section */}
                  <div className={`lg:w-2/5 relative h-[200px] lg:h-[300px] ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent lg:hidden" />
                    <img 
                      src={service.image} 
                      alt={service.name}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <button className="group inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-indigo-500/25 transform hover:-translate-y-0.5 transition-all duration-300">
            <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
        </div>
      </div>
    </section>
  );
};