import React, { useState, useEffect } from 'react';
import { ArrowDown, Users, PlayCircle } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

const teamMembers = [
  "Ziad Shahin",
  "Ahmed Hossam",
  "Bellal Arafa",
  "Khaled Mohammed",
  "Ahmed Morsy"
];

export const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = "Dynamic World";
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Typing Effect
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setDisplayText(fullText.substring(0, index));
      index++;
      if (index > fullText.length) clearInterval(timer);
    }, 100);
    return () => clearInterval(timer);
  }, []);

  // Parallax Effect Handler
  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const moveX = (clientX - window.innerWidth / 2) / 50;
    const moveY = (clientY - window.innerHeight / 2) / 50;
    setMousePos({ x: moveX, y: moveY });
  };

  const scrollToContent = () => {
    const element = document.getElementById('history');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-20 overflow-hidden"
    >
      
      {/* Abstract Glow Background with Parallax */}
      <div 
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-primary/20 rounded-full blur-[100px] transition-transform duration-100 ease-out"
        style={{ transform: `translate(${mousePos.x * -1}px, ${mousePos.y * -1}px)` }}
      ></div>
      <div 
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-purple/20 rounded-full blur-[100px] transition-transform duration-100 ease-out"
        style={{ transform: `translate(${mousePos.x}px, ${mousePos.y}px)` }}
      ></div>

      <div className="text-center z-10 max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="inline-block px-4 py-2 mb-6 rounded-full border border-brand-accent/30 bg-brand-accent/10 backdrop-blur-sm animate-pulse-slow">
            <span className="text-brand-accent uppercase tracking-widest text-xs font-bold">Group 1 Presentation</span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-brand-primary drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">
            Principles of Management
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={400}>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light leading-relaxed h-8">
            In a <span className="text-brand-glow font-semibold border-r-2 border-brand-glow pr-1 animate-pulse">{displayText}</span>
          </p>
        </ScrollReveal>

        <ScrollReveal delay={500}>
          <button 
            onClick={scrollToContent}
            className="mb-12 px-8 py-4 bg-brand-primary text-white rounded-full font-bold text-lg shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:shadow-[0_0_30px_rgba(59,130,246,0.8)] hover:scale-105 transition-all duration-300 flex items-center gap-2 mx-auto group"
          >
            Start Journey
            <PlayCircle size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </ScrollReveal>

        <ScrollReveal delay={600}>
          <p className="text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            Successful management is not a fixed science but an <span className="text-white font-semibold">art</span> that depends entirely on the external environment.
          </p>
        </ScrollReveal>

        {/* Team Section */}
        <ScrollReveal delay={800}>
          <div className="glass-panel rounded-2xl p-8 max-w-3xl mx-auto hover:bg-white/5 transition-colors duration-500 group">
            <div className="flex items-center justify-center gap-3 mb-6 text-brand-primary group-hover:scale-110 transition-transform duration-300">
              <Users size={24} />
              <h3 className="text-lg font-bold uppercase tracking-widest">Black Falcons Team</h3>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {teamMembers.map((member, idx) => (
                <span 
                  key={idx}
                  className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm hover:bg-brand-primary/20 hover:border-brand-primary/50 hover:text-white hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] transition-all duration-300 cursor-default"
                >
                  {member}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-brand-accent/50 cursor-pointer" onClick={scrollToContent}>
        <ArrowDown size={32} />
      </div>
    </section>
  );
};