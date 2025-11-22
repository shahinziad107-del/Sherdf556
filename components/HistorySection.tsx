import React from 'react';
import { Lightbulb, Users, Handshake, Scale } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

const timelineEvents = [
  {
    year: "Era 1",
    title: "Scientific Management",
    description: "Focus on laws, production, and physical efficiency. Workers as parts of a machine.",
    icon: <Scale size={24} className="text-orange-400" />,
    color: "border-orange-400/50"
  },
  {
    year: "1924",
    title: "Hawthorne Studies",
    description: "The shift to the Social Aspect. Proved that attention to workers and social factors increases productivity more than physical conditions.",
    icon: <Lightbulb size={24} className="text-yellow-400" />,
    color: "border-yellow-400/50"
  },
  {
    year: "Era 2",
    title: "Chester Barnard",
    description: "Zone of Indifference: Workers comply if orders don't conflict with personal interests.",
    icon: <Users size={24} className="text-brand-primary" />,
    color: "border-brand-primary/50"
  },
  {
    year: "Era 3",
    title: "Mary Parker Follett",
    description: "Conflict Resolution & Integration. Both parties find a mutually satisfying solution rather than compromise.",
    icon: <Handshake size={24} className="text-brand-purple" />,
    color: "border-brand-purple/50"
  }
];

export const HistorySection: React.FC = () => {
  return (
    <section id="history" className="py-20 px-6 max-w-7xl mx-auto">
      <ScrollReveal>
        <div className="mb-16 border-l-4 border-brand-primary pl-6">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Evolution of Thought</h2>
          <p className="text-xl text-gray-400">From strict mechanics to human relations.</p>
        </div>
      </ScrollReveal>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-8 relative">
           {/* Timeline Line */}
           <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-primary/20 to-transparent md:hidden"></div>

          {timelineEvents.map((event, idx) => (
            <ScrollReveal key={idx} delay={idx * 150} direction="left">
              <div className={`glass-panel p-6 rounded-xl flex gap-6 relative group hover:bg-white/5 transition-colors ${event.color} border-l-4 border-t-0 border-b-0 border-r-0`}>
                <div className="shrink-0 mt-1 p-3 rounded-full bg-white/5 backdrop-blur-sm">
                  {event.icon}
                </div>
                <div>
                  <span className="text-xs font-mono text-gray-500 mb-1 block">{event.year}</span>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-brand-accent transition-colors">{event.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{event.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="sticky top-32">
          <ScrollReveal delay={300} direction="right">
            <div className="glass-panel p-8 rounded-2xl border border-brand-accent/20 bg-gradient-to-br from-brand-dark to-brand-primary/10">
              <h3 className="text-2xl font-bold mb-6 text-brand-glow">The "It Depends" Principle</h3>
              <p className="text-gray-300 mb-8 text-lg">
                The <strong>Contingency School</strong> teaches us that there is no single "best way" to manage.
              </p>
              <div className="relative h-48 bg-black/30 rounded-lg flex items-center justify-center overflow-hidden">
                 <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 border-4 border-dashed border-gray-600 rounded-full animate-[spin_10s_linear_infinite]"></div>
                    <div className="w-24 h-24 border-4 border-dotted border-brand-primary rounded-full absolute animate-[spin_8s_linear_infinite_reverse]"></div>
                    <div className="text-center z-10">
                      <span className="block text-sm text-gray-500">Management</span>
                      <span className="block text-xl font-bold text-white">Response</span>
                    </div>
                 </div>
              </div>
              <p className="mt-6 text-sm text-gray-400 text-center">
                Unique Situations Require Unique Responses
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};