import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Users, Brain, Accessibility } from 'lucide-react';

const KeyDifferentiators: React.FC = () => {
  const features = [
    {
      icon: Heart,
      title: "We Make Technology Feel Human",
      description: "While others focus on features and functions, we focus on feelings and experiences. Our solutions don't just work—they make you feel good about using them.",
      gradient: "from-pink-500 to-rose-500"
    },
    {
      icon: Sparkles,
      title: "Playful Innovation",
      description: "We believe the best solutions are the ones that make you smile. Every product we create has a touch of personality and unexpected delight.",
      gradient: "from-purple-500 to-indigo-500"
    },
    {
      icon: Users,
      title: "Built for Real People",
      description: "No tech jargon, no complicated interfaces, no PhD required. If your grandmother can't figure it out in 5 minutes, we redesign it.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Brain,
      title: "Always Learning, Always Improving",
      description: "Our AI assistants get smarter with every interaction, and we're constantly finding new ways to make your experience even better.",
      gradient: "from-indigo-500 to-violet-500"
    },
    {
      icon: Accessibility,
      title: "Accessible to Everyone",
      description: "Whether you're tech-savvy or tech-challenged, whether you're using a phone or a computer, our solutions work beautifully for everyone.",
      gradient: "from-violet-500 to-purple-500"
    }
  ];

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Playful Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.08),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(236,72,153,0.08),transparent_50%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full text-indigo-700 font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Key Features</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-indigo-900 bg-clip-text text-transparent">
              Why Clients Choose Us
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover what makes us different and why our clients keep coming back for more.
          </p>
        </div>

        {/* Features Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="relative bg-white rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Playful Decorative Elements */}
                  <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                  <div className="absolute -top-2 -left-2 w-16 h-16 bg-gradient-to-r from-pink-100 to-rose-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default KeyDifferentiators; 