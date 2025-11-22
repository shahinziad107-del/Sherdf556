import React, { useEffect, useState } from 'react';
import { Menu, X, ChevronUp } from 'lucide-react';
import { Hero } from './components/Hero';
import { HistorySection } from './components/HistorySection';
import { EnvironmentSection } from './components/EnvironmentSection';
import { StructureSection } from './components/StructureSection';
import { CultureSection } from './components/CultureSection';
import { Footer } from './components/Footer';
import { BackgroundParticles } from './components/BackgroundParticles';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'history', label: 'History' },
    { id: 'environment', label: 'Environment' },
    { id: 'structure', label: 'Structure' },
    { id: 'culture', label: 'Culture' },
  ];

  return (
    <div className="relative min-h-screen bg-brand-dark text-white selection:bg-brand-accent selection:text-brand-dark">
      <BackgroundParticles />
      
      {/* Navbar */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-brand-dark/80 backdrop-blur-lg border-b border-white/10 py-3' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-8 h-8 bg-gradient-to-br from-brand-primary to-brand-accent rounded-lg rotate-45 flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.5)]">
              <span className="text-white font-bold -rotate-45 text-sm">BF</span>
            </div>
            <span className="font-display font-bold text-xl tracking-wide">BLACK <span className="text-brand-accent">FALCONS</span></span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm uppercase tracking-wider font-semibold text-gray-400 hover:text-brand-accent transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-accent transition-all group-hover:w-full"></span>
              </button>
            ))}
          </div>

          {/* Mobile Nav Toggle */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden absolute top-full left-0 right-0 bg-brand-dark/95 backdrop-blur-xl border-b border-white/10 transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-64' : 'max-h-0'}`}>
          <div className="flex flex-col p-6 gap-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-left text-lg font-medium text-gray-300 hover:text-brand-accent"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main className="relative z-10">
        <Hero />
        <div className="space-y-24 pb-24">
          <HistorySection />
          <EnvironmentSection />
          <StructureSection />
          <CultureSection />
        </div>
      </main>

      <Footer />

      {/* Scroll to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-8 right-8 z-40 p-3 rounded-full bg-brand-accent text-brand-dark shadow-lg shadow-brand-accent/20 transition-all duration-300 transform hover:scale-110 ${
          scrolled ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}
      >
        <ChevronUp size={24} />
      </button>
    </div>
  );
};

export default App;