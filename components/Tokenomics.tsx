import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { TOKENOMICS_DATA } from '../constants';
import { PieChart as PieChartIcon } from 'lucide-react';

export const Tokenomics: React.FC = () => {
  return (
    <section id="tokenomics" className="py-20 bg-deep-space border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 flex items-center justify-center gap-3 text-white">
            <PieChartIcon className="text-neon-green w-10 h-10" />
            TOKENOMICS
          </h2>
          <p className="text-gray-400">Math is hard, so we made charts.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          
          {/* Chart */}
          <div className="h-[300px] sm:h-[350px] md:h-[400px] w-full bg-white/5 rounded-3xl p-3 sm:p-4 border border-white/10 relative">
             <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10">
                <span className="text-9xl">💰</span>
             </div>
             <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={TOKENOMICS_DATA}
                  cx="50%"
                  cy="50%"
                  innerRadius={80}
                  outerRadius={140}
                  paddingAngle={5}
                  dataKey="value"
                  stroke="none"
                >
                  {TOKENOMICS_DATA.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1a102e', borderColor: '#ffffff20', borderRadius: '10px', color: '#fff' }}
                  itemStyle={{ color: '#fff' }}
                />
                <Legend iconType="circle" />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Info */}
          <div className="space-y-4 sm:space-y-6 mt-8 md:mt-0">
            <div className="bg-surface p-4 sm:p-6 rounded-2xl border-l-4 border-neon-green hover:translate-x-2 transition-transform">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Total Supply</h3>
              <p className="text-2xl sm:text-3xl md:text-4xl font-mono text-neon-green">1,000,000,000</p>
              <p className="text-gray-400 text-xs sm:text-sm mt-1">1 Billion Tokens</p>
            </div>

            <div className="bg-surface p-4 sm:p-6 rounded-2xl border-l-4 border-neon-purple hover:translate-x-2 transition-transform">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Taxes</h3>
              <div className="flex justify-between items-center max-w-xs">
                <div>
                   <span className="block text-2xl sm:text-3xl font-mono text-neon-purple">0%</span>
                   <span className="text-gray-400 text-xs sm:text-sm">Buy Tax</span>
                </div>
                <div>
                   <span className="block text-2xl sm:text-3xl font-mono text-neon-purple">0%</span>
                   <span className="text-gray-400 text-xs sm:text-sm">Sell Tax</span>
                </div>
              </div>
            </div>

            <div className="bg-surface p-4 sm:p-6 rounded-2xl border-l-4 border-neon-blue hover:translate-x-2 transition-transform">
               <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Liquidity</h3>
               <p className="text-sm sm:text-base md:text-lg text-gray-300">
                 Liquidity is burned. Contract is renounced. 
                 The only thing rugging you is your own lack of conviction.
               </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};