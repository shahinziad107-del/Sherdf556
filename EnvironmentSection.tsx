import React from 'react';
import { Globe, Cpu, Users, CloudRain, ArrowRight } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

const forces = [
  {
    title: "Economic",
    desc: "Inflation, Interest Rates, Globalization, Wage Levels.",
    icon: <Globe className="w-8 h-8 text-blue-400" />,
    bg: "bg-blue-500/10"
  },
  {
    title: "Technological",
    desc: "AI, Internet, Innovation, Disruption of business models.",
    icon: <Cpu className="w-8 h-8 text-purple-400" />,
    bg: "bg-purple-500/10"
  },
  {
    title: "Sociocultural",
    desc: "Demographics, Values, Customs, Diversity demands.",
    icon: <Users className="w-8 h-8 text-pink-400" />,
    bg: "bg-pink-500/10"
  },
  {
    title: "Natural",
    desc: "Climate change, Disasters, Resource availability.",
    icon: <CloudRain className="w-8 h-8 text-green-400" />,
    bg: "bg-green-500/10"
  }
];

export const EnvironmentSection: React.FC = () => {
  return (
    <section id="environment" className="py-20 bg-black/30">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">The External Environment</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              The organization is an <span className="text-brand-glow font-semibold">Open System</span> that continuously interacts with these forces.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {forces.map((force, idx) => (
            <ScrollReveal key={idx} delay={idx * 100} direction="up">
              <div className={`h-full p-6 rounded-2xl border border-white/5 hover:border-white/20 transition-all duration-300 hover:-translate-y-2 ${force.bg}`}>
                <div className="mb-4 bg-brand-dark/50 w-16 h-16 rounded-xl flex items-center justify-center">
                  {force.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{force.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{force.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Open System Visualization */}
        <ScrollReveal delay={400}>
          <div className="mt-20 glass-panel p-8 rounded-3xl relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-primary to-transparent"></div>
             
             <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
                <div className="flex-1 p-4 bg-white/5 rounded-xl border border-white/5">
                  <span className="text-xs uppercase tracking-widest text-gray-500">Inputs</span>
                  <p className="text-lg font-semibold mt-1">Resources</p>
                  <p className="text-xs text-gray-400">Raw Materials, Capital</p>
                </div>

                <div className="flex flex-col items-center text-brand-accent">
                  <div className="w-32 h-32 rounded-full border-4 border-brand-accent/20 flex items-center justify-center relative">
                    <div className="absolute inset-0 rounded-full border-t-4 border-brand-accent animate-spin"></div>
                    <span className="font-bold text-sm">PROCESS</span>
                  </div>
                  <ArrowRight className="rotate-90 md:rotate-0 mt-4" />
                </div>

                <div className="flex-1 p-4 bg-white/5 rounded-xl border border-white/5">
                  <span className="text-xs uppercase tracking-widest text-gray-500">Outputs</span>
                  <p className="text-lg font-semibold mt-1">Value</p>
                  <p className="text-xs text-gray-400">Goods, Services</p>
                </div>
             </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};