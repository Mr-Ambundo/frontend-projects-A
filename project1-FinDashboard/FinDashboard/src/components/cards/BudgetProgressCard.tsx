import React from 'react';
import { Edit2, Trash2, AlertCircle } from 'lucide-react';
import type { BudgetCategory } from '../../types/index.ts';

interface BudgetProgressCardProps {
  budget: BudgetCategory;
}

const colorMap: { [key: string]: { bg: string; bar: string; text: string } } = {
  purple: { bg: 'bg-purple-500/10', bar: 'bg-purple-600', text: 'text-purple-400' },
  pink: { bg: 'bg-pink-500/10', bar: 'bg-pink-600', text: 'text-pink-400' },
  orange: { bg: 'bg-orange-500/10', bar: 'bg-orange-600', text: 'text-orange-400' },
  green: { bg: 'bg-green-500/10', bar: 'bg-green-600', text: 'text-green-400' },
  blue: { bg: 'bg-blue-500/10', bar: 'bg-blue-600', text: 'text-blue-400' },
  gray: { bg: 'bg-gray-500/10', bar: 'bg-gray-600', text: 'text-gray-400' },
};

export const BudgetProgressCard: React.FC<BudgetProgressCardProps> = ({ budget }) => {
  const percentage = (budget.spent / budget.limit) * 100;
  const isOverBudget = budget.spent > budget.limit;
  const colors = colorMap[budget.color] || colorMap.gray;

  return (
    <div className={`${colors.bg} border border-slate-700 rounded-lg p-6`}>
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-slate-100">{budget.name}</h3>
          <p className="text-sm text-slate-400 mt-1">
            ${budget.spent.toFixed(2)} / ${budget.limit.toFixed(2)}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button className={`p-2 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-slate-300 transition-colors`}>
            <Edit2 className="w-4 h-4" />
          </button>
          <button className={`p-2 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-red-400 transition-colors`}>
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-3">
        <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
          <div
            className={`h-2 rounded-full transition-all ${colors.bar}`}
            style={{ width: `${Math.min(percentage, 100)}%` }}
          ></div>
        </div>
      </div>

      {/* Percentage and Status */}
      <div className="flex items-center justify-between">
        <span className={`text-sm font-semibold ${isOverBudget ? 'text-red-400' : colors.text}`}>
          {percentage.toFixed(0)}%
        </span>
        {isOverBudget && (
          <div className="flex items-center gap-1 text-red-400">
            <AlertCircle className="w-4 h-4" />
            <span className="text-xs font-medium">Over budget</span>
          </div>
        )}
      </div>

      {/* Remaining */}
      <div className="mt-4 pt-4 border-t border-slate-700">
        <p className="text-xs text-slate-400">
          {isOverBudget ? (
            <span className="text-red-400">
              Over by ${(budget.spent - budget.limit).toFixed(2)}
            </span>
          ) : (
            <span className="text-green-400">
              ${(budget.limit - budget.spent).toFixed(2)} remaining
            </span>
          )}
        </p>
      </div>
    </div>
  );
};
