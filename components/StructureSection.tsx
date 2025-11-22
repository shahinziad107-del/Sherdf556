import React, { useState } from 'react';
import { Briefcase, Network, Layers, Globe } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const StructureSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'mechanistic' | 'organic'>('mechanistic');

  return (
    <section id="structure" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16">
        <ScrollReveal>
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Organizational Structure</h2>
            <p className="text-xl text-gray-400">The blueprint of work. Fitting structure to environment.</p>
          </div>
        </ScrollReveal>
      </div>

      {/* Toggle Switch */}
      <ScrollReveal direction="up">
        <div className="flex justify-center mb-12">
          <div className="bg-white/5 p-1 rounded-full flex">
            <button
              onClick={() => setActiveTab('mechanistic')}
              className={`px-8 py-3 rounded-full text-sm font-bold transition-all ${
                activeTab === 'mechanistic' ? 'bg-brand-primary text-white shadow-lg' : 'text-gray-400 hover:text-white'
              }`}
            >
              MECHANISTIC
            </button>
            <button
              onClick={() => setActiveTab('organic')}
              className={`px-8 py-3 rounded-full text-sm font-bold transition-all ${
                activeTab === 'organic' ? 'bg-green-500 text-white shadow-lg' : 'text-gray-400 hover:text-white'
              }`}
            >
              ORGANIC
            </button>
          </div>
        </div>
      </ScrollReveal>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Dynamic Content based on Toggle */}
        <div className="order-2 md:order-1">
            <div className="relative h-full min-h-[300px]">
              {activeTab === 'mechanistic' ? (
                 <div className="animate-float space-y-4">
                    <div className="glass-panel p-6 rounded-xl border-l-4 border-brand-primary">
                        <h3 className="text-2xl font-bold mb-2">Stable Environment</h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <li>Rigid Hierarchy</li>
                            <li>Centralized Authority</li>
                            <li>Strict Rules (High Formalization)</li>
                            <li>Vertical Communication</li>
                        </ul>
                    </div>
                    <div className="p-4 bg-brand-primary/10 rounded-lg text-center text-sm text-brand-primary font-mono">
                        "Efficiency & Control"
                    </div>
                 </div>
              ) : (
                <div className="animate-float space-y-4">
                    <div className="glass-panel p-6 rounded-xl border-l-4 border-green-500">
                        <h3 className="text-2xl font-bold mb-2">Dynamic Environment</h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <li>Flexible Networks</li>
                            <li>Decentralized</li>
                            <li>Adaptive (Low Formalization)</li>
                            <li>Horizontal Communication</li>
                        </ul>
                    </div>
                    <div className="p-4 bg-green-500/10 rounded-lg text-center text-sm text-green-400 font-mono">
                        "Innovation & Agility"
                    </div>
                 </div>
              )}
            </div>
        </div>

        {/* Structural Designs Grid */}
        <div className="order-1 md:order-2 grid grid-cols-1 gap-4">
            <h3 className="text-xl font-bold text-gray-500 uppercase tracking-wider mb-2">Modern Designs</h3>
            
            <ScrollReveal delay={100} direction="left">
                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                    <Layers className="text-brand-accent" />
                    <div>
                        <h4 className="font-bold">Matrix Structure</h4>
                        <p className="text-xs text-gray-400">Dual reporting for efficiency & project focus.</p>
                    </div>
                </div>
            </ScrollReveal>

            <ScrollReveal delay={200} direction="left">
                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                    <Network className="text-brand-purple" />
                    <div>
                        <h4 className="font-bold">Networked Team</h4>
                        <p className="text-xs text-gray-400">Temporary, cross-functional flexible teams.</p>
                    </div>
                </div>
            </ScrollReveal>

            <ScrollReveal delay={300} direction="left">
                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                    <Globe className="text-orange-400" />
                    <div>
                        <h4 className="font-bold">Virtual Structure</h4>
                        <p className="text-xs text-gray-400">Tech-reliant, no physical boundaries (Uber, Airbnb).</p>
                    </div>
                </div>
            </ScrollReveal>
        </div>
      </div>
    </section>
  );
};