import React from 'react';
import { useFinanceStore } from '../../store/useFinanceStore';
import { TrendingUp } from 'lucide-react';

interface InvestmentPortfolioProps {
  limit?: number;
}

export const InvestmentPortfolio: React.FC<InvestmentPortfolioProps> = ({ limit = 10 }) => {
  const investments = useFinanceStore((state) => state.investments).slice(0, limit);

  return (
    <div className="space-y-3">
      {investments.map((inv) => (
        <div key={inv.id} className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
          <div>
            <p className="text-sm font-medium text-slate-100">{inv.name}</p>
            <p className="text-xs text-slate-400">{inv.allocation}% allocation</p>
          </div>
          <div className="text-right">
            <p className="text-sm font-semibold text-slate-100">${inv.value.toLocaleString('en-US', { minimumFractionDigits: 2 })}</p>
            <p className="text-xs text-green-400 flex items-center gap-1 justify-end">
              <TrendingUp className="w-3 h-3" />
              +{inv.changePercent}%
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
