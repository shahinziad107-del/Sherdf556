import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-black border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
                <h4 className="font-display font-bold text-xl mb-4">Black Falcons</h4>
                <p className="text-gray-500 text-sm">
                    Delivering complex management information in a simple, dynamic way.
                </p>
            </div>
            <div>
                <h4 className="font-bold text-lg mb-4 text-brand-primary">Key Takeaways</h4>
                <ul className="text-sm text-gray-400 space-y-2">
                    <li>• Management is an Art, not just Science.</li>
                    <li>• Contingency: "It Depends".</li>
                    <li>• Fit: Environment + Structure + Culture.</li>
                </ul>
            </div>
            <div>
                <h4 className="font-bold text-lg mb-4 text-brand-accent">Connect</h4>
                <p className="text-sm text-gray-400">
                    Presented by Group 1 for Principles of Management.
                </p>
                <div className="mt-4 font-mono text-xs text-brand-accent/50">
                    Project: zaid_sh
                </div>
            </div>
        </div>
        <div className="text-center pt-8 border-t border-white/5 text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} Black Falcons Team. All rights reserved.
        </div>
      </div>
    </footer>
  );
};