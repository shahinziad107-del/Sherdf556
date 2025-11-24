import React, { useState } from 'react';
import { FileText, Video, Download, FileType, Check, FileCheck } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

const downloads = [
  {
    id: 1,
    title: "Principles Presentation",
    type: "PDF",
    size: "2.4 MB",
    icon: <FileText className="w-8 h-8 text-red-400" />,
    desc: "The complete slide deck covering Scientific Management to Modern Culture.",
  },
  {
    id: 2,
    title: "Executive Summary",
    type: "DOCX",
    size: "1.1 MB",
    icon: <FileType className="w-8 h-8 text-blue-400" />,
    desc: "A concise written summary of the key management theories discussed.",
  },
  {
    id: 3,
    title: "Case Study Analysis",
    type: "PDF",
    size: "3.5 MB",
    icon: <FileCheck className="w-8 h-8 text-yellow-400" />,
    desc: "Deep dive into real-world examples of organizational adaptation.",
  },
  {
    id: 4,
    title: "Open Systems Explainer",
    type: "MP4",
    size: "45 MB",
    icon: <Video className="w-8 h-8 text-brand-accent" />,
    desc: "Animated video breakdown of the External Environment forces.",
    isVideo: true
  }
];

const DownloadButton: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'downloading' | 'done'>('idle');

  const handleDownload = () => {
    if (status !== 'idle') return;
    setStatus('downloading');
    
    // Simulate download delay
    setTimeout(() => {
      setStatus('done');
      // Reset after showing success
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <button 
      onClick={handleDownload}
      disabled={status !== 'idle'}
      className={`
        relative overflow-hidden p-3 rounded-full transition-all duration-300 border shadow-lg
        ${status === 'idle' 
          ? 'bg-white/5 hover:bg-brand-accent hover:text-brand-dark border-white/10 hover:border-brand-accent hover:scale-110' 
          : ''}
        ${status === 'downloading' 
          ? 'bg-brand-primary border-brand-primary text-white cursor-wait' 
          : ''}
        ${status === 'done' 
          ? 'bg-green-500 border-green-500 text-white' 
          : ''}
      `}
      title="Download File"
    >
      <div className="relative z-10 flex items-center justify-center">
        {status === 'idle' && <Download size={20} />}
        {status === 'downloading' && (
          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
        )}
        {status === 'done' && <Check size={20} className="animate-in zoom-in duration-300" />}
      </div>
      
      {/* Ripple effect could go here, but CSS hover works well enough */}
    </button>
  );
};

export const DownloadsSection: React.FC = () => {
  return (
    <section id="downloads" className="py-24 px-6 relative overflow-hidden">
      {/* Ambient Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-accent rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 mb-4 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-xs font-bold uppercase tracking-widest">
              Bonus Content
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Downloads & Resources</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Access the complete presentation materials, research documents, and visual guides used in this project.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {downloads.map((item, idx) => (
            <ScrollReveal key={item.id} delay={idx * 100} direction={idx % 2 === 0 ? 'left' : 'right'}>
              <div className="group relative p-1 rounded-2xl bg-gradient-to-br from-white/10 to-transparent hover:from-brand-accent/50 hover:to-brand-primary/50 transition-all duration-500 h-full">
                
                {/* Card Body */}
                <div className="relative h-full bg-brand-dark/90 backdrop-blur-xl rounded-xl p-8 border border-white/5 flex flex-col md:flex-row items-center md:items-start gap-6 group-hover:bg-brand-dark/80 transition-all duration-300">
                  
                  {/* Icon Container with Glow */}
                  <div className={`
                    shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center bg-white/5 
                    group-hover:scale-110 transition-transform duration-500 border border-white/5
                    ${item.isVideo ? 'shadow-[0_0_30px_rgba(6,182,212,0.2)]' : 'shadow-none'}
                  `}>
                    {item.icon}
                  </div>

                  {/* Text Content */}
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-white transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-400 mb-4 leading-relaxed">
                      {item.desc}
                    </p>
                    
                    <div className="flex items-center justify-center md:justify-start gap-3">
                      <span className="text-xs font-mono text-gray-500 bg-black/40 px-2 py-1 rounded border border-white/5 uppercase tracking-wide">
                        {item.type}
                      </span>
                      <span className="text-xs font-mono text-gray-500">
                        {item.size}
                      </span>
                    </div>
                  </div>

                  {/* Download Button Component */}
                  <div className="mt-4 md:mt-0 self-center shrink-0">
                    <DownloadButton />
                  </div>

                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
        
        {/* Footer Note for section */}
        <ScrollReveal delay={400} direction="up">
            <div className="mt-12 text-center text-xs text-gray-600 font-mono">
                * Files are protected by copyright of Black Falcons Team.
            </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
