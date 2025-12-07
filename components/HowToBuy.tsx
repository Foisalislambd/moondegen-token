import React from 'react';
import { Button } from './Button';
import { Wallet, Coins, ArrowRightLeft, Rocket } from 'lucide-react';
import { CONTRACT_ADDRESS } from '../constants';

export const HowToBuy: React.FC = () => {
  const steps = [
    {
      icon: <Wallet className="w-8 h-8" />,
      title: "Create Wallet",
      desc: "Download Phantom or your wallet of choice from the app store or google chrome extension for free.",
      color: "text-purple-400"
    },
    {
      icon: <Coins className="w-8 h-8" />,
      title: "Get Some SOL",
      desc: "Have SOL in your wallet to switch to $MOON. If you don't have any, you can buy directly on Phantom.",
      color: "text-blue-400"
    },
    {
      icon: <ArrowRightLeft className="w-8 h-8" />,
      title: "Go to Raydium",
      desc: "Connect to Raydium or Pump.fun. Paste the token address in the bottom box and switch SOL for $MOON.",
      color: "text-green-400"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Switch SOL for $MOON",
      desc: "Switch SOL for $MOON. We have Zero taxes so you don't need to worry about buying with a specific slippage.",
      color: "text-yellow-400"
    }
  ];

  return (
    <section id="how-to-buy" className="py-20 bg-deep-space relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-white">
            HOW TO BUY
          </h2>
          <p className="text-gray-400">Follow these easy steps to become a whale.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="relative group">
              <div className="bg-surface/50 backdrop-blur-sm p-8 rounded-3xl border border-white/10 h-full hover:bg-surface/80 transition-all duration-300">
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-neon-purple text-black font-black flex items-center justify-center rounded-full text-lg shadow-lg">
                  {idx + 1}
                </div>
                
                <div className={`mb-6 ${step.color} p-4 bg-white/5 rounded-2xl inline-block`}>
                  {step.icon}
                </div>
                
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
             <div className="inline-block p-6 bg-neon-green/10 rounded-2xl border border-neon-green/30">
                 <p className="text-sm text-neon-green font-mono mb-2">CONTRACT ADDRESS</p>
                 <p className="font-mono text-white text-lg break-all select-all cursor-pointer hover:text-neon-green transition-colors"
                    onClick={() => navigator.clipboard.writeText(CONTRACT_ADDRESS)}
                 >
                     {CONTRACT_ADDRESS}
                 </p>
             </div>
        </div>
      </div>
    </section>
  );
};