import React from 'react';
import { Button } from './Button';
import { ArrowRight, Copy } from 'lucide-react';
import { CONTRACT_ADDRESS, TICKER } from '../constants';

export const Hero: React.FC = () => {
  const copyAddress = () => {
    navigator.clipboard.writeText(CONTRACT_ADDRESS);
    alert("Contract address copied! Now go buy! 🚀");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-neon-purple/20 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-neon-green/20 rounded-full blur-[100px] animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        
        <div className="mb-8 relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-neon-purple to-neon-blue rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
          <span className="relative px-6 py-2 bg-black rounded-full text-white font-semibold text-sm tracking-wider uppercase flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
            Live on Solana
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tighter mb-6 leading-tight px-2">
          THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-neon-blue">ULTIMATE</span> <br className="hidden sm:block" />
          DEGEN REVOLUTION
        </h1>

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 max-w-2xl mb-10 font-light px-4">
          {TICKER} is the first token that actually understands your need for speed. 
          No utility, no roadmap, just pure vibes and community power.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
          <Button size="lg" className="w-full sm:w-auto text-xl" onClick={() => window.open('https://pump.fun', '_blank')}>
            Ape In Now <ArrowRight className="w-5 h-5" />
          </Button>
          <Button variant="outline" size="lg" className="w-full sm:w-auto text-xl" onClick={copyAddress}>
             <Copy className="w-5 h-5" /> Copy CA
          </Button>
        </div>

        <div className="mt-8 sm:mt-12 p-3 sm:p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 break-all max-w-full mx-4">
            <code className="text-neon-blue font-mono text-xs sm:text-sm md:text-base">
                CA: {CONTRACT_ADDRESS}
            </code>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 text-6xl opacity-20 animate-float hidden lg:block">💎</div>
      <div className="absolute bottom-1/3 right-10 text-6xl opacity-20 animate-float hidden lg:block" style={{ animationDelay: '2s' }}>🚀</div>
      <div className="absolute top-1/3 right-1/4 text-4xl opacity-20 animate-spin-slow hidden lg:block">🌕</div>
    </section>
  );
};