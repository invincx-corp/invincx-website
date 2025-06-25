import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Palette, Smile, Shield, Heart } from 'lucide-react';

const values = [
  {
    icon: Sparkles,
    title: "Joy in Technology",
    cardTitle: "Technology Should Bring Joy",
    description: "Life's too short for boring software. Every interaction should bring a little spark of satisfaction, even if it's just checking your email.",
    color: "from-pink-500 to-rose-500",
    gradient: "from-pink-500/20 to-rose-500/20"
  },
  {
    icon: Palette,
    title: "Design for All",
    cardTitle: "Everyone Deserves Great Design",
    description: "Good design isn't a luxury—it's a necessity. Whether you're a Fortune 500 company or a one-person show, you deserve technology that feels thoughtfully crafted.",
    color: "from-purple-500 to-indigo-500",
    gradient: "from-purple-500/20 to-indigo-500/20"
  },
  {
    icon: Smile,
    title: "Playful Professionalism",
    cardTitle: "Playfulness is Professional",
    description: "The best solutions often come with a smile. We take your business seriously, but we don't take ourselves too seriously.",
    color: "from-amber-500 to-orange-500",
    gradient: "from-amber-500/20 to-orange-500/20"
  },
  {
    icon: Shield,
    title: "Trust Through Transparency",
    cardTitle: "Transparency Builds Trust",
    description: "No hidden fees, no confusing contracts, no tech speak. We explain everything in plain English because that's how real relationships work.",
    color: "from-emerald-500 to-teal-500",
    gradient: "from-emerald-500/20 to-teal-500/20"
  },
  {
    icon: Heart,
    title: "People-Centric Approach",
    cardTitle: "People First, Always",
    description: "Behind every business is a human being trying to make their life a little easier. That's who we're really building for.",
    color: "from-blue-500 to-cyan-500",
    gradient: "from-blue-500/20 to-cyan-500/20"
  }
];

const CompanyValues: React.FC = () => {
  return (
    <section className="py-32 relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.05),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(236,72,153,0.05),transparent_50%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full text-indigo-700 font-medium mb-6">
            <Heart className="w-4 h-4" />
            <span>Our Values</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-indigo-900 bg-clip-text text-transparent">
              What We
            </span>
            <br />
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Believe In
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our core values shape everything we do, from the products we build to the relationships we nurture.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${value.color} flex items-center justify-center flex-shrink-0 transform group-hover:scale-105 transition-transform duration-300`}>
                    <value.icon className="w-5 h-5 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {value.cardTitle}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl"
                     style={{ backgroundImage: `linear-gradient(to right, ${value.color})` }}></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyValues; 