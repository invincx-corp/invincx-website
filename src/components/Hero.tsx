import React, { useEffect, useState } from 'react';
import { ArrowRight, Play, Sparkles, TrendingUp, Users, Award, Globe } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { t } from '../services/translations';

const StatsSection: React.FC = () => {
  const stats = [
    { number: '500+', label: 'Projects Delivered', icon: TrendingUp },
    { number: '98%', label: 'Client Satisfaction', icon: Users },
    { number: '50+', label: 'AI Agents Built', icon: Sparkles },
    { number: '24/7', label: 'Global Support', icon: Globe }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="group relative">
                {/* Background Glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl opacity-0 blur transition-opacity duration-500 group-hover:opacity-20"></div>
                
                {/* Card */}
                <div className="relative bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:border-indigo-100 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-indigo-100 to-purple-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-indigo-900 bg-clip-text text-transparent">
                      {stat.number}
                    </div>
                  </div>
                  <div className="text-lg text-gray-600 font-medium">{stat.label}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export const Hero: React.FC = () => {
  const { language } = useLanguage();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-indigo-50">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-indigo-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"
          style={{
            left: mousePosition.x / 50,
            top: mousePosition.y / 50,
          }}
        ></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-pink-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
            <div className="space-y-12 text-center lg:text-left w-full lg:max-w-2xl">
              {/* Badge and Tagline */}
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full text-indigo-700 font-medium">
                  <Sparkles className="w-4 h-4" />
                  <span>Transforming Ideas into Digital Reality</span>
                </div>
              </div>

              {/* Main Heading with Improved Typography */}
              <div className="space-y-6">
                <h4 className="text-3xl lg:text-5xl font-bold leading-tight tracking-tight">
                  <span className="block text-gray-900 mb-2">
                    We Build Your
                  </span>
                  <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                    Entire Digital Presence—
                  </span>
                  <span className="block text-gray-900">
                    Then Make It Work For You 24/7
                  </span>
                </h4>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto lg:mx-0">
                  We create your full digital presence and supercharge it with AI agents that save you 70% of your time, money, and energy—so your brand attracts, engages, and runs itself while you focus on what you love.
                </p>
              </div>

              {/* CTA Buttons with Enhanced Design */}
              <div className="flex flex-col sm:flex-row gap-8 justify-center lg:justify-start">
                <button className="group relative px-12 py-4 w-full sm:w-auto min-w-[220px] bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-2xl overflow-hidden transform hover:-translate-y-1 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/25">
                  <span className="relative z-10 flex items-center justify-center space-x-5">
                    <span>Build My Digital Empire</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                
                <button className="group flex items-center justify-center space-x-5 px-12 py-1 w-full sm:w-auto min-w-[220px] border-2 border-gray-200 text-gray-700 font-semibold rounded-2xl hover:border-indigo-300 hover:text-indigo-600 transition-all duration-300 hover:shadow-lg">
                  <div className="w-10 h-10 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-4 h-4 text-indigo-600 ml-0.5" />
                  </div>
                  <span>Show Me The 70% Savings</span>
                </button>
              </div>
            </div>

          {/* Right Column - Visual */}
          <div className="relative">
            {/* Main Card */}
            <div className="relative">
              {/* Floating Cards */}
                <div className="absolute -top-12 -left-12 w-40 h-40 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl shadow-2xl transform rotate-12 animate-pulse"></div>
                <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-gradient-to-br from-pink-500 to-orange-500 rounded-3xl shadow-2xl transform -rotate-12 animate-pulse delay-1000"></div>
              
              {/* Main Dashboard */}
                <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-white/20">
                {/* Header */}
                  <div className="flex items-center space-x-4 mb-8">
                  <div className="flex space-x-2">
                      <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                      <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                      <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="text-base text-gray-500 font-medium">Invincx Dashboard</div>
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
                        <Sparkles className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-xl font-semibold text-gray-900">AI Project Analysis</div>
                        <div className="text-base text-gray-500">Intelligent recommendations ready</div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-6">
                      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 border border-indigo-100">
                        <div className="text-3xl font-bold text-indigo-600">94%</div>
                        <div className="text-sm text-indigo-500 font-medium">Success Rate</div>
                      </div>
                      <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-100">
                        <div className="text-3xl font-bold text-green-600">2.3x</div>
                        <div className="text-sm text-green-500 font-medium">ROI Average</div>
                    </div>
                  </div>
                  
                    <div className="space-y-3">
                      <div className="flex justify-between text-base">
                      <span className="text-gray-600">Project Progress</span>
                      <span className="text-gray-900 font-medium">87%</span>
                    </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 h-3 rounded-full w-[87%] animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
      <StatsSection />
    </>
  );
};

export default Hero;