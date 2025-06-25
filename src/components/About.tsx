import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Zap, Users, Award, TrendingUp, Sparkles, Smile, Lightbulb, Heart, Globe, Star, User, ArrowRight, Linkedin, Twitter, Github, CheckCircle2, BookOpen } from 'lucide-react';

const aboutStats = [
  { icon: Users, label: 'Clients Worldwide', value: '200+' },
  { icon: Award, label: 'Awards Won', value: '15' },
  { icon: TrendingUp, label: 'Growth Rate', value: '120% YoY' },
  { icon: Sparkles, label: 'AI Projects', value: '50+' },
];

const values = [
  { icon: Smile, title: 'Human-First Technology', desc: 'Technology should serve people and bring joy to daily experiences.' },
  { icon: Lightbulb, title: 'Playful Innovation', desc: 'We spark curiosity and delight, infusing playfulness into practical solutions.' },
  { icon: Heart, title: 'Lasting Engagement', desc: 'We design products people want to use and keep using forever.' },
  { icon: Globe, title: 'Accessibility & Inclusion', desc: 'Joyful technology for everyone, regardless of ability or background.' },
  { icon: Star, title: 'Transparency & Ethics', desc: 'We ensure positive value and ethical development in all we do.' },
  { icon: Zap, title: 'Continuous Learning', desc: 'We stay at the forefront of human-centered technology.' },
  { icon: User, title: 'Partnership Approach', desc: 'We work as partners, not just providers, to help clients grow.' },
];

const team = [
  {
    name: 'Sara Tarannum',
    role: 'Founder & CEO',
    img: 'https://randomuser.me/api/portraits/women/44.jpg',
    quote: 'Vision drives innovation.'
  },
  {
    name: 'Alex Kim',
    role: 'CTO',
    img: 'https://randomuser.me/api/portraits/men/32.jpg',
    quote: 'Tech is best when it brings people together.'
  },
  {
    name: 'Priya Singh',
    role: 'Lead Designer',
    img: 'https://randomuser.me/api/portraits/women/68.jpg',
    quote: 'Design is intelligence made visible.'
  },
  {
    name: 'David Lee',
    role: 'AI Architect',
    img: 'https://randomuser.me/api/portraits/men/76.jpg',
    quote: 'AI should feel like magic.'
  },
  {
    name: 'Maria Garcia',
    role: 'Product Manager',
    img: 'https://randomuser.me/api/portraits/women/85.jpg',
    quote: 'Great products are built with empathy.'
  },
];

export const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Vision & Mission Section */}
      <div className="py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Header Section */}
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full text-indigo-700 font-medium mb-6">
              <Lightbulb className="w-4 h-4" />
              <span>Our Purpose</span>
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 to-indigo-900 bg-clip-text text-transparent">
                Vision &
              </span>
              <br />
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Mission
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              We're not just building technology—we're crafting experiences that make people smile and businesses thrive.
            </p>

            {/* Vision Mission Stats */}
            <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl opacity-0 blur transition-opacity duration-500 group-hover:opacity-20"></div>
                <div className="relative bg-white rounded-2xl p-4 shadow-lg border border-gray-100 hover:border-indigo-100 hover:shadow-xl transition-all duration-300">
                  <div className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-indigo-900 bg-clip-text text-transparent mb-1">1000+</div>
                  <div className="text-sm text-gray-600">Lives Impacted</div>
                </div>
              </div>
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl opacity-0 blur transition-opacity duration-500 group-hover:opacity-20"></div>
                <div className="relative bg-white rounded-2xl p-4 shadow-lg border border-gray-100 hover:border-indigo-100 hover:shadow-xl transition-all duration-300">
                  <div className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-indigo-900 bg-clip-text text-transparent mb-1">500+</div>
                  <div className="text-sm text-gray-600">Projects Delivered</div>
                </div>
              </div>
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl opacity-0 blur transition-opacity duration-500 group-hover:opacity-20"></div>
                <div className="relative bg-white rounded-2xl p-4 shadow-lg border border-gray-100 hover:border-indigo-100 hover:shadow-xl transition-all duration-300">
                  <div className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-indigo-900 bg-clip-text text-transparent mb-1">98%</div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Main Content Grid */}
          <div className="max-w-7xl mx-auto">
            {/* Vision Section */}
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-20"
            >
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left: Vision Content */}
                <div className="space-y-8">
                  <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-indigo-100">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <Lightbulb className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-gray-900">Our Vision</h3>
                        <p className="text-indigo-600 font-medium">The future we're building</p>
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      <p className="text-2xl text-gray-700 font-semibold leading-tight">
                        A world where technology makes every day a little brighter
                      </p>
                      
                      <p className="text-lg text-gray-600 leading-relaxed">
                        We envision a future where interacting with technology feels as natural and enjoyable as having a conversation with your best friend—where AI assistants have personality, where websites anticipate your needs, and where managing your business brings genuine satisfaction instead of stress.
                      </p>

                      {/* Vision Pillars */}
                      <div className="grid grid-cols-1 gap-4 mt-8">
                        <div className="flex items-center space-x-3 bg-gray-50 rounded-xl p-4 border border-gray-100">
                          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-sm">1</span>
                          </div>
                          <span className="text-gray-700 font-medium">Human-centered AI that understands emotions</span>
                        </div>
                        <div className="flex items-center space-x-3 bg-gray-50 rounded-xl p-4 border border-gray-100">
                          <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-sm">2</span>
                          </div>
                          <span className="text-gray-700 font-medium">Intuitive interfaces that bring joy to work</span>
                        </div>
                        <div className="flex items-center space-x-3 bg-gray-50 rounded-xl p-4 border border-gray-100">
                          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-sm">3</span>
                          </div>
                          <span className="text-gray-700 font-medium">Technology that serves people, not the other way around</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: Vision Visual */}
                <div className="relative">
                  <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-12 text-white">
                    <div className="text-8xl mb-6">🌟</div>
                    <h4 className="text-3xl font-bold mb-4">The Future We See</h4>
                    <p className="text-xl text-indigo-100 mb-8">
                      Where every interaction with technology feels magical and meaningful
                    </p>
                    
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <CheckCircle2 className="w-6 h-6 text-green-300" />
                        <span className="text-indigo-100">AI that feels human</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle2 className="w-6 h-6 text-green-300" />
                        <span className="text-indigo-100">Work that brings joy</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle2 className="w-6 h-6 text-green-300" />
                        <span className="text-indigo-100">Technology that serves us</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Mission Section */}
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-20"
            >
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left: Mission Visual */}
                <div className="relative order-2 lg:order-1">
                  <div className="bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl p-12 text-white">
                    <div className="text-8xl mb-6">💝</div>
                    <h4 className="text-3xl font-bold mb-4">Our Mission</h4>
                    <p className="text-xl text-purple-100 mb-8">
                      Transforming every interaction into an opportunity for delight
                    </p>
                    
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Heart className="w-6 h-6 text-pink-300" />
                        <span className="text-purple-100">Create meaningful experiences</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Heart className="w-6 h-6 text-pink-300" />
                        <span className="text-purple-100">Solve problems with joy</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Heart className="w-6 h-6 text-pink-300" />
                        <span className="text-purple-100">Make work feel like play</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: Mission Content */}
                <div className="space-y-8 order-1 lg:order-2">
                  <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-indigo-100">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <Heart className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-gray-900">Our Mission</h3>
                        <p className="text-purple-600 font-medium">What drives us forward</p>
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      <p className="text-2xl text-gray-700 font-semibold leading-tight">
                        To transform mundane moments into meaningful experiences
                      </p>
                      
                      <p className="text-lg text-gray-600 leading-relaxed">
                        We create AI assistants and digital solutions that don't just solve problems—they make the solving enjoyable. Every product we build is designed to bring more joy, efficiency, and humanity to your daily work.
                      </p>

                      {/* Mission Goals */}
                      <div className="grid grid-cols-1 gap-4 mt-8">
                        <div className="flex items-center space-x-3 bg-gray-50 rounded-xl p-4 border border-gray-100">
                          <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-sm">A</span>
                          </div>
                          <span className="text-gray-700 font-medium">Automate the boring, amplify the creative</span>
                        </div>
                        <div className="flex items-center space-x-3 bg-gray-50 rounded-xl p-4 border border-gray-100">
                          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-sm">B</span>
                          </div>
                          <span className="text-gray-700 font-medium">Build technology that people actually love using</span>
                        </div>
                        <div className="flex items-center space-x-3 bg-gray-50 rounded-xl p-4 border border-gray-100">
                          <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-sm">C</span>
                          </div>
                          <span className="text-gray-700 font-medium">Create solutions that grow with your business</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Call to Action Section */}
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-12 text-white">
                <h3 className="text-3xl font-bold mb-4">Ready to Experience the Future?</h3>
                <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
                  Join us in creating technology that doesn't just work—it makes work feel wonderful.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="group inline-flex items-center space-x-3 px-8 py-4 bg-white text-indigo-600 font-semibold rounded-xl hover:shadow-lg hover:shadow-white/25 transform hover:-translate-y-0.5 transition-all duration-300">
                    <span>Start Your Journey</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                  <button className="group inline-flex items-center space-x-3 px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transform hover:-translate-y-0.5 transition-all duration-300">
                    <span>Learn More</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full text-indigo-700 font-medium mb-6">
              <BookOpen className="w-4 h-4" />
              <span>Our Story</span>
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 to-indigo-900 bg-clip-text text-transparent">
                How We Fell in Love
              </span>
              <br />
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                with Making Work Fun
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              This isn't just a company story—it's a love story. A love story between humans and technology, between efficiency and joy, between work and play.
            </p>
          </motion.div>
              
          {/* Story Steps */}
          <div className="space-y-16">
            {/* Step 1: The Question */}
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative group"
            >
              <div className="flex flex-col lg:flex-row items-center gap-8">
                {/* Left Content */}
                <div className="lg:w-1/2 lg:pr-8 order-2 lg:order-1">
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-indigo-100">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <span className="text-2xl font-bold text-white">1</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">The Question</h3>
                        <p className="text-indigo-600 font-medium">The spark that started it all</p>
                      </div>
                    </div>
                    <div className="space-y-4 text-gray-600">
                      <p className="text-lg leading-relaxed">
                        It started with a simple question: <span className="font-semibold text-gray-900">"Why does business software have to be so... boring?"</span>
                      </p>
                      <p className="text-lg leading-relaxed">
                        Our founder was sitting in yet another mind-numbing meeting about process optimization when it hit them—what if technology could actually make work enjoyable?
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Right Visual */}
                <div className="lg:w-1/2 lg:pl-8 order-1 lg:order-2">
                  <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-8 text-white">
                    <div className="text-6xl font-bold mb-4">🤔</div>
                    <h4 className="text-xl font-bold mb-2">The Moment of Clarity</h4>
                    <p className="text-indigo-100">When everything changed</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Step 2: The Research */}
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative group"
            >
              <div className="flex flex-col lg:flex-row items-center gap-8">
                {/* Left Visual */}
                <div className="lg:w-1/2 lg:pr-8">
                  <div className="bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl p-8 text-white">
                    <div className="text-6xl font-bold mb-4">📊</div>
                    <h4 className="text-xl font-bold mb-2">Deep Research</h4>
                    <p className="text-purple-100">Understanding the pain points</p>
                  </div>
                </div>
                
                {/* Right Content */}
                <div className="lg:w-1/2 lg:pl-8">
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-indigo-100">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <span className="text-2xl font-bold text-white">2</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">The Research</h3>
                        <p className="text-purple-600 font-medium">Understanding the problem</p>
                      </div>
                    </div>
                    <div className="space-y-4 text-gray-600">
                      <p className="text-lg leading-relaxed">
                        That spark of curiosity became an obsession. We spent months talking to business owners, employees, and customers.
                      </p>
                      <div className="grid grid-cols-2 gap-4 mt-6">
                        <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                          <div className="text-2xl font-bold text-indigo-600">500+</div>
                          <div className="text-sm text-indigo-600">Interviews</div>
                        </div>
                        <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                          <div className="text-2xl font-bold text-purple-600">1000+</div>
                          <div className="text-sm text-purple-600">Pain Points</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Step 3: The Promise */}
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="relative group"
            >
              <div className="flex flex-col lg:flex-row items-center gap-8">
                {/* Left Content */}
                <div className="lg:w-1/2 lg:pr-8 order-2 lg:order-1">
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-indigo-100">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <span className="text-2xl font-bold text-white">3</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">The Promise</h3>
                        <p className="text-indigo-600 font-medium">Our commitment to excellence</p>
                      </div>
                    </div>
                    <div className="space-y-4 text-gray-600">
                      <p className="text-lg leading-relaxed">
                        So we made a promise: every product we create must pass the <span className="font-semibold text-gray-900">"Would my mom actually enjoy using this?"</span> test.
                      </p>
                      <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                        <p className="text-lg font-semibold text-indigo-700 mb-2">Our Test Criteria:</p>
                        <ul className="space-y-2 text-indigo-600">
                          <li className="flex items-center space-x-2">
                            <CheckCircle2 className="w-5 h-5 text-indigo-500" />
                            <span>Intuitive enough for her</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <CheckCircle2 className="w-5 h-5 text-indigo-500" />
                            <span>Delightful enough to make her smile</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <CheckCircle2 className="w-5 h-5 text-indigo-500" />
                            <span>Useful enough to genuinely improve her day</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Right Visual */}
                <div className="lg:w-1/2 lg:pl-8 order-1 lg:order-2">
                  <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-8 text-white">
                    <div className="text-6xl font-bold mb-4">🤝</div>
                    <h4 className="text-xl font-bold mb-2">The Promise</h4>
                    <p className="text-indigo-100">Quality over everything</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Step 4: The Impact */}
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="relative group"
            >
              <div className="flex flex-col lg:flex-row items-center gap-8">
                {/* Left Visual */}
                <div className="lg:w-1/2 lg:pr-8">
                  <div className="bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl p-8 text-white">
                    <div className="text-6xl font-bold mb-4">🚀</div>
                    <h4 className="text-xl font-bold mb-2">The Impact</h4>
                    <p className="text-purple-100">Transforming businesses</p>
                  </div>
                </div>
                
                {/* Right Content */}
                <div className="lg:w-1/2 lg:pl-8">
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-indigo-100">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <span className="text-2xl font-bold text-white">4</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">The Impact</h3>
                        <p className="text-purple-600 font-medium">Real results, real change</p>
                      </div>
                    </div>
                    <div className="space-y-4 text-gray-600">
                      <p className="text-lg leading-relaxed">
                        Today, we've helped thousands of businesses transform their most tedious tasks into something they actually look forward to.
                      </p>
                      <div className="grid grid-cols-2 gap-4 mt-6">
                        <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                          <div className="text-2xl font-bold text-indigo-600">1000+</div>
                          <div className="text-sm text-indigo-600">Businesses</div>
                        </div>
                        <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                          <div className="text-2xl font-bold text-purple-600">70%</div>
                          <div className="text-sm text-purple-600">Time Saved</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Make Work Fun?</h3>
            <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses that have already transformed their daily operations with our human-centered technology.
            </p>
            <button className="group inline-flex items-center space-x-3 px-8 py-4 bg-white text-indigo-600 font-semibold rounded-xl hover:shadow-lg hover:shadow-white/25 transform hover:-translate-y-0.5 transition-all duration-300">
              <span>Start Your Transformation</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Values Section */}
      <div className="py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full text-indigo-700 font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Our Values</span>
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 to-indigo-900 bg-clip-text text-transparent">
                What Drives
              </span>
              <br />
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Us Forward
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {values.map((value, index) => (
              <div
                key={value.title}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 hover:border-indigo-100"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full text-indigo-700 font-medium mb-6">
              <Users className="w-4 h-4" />
              <span>Our Team</span>
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 to-indigo-900 bg-clip-text text-transparent">
                Meet the
              </span>
              <br />
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Dream Team
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're a passionate group of innovators, problem-solvers, and tech enthusiasts who believe in making a difference through technology.
            </p>
          </motion.div>

          {/* Team Stats */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
          >
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">25+</div>
              <div className="text-gray-600">Team Members</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">10+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">100+</div>
              <div className="text-gray-600">Projects Delivered</div>
            </div>
          </motion.div>

          {/* Team Members Grid */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                name: "Sarah Johnson",
                role: "CEO & Founder",
                image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
                bio: "Visionary leader with 15+ years in tech innovation",
                linkedin: "#",
                twitter: "#"
              },
              {
                name: "Michael Chen",
                role: "CTO",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
                bio: "Tech architect passionate about scalable solutions",
                linkedin: "#",
                twitter: "#"
              },
              {
                name: "Emily Rodriguez",
                role: "Head of Design",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
                bio: "Creative director focused on user experience",
                linkedin: "#",
                twitter: "#"
              },
              {
                name: "David Kim",
                role: "Lead Developer",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
                bio: "Full-stack expert with a love for clean code",
                linkedin: "#",
                twitter: "#"
              },
              {
                name: "Lisa Thompson",
                role: "Product Manager",
                image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face",
                bio: "Strategic thinker who bridges business and technology",
                linkedin: "#",
                twitter: "#"
              },
              {
                name: "Alex Martinez",
                role: "DevOps Engineer",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
                bio: "Infrastructure specialist ensuring seamless deployments",
                linkedin: "#",
                twitter: "#"
              }
            ].map((member, index) => (
              <div
                key={member.name}
                className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 hover:border-indigo-100"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  {/* Profile Image */}
                  <div className="relative mb-6">
                    <div className="w-24 h-24 mx-auto rounded-2xl overflow-hidden border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-300">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg">
                      {member.role}
                    </div>
                  </div>
                  
                  {/* Member Info */}
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                    
                    {/* Social Links */}
                    <div className="flex justify-center space-x-3">
                      <a
                        href={member.linkedin}
                        className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center text-white hover:shadow-lg hover:shadow-indigo-500/25 transform hover:scale-110 transition-all duration-300"
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                      <a
                        href={member.twitter}
                        className="w-8 h-8 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center text-white hover:shadow-lg hover:shadow-purple-500/25 transform hover:scale-110 transition-all duration-300"
                      >
                        <Twitter className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Team Culture CTA */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-20 text-center"
          >
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-12 text-white">
              <h3 className="text-3xl font-bold mb-4">Join Our Team</h3>
              <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
                We're always looking for passionate individuals who share our vision of making technology work better for everyone.
              </p>
              <button className="group inline-flex items-center space-x-3 px-8 py-4 bg-white text-indigo-600 font-semibold rounded-xl hover:shadow-lg hover:shadow-white/25 transform hover:-translate-y-0.5 transition-all duration-300">
                <span>View Open Positions</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About; 