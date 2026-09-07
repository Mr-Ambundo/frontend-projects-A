import React, { useState, useMemo } from 'react';
import { Plus, AlertCircle } from 'lucide-react';
import { Card } from '../../components/ui/Card.tsx';
import { useFinanceStore } from '../../store/useFinanceStore.ts';
import { useModalStore } from '../../store/useModalStore.ts';
import { BudgetProgressCard } from '../../components/cards/BudgetProgressCard.tsx';
import { mockBudgets } from '../../data/mockData.ts';

const Budget: React.FC = () => {
  const { setBudgets } = useFinanceStore();
  const budgets = useFinanceStore((state) => state.budgets);
  const { openModal } = useModalStore();
  const [sortBy, setSortBy] = useState<'usage' | 'name'>('usage');

  React.useEffect(() => {
    setBudgets(mockBudgets);
  }, []);

  const sortedBudgets = useMemo(() => {
    const sorted = [...budgets];
    if (sortBy === 'usage') {
      sorted.sort((a, b) => (b.spent / b.limit) - (a.spent / a.limit));
    } else {
      sorted.sort((a, b) => a.name.localeCompare(b.name));
    }
    return sorted;
  }, [budgets, sortBy]);

  const stats = useMemo(() => {
    const totalLimit = budgets.reduce((sum, b) => sum + b.limit, 0);
    const totalSpent = budgets.reduce((sum, b) => sum + b.spent, 0);
    const percentageUsed = (totalSpent / totalLimit) * 100;
    const overBudget = budgets.filter((b) => b.spent > b.limit).length;

    return { totalLimit, totalSpent, percentageUsed, overBudget };
  }, [budgets]);

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-slate-100">Budget</h1>
          <p className="text-slate-400 mt-2">Track your spending against budget limits.</p>
        </div>
        <button
          onClick={() => openModal('addBudget')}
          className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
        >
          <Plus className="w-5 h-5" />
          New Budget
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <p className="text-slate-400 text-sm font-medium">Total Budget</p>
          <h3 className="text-2xl font-bold text-slate-100 mt-2">
            ${stats.totalLimit.toLocaleString('en-US', { minimumFractionDigits: 2 })}
          </h3>
        </Card>
        <Card>
          <p className="text-slate-400 text-sm font-medium">Total Spent</p>
          <h3 className="text-2xl font-bold text-slate-100 mt-2">
            ${stats.totalSpent.toLocaleString('en-US', { minimumFractionDigits: 2 })}
          </h3>
        </Card>
        <Card>
          <p className="text-slate-400 text-sm font-medium">Remaining</p>
          <h3 className={`text-2xl font-bold mt-2 ${stats.totalSpent > stats.totalLimit ? 'text-red-400' : 'text-green-400'}`}>
            ${Math.max(0, stats.totalLimit - stats.totalSpent).toLocaleString('en-US', { minimumFractionDigits: 2 })}
          </h3>
        </Card>
        <Card>
          <p className="text-slate-400 text-sm font-medium">Usage</p>
          <h3 className={`text-2xl font-bold mt-2 ${stats.percentageUsed > 100 ? 'text-red-400' : stats.percentageUsed > 80 ? 'text-orange-400' : 'text-green-400'}`}>
            {stats.percentageUsed.toFixed(1)}%
          </h3>
        </Card>
      </div>

      {stats.overBudget > 0 && (
        <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 flex items-gap-4">
          <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-red-400 font-medium">{stats.overBudget} budget(s) exceeded</p>
            <p className="text-red-300 text-sm mt-1">You're spending more than your allocated budget in these categories.</p>
          </div>
        </div>
      )}

      <div className="flex justify-end">
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as 'usage' | 'name')}
          className="bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-300 focus:outline-none focus:border-purple-500"
        >
          <option value="usage">Sort by Usage (High to Low)</option>
          <option value="name">Sort by Name (A-Z)</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedBudgets.map((budget) => (
          <BudgetProgressCard key={budget.id} budget={budget} />
        ))}
      </div>
    </div>
  );
};

export default Budget;
