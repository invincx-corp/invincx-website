import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, 
  Share2, 
  Download, 
  ChevronLeft, 
  ChevronRight, 
  Maximize2,
  Users,
  Clock,
  Building2,
  Code2,
  Shield,
  TrendingUp,
  Star,
  MessageCircle,
  Github,
  Linkedin,
  Twitter,
  Globe,
  Printer,
  Moon,
  Sun,
  Calendar,
  CheckCircle2,
  ArrowRight,
  Quote,
  Play,
  Filter,
  Minimize2,
  Smartphone,
  Monitor,
  Tablet,
  Video,
  X,
  Zap,
  Target,
  Award,
  Database,
  Server,
  Lock,
  CheckCircle,
  ExternalLink,
  Cloud,
  BarChart2,
  Hand,
  RefreshCw,
  Sparkles,
  Send
} from 'lucide-react';
import { projects, Project } from './Projects';
import { toast } from 'react-hot-toast';

type MediaItem = {
  id: number;
  type: 'image' | 'video';
  url: string;
  title: string;
  phase: string;
  thumbnail?: string;
};

type Milestone = {
  id: number;
  title: string;
  description: string;
  date: string;
  icon: React.ReactNode;
  status: 'completed' | 'in-progress' | 'upcoming';
};

// Add this type for image loading state
type ImageLoadState = {
  [key: string]: boolean;
};

// Add these types
type Technology = {
  name: string;
  icon: React.ReactNode;
  percentage: number;
  color: string;
};

type Metric = {
  label: string;
  value: string;
  change: string;
  icon: React.ReactNode;
};

type Testimonial = {
  name: string;
  role: string;
  company: string;
  image: string;
  quote: string;
};

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [isLoading, setIsLoading] = useState(true);
  const [imageError, setImageError] = useState(false);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const [selectedPhase, setSelectedPhase] = useState<string>('all');
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());
  const [failedImages, setFailedImages] = useState<Set<number>>(new Set());

  const milestones: Milestone[] = [
    {
      id: 1,
      title: 'Project Kickoff',
      description: 'Initial planning and requirements gathering',
      date: 'Jan 2024',
      icon: <Zap className="w-6 h-6" />,
      status: 'completed'
    },
    {
      id: 2,
      title: 'Design Phase',
      description: 'UI/UX design and prototyping',
      date: 'Feb 2024',
      icon: <Target className="w-6 h-6" />,
      status: 'completed'
    },
    {
      id: 3,
      title: 'Development',
      description: 'Core functionality implementation',
      date: 'Mar 2024',
      icon: <Code2 className="w-6 h-6" />,
      status: 'in-progress'
    },
    {
      id: 4,
      title: 'Launch',
      description: 'Product release and deployment',
      date: 'Apr 2024',
      icon: <Award className="w-6 h-6" />,
      status: 'upcoming'
    }
  ];

  const mediaItems: MediaItem[] = [
    {
      id: 1,
      type: 'image',
      url: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop&q=60',
      title: 'Dashboard Overview',
      phase: 'Design'
    },
    {
      id: 2,
      type: 'video',
      url: 'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      title: 'User Flow Demo',
      phase: 'Development',
      thumbnail: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop&q=60'
    },
    {
      id: 3,
      type: 'image',
      url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60',
      title: 'Mobile Interface',
      phase: 'Design'
    },
    {
      id: 4,
      type: 'image',
      url: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop&q=60',
      title: 'User Experience',
      phase: 'Development'
    }
  ];

  const filteredMedia = selectedPhase === 'all' 
    ? mediaItems 
    : mediaItems.filter(item => item.phase === selectedPhase);

  useEffect(() => {
    console.log('Component mounted');
    console.log('Current ID:', id);
    console.log('ID type:', typeof id);
    console.log('Parsed ID:', Number(id));
    console.log('Available projects:', projects);
    console.log('Projects length:', projects.length);
    
    const foundProject = projects.find(p => {
      console.log('Comparing project ID:', p.id, 'with parsed ID:', Number(id));
      return p.id === Number(id);
    });
    
    console.log('Found project:', foundProject);
    
    if (foundProject) {
      console.log('Setting project data:', foundProject);
      setProject(foundProject);
      setIsLoading(false);
    } else {
      console.log('Project not found, redirecting...');
      navigate('/projects');
    }
  }, [id, navigate]);

  // Update the event handlers
  const handleImageLoad = (id: number): ReactEventHandler<HTMLImageElement> => {
    return () => {
      setLoadedImages(prev => new Set([...prev, id]));
    };
  };

  const handleImageError = (id: number): ReactEventHandler<HTMLImageElement> => {
    return () => {
      setFailedImages(prev => new Set([...prev, id]));
    };
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-2xl text-gray-600">Loading project details...</div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-2xl text-gray-600">Project not found</div>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  // Update the renderMediaContent function
  const renderMediaContent = (item: MediaItem) => {
    if (item.type === 'video') {
      return (
        <video
          src={item.url}
          controls
          className="w-full h-full object-cover"
        />
      );
    }
    return (
      <img
        src={item.url}
        alt={item.title}
        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
        onLoad={handleImageLoad(item.id)}
        onError={handleImageError(item.id)}
      />
    );
  };

  // Add this inside the component
  const technologies: Technology[] = [
    {
      name: 'React',
      icon: <Code2 className="w-6 h-6" />,
      percentage: 85,
      color: 'bg-blue-500'
    },
    {
      name: 'Node.js',
      icon: <Server className="w-6 h-6" />,
      percentage: 75,
      color: 'bg-green-500'
    },
    {
      name: 'MongoDB',
      icon: <Database className="w-6 h-6" />,
      percentage: 65,
      color: 'bg-emerald-500'
    },
    {
      name: 'AWS',
      icon: <Cloud className="w-6 h-6" />,
      percentage: 80,
      color: 'bg-orange-500'
    }
  ];

  const metrics: Metric[] = [
    {
      label: 'User Growth',
      value: '150%',
      change: '+45%',
      icon: <Users className="w-6 h-6" />
    },
    {
      label: 'Performance',
      value: '2.3s',
      change: '-60%',
      icon: <BarChart2 className="w-6 h-6" />
    },
    {
      label: 'Engagement',
      value: '85%',
      change: '+30%',
      icon: <TrendingUp className="w-6 h-6" />
    }
  ];

  const testimonials: Testimonial[] = [
    {
      name: 'John Smith',
      role: 'CEO',
      company: 'Tech Corp',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop&q=60',
      quote: 'Working with this team was an absolute pleasure. They delivered beyond our expectations.'
    },
    {
      name: 'Sarah Johnson',
      role: 'CTO',
      company: 'Innovate Inc',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=60',
      quote: 'The project exceeded our goals and transformed our business operations.'
    }
  ];

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate('/projects')}
              className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Projects</span>
            </button>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
                <Share2 className="w-5 h-5" />
              </button>
              <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
                <Printer className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {/* Background Image with Enhanced Parallax */}
        <motion.div 
          style={{ y }}
          className="absolute inset-0"
        >
          <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0"
          >
            {!imageError ? (
              <img
                src={project.images[currentImageIndex]}
                alt={project.title}
                className="w-full h-full object-cover"
                onError={handleImageError}
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-indigo-900 to-purple-900 flex items-center justify-center">
                <div className="text-white text-2xl">Image not available</div>
              </div>
            )}
            {/* Enhanced Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90" />
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/20 via-transparent to-purple-900/20" />
          </motion.div>
        </motion.div>

        {/* Navigation Bar */}
        <nav className="absolute top-0 left-0 right-0 z-10">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              onClick={() => navigate('/projects')}
              className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Projects</span>
            </motion.button>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 py-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Title and Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-white"
              >
                {/* Animated Category Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm font-medium mb-6 border border-white/20"
                >
                  <Building2 className="w-4 h-4" />
                  <span>{project.category}</span>
                </motion.div>

                {/* Animated Project Title with Enhanced Gradient */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent"
                >
                  {project.title}
                </motion.h1>

                {/* Animated Company Type Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className={`inline-block px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-md border border-white/20
                    ${project.companyType === 'large' ? 'bg-indigo-500/20 text-indigo-200' :
                      project.companyType === 'medium' ? 'bg-pink-500/20 text-pink-200' :
                      project.companyType === 'small' ? 'bg-emerald-500/20 text-emerald-200' :
                      'bg-gray-500/20 text-gray-200'}`}
                >
                  {project.companyType} Company
                </motion.div>

                {/* Animated Project Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="text-xl text-gray-200 max-w-2xl mb-8"
                >
                  {project.description}
                </motion.p>
              </motion.div>

              {/* Right Column - Floating Stats Cards */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                {project.stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 shadow-lg"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-white/20 rounded-lg">
                        <stat.icon className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-white">{stat.label}</h3>
                    </div>
                    <div className="text-3xl font-bold text-white">{stat.value}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>

        {/* Enhanced Image Navigation */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={prevImage}
            className="p-2 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-colors border border-white/20"
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>
          <div className="flex gap-2">
            {project.images.map((_, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.2 }}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentImageIndex ? 'bg-white scale-125' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={nextImage}
            className="p-2 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-colors border border-white/20"
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="p-2 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-colors border border-white/20"
          >
            <Maximize2 className="w-6 h-6" />
          </motion.button>
        </div>
      </section>

      {/* Project Overview Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Project Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
              >
                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-indigo-900 bg-clip-text text-transparent">
                  Project Overview
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {project.description}
                </p>
              </motion.div>

              {/* Image Gallery */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100"
              >
                <div className="relative aspect-video">
                  <img
                    src={project.images[currentImageIndex]}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    onError={handleImageError}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  
                  {/* Gallery Navigation */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-4">
                    <button
                      onClick={prevImage}
                      className="p-2 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-colors border border-white/20"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <div className="flex gap-2">
                      {project.images.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`w-2 h-2 rounded-full transition-all ${
                            index === currentImageIndex ? 'bg-white scale-125' : 'bg-white/50'
                          }`}
                        />
                      ))}
                    </div>
                    <button
                      onClick={nextImage}
                      className="p-2 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-colors border border-white/20"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </div>
                </div>
              </motion.div>

              {/* Problem & Solution */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
                >
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-gray-900">
                    <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></span>
                    Problem
                  </h3>
                  <p className="text-gray-600">{project.problem}</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
                >
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-gray-900">
                    <span className="w-1.5 h-1.5 bg-pink-600 rounded-full"></span>
                    Solution
                  </h3>
                  <p className="text-gray-600">{project.solution}</p>
                </motion.div>
              </div>
            </div>

            {/* Right Column - Metadata */}
            <div className="space-y-8">
              {/* Project Metadata */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
              >
                <h3 className="text-xl font-bold mb-4 text-gray-900">Project Details</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-indigo-50 rounded-lg">
                      <Clock className="w-5 h-5 text-indigo-600" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Timeline</div>
                      <div className="font-medium text-gray-900">{project.timeline}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-indigo-50 rounded-lg">
                      <Building2 className="w-5 h-5 text-indigo-600" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Company Size</div>
                      <div className="font-medium text-gray-900">{project.companySize}</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Team Members */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
              >
                <h3 className="text-xl font-bold mb-4 text-gray-900">Team Members</h3>
                <div className="space-y-4">
                  {project.team.map((member, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <img
                        src={member.avatar}
                        alt={member.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div>
                        <div className="font-medium text-gray-900">{member.name}</div>
                        <div className="text-sm text-gray-500">Team Member</div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Technologies Used */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
              >
                <h3 className="text-xl font-bold mb-4 text-gray-900">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Node.js', 'TypeScript', 'Tailwind CSS', 'AWS'].map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Client Testimonial */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-indigo-900 to-purple-900 rounded-2xl p-6 text-white"
              >
                <Quote className="w-8 h-8 mb-4 text-white/50" />
                <p className="text-lg mb-4">
                  "Working with this team was an absolute pleasure. They delivered beyond our expectations and helped us achieve remarkable results."
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop&q=60"
                    alt="Client"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-medium">John Smith</div>
                    <div className="text-sm text-white/70">CEO, Tech Company</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Elements Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-indigo-900 bg-clip-text text-transparent">
              Visual Elements
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore the visual journey of our project through carefully crafted designs and interactive elements.
            </p>
          </motion.div>

          {/* Phase Filter */}
          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={() => setSelectedPhase('all')}
              className={`px-4 py-2 rounded-full transition-all ${
                selectedPhase === 'all'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              All Phases
            </button>
            {Array.from(new Set(mediaItems.map(item => item.phase))).map(phase => (
              <button
                key={phase}
                onClick={() => setSelectedPhase(phase)}
                className={`px-4 py-2 rounded-full transition-all ${
                  selectedPhase === phase
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {phase}
              </button>
            ))}
          </div>

          {/* Masonry Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMedia.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 cursor-pointer hover-card"
                onClick={() => setSelectedMedia(item)}
              >
                {/* Media Content */}
                <div className="aspect-[4/3] overflow-hidden rounded-xl">
                  {!loadedImages.has(item.id) && !failedImages.has(item.id) && (
                    <div className="w-full h-full flex items-center justify-center bg-gray-100 rounded-xl">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
                    </div>
                  )}
                  {renderMediaContent(item)}
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-white/80">{item.phase}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results & Impact */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-indigo-900 bg-clip-text text-transparent">
              Results & Impact
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover the measurable impact and success metrics of this project.
            </p>
          </motion.div>

          {/* Impact Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-indigo-100 rounded-lg text-indigo-600">
                    {metric.icon}
                  </div>
                  <h3 className="text-xl font-bold">{metric.label}</h3>
                </div>
                <div className="text-3xl font-bold mb-2">{metric.value}</div>
                <div className={`text-sm font-medium ${
                  metric.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
                }`}>
                  {metric.change} from baseline
                </div>
              </motion.div>
            ))}
          </div>

          {/* Client Testimonials */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-8 text-center">Client Testimonials</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <p className="text-gray-600">{testimonial.role}, {testimonial.company}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">"{testimonial.quote}"</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Elements */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-indigo-900 bg-clip-text text-transparent">
              Interactive Elements
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience the dynamic features that bring this project to life through engaging interactions and animations.
            </p>
          </motion.div>

          {/* Interactive Demo Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Interactive Prototype */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 overflow-hidden group"
            >
              <div className="relative aspect-video mb-4 rounded-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop&q=60"
                  alt="Interactive Prototype"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <button className="bg-white text-gray-900 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                    Try Interactive Demo
                  </button>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Interactive Prototype</h3>
              <p className="text-gray-600">
                Experience the project's interface with our interactive prototype. Click through different screens and test the user flow.
              </p>
            </motion.div>

            {/* 3D Model Viewer */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 overflow-hidden group"
            >
              <div className="relative aspect-video mb-4 rounded-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60"
                  alt="3D Model Viewer"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <button className="bg-white text-gray-900 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                    View 3D Model
                  </button>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">3D Model Viewer</h3>
              <p className="text-gray-600">
                Explore the project's 3D models with our interactive viewer. Rotate, zoom, and examine details from every angle.
              </p>
            </motion.div>
          </div>

          {/* Interactive Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Gesture Controls',
                description: 'Intuitive touch and gesture interactions for seamless navigation',
                icon: <Hand className="w-6 h-6" />
              },
              {
                title: 'Real-time Updates',
                description: 'Live data visualization and dynamic content updates',
                icon: <RefreshCw className="w-6 h-6" />
              },
              {
                title: 'Responsive Animations',
                description: 'Smooth transitions and animations that respond to user actions',
                icon: <Sparkles className="w-6 h-6" />
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 cursor-pointer group"
              >
                <div className="p-3 bg-indigo-100 rounded-lg text-indigo-600 w-fit mb-4 group-hover:bg-indigo-200 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Milestones */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-indigo-900 bg-clip-text text-transparent">
              Project Milestones
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Track our journey through key milestones and achievements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${
                    milestone.status === 'completed' ? 'bg-green-100 text-green-600' :
                    milestone.status === 'in-progress' ? 'bg-blue-100 text-blue-600' :
                    'bg-gray-100 text-gray-600'
                  }`}>
                    {milestone.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                  <p className="text-gray-600 mb-4">{milestone.description}</p>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span>{milestone.date}</span>
                  </div>
                  {milestone.status === 'completed' && (
                    <div className="absolute top-4 right-4">
                      <CheckCircle2 className="w-6 h-6 text-green-500" />
                    </div>
                  )}
                </div>
                {index < milestones.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gray-200" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action Sections */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white w-full">
        <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-indigo-900 bg-clip-text text-transparent">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Let's create something amazing together. Contact us to discuss your project requirements.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              onClick={() => window.open(project.images[0], '_blank')}
              className="flex items-center justify-center gap-2 px-8 py-4 bg-indigo-600 text-white rounded-xl font-medium hover:bg-indigo-700 transition-colors"
            >
              <ExternalLink className="w-5 h-5" />
              View Live Project
            </motion.button>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              onClick={() => {
                const link = document.createElement('a');
                link.href = project.images[0];
                link.download = `${project.title}-Case-Study.pdf`;
                link.click();
              }}
              className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-900 rounded-xl font-medium border border-gray-200 hover:bg-gray-50 transition-colors"
            >
              <Download className="w-5 h-5" />
              Download Case Study
            </motion.button>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
          >
            <h3 className="text-2xl font-bold mb-6 text-center">Contact for Similar Project</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Project Details</label>
                <textarea
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  rows={4}
                  placeholder="Tell us about your project..."
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                className="w-full px-6 py-3 bg-indigo-600 text-white rounded-xl font-medium hover:bg-indigo-700 transition-colors"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Share Project */}
          <div className="flex justify-center gap-4 mt-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => {
                navigator.share({
                  title: project.title,
                  text: project.description,
                  url: window.location.href
                }).catch(() => {
                  navigator.clipboard.writeText(window.location.href);
                  toast.success('Link copied to clipboard!');
                });
              }}
              className="flex items-center gap-2 px-6 py-3 bg-white text-gray-900 rounded-xl font-medium border border-gray-200 hover:bg-gray-50 transition-colors"
            >
              <Share2 className="w-5 h-5" />
              Share Project
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetails; 