import { Service, CaseStudy, AIAgent } from '../types';

export const services: Service[] = [
  {
    id: 'web-development',
    name: 'Website Development',
    description: 'Modern, responsive websites that convert visitors into customers',
    icon: 'Globe',
    features: ['Responsive Design', 'SEO Optimized', 'CMS Integration', 'E-commerce Ready'],
    startingPrice: 25000,
    timeline: '2-6 weeks',
    category: 'web'
  },
  {
    id: 'mobile-apps',
    name: 'Mobile App Development',
    description: 'Native and cross-platform apps for iOS and Android',
    icon: 'Smartphone',
    features: ['Cross-platform', 'Native Performance', 'App Store Optimization', 'Push Notifications'],
    startingPrice: 75000,
    timeline: '8-16 weeks',
    category: 'mobile'
  },
  {
    id: 'custom-software',
    name: 'Custom Software',
    description: 'Tailored software solutions for your unique business processes',
    icon: 'Code',
    features: ['Business Automation', 'API Development', 'Database Design', 'System Integration'],
    startingPrice: 100000,
    timeline: '12-24 weeks',
    category: 'software'
  },
  {
    id: 'ai-agents',
    name: 'AI Agents & Automation',
    description: 'Intelligent automation and AI-powered business solutions',
    icon: 'Bot',
    features: ['Chatbots', 'Process Automation', 'Data Analysis', 'Predictive Analytics'],
    startingPrice: 50000,
    timeline: '4-12 weeks',
    category: 'ai'
  }
];

export const caseStudies: CaseStudy[] = [
  {
    id: 'ecommerce-transformation',
    title: 'E-commerce Platform Transformation',
    client: 'Fashion Forward',
    industry: 'Retail',
    challenge: 'Legacy e-commerce platform with poor mobile experience and low conversion rates',
    solution: 'Built modern React-based e-commerce platform with AI-powered recommendations',
    results: ['300% increase in mobile conversions', '60% faster page load times', '45% increase in average order value'],
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AI/ML'],
    timeline: '12 weeks',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg',
    category: 'E-commerce',
    companySize: 'small'
  },
  {
    id: 'restaurant-automation',
    title: 'Restaurant Chain Automation',
    client: 'Spice Route',
    industry: 'Food & Beverage',
    challenge: 'Manual order management and inventory tracking across 15 locations',
    solution: 'Developed comprehensive POS system with inventory management and AI forecasting',
    results: ['80% reduction in order processing time', '50% improvement in inventory accuracy', '₹2L monthly cost savings'],
    technologies: ['React Native', 'Python', 'PostgreSQL', 'ML Models'],
    timeline: '16 weeks',
    image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg',
    category: 'Automation',
    companySize: 'medium'
  },
  {
    id: 'healthcare-ai',
    title: 'AI-Powered Patient Management',
    client: 'MediCare Plus',
    industry: 'Healthcare',
    challenge: 'Inefficient patient scheduling and high no-shows affecting revenue',
    solution: 'Built AI-powered scheduling system with automated reminders and predictive analytics',
    results: ['70% reduction in no-shows', '40% increase in patient satisfaction', '25% revenue increase'],
    technologies: ['Vue.js', 'Python', 'TensorFlow', 'Twilio', 'AWS'],
    timeline: '20 weeks',
    image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg',
    category: 'Healthcare',
    companySize: 'enterprise'
  }
];

export const aiAgents: AIAgent[] = [
  // Customer Support Category
  {
    id: "1",
    name: "24/7 Customer Service Hero",
    description: "10x your customer service without hiring more staff. Handle 1000+ customer queries daily with AI that learns from your best responses.",
    category: "Customer Support",
    features: [
      "Never miss a customer message - 24/7 instant responses",
      "Cut support costs by 40% while improving satisfaction",
      "Convert support tickets into sales opportunities",
      "Learn from your best customer interactions"
    ],
    useCases: ["Small retail shops", "Local service providers", "Online stores"],
    roi: "40% cost reduction + 30% higher customer satisfaction",
    implementation: "1-2 weeks",
    pricing: {
      setup: 25000,
      monthly: 5000
    }
  },
  {
    id: "2",
    name: "Customer Success Powerhouse",
    description: "Transform your customer service into a revenue-generating powerhouse. Handle 10,000+ daily interactions while boosting customer loyalty.",
    category: "Customer Support",
    features: [
      "Turn support into sales - AI identifies upsell opportunities",
      "Predict customer needs before they ask",
      "Reduce support costs by 60% while scaling operations",
      "Convert customer feedback into product improvements"
    ],
    useCases: ["Medium-sized enterprises", "Growing service companies", "E-commerce platforms"],
    roi: "60% cost reduction + 50% higher customer retention",
    implementation: "2-3 weeks",
    pricing: {
      setup: 75000,
      monthly: 15000
    }
  },
  {
    id: "3",
    name: "Always-On Support Buddy",
    description: "Run your business 24/7 without burning out. Let AI handle customer queries while you focus on growth.",
    category: "Customer Support",
    features: [
      "Never miss a customer - instant responses anytime",
      "Save 20+ hours weekly on customer service",
      "Convert more leads with smart follow-ups",
      "Build customer loyalty on autopilot"
    ],
    useCases: ["Freelancers", "Solo consultants", "Small online businesses"],
    roi: "30% time saved + 25% higher conversion rate",
    implementation: "1 week",
    pricing: {
      setup: 10000,
      monthly: 2000
    }
  },

  // Sales Category
  {
    id: "4",
    name: "Sales Growth Accelerator",
    description: "Double your sales without doubling your team. AI-powered sales assistant that works 24/7 to close deals.",
    category: "Sales",
    features: [
      "Convert 35% more leads into customers",
      "Never miss a follow-up - AI handles it all",
      "Identify hot leads automatically",
      "Close deals while you sleep"
    ],
    useCases: ["Small retail", "Local services", "Startups"],
    roi: "35% more sales + 40% less sales effort",
    implementation: "1-2 weeks",
    pricing: {
      setup: 30000,
      monthly: 6000
    }
  },
  {
    id: "5",
    name: "Revenue Growth Engine",
    description: "10x your sales team's productivity. AI that predicts customer needs and closes deals before competitors.",
    category: "Sales",
    features: [
      "Predict which leads will convert with 90% accuracy",
      "Automatically nurture leads into customers",
      "Identify upsell opportunities in real-time",
      "Scale sales without scaling costs"
    ],
    useCases: ["Medium enterprises", "Growing companies", "Multi-location businesses"],
    roi: "50% more sales + 60% higher team productivity",
    implementation: "2-3 weeks",
    pricing: {
      setup: 100000,
      monthly: 20000
    }
  },
  {
    id: "6",
    name: "Deal Closer Pro",
    description: "Close more deals without working more hours. Your personal AI sales assistant that never sleeps.",
    category: "Sales",
    features: [
      "Follow up with leads automatically",
      "Convert 25% more prospects into customers",
      "Never miss a sales opportunity",
      "Focus on closing while AI handles the rest"
    ],
    useCases: ["Freelancers", "Consultants", "Solo entrepreneurs"],
    roi: "25% more sales + 30% less sales effort",
    implementation: "1 week",
    pricing: {
      setup: 15000,
      monthly: 2500
    }
  },

  // Operations Category
  {
    id: "7",
    name: "Business Efficiency Booster",
    description: "Run your business like a Fortune 500 company. AI that streamlines operations and cuts costs.",
    category: "Operations",
    features: [
      "Cut operational costs by 30%",
      "Never run out of inventory again",
      "Optimize resources automatically",
      "Make data-driven decisions easily"
    ],
    useCases: ["Small retail", "Local services", "Small manufacturers"],
    roi: "30% cost reduction + 40% better efficiency",
    implementation: "1-2 weeks",
    pricing: {
      setup: 35000,
      monthly: 7000
    }
  },
  {
    id: "8",
    name: "Operations Excellence Suite",
    description: "Transform operations into a competitive advantage. AI that predicts and prevents problems before they happen.",
    category: "Operations",
    features: [
      "Predict and prevent operational issues",
      "Cut costs by 45% while scaling up",
      "Optimize every aspect of operations",
      "Make decisions with perfect data"
    ],
    useCases: ["Medium enterprises", "Growing companies", "Multi-location businesses"],
    roi: "45% cost reduction + 50% better efficiency",
    implementation: "2-3 weeks",
    pricing: {
      setup: 125000,
      monthly: 25000
    }
  },
  {
    id: "9",
    name: "Business Autopilot",
    description: "Run your business on autopilot. AI that handles the details while you focus on growth.",
    category: "Operations",
    features: [
      "Automate routine tasks completely",
      "Save 20+ hours weekly on operations",
      "Never miss important deadlines",
      "Scale without complexity"
    ],
    useCases: ["Freelancers", "Consultants", "Solo entrepreneurs"],
    roi: "20% time saved + 30% better organization",
    implementation: "1 week",
    pricing: {
      setup: 20000,
      monthly: 3000
    }
  },

  // HR Category
  {
    id: "10",
    name: "Team Builder Pro",
    description: "Build a world-class team without a big HR budget. AI that handles hiring, training, and retention.",
    category: "Human Resources",
    features: [
      "Find perfect candidates automatically",
      "Cut hiring costs by 35%",
      "Keep your best employees longer",
      "Train new hires in half the time"
    ],
    useCases: ["Small businesses", "Startups", "Local companies"],
    roi: "35% cost reduction + 40% better retention",
    implementation: "1-2 weeks",
    pricing: {
      setup: 40000,
      monthly: 8000
    }
  },
  {
    id: "11",
    name: "High-Performance Team Builder",
    description: "Build a high-performance culture that scales. AI that optimizes every aspect of your workforce.",
    category: "Human Resources",
    features: [
      "Predict which candidates will succeed",
      "Cut HR costs by 50% while growing",
      "Build high-performing teams automatically",
      "Create a culture that attracts top talent"
    ],
    useCases: ["Medium enterprises", "Growing companies", "Multi-location businesses"],
    roi: "50% cost reduction + 60% better performance",
    implementation: "2-3 weeks",
    pricing: {
      setup: 150000,
      monthly: 30000
    }
  },
  {
    id: "12",
    name: "Virtual Team Manager",
    description: "Scale your business without hiring. AI that helps you work with contractors and freelancers.",
    category: "Human Resources",
    features: [
      "Find perfect contractors automatically",
      "Save 25% on contractor costs",
      "Manage projects effortlessly",
      "Build a virtual team that scales"
    ],
    useCases: ["Freelancers", "Consultants", "Solo entrepreneurs"],
    roi: "25% cost reduction + 30% better productivity",
    implementation: "1 week",
    pricing: {
      setup: 25000,
      monthly: 3500
    }
  },

  // Finance Category
  {
    id: "13",
    name: "Cash Flow Guardian",
    description: "Make financial decisions like a CFO. AI that optimizes cash flow and finds hidden opportunities.",
    category: "Finance",
    features: [
      "Predict cash flow issues before they happen",
      "Cut financial processing costs by 40%",
      "Find hidden tax savings automatically",
      "Make better financial decisions"
    ],
    useCases: ["Small businesses", "Startups", "Local companies"],
    roi: "40% cost reduction + 35% better cash flow",
    implementation: "1-2 weeks",
    pricing: {
      setup: 45000,
      monthly: 9000
    }
  },
  {
    id: "14",
    name: "Financial Success Engine",
    description: "Transform finance into a strategic advantage. AI that predicts market trends and optimizes every dollar.",
    category: "Finance",
    features: [
      "Predict market trends with 90% accuracy",
      "Cut financial costs by 55%",
      "Optimize every financial decision",
      "Turn data into strategic insights"
    ],
    useCases: ["Medium enterprises", "Growing companies", "Multi-location businesses"],
    roi: "55% cost reduction + 50% better decisions",
    implementation: "2-3 weeks",
    pricing: {
      setup: 175000,
      monthly: 35000
    }
  },
  {
    id: "15",
    name: "Money Manager Pro",
    description: "Run your finances like a pro. AI that handles the details while you focus on growth.",
    category: "Finance",
    features: [
      "Automate all financial tasks",
      "Save 30% on financial management",
      "Never miss a tax deadline",
      "Make better financial decisions"
    ],
    useCases: ["Freelancers", "Consultants", "Solo entrepreneurs"],
    roi: "30% time saved + 25% better decisions",
    implementation: "1 week",
    pricing: {
      setup: 30000,
      monthly: 4000
    }
  },

  // E-commerce Category
  {
    id: "16",
    name: "Store Growth Accelerator",
    description: "Turn your store into a 24/7 sales machine. AI that optimizes every aspect of your online business.",
    category: "E-commerce",
    features: [
      "Convert 35% more visitors into customers",
      "Never run out of stock again",
      "Personalize shopping for every customer",
      "Scale sales without scaling costs"
    ],
    useCases: ["Small online stores", "Local retailers", "Startups"],
    roi: "35% more sales + 40% better efficiency",
    implementation: "1-2 weeks",
    pricing: {
      setup: 100000,
      monthly: 20000
    }
  },
  {
    id: "17",
    name: "E-commerce Success Suite",
    description: "Dominate your market with AI-powered commerce. Predict trends and optimize every sale.",
    category: "E-commerce",
    features: [
      "Predict market trends with 90% accuracy",
      "Convert 50% more visitors into customers",
      "Optimize every aspect of your store",
      "Scale globally without complexity"
    ],
    useCases: ["Medium online retailers", "Growing e-commerce", "Multi-platform sellers"],
    roi: "50% more sales + 60% better efficiency",
    implementation: "2-3 weeks",
    pricing: {
      setup: 40000,
      monthly: 5000
    }
  },
  {
    id: "18",
    name: "Store Success Buddy",
    description: "Run your store on autopilot. AI that handles the details while you focus on growth.",
    category: "E-commerce",
    features: [
      "Automate all store operations",
      "Convert 25% more visitors into customers",
      "Never miss a sale opportunity",
      "Scale without complexity"
    ],
    useCases: ["Individual sellers", "Small online stores", "Dropshippers"],
    roi: "25% more sales + 30% better efficiency",
    implementation: "1 week",
    pricing: {
      setup: 4500,
      monthly: 5000
    }
  },

  // Marketing Category
  {
    id: "19",
    name: "Customer Magnet",
    description: "Get 10x more customers without 10x the effort. AI that creates and optimizes your marketing.",
    category: "Marketing",
    features: [
      "Create winning campaigns automatically",
      "Convert 40% more leads into customers",
      "Optimize every marketing dollar",
      "Scale marketing without scaling costs"
    ],
    useCases: ["Small businesses", "Local services", "Startups"],
    roi: "40% more customers + 35% lower costs",
    implementation: "1-2 weeks",
    pricing: {
      setup: 55000,
      monthly: 11000
    }
  },
  {
    id: "20",
    name: "Marketing Growth Engine",
    description: "Dominate your market with AI-powered marketing. Predict trends and optimize every campaign.",
    category: "Marketing",
    features: [
      "Predict market trends with 90% accuracy",
      "Convert 55% more leads into customers",
      "Optimize every marketing channel",
      "Scale globally without complexity"
    ],
    useCases: ["Medium enterprises", "Growing companies", "Multi-location businesses"],
    roi: "55% more customers + 50% lower costs",
    implementation: "2-3 weeks",
    pricing: {
      setup: 225000,
      monthly: 45000
    }
  },
  {
    id: "21",
    name: "Client Attraction Pro",
    description: "Get more clients without working more hours. AI that handles your marketing while you focus on delivery.",
    category: "Marketing",
    features: [
      "Create winning content automatically",
      "Convert 30% more leads into clients",
      "Never miss a marketing opportunity",
      "Scale without complexity"
    ],
    useCases: ["Freelancers", "Consultants", "Solo entrepreneurs"],
    roi: "30% more clients + 25% less effort",
    implementation: "1 week",
    pricing: {
      setup: 25000,
      monthly: 3500
    }
  },

  // Analytics Category
  {
    id: "22",
    name: "Business Insight Pro",
    description: "Make decisions like a Fortune 500 CEO. AI that turns your data into actionable insights.",
    category: "Analytics",
    features: [
      "Predict trends with 85% accuracy",
      "Make 35% better decisions",
      "Find hidden opportunities automatically",
      "Scale without complexity"
    ],
    useCases: ["Small businesses", "Startups", "Local companies"],
    roi: "35% better decisions + 30% more revenue",
    implementation: "1-2 weeks",
    pricing: {
      setup: 60000,
      monthly: 12000
    }
  },
  {
    id: "23",
    name: "Growth Intelligence Suite",
    description: "Transform data into your competitive advantage. AI that predicts market trends and optimizes every decision.",
    category: "Analytics",
    features: [
      "Predict market trends with 95% accuracy",
      "Make 50% better decisions",
      "Find hidden opportunities instantly",
      "Scale globally without complexity"
    ],
    useCases: ["Medium enterprises", "Growing companies", "Multi-location businesses"],
    roi: "50% better decisions + 45% more revenue",
    implementation: "2-3 weeks",
    pricing: {
      setup: 250000,
      monthly: 50000
    }
  },
  {
    id: "24",
    name: "Business Insight Buddy",
    description: "Make data-driven decisions without a data team. AI that turns your numbers into actionable insights.",
    category: "Analytics",
    features: [
      "Predict trends with 80% accuracy",
      "Make 25% better decisions",
      "Find opportunities automatically",
      "Scale without complexity"
    ],
    useCases: ["Freelancers", "Consultants", "Solo entrepreneurs"],
    roi: "25% better decisions + 20% more revenue",
    implementation: "1 week",
    pricing: {
      setup: 45000,
      monthly: 5500
    }
  },

  // Documentation Category
  {
    id: "25",
    name: "Paperwork Pro",
    description: "Never lose a document again. AI that organizes and optimizes your business paperwork.",
    category: "Documentation",
    features: [
      "Save 40% time on document management",
      "Never miss important deadlines",
      "Find any document instantly",
      "Scale without complexity"
    ],
    useCases: ["Small businesses", "Startups", "Local companies"],
    roi: "40% time saved + 35% better organization",
    implementation: "1-2 weeks",
    pricing: {
      setup: 175000,
      monthly: 35000
    }
  },
  {
    id: "26",
    name: "Document Success Suite",
    description: "Transform document management into a competitive advantage. AI that optimizes every aspect of your paperwork.",
    category: "Documentation",
    features: [
      "Save 55% time on document management",
      "Never miss a compliance deadline",
      "Find any document instantly",
      "Scale globally without complexity"
    ],
    useCases: ["Medium enterprises", "Growing companies", "Multi-location businesses"],
    roi: "55% time saved + 50% better organization",
    implementation: "2-3 weeks",
    pricing: {
      setup: 275000,
      monthly: 55000
    }
  },
  {
    id: "27",
    name: "Paperwork Buddy",
    description: "Run your business paperwork on autopilot. AI that handles the details while you focus on growth.",
    category: "Documentation",
    features: [
      "Save 30% time on document management",
      "Never miss important deadlines",
      "Find any document instantly",
      "Scale without complexity"
    ],
    useCases: ["Freelancers", "Consultants", "Solo entrepreneurs"],
    roi: "30% time saved + 25% better organization",
    implementation: "1 week",
    pricing: {
      setup: 50000,
      monthly: 6000
    }
  },

  // Security Category
  {
    id: "28",
    name: "Business Guardian",
    description: "Protect your business like a Fortune 500 company. AI that prevents threats before they happen.",
    category: "Security",
    features: [
      "Prevent 45% of security threats",
      "Never miss a compliance deadline",
      "Protect customer data automatically",
      "Scale without complexity"
    ],
    useCases: ["Small businesses", "Startups", "Local companies"],
    roi: "45% fewer incidents + 40% better compliance",
    implementation: "1-2 weeks",
    pricing: {
      setup: 70000,
      monthly: 14000
    }
  },
  {
    id: "29",
    name: "Enterprise Shield",
    description: "Transform security into a competitive advantage. AI that predicts and prevents threats before they happen.",
    category: "Security",
    features: [
      "Prevent 60% of security threats",
      "Never miss a compliance deadline",
      "Protect all data automatically",
      "Scale globally without complexity"
    ],
    useCases: ["Medium enterprises", "Growing companies", "Multi-location businesses"],
    roi: "60% fewer incidents + 55% better compliance",
    implementation: "2-3 weeks",
    pricing: {
      setup: 300000,
      monthly: 60000
    }
  },
  {
    id: "30",
    name: "Security Buddy",
    description: "Protect your business without a security team. AI that handles security while you focus on growth.",
    category: "Security",
    features: [
      "Prevent 35% of security threats",
      "Never miss important updates",
      "Protect client data automatically",
      "Scale without complexity"
    ],
    useCases: ["Freelancers", "Consultants", "Solo entrepreneurs"],
    roi: "35% fewer incidents + 30% better compliance",
    implementation: "1 week",
    pricing: {
      setup: 55000,
      monthly: 6500
    }
  },

  // International Business Category
  {
    id: "31",
    name: "Global Growth Starter",
    description: "Go global without the complexity. AI that handles international business while you focus on growth.",
    category: "International",
    features: [
      "Enter new markets automatically",
      "Save 40% on international costs",
      "Never miss a compliance deadline",
      "Scale globally without complexity"
    ],
    useCases: ["Small exporters", "Local importers", "Startups"],
    roi: "40% cost reduction + 35% faster expansion",
    implementation: "1-2 weeks",
    pricing: {
      setup: 15000,
      monthly: 15000
    }
  },
  {
    id: "32",
    name: "Global Success Suite",
    description: "Dominate global markets with AI-powered expansion. Predict trends and optimize every market.",
    category: "International",
    features: [
      "Predict market trends with 90% accuracy",
      "Save 55% on international costs",
      "Never miss a compliance deadline",
      "Scale globally without complexity"
    ],
    useCases: ["Medium exporters", "Growing importers", "Multi-country businesses"],
    roi: "55% cost reduction + 50% faster expansion",
    implementation: "2-3 weeks",
    pricing: {
      setup: 65000,
      monthly: 65000
    }
  },
  {
    id: "33",
    name: "Global Business Buddy",
    description: "Go global without a team. AI that handles international business while you focus on delivery.",
    category: "International",
    features: [
      "Enter new markets automatically",
      "Save 30% on international costs",
      "Never miss important deadlines",
      "Scale without complexity"
    ],
    useCases: ["Freelancers", "Consultants", "Solo entrepreneurs"],
    roi: "30% cost reduction + 25% faster expansion",
    implementation: "1 week",
    pricing: {
      setup: 7000,
      monthly: 7000
    }
  }
];