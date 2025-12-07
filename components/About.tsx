import React from 'react';
import { TICKER } from '../constants';
import { Zap, ShieldCheck, Users } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-surface relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-white">
            WHY <span className="text-neon-purple">{TICKER}</span>?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We aren't here to change the world. We're here to change your portfolio.
            {TICKER} was born from the collective consciousness of the internet's most degenerate traders.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-deep-space p-8 rounded-3xl border border-white/10 hover:border-neon-purple transition-all duration-300 hover:-translate-y-2">
            <div className="w-14 h-14 bg-neon-purple/20 rounded-2xl flex items-center justify-center mb-6 text-neon-purple">
              <Zap className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Fast Transactions</h3>
            <p className="text-gray-400">
              Built on Solana for lightning-fast swaps and practically zero gas fees. 
              Don't let Ethereum gas fees eat your lunch.
            </p>
          </div>

          <div className="bg-deep-space p-8 rounded-3xl border border-white/10 hover:border-neon-green transition-all duration-300 hover:-translate-y-2">
            <div className="w-14 h-14 bg-neon-green/20 rounded-2xl flex items-center justify-center mb-6 text-neon-green">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Safe & Secure</h3>
            <p className="text-gray-400">
              Contract renounced. LP burnt. No shady dev wallets. 
              This is as safe as a rollercoaster without seatbelts, but financially.
            </p>
          </div>

          <div className="bg-deep-space p-8 rounded-3xl border border-white/10 hover:border-neon-blue transition-all duration-300 hover:-translate-y-2">
            <div className="w-14 h-14 bg-neon-blue/20 rounded-2xl flex items-center justify-center mb-6 text-neon-blue">
              <Users className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Community Driven</h3>
            <p className="text-gray-400">
              No VCs. No insiders. Just a bunch of degens screaming "WAGMI" in a Telegram group.
              The true decentralized dream.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};