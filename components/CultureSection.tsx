import React from 'react';
import { ScrollReveal } from './ScrollReveal';

export const CultureSection: React.FC = () => {
  return (
    <section id="culture" className="py-20 bg-gradient-to-b from-brand-dark via-brand-dark to-black">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Corporate Culture</h2>
            <p className="text-xl text-gray-400">The Organization's DNA and "Social Glue".</p>
          </div>
        </ScrollReveal>

        {/* Competing Values Framework Grid */}
        <div className="relative max-w-4xl mx-auto aspect-square md:aspect-video lg:aspect-[16/9] flex flex-col">
           
           {/* Axis Labels */}
           <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-8 text-xs font-bold uppercase tracking-widest text-gray-500">Flexibility</div>
           <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-8 text-xs font-bold uppercase tracking-widest text-gray-500">Stability</div>
           <div className="absolute left-0 top-1/2 -translate-x-8 -translate-y-1/2 -rotate-90 text-xs font-bold uppercase tracking-widest text-gray-500">Internal</div>
           <div className="absolute right-0 top-1/2 translate-x-8 -translate-y-1/2 rotate-90 text-xs font-bold uppercase tracking-widest text-gray-500">External</div>

           <div className="grid grid-cols-2 grid-rows-2 gap-2 h-full">
              {/* Clan */}
              <ScrollReveal direction="right" className="h-full">
                <div className="h-full bg-gradient-to-br from-yellow-500/10 to-yellow-500/5 border border-yellow-500/20 rounded-tl-3xl p-6 hover:bg-yellow-500/20 transition-all duration-500 flex flex-col justify-between group">
                    <div className="text-right text-xs text-yellow-500/50 font-mono">Internal / Flexible</div>
                    <div>
                        <h3 className="text-2xl font-bold text-yellow-400 mb-2">Clan</h3>
                        <p className="text-sm text-gray-300 opacity-70 group-hover:opacity-100 transition-opacity">
                            Family-like, Mentoring, Collaboration.
                        </p>
                    </div>
                </div>
              </ScrollReveal>

              {/* Adhocracy */}
              <ScrollReveal direction="left" className="h-full">
                <div className="h-full bg-gradient-to-bl from-purple-500/10 to-purple-500/5 border border-purple-500/20 rounded-tr-3xl p-6 hover:bg-purple-500/20 transition-all duration-500 flex flex-col justify-between group">
                     <div className="text-right text-xs text-purple-500/50 font-mono">External / Flexible</div>
                    <div>
                        <h3 className="text-2xl font-bold text-purple-400 mb-2">Adhocracy</h3>
                        <p className="text-sm text-gray-300 opacity-70 group-hover:opacity-100 transition-opacity">
                            Dynamic, Entrepreneurial, Innovation (e.g., Google).
                        </p>
                    </div>
                </div>
              </ScrollReveal>

              {/* Hierarchy */}
              <ScrollReveal direction="right" delay={200} className="h-full">
                <div className="h-full bg-gradient-to-tr from-blue-500/10 to-blue-500/5 border border-blue-500/20 rounded-bl-3xl p-6 hover:bg-blue-500/20 transition-all duration-500 flex flex-col justify-between group">
                    <div>
                        <h3 className="text-2xl font-bold text-blue-400 mb-2">Hierarchy</h3>
                        <p className="text-sm text-gray-300 opacity-70 group-hover:opacity-100 transition-opacity">
                            Structured, Efficient, Control, Rules.
                        </p>
                    </div>
                    <div className="text-right text-xs text-blue-500/50 font-mono">Internal / Stable</div>
                </div>
              </ScrollReveal>

              {/* Market */}
              <ScrollReveal direction="left" delay={200} className="h-full">
                <div className="h-full bg-gradient-to-tl from-red-500/10 to-red-500/5 border border-red-500/20 rounded-br-3xl p-6 hover:bg-red-500/20 transition-all duration-500 flex flex-col justify-between group">
                     <div>
                        <h3 className="text-2xl font-bold text-red-400 mb-2">Market</h3>
                        <p className="text-sm text-gray-300 opacity-70 group-hover:opacity-100 transition-opacity">
                            Results-oriented, Competitive, Achievement.
                        </p>
                    </div>
                    <div className="text-right text-xs text-red-500/50 font-mono">External / Stable</div>
                </div>
              </ScrollReveal>
           </div>
        </div>
      </div>
    </section>
  );
};