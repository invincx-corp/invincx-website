import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Star, Users, TrendingUp, Calendar, Clock, Building2, LucideIcon, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  images: string[];
  companySize: string;
  companyType: 'solo' | 'small' | 'medium' | 'large';
  problem: string;
  solution: string;
  timeline: string;
  stats: {
    icon: LucideIcon;
    value: string;
    label: string;
  }[];
  team: {
    name: string;
    avatar: string;
  }[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Online Store Success Story",
    category: "Web Development",
    description: "Helped a struggling online shop become a thriving business. Their sales went up significantly and customers are now happier than ever.",
    companySize: "Medium Company",
    companyType: "medium",
    problem: "Customers were leaving their shopping carts without buying, and the website was hard to use.",
    solution: "Created a user-friendly website that works great on phones and computers, with an easy checkout process and personalized shopping suggestions.",
    timeline: "3 months",
    images: [
      "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&auto=format&fit=crop&q=60"
    ],
    stats: [
      {
        icon: TrendingUp,
        value: "3x",
        label: "Sales Growth"
      },
      {
        icon: Users,
        value: "85%",
        label: "Happy Customers"
      }
    ],
    team: [
      {
        name: "John Doe",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop&q=60"
      },
      {
        name: "Jane Smith",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=60"
      }
    ]
  },
  {
    id: 2,
    title: "Brand Makeover Success",
    category: "Brand Design",
    description: "Helped a tech startup stand out from their competitors. Their new look helped them attract better clients and talented team members.",
    companySize: "Small Company",
    companyType: "small",
    problem: "Their brand looked similar to other companies, making it hard to stand out.",
    solution: "Created a unique and memorable brand identity that connects with their target audience.",
    timeline: "2 months",
    images: [
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&auto=format&fit=crop&q=60"
    ],
    stats: [
      {
        icon: Star,
        value: "98%",
        label: "Client Retention"
      },
      {
        icon: Calendar,
        value: "2x",
        label: "New Leads"
      }
    ],
    team: [
      {
        name: "Mike Johnson",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=60"
      },
      {
        name: "Sarah Wilson",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&auto=format&fit=crop&q=60"
      }
    ]
  },
  {
    id: 3,
    title: "Fitness App Success",
    category: "App Development",
    description: "Created a popular fitness app that helped a health brand connect with over 1 million users. The app quickly became the top choice in its category.",
    companySize: "Large Company",
    companyType: "large",
    problem: "Users weren't staying engaged with the app and were quickly losing interest.",
    solution: "Built an easy-to-use app with fun features and social connections to keep users motivated.",
    timeline: "6 months",
    images: [
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop&q=60"
    ],
    stats: [
      {
        icon: Users,
        value: "1M+",
        label: "Active Users"
      },
      {
        icon: Star,
        value: "4.9",
        label: "App Rating"
      }
    ],
    team: [
      {
        name: "Alex Chen",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=60"
      },
      {
        name: "Emma Davis",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=60"
      }
    ]
  },
  {
    id: 4,
    title: "E-commerce Platform Redesign",
    category: "UI/UX Design",
    description: "Transformed an outdated e-commerce platform into a modern, user-friendly experience that increased conversion rates by 150%.",
    companySize: "Large Company",
    companyType: "large",
    problem: "Low conversion rates and poor user experience were hurting sales.",
    solution: "Implemented a complete redesign focusing on user experience and mobile optimization.",
    timeline: "4 months",
    images: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop&q=60"
    ],
    stats: [
      {
        icon: TrendingUp,
        value: "150%",
        label: "Conversion Rate"
      },
      {
        icon: Users,
        value: "2.5x",
        label: "User Engagement"
      }
    ],
    team: [
      {
        name: "David Kim",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=60"
      },
      {
        name: "Lisa Wong",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&auto=format&fit=crop&q=60"
      }
    ]
  },
  {
    id: 5,
    title: "Healthcare App Development",
    category: "App Development",
    description: "Developed a comprehensive healthcare management app that streamlined patient care and improved operational efficiency.",
    companySize: "Medium Company",
    companyType: "medium",
    problem: "Inefficient patient management and communication systems.",
    solution: "Created an integrated healthcare platform with real-time updates and secure messaging.",
    timeline: "8 months",
    images: [
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop&q=60"
    ],
    stats: [
      {
        icon: Users,
        value: "50K+",
        label: "Active Users"
      },
      {
        icon: Star,
        value: "4.8",
        label: "User Rating"
      }
    ],
    team: [
      {
        name: "Dr. Sarah Miller",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=60"
      },
      {
        name: "James Wilson",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=60"
      }
    ]
  },
  {
    id: 6,
    title: "Restaurant Management System",
    category: "Software Development",
    description: "Built a comprehensive restaurant management system that automated operations and improved customer service.",
    companySize: "Small Company",
    companyType: "small",
    problem: "Manual processes were causing delays and errors in order management.",
    solution: "Developed an integrated system for order management, inventory, and customer feedback.",
    timeline: "5 months",
    images: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop&q=60"
    ],
    stats: [
      {
        icon: TrendingUp,
        value: "40%",
        label: "Efficiency"
      },
      {
        icon: Users,
        value: "95%",
        label: "Satisfaction"
      }
    ],
    team: [
      {
        name: "Chef Michael Brown",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=60"
      },
      {
        name: "Emily Chen",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&auto=format&fit=crop&q=60"
      }
    ]
  },
  {
    id: 7,
    title: "Educational Platform",
    category: "Web Development",
    description: "Created an interactive educational platform that made learning more engaging and accessible for students worldwide.",
    companySize: "Medium Company",
    companyType: "medium",
    problem: "Traditional learning methods weren't engaging students effectively.",
    solution: "Developed an interactive platform with gamification and real-time feedback.",
    timeline: "7 months",
    images: [
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop&q=60"
    ],
    stats: [
      {
        icon: Users,
        value: "100K+",
        label: "Students"
      },
      {
        icon: Star,
        value: "4.7",
        label: "Rating"
      }
    ],
    team: [
      {
        name: "Prof. Robert Lee",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=60"
      },
      {
        name: "Maria Garcia",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=60"
      }
    ]
  },
  {
    id: 8,
    title: "Financial Dashboard",
    category: "Software Development",
    description: "Developed a comprehensive financial dashboard that helped businesses make data-driven decisions.",
    companySize: "Large Company",
    companyType: "large",
    problem: "Lack of real-time financial insights and data visualization.",
    solution: "Created an intuitive dashboard with real-time analytics and forecasting tools.",
    timeline: "6 months",
    images: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop&q=60"
    ],
    stats: [
      {
        icon: TrendingUp,
        value: "200%",
        label: "Efficiency"
      },
      {
        icon: Users,
        value: "90%",
        label: "Adoption"
      }
    ],
    team: [
      {
        name: "John Smith",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=60"
      },
      {
        name: "Sarah Johnson",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&auto=format&fit=crop&q=60"
      }
    ]
  },
  {
    id: 9,
    title: "Travel Booking Platform",
    category: "Web Development",
    description: "Built a modern travel booking platform that simplified the process of planning and booking trips.",
    companySize: "Medium Company",
    companyType: "medium",
    problem: "Complex booking process and lack of real-time availability.",
    solution: "Created an intuitive platform with real-time booking and instant confirmations.",
    timeline: "5 months",
    images: [
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop&q=60"
    ],
    stats: [
      {
        icon: Users,
        value: "500K+",
        label: "Bookings"
      },
      {
        icon: Star,
        value: "4.9",
        label: "Rating"
      }
    ],
    team: [
      {
        name: "Alex Turner",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=60"
      },
      {
        name: "Emma Wilson",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=60"
      }
    ]
  }
];

const Projects = () => {
  const navigate = useNavigate();
  const [currentImageIndices, setCurrentImageIndices] = useState<{ [key: number]: number }>({});

  useEffect(() => {
    // Initialize current image indices
    const initialIndices = projects.reduce((acc, project) => {
      acc[project.id] = 0;
      return acc;
    }, {} as { [key: number]: number });
    setCurrentImageIndices(initialIndices);
  }, []);

  const nextImage = (projectId: number, totalImages: number) => {
    setCurrentImageIndices(prev => ({
      ...prev,
      [projectId]: (prev[projectId] + 1) % totalImages
    }));
  };

  const prevImage = (projectId: number, totalImages: number) => {
    setCurrentImageIndices(prev => ({
      ...prev,
      [projectId]: (prev[projectId] - 1 + totalImages) % totalImages
    }));
  };

  const handleProjectClick = (projectId: number) => {
    navigate(`/projects/${projectId}`);
  };

  return (
    <section className="py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full text-indigo-700 font-medium mb-6">
            <Building2 className="w-4 h-4" />
            <span>Our Work</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-indigo-900 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover how we've helped businesses transform their digital presence and achieve remarkable growth.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => handleProjectClick(project.id)}
            >
              {/* Project card content */}
              <div className="relative h-64 overflow-hidden group">
                <img
                  src={project.images[currentImageIndices[project.id] || 0]}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                
                {/* Carousel Controls */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage(project.id, project.images.length);
                  }}
                  className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/50"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage(project.id, project.images.length);
                  }}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/50"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Image Indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                  {project.images.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentImageIndices[project.id]
                          ? 'bg-white scale-125'
                          : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>

                <div className="absolute bottom-4 left-4 text-white">
                  <span className="text-sm font-medium bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                    {project.title}
                  </h3>
                  <span className={`px-3 py-1 text-sm font-medium rounded-full capitalize
                    ${project.companyType === 'large' ? 'bg-indigo-100 text-indigo-700' :
                      project.companyType === 'medium' ? 'bg-pink-100 text-pink-700' :
                      project.companyType === 'small' ? 'bg-emerald-100 text-emerald-700' :
                      'bg-gray-100 text-gray-700'}`}>
                    {project.companyType}
                  </span>
                </div>

                {/* Company Info */}
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                  <div className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-lg">
                    <Building2 className="w-4 h-4 text-indigo-600" />
                    <span>{project.companySize}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-lg">
                    <Clock className="w-4 h-4 text-indigo-600" />
                    <span>{project.timeline}</span>
                  </div>
                </div>

                {/* Problem & Solution */}
                <div className="space-y-3 mb-4">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-1 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></span>
                      Problem
                    </h4>
                    <p className="text-sm text-gray-600">{project.problem}</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-1 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-pink-600 rounded-full"></span>
                      Solution
                    </h4>
                    <p className="text-sm text-gray-600">{project.solution}</p>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  {project.stats.map((stat, index) => (
                    <div key={index} className="flex items-center gap-2 bg-gradient-to-br from-gray-50 to-white p-3 rounded-lg border border-gray-100">
                      <div className="p-2 bg-indigo-50 rounded-lg">
                        <stat.icon className="w-5 h-5 text-indigo-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{stat.value}</div>
                        <div className="text-sm text-gray-500">{stat.label}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex justify-end pt-4 border-t border-gray-100">
                  <button className="text-indigo-600 hover:text-indigo-700 font-medium flex items-center gap-1 group">
                    View Project
                    <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 