import React from 'react';
import { ArrowDown, Users } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

const teamMembers = [
  "Ziad Shahin",
  "Ahmed Hossam",
  "Bellal Arafa",
  "Khaled Mohammed",
  "Ahmed Morsy"
];

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-20 overflow-hidden">
      
      {/* Abstract Glow Background */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-primary/20 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-purple/20 rounded-full blur-[100px]" style={{ animationDuration: '4s' }}></div>

      <div className="text-center z-10 max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="inline-block px-4 py-2 mb-6 rounded-full border border-brand-accent/30 bg-brand-accent/10 backdrop-blur-sm">
            <span className="text-brand-accent uppercase tracking-widest text-xs font-bold">Group 1 Presentation</span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-brand-primary">
            Principles of Management
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={400}>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 font-light leading-relaxed">
            In a <span className="text-brand-glow font-semibold">Dynamic World</span>
          </p>
        </ScrollReveal>

        <ScrollReveal delay={600}>
          <p className="text-gray-400 max-w-2xl mx-auto mb-12">
            Successful management is not a fixed science but an art that depends entirely on the external environment. Explore the blueprint for leading in a rapidly changing world.
          </p>
        </ScrollReveal>

        {/* Team Section */}
        <ScrollReveal delay={800}>
          <div className="glass-panel rounded-2xl p-8 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6 text-brand-primary">
              <Users size={24} />
              <h3 className="text-lg font-bold uppercase tracking-widest">Black Falcons Team</h3>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {teamMembers.map((member, idx) => (
                <span 
                  key={idx}
                  className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm hover:bg-brand-primary/20 hover:border-brand-primary/50 transition-all cursor-default"
                >
                  {member}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-brand-accent/50">
        <ArrowDown size={32} />
      </div>
    </section>
  );
};