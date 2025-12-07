import React from 'react';
import { Twitter, Send, Github } from 'lucide-react';
import { TICKER } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-black italic mb-8">{TICKER}</h2>
        
        <div className="flex justify-center gap-4 sm:gap-8 mb-6 sm:mb-8">
          <a href="#" className="p-2 sm:p-3 bg-white/5 rounded-full hover:bg-neon-blue hover:text-black transition-all hover:scale-110">
            <Twitter className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
          <a href="#" className="p-2 sm:p-3 bg-white/5 rounded-full hover:bg-neon-blue hover:text-black transition-all hover:scale-110">
            <Send className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
          <a href="#" className="p-2 sm:p-3 bg-white/5 rounded-full hover:bg-neon-blue hover:text-black transition-all hover:scale-110">
            <Github className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
        </div>

        <p className="text-gray-600 text-sm max-w-xl mx-auto mb-4">
          DISCLAIMER: This is a meme coin for entertainment purposes only. 
          There is no intrinsic value, no expectation of financial return, and the team has no roadmap to solve world hunger.
          Don't buy money you can't afford to lose.
        </p>

        <p className="text-gray-800 text-xs">
          © {new Date().getFullYear()} {TICKER}. All rights reserved. To the moon.
        </p>
      </div>
    </footer>
  );
};