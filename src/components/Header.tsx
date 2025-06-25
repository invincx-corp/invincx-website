import React, { useState, useEffect } from 'react';
import { Menu, X, Zap, ArrowUpRight } from 'lucide-react';
import { LanguageSelector } from './LanguageSelector';
import { useLanguage } from '../hooks/useLanguage';
import { t } from '../services/translations';
import { Link } from 'react-router-dom';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, changeLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { key: 'nav.home', href: '/', isRoute: true },
    { key: 'nav.services', href: '#services', isRoute: false },
    { key: 'nav.caseStudies', href: '#case-studies', isRoute: false },
    { key: 'nav.aiAgents', href: '#ai-agents', isRoute: false },
    { key: 'nav.about', href: '/about', isRoute: true },
    { key: 'nav.contact', href: '#contact', isRoute: false },
    { key: 'nav.projects', href: '/projects', isRoute: true }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/80 backdrop-blur-xl border-b border-gray-100 shadow-sm' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-2xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <div className="absolute -inset-1 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-2xl opacity-20 blur group-hover:opacity-40 transition-opacity duration-300"></div>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Invincx
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              item.isRoute ? (
                <Link
                  key={item.key}
                  to={item.href}
                  className="px-4 py-2 text-gray-600 hover:text-gray-900 font-medium transition-colors relative group"
                >
                  {t(item.key, language)}
                  <span className="absolute inset-x-4 -bottom-1 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </Link>
              ) : (
              <a
                key={item.key}
                href={item.href}
                className="px-4 py-2 text-gray-600 hover:text-gray-900 font-medium transition-colors relative group"
              >
                {t(item.key, language)}
                <span className="absolute inset-x-4 -bottom-1 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </a>
              )
            ))}
          </nav>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            <LanguageSelector
              currentLanguage={language}
              onLanguageChange={changeLanguage}
            />
            
            <button className="hidden lg:flex items-center space-x-2 px-4 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-2xl hover:shadow-lg hover:shadow-indigo-500/25 transform hover:-translate-y-0.5 transition-all duration-300 group min-w-[120px]">
              <span>{t('hero.cta', language)}</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-xl hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-lg">
            <div className="px-6 py-6 space-y-4">
              {navItems.map((item) => (
                item.isRoute ? (
                  <Link
                    key={item.key}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-gray-700 hover:text-gray-900 font-medium transition-colors py-2"
                  >
                    {t(item.key, language)}
                  </Link>
                ) : (
                <a
                  key={item.key}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-gray-700 hover:text-gray-900 font-medium transition-colors py-2"
                >
                  {t(item.key, language)}
                </a>
                )
              ))}
              <button className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-2xl">
                {t('hero.cta', language)}
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};