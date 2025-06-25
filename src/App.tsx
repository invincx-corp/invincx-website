import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { AIAgentsSection } from './components/AIAgentsSection';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { RequirementsForm } from './components/RequirementsForm';
import { Footer } from './components/Footer';
import { About } from './components/About';
import ProjectsSection from './components/ProjectsSection';
import KeyDifferentiators from './components/KeyDifferentiators';
import CTASection from './components/CTASection';
import CompanyValues from './components/CompanyValues';
import Projects from './components/Projects';
import ProjectDetails from './components/ProjectDetails';
import CaseStudiesPage from './components/CaseStudiesPage';

function HomePage() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <AIAgentsSection />
      <KeyDifferentiators />
      <ProjectsSection />
      <CompanyValues />
      <CaseStudiesSection />
      <CTASection />
      <RequirementsForm />
    </>
  );
}

function ProjectsPage() {
  return (
    <>
      <Projects />
    </>
  );
}

function App() {
  return (
    <Router>
    <div className="min-h-screen bg-white">
      <Header />
      <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:id" element={<ProjectDetails />} />
            <Route path="/case-studies" element={<CaseStudiesPage />} />
          </Routes>
      </main>
      <Footer />
    </div>
    </Router>
  );
}

export default App;