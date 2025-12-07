import React from 'react';
import { ROADMAP } from '../constants';
import { CheckCircle2, Circle } from 'lucide-react';

export const Roadmap: React.FC = () => {
  return (
    <section id="roadmap" className="py-20 bg-surface relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-neon-blue/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-black mb-16 text-center text-white">
          <span className="text-neon-blue">ROAD</span>MAP TO MARS
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {ROADMAP.map((phase, idx) => (
            <div 
              key={idx} 
              className={`relative p-8 rounded-3xl border ${
                phase.done ? 'border-neon-green/50 bg-neon-green/5' : 'border-white/10 bg-white/5'
              } hover:border-neon-purple/50 transition-colors duration-300`}
            >
              <div className="absolute -top-4 left-8 bg-black px-4 py-1 rounded-full border border-white/20 text-sm font-bold tracking-widest uppercase">
                {phase.phase}
              </div>
              
              <h3 className={`text-2xl font-bold mb-6 mt-2 ${phase.done ? 'text-neon-green' : 'text-white'}`}>
                {phase.title}
              </h3>

              <ul className="space-y-4">
                {phase.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-start gap-3">
                    {phase.done ? (
                      <CheckCircle2 className="w-6 h-6 text-neon-green shrink-0" />
                    ) : (
                      <Circle className="w-6 h-6 text-gray-600 shrink-0" />
                    )}
                    <span className={phase.done ? 'text-gray-200 line-through' : 'text-gray-400'}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};