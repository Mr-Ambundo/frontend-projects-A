import React from 'react';
import { useFinanceStore } from '../../store/useFinanceStore';

interface BudgetOverviewProps {
  limit?: number;
}

export const BudgetOverview: React.FC<BudgetOverviewProps> = ({ limit = 10 }) => {
  const budgets = useFinanceStore((state) => state.budgets).slice(0, limit);

  return (
    <div className="space-y-4">
      {budgets.map((budget) => {
        const percentage = (budget.spent / budget.limit) * 100;
        const colorMap: { [key: string]: string } = {
          purple: 'bg-purple-600',
          pink: 'bg-pink-600',
          orange: 'bg-orange-600',
          green: 'bg-green-600',
          blue: 'bg-blue-600',
          gray: 'bg-gray-600',
        };

        return (
          <div key={budget.id}>
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-medium text-slate-100">{budget.name}</p>
              <p className="text-xs text-slate-400">
                ${budget.spent.toFixed(2)} / ${budget.limit.toFixed(2)}
              </p>
            </div>
            <div className="w-full bg-slate-800 rounded-full h-2">
              <div
                className={`h-2 rounded-full ${colorMap[budget.color] || 'bg-slate-600'}`}
                style={{ width: `${Math.min(percentage, 100)}%` }}
              ></div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
