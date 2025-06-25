{/* Vision & Mission Section - Total Makeover */}
<div className="py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
  {/* Enhanced Background decorative elements */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full opacity-50 blur-3xl animate-pulse"></div>
    <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full opacity-50 blur-3xl animate-pulse delay-1000"></div>
    <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-full opacity-30 blur-3xl animate-pulse delay-2000"></div>
    <div className="absolute top-1/3 right-1/3 w-48 h-48 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full opacity-20 blur-2xl animate-pulse delay-3000"></div>
  </div>

  <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
    {/* Enhanced Header Section */}
    <motion.div
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
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
          <div className="text-2xl font-bold text-indigo-600 mb-1">1000+</div>
          <div className="text-sm text-gray-600">Lives Impacted</div>
        </div>
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
          <div className="text-2xl font-bold text-purple-600 mb-1">500+</div>
          <div className="text-sm text-gray-600">Projects Delivered</div>
        </div>
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
          <div className="text-2xl font-bold text-pink-600 mb-1">98%</div>
          <div className="text-sm text-gray-600">Success Rate</div>
        </div>
      </div>
    </motion.div>

    {/* Main Content Grid */}
    <div className="max-w-7xl mx-auto">
      {/* Vision Section - Enhanced */}
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
            <div className="group relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl"></div>
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/20">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-500 shadow-lg">
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
                    <div className="flex items-center space-x-3 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-4 border border-indigo-100">
                      <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-sm">1</span>
                      </div>
                      <span className="text-gray-700 font-medium">Human-centered AI that understands emotions</span>
                    </div>
                    <div className="flex items-center space-x-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4 border border-purple-100">
                      <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-sm">2</span>
                      </div>
                      <span className="text-gray-700 font-medium">Intuitive interfaces that bring joy to work</span>
                    </div>
                    <div className="flex items-center space-x-3 bg-gradient-to-r from-pink-50 to-orange-50 rounded-xl p-4 border border-pink-100">
                      <div className="w-8 h-8 bg-pink-500 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-sm">3</span>
                      </div>
                      <span className="text-gray-700 font-medium">Technology that serves people, not the other way around</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Vision Visual */}
          <div className="relative">
            <div className="absolute -inset-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl opacity-20 blur-3xl"></div>
            <div className="relative bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-600 rounded-3xl p-12 text-white overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
              
              <div className="relative z-10">
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
        </div>
      </motion.div>

      {/* Mission Section - Enhanced */}
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
            <div className="absolute -inset-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-3xl opacity-20 blur-3xl"></div>
            <div className="relative bg-gradient-to-br from-purple-500 via-pink-600 to-orange-600 rounded-3xl p-12 text-white overflow-hidden">
              <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 -translate-x-16"></div>
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 translate-x-12"></div>
              
              <div className="relative z-10">
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
          </div>

          {/* Right: Mission Content */}
          <div className="space-y-8 order-1 lg:order-2">
            <div className="group relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-pink-600 rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl"></div>
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/20">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-500 shadow-lg">
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
                    <div className="flex items-center space-x-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4 border border-purple-100">
                      <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-sm">A</span>
                      </div>
                      <span className="text-gray-700 font-medium">Automate the boring, amplify the creative</span>
                    </div>
                    <div className="flex items-center space-x-3 bg-gradient-to-r from-pink-50 to-orange-50 rounded-xl p-4 border border-pink-100">
                      <div className="w-8 h-8 bg-pink-500 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-sm">B</span>
                      </div>
                      <span className="text-gray-700 font-medium">Build technology that people actually love using</span>
                    </div>
                    <div className="flex items-center space-x-3 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-4 border border-orange-100">
                      <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-sm">C</span>
                      </div>
                      <span className="text-gray-700 font-medium">Create solutions that grow with your business</span>
                    </div>
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
        <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-12 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative z-10">
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
        </div>
      </motion.div>
    </div>
  </div>
</div> 