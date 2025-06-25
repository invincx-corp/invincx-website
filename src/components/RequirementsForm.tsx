import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, CheckCircle, Lightbulb, Calculator, User, Briefcase, Target, DollarSign, Phone, Sparkles, Brain, Zap } from 'lucide-react';
import { FormData } from '../types';

export const RequirementsForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<Partial<FormData>>({
    projectGoals: [],
    features: [],
    preferences: {
      platform: '',
      designStyle: '',
      performance: ''
    },
    contact: {
      name: '',
      email: '',
      phone: '',
      company: ''
    }
  });

  const totalSteps = 4;

  const updateFormData = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const updateNestedFormData = (parent: string, field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [parent]: { ...prev[parent as keyof typeof prev], [field]: value }
    }));
  };

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, totalSteps));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  const toggleArrayItem = (field: string, item: string) => {
    const currentArray = formData[field as keyof FormData] as string[] || [];
    const newArray = currentArray.includes(item)
      ? currentArray.filter(i => i !== item)
      : [...currentArray, item];
    updateFormData(field, newArray);
  };

  const getEstimate = () => {
    const basePrice = 50000;
    const goalMultiplier = (formData.projectGoals?.length || 1) * 0.3;
    const featureMultiplier = (formData.features?.length || 1) * 0.5;
    const budgetFactor = formData.budget ? formData.budget / 100000 : 1;
    
    return Math.round(basePrice * (1 + goalMultiplier + featureMultiplier) * budgetFactor);
  };

  const stepIcons = [User, Target, Brain, Phone];
  const stepTitles = [
    'Business Profile',
    'Project Goals',
    'Technical Preferences',
    'Let\'s Connect'
  ];

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <User className="w-10 h-10 text-indigo-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-3">Tell us about your business</h3>
              <p className="text-gray-600 text-lg">Help us understand your business context and goals</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Business Type</label>
                  <select
                    value={formData.businessType || ''}
                    onChange={(e) => updateFormData('businessType', e.target.value)}
                    className="w-full px-4 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all duration-300 bg-white"
                  >
                    <option value="">Select business type</option>
                    <option value="startup">Startup</option>
                    <option value="small-business">Small Business</option>
                    <option value="medium-enterprise">Medium Enterprise</option>
                    <option value="large-enterprise">Large Enterprise</option>
                    <option value="solopreneur">Solopreneur</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Industry</label>
                  <select
                    value={formData.industry || ''}
                    onChange={(e) => updateFormData('industry', e.target.value)}
                    className="w-full px-4 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all duration-300 bg-white"
                  >
                    <option value="">Select industry</option>
                    <option value="ecommerce">E-commerce</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="fintech">Fintech</option>
                    <option value="education">Education</option>
                    <option value="food-beverage">Food & Beverage</option>
                    <option value="real-estate">Real Estate</option>
                    <option value="manufacturing">Manufacturing</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Team Size</label>
                  <select
                    value={formData.teamSize || ''}
                    onChange={(e) => updateFormData('teamSize', e.target.value)}
                    className="w-full px-4 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all duration-300 bg-white"
                  >
                    <option value="">Select team size</option>
                    <option value="1-5">1-5 people</option>
                    <option value="6-20">6-20 people</option>
                    <option value="21-50">21-50 people</option>
                    <option value="51-100">51-100 people</option>
                    <option value="100+">100+ people</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Current Tech Setup</label>
                  <select
                    value={formData.currentTech || ''}
                    onChange={(e) => updateFormData('currentTech', e.target.value)}
                    className="w-full px-4 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all duration-300 bg-white"
                  >
                    <option value="">Select current setup</option>
                    <option value="none">No current tech solution</option>
                    <option value="basic">Basic website/tools</option>
                    <option value="moderate">Some digital tools</option>
                    <option value="advanced">Advanced tech stack</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-100 to-pink-100 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <Target className="w-10 h-10 text-purple-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-3">Project Goals & Features</h3>
              <p className="text-gray-600 text-lg">What do you want to achieve with this project?</p>
            </div>

            <div className="space-y-8">
              <div>
                <label className="block text-lg font-semibold text-gray-700 mb-6">Project Goals (Select all that apply)</label>
                <div className="grid lg:grid-cols-2 gap-4">
                  {[
                    'Increase online presence',
                    'Improve customer experience',
                    'Automate business processes',
                    'Increase sales/revenue',
                    'Better data analytics',
                    'Mobile accessibility',
                    'Scale operations',
                    'Reduce manual work'
                  ].map((goal, index) => (
                    <button
                      key={index}
                      onClick={() => toggleArrayItem('projectGoals', goal)}
                      className={`group p-4 rounded-2xl border-2 text-left transition-all duration-300 ${
                        formData.projectGoals?.includes(goal)
                          ? 'border-purple-500 bg-gradient-to-r from-purple-50 to-pink-50 shadow-lg shadow-purple-500/10'
                          : 'border-gray-200 hover:border-purple-300 hover:bg-purple-50'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`w-6 h-6 rounded-lg flex items-center justify-center transition-all duration-300 ${
                          formData.projectGoals?.includes(goal) 
                            ? 'bg-gradient-to-r from-purple-600 to-pink-600' 
                            : 'bg-gray-200 group-hover:bg-purple-200'
                        }`}>
                          <CheckCircle className={`w-4 h-4 ${
                            formData.projectGoals?.includes(goal) ? 'text-white' : 'text-gray-400'
                          }`} />
                        </div>
                        <span className="font-medium text-gray-900">{goal}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-lg font-semibold text-gray-700 mb-6">Required Features</label>
                <div className="grid lg:grid-cols-2 gap-4">
                  {[
                    'User authentication',
                    'Payment processing',
                    'Content management',
                    'Analytics dashboard',
                    'Mobile app',
                    'API integration',
                    'Search functionality',
                    'Multi-language support'
                  ].map((feature, index) => (
                    <button
                      key={index}
                      onClick={() => toggleArrayItem('features', feature)}
                      className={`group p-4 rounded-2xl border-2 text-left transition-all duration-300 ${
                        formData.features?.includes(feature)
                          ? 'border-indigo-500 bg-gradient-to-r from-indigo-50 to-purple-50 shadow-lg shadow-indigo-500/10'
                          : 'border-gray-200 hover:border-indigo-300 hover:bg-indigo-50'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`w-6 h-6 rounded-lg flex items-center justify-center transition-all duration-300 ${
                          formData.features?.includes(feature) 
                            ? 'bg-gradient-to-r from-indigo-600 to-purple-600' 
                            : 'bg-gray-200 group-hover:bg-indigo-200'
                        }`}>
                          <Zap className={`w-4 h-4 ${
                            formData.features?.includes(feature) ? 'text-white' : 'text-gray-400'
                          }`} />
                        </div>
                        <span className="font-medium text-gray-900">{feature}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Timeline</label>
                  <select
                    value={formData.timeline || ''}
                    onChange={(e) => updateFormData('timeline', e.target.value)}
                    className="w-full px-4 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 bg-white"
                  >
                    <option value="">Select timeline</option>
                    <option value="asap">ASAP (Rush)</option>
                    <option value="1-2-months">1-2 months</option>
                    <option value="3-6-months">3-6 months</option>
                    <option value="6-12-months">6-12 months</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Budget Range</label>
                  <input
                    type="range"
                    min="25000"
                    max="500000"
                    step="25000"
                    value={formData.budget || 100000}
                    onChange={(e) => updateFormData('budget', Number(e.target.value))}
                    className="w-full mb-3 accent-purple-600"
                  />
                  <div className="text-center">
                    <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                      ₹{(formData.budget || 100000).toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-green-100 to-emerald-100 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <Brain className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-3">Technical Preferences</h3>
              <p className="text-gray-600 text-lg">Help us tailor the perfect solution for you</p>
            </div>

            <div className="space-y-8">
              <div>
                <label className="block text-lg font-semibold text-gray-700 mb-6">Preferred Platform</label>
                <div className="grid lg:grid-cols-3 gap-4">
                  {['Web-based', 'Mobile App', 'Both Web & Mobile'].map((platform, index) => (
                    <button
                      key={index}
                      onClick={() => updateNestedFormData('preferences', 'platform', platform)}
                      className={`p-6 rounded-2xl border-2 text-center transition-all duration-300 ${
                        formData.preferences?.platform === platform
                          ? 'border-green-500 bg-gradient-to-r from-green-50 to-emerald-50 shadow-lg shadow-green-500/10'
                          : 'border-gray-200 hover:border-green-300 hover:bg-green-50'
                      }`}
                    >
                      <span className="font-semibold text-gray-900">{platform}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-lg font-semibold text-gray-700 mb-6">Design Style</label>
                <div className="grid lg:grid-cols-3 gap-4">
                  {['Modern & Minimalist', 'Bold & Creative', 'Professional & Corporate'].map((style, index) => (
                    <button
                      key={index}
                      onClick={() => updateNestedFormData('preferences', 'designStyle', style)}
                      className={`p-6 rounded-2xl border-2 text-center transition-all duration-300 ${
                        formData.preferences?.designStyle === style
                          ? 'border-indigo-500 bg-gradient-to-r from-indigo-50 to-purple-50 shadow-lg shadow-indigo-500/10'
                          : 'border-gray-200 hover:border-indigo-300 hover:bg-indigo-50'
                      }`}
                    >
                      <span className="font-semibold text-gray-900">{style}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-lg font-semibold text-gray-700 mb-6">Performance Priority</label>
                <div className="grid lg:grid-cols-3 gap-4">
                  {['Speed Optimized', 'Feature Rich', 'Balanced'].map((performance, index) => (
                    <button
                      key={index}
                      onClick={() => updateNestedFormData('preferences', 'performance', performance)}
                      className={`p-6 rounded-2xl border-2 text-center transition-all duration-300 ${
                        formData.preferences?.performance === performance
                          ? 'border-purple-500 bg-gradient-to-r from-purple-50 to-pink-50 shadow-lg shadow-purple-500/10'
                          : 'border-gray-200 hover:border-purple-300 hover:bg-purple-50'
                      }`}
                    >
                      <span className="font-semibold text-gray-900">{performance}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Real-time Estimate */}
            <div className="bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 rounded-3xl p-8 border border-indigo-100">
              <div className="flex items-center space-x-3 mb-6">
                <Calculator className="w-8 h-8 text-indigo-600" />
                <h4 className="text-2xl font-bold text-gray-900">Estimated Project Cost</h4>
              </div>
              <div className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-3">
                ₹{getEstimate().toLocaleString()}
              </div>
              <p className="text-gray-600">
                Based on your requirements. Final quote may vary after detailed consultation.
              </p>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-orange-100 to-red-100 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <Phone className="w-10 h-10 text-orange-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-3">Let's Connect</h3>
              <p className="text-gray-600 text-lg">We're excited to discuss your project in detail</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Full Name *</label>
                  <input
                    type="text"
                    value={formData.contact?.name || ''}
                    onChange={(e) => updateNestedFormData('contact', 'name', e.target.value)}
                    className="w-full px-4 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Email Address *</label>
                  <input
                    type="email"
                    value={formData.contact?.email || ''}
                    onChange={(e) => updateNestedFormData('contact', 'email', e.target.value)}
                    className="w-full px-4 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Phone Number</label>
                  <input
                    type="tel"
                    value={formData.contact?.phone || ''}
                    onChange={(e) => updateNestedFormData('contact', 'phone', e.target.value)}
                    className="w-full px-4 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Company Name</label>
                  <input
                    type="text"
                    value={formData.contact?.company || ''}
                    onChange={(e) => updateNestedFormData('contact', 'company', e.target.value)}
                    className="w-full px-4 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300"
                    placeholder="Your company name"
                  />
                </div>
              </div>
            </div>

            {/* Project Summary */}
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-3xl p-8 border border-gray-200">
              <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center space-x-2">
                <Sparkles className="w-6 h-6 text-indigo-600" />
                <span>Project Summary</span>
              </h4>
              <div className="grid lg:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600 font-medium">Business Type:</span>
                    <span className="font-semibold text-gray-900">{formData.businessType || 'Not specified'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 font-medium">Industry:</span>
                    <span className="font-semibold text-gray-900">{formData.industry || 'Not specified'}</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600 font-medium">Budget:</span>
                    <span className="font-semibold text-gray-900">₹{(formData.budget || 0).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 font-medium">Timeline:</span>
                    <span className="font-semibold text-gray-900">{formData.timeline || 'Not specified'}</span>
                  </div>
                </div>
              </div>
            </div>

            <button className="w-full px-8 py-6 bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold rounded-3xl hover:shadow-lg hover:shadow-orange-500/25 transform hover:-translate-y-0.5 transition-all duration-300 text-lg">
              Submit Requirements & Get Quote
            </button>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="contact" className="py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full text-indigo-700 font-medium mb-6">
            <Lightbulb className="w-4 h-4" />
            <span>Get Started</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-indigo-900 bg-clip-text text-transparent">
              Let's Build
            </span>
            <br />
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Together
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Tell us about your vision, and we'll craft a solution that exceeds your expectations.
          </p>
        </div>

        {/* Progress Indicator */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            {stepTitles.map((title, index) => {
              const StepIcon = stepIcons[index];
              const stepNumber = index + 1;
              const isActive = currentStep === stepNumber;
              const isCompleted = currentStep > stepNumber;
              
              return (
                <div key={index} className="flex items-center">
                  <div className={`flex items-center space-x-3 ${index < stepTitles.length - 1 ? 'flex-1' : ''}`}>
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                      isActive 
                        ? 'bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg shadow-indigo-500/25' 
                        : isCompleted 
                        ? 'bg-gradient-to-r from-green-500 to-emerald-500' 
                        : 'bg-gray-200'
                    }`}>
                      <StepIcon className={`w-6 h-6 ${isActive || isCompleted ? 'text-white' : 'text-gray-400'}`} />
                    </div>
                    <div className="hidden lg:block">
                      <div className={`font-semibold ${isActive ? 'text-indigo-600' : isCompleted ? 'text-green-600' : 'text-gray-400'}`}>
                        {title}
                      </div>
                      <div className="text-sm text-gray-500">Step {stepNumber}</div>
                    </div>
                  </div>
                  {index < stepTitles.length - 1 && (
                    <div className={`hidden lg:block flex-1 h-1 mx-4 rounded-full transition-all duration-300 ${
                      currentStep > stepNumber ? 'bg-gradient-to-r from-green-500 to-emerald-500' : 'bg-gray-200'
                    }`}></div>
                  )}
                </div>
              );
            })}
          </div>
          
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-indigo-600 to-purple-600 h-2 rounded-full transition-all duration-500"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Form Content */}
        <div className="bg-white rounded-3xl shadow-2xl p-12 border border-gray-100">
          {renderStep()}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-12 pt-8 border-t border-gray-200">
            <button
              onClick={prevStep}
              disabled={currentStep === 1}
              className={`flex items-center space-x-2 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 ${
                currentStep === 1
                  ? 'text-gray-400 cursor-not-allowed'
                  : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
              <span>Previous</span>
            </button>

            <button
              onClick={nextStep}
              disabled={currentStep === totalSteps}
              className={`flex items-center space-x-2 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 ${
                currentStep === totalSteps
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:shadow-lg hover:shadow-indigo-500/25 transform hover:-translate-y-0.5'
              }`}
            >
              <span>Next</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};