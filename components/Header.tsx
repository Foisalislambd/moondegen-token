import React, { useState } from 'react';
import { Button } from './Button';
import { Menu, X, Rocket } from 'lucide-react';
import { TICKER } from '../constants';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'How to Buy', href: '#how-to-buy' },
    { label: 'Tokenomics', href: '#tokenomics' },
    { label: 'Roadmap', href: '#roadmap' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-deep-space/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <Rocket className="w-8 h-8 text-neon-purple animate-pulse" />
            <span className="text-2xl font-black italic bg-gradient-to-r from-neon-purple to-neon-blue bg-clip-text text-transparent">
              {TICKER}
            </span>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-300 hover:text-white hover:scale-110 transition-all font-semibold"
                >
                  {item.label}
                </a>
              ))}
              <Button size="sm" onClick={() => window.open('https://pump.fun', '_blank')}>
                BUY NOW
              </Button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-neon-green p-2"
            >
              {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-deep-space border-b border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4">
               <Button className="w-full" onClick={() => window.open('https://pump.fun', '_blank')}>
                BUY NOW
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};