import React from 'react';
import { TrendingUp, TrendingDown, Edit2, Trash2 } from 'lucide-react';
import type { Investment } from '../../types/index.ts';

interface InvestmentCardProps {
  investment: Investment;
}

export const InvestmentCard: React.FC<InvestmentCardProps> = ({ investment }) => {
  const isPositive = investment.change >= 0;

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-lg p-6 hover:border-slate-700 transition-colors">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-slate-100">{investment.name}</h3>
          <p className="text-sm text-slate-400 mt-1">{investment.type}</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-2 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-slate-300 transition-colors">
            <Edit2 className="w-4 h-4" />
          </button>
          <button className="p-2 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-red-400 transition-colors">
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Value and Change */}
      <div className="mb-4">
        <p className="text-2xl font-bold text-slate-100">
          ${investment.value.toLocaleString('en-US', { minimumFractionDigits: 2 })}
        </p>
        <div className={`flex items-center gap-2 mt-2 ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
          {isPositive ? (
            <TrendingUp className="w-4 h-4" />
          ) : (
            <TrendingDown className="w-4 h-4" />
          )}
          <span className="text-sm font-semibold">
            {isPositive ? '+' : ''}${investment.change.toFixed(2)} ({investment.changePercent}%)
          </span>
        </div>
      </div>

      {/* Allocation Bar */}
      <div className="pt-4 border-t border-slate-800">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-slate-400">Portfolio Allocation</span>
          <span className="text-xs font-semibold text-slate-300">{investment.allocation}%</span>
        </div>
        <div className="w-full bg-slate-800 rounded-full h-2">
          <div
            className="h-2 rounded-full bg-purple-600"
            style={{ width: `${investment.allocation}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};
