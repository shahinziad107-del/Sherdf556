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
          <div className="bg-white/5 p-1 rounded-full flex relative">
             {/* Sliding Background */}
             <div 
                className={`absolute top-1 bottom-1 w-[140px] bg-gradient-to-r rounded-full transition-all duration-500 ease-out shadow-lg ${activeTab === 'mechanistic' ? 'left-1 from-brand-primary to-blue-600' : 'left-[156px] from-green-500 to-emerald-600'}`}
             ></div>
             
            <button
              onClick={() => setActiveTab('mechanistic')}
              className={`relative z-10 w-[150px] py-3 rounded-full text-sm font-bold transition-colors duration-300 ${
                activeTab === 'mechanistic' ? 'text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              MECHANISTIC
            </button>
            <button
              onClick={() => setActiveTab('organic')}
              className={`relative z-10 w-[150px] py-3 rounded-full text-sm font-bold transition-colors duration-300 ${
                activeTab === 'organic' ? 'text-white' : 'text-gray-400 hover:text-white'
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
                <div className={`absolute inset-0 transition-all duration-500 transform ${activeTab === 'mechanistic' ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10 pointer-events-none'}`}>
                    <div className="animate-float space-y-4">
                        <div className="glass-panel p-6 rounded-xl border-l-4 border-brand-primary shadow-[0_0_20px_rgba(59,130,246,0.1)]">
                            <h3 className="text-2xl font-bold mb-2 text-white">Stable Environment</h3>
                            <ul className="list-disc list-inside text-gray-300 space-y-3">
                                <li className="marker:text-brand-primary">Rigid Hierarchy</li>
                                <li className="marker:text-brand-primary">Centralized Authority</li>
                                <li className="marker:text-brand-primary">Strict Rules (High Formalization)</li>
                                <li className="marker:text-brand-primary">Vertical Communication</li>
                            </ul>
                        </div>
                        <div className="p-4 bg-brand-primary/10 rounded-lg text-center text-sm text-brand-primary font-mono border border-brand-primary/20">
                            "Efficiency & Control"
                        </div>
                    </div>
                </div>

                <div className={`absolute inset-0 transition-all duration-500 transform ${activeTab === 'organic' ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10 pointer-events-none'}`}>
                    <div className="animate-float space-y-4" style={{ animationDelay: '1s' }}>
                        <div className="glass-panel p-6 rounded-xl border-l-4 border-green-500 shadow-[0_0_20px_rgba(34,197,94,0.1)]">
                            <h3 className="text-2xl font-bold mb-2 text-white">Dynamic Environment</h3>
                            <ul className="list-disc list-inside text-gray-300 space-y-3">
                                <li className="marker:text-green-500">Flexible Networks</li>
                                <li className="marker:text-green-500">Decentralized</li>
                                <li className="marker:text-green-500">Adaptive (Low Formalization)</li>
                                <li className="marker:text-green-500">Horizontal Communication</li>
                            </ul>
                        </div>
                        <div className="p-4 bg-green-500/10 rounded-lg text-center text-sm text-green-400 font-mono border border-green-500/20">
                            "Innovation & Agility"
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Structural Designs Grid */}
        <div className="order-1 md:order-2 grid grid-cols-1 gap-4">
            <h3 className="text-xl font-bold text-gray-500 uppercase tracking-wider mb-2">Modern Designs</h3>
            
            <ScrollReveal delay={100} direction="left">
                <div className="group flex items-center gap-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 border border-transparent hover:border-brand-accent/30 transition-all duration-300 cursor-pointer hover:shadow-[0_0_15px_rgba(6,182,212,0.15)]">
                    <div className="p-3 bg-white/5 rounded-full group-hover:bg-brand-accent/20 transition-colors">
                        <Layers className="text-brand-accent" size={24} />
                    </div>
                    <div>
                        <h4 className="font-bold group-hover:text-brand-accent transition-colors">Matrix Structure</h4>
                        <p className="text-xs text-gray-400">Dual reporting for efficiency & project focus.</p>
                    </div>
                </div>
            </ScrollReveal>

            <ScrollReveal delay={200} direction="left">
                <div className="group flex items-center gap-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 border border-transparent hover:border-brand-purple/30 transition-all duration-300 cursor-pointer hover:shadow-[0_0_15px_rgba(139,92,246,0.15)]">
                    <div className="p-3 bg-white/5 rounded-full group-hover:bg-brand-purple/20 transition-colors">
                        <Network className="text-brand-purple" size={24} />
                    </div>
                    <div>
                        <h4 className="font-bold group-hover:text-brand-purple transition-colors">Networked Team</h4>
                        <p className="text-xs text-gray-400">Temporary, cross-functional flexible teams.</p>
                    </div>
                </div>
            </ScrollReveal>

            <ScrollReveal delay={300} direction="left">
                <div className="group flex items-center gap-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 border border-transparent hover:border-orange-400/30 transition-all duration-300 cursor-pointer hover:shadow-[0_0_15px_rgba(251,146,60,0.15)]">
                     <div className="p-3 bg-white/5 rounded-full group-hover:bg-orange-400/20 transition-colors">
                        <Globe className="text-orange-400" size={24} />
                    </div>
                    <div>
                        <h4 className="font-bold group-hover:text-orange-400 transition-colors">Virtual Structure</h4>
                        <p className="text-xs text-gray-400">Tech-reliant, no physical boundaries (Uber, Airbnb).</p>
                    </div>
                </div>
            </ScrollReveal>
        </div>
      </div>
    </section>
  );
};