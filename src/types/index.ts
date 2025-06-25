export interface Service {
  id: string;
  name: string;
  description: string;
  icon: string;
  features: string[];
  startingPrice: number;
  timeline: string;
  category: 'web' | 'mobile' | 'software' | 'ai';
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
  timeline: string;
  image: string;
  category: string;
  companySize: 'startup' | 'small' | 'medium' | 'enterprise';
}

export interface FormData {
  businessType: string;
  industry: string;
  projectGoals: string[];
  budget: number;
  timeline: string;
  teamSize: string;
  currentTech: string;
  features: string[];
  preferences: {
    platform: string;
    designStyle: string;
    performance: string;
  };
  contact: {
    name: string;
    email: string;
    phone: string;
    company: string;
  };
}

export interface AIAgent {
  id: string;
  name: string;
  description: string;
  category: string;
  features: string[];
  useCases: string[];
  roi: string;
  implementation: string;
  pricing: {
    setup: number;
    monthly: number;
  };
}

export type Language = 'en' | 'hi' | 'mr';

export interface Translation {
  [key: string]: {
    en: string;
    hi: string;
    mr: string;
  };
}