import React from 'react';
import { STATS } from '../constants';
import { TrendingUp, TrendingDown } from 'lucide-react';

export const Stats: React.FC = () => {
  return (
    <div className="bg-black/50 border-y border-white/10 backdrop-blur-md overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap md:flex-nowrap justify-around divide-y md:divide-y-0 md:divide-x divide-white/10">
          {STATS.map((stat, idx) => (
            <div key={idx} className="w-1/2 md:w-auto p-3 sm:p-4 md:py-6 flex flex-col items-center justify-center">
              <span className="text-gray-400 text-xs sm:text-sm uppercase tracking-wider mb-1">{stat.label}</span>
              <div className="flex items-center gap-1 sm:gap-2 flex-wrap justify-center">
                <span className="text-lg sm:text-xl md:text-2xl font-bold text-white">{stat.value}</span>
                {stat.trend !== undefined && stat.trend !== 0 && (
                   <span className={`text-xs font-bold px-1.5 py-0.5 rounded flex items-center ${
                     stat.trend > 0 ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                   }`}>
                     {stat.trend > 0 ? <TrendingUp className="w-3 h-3 mr-1" /> : <TrendingDown className="w-3 h-3 mr-1" />}
                     {Math.abs(stat.trend)}%
                   </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};