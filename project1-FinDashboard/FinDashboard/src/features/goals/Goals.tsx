import React, { useState, useMemo } from 'react';
import { Plus, TrendingUp, Calendar, Target } from 'lucide-react';
import { Card } from '../../components/ui/Card.tsx';

interface Goal {
  id: string;
  name: string;
  targetAmount: number;
  currentAmount: number;
  deadline: string;
  category: string;
}

const mockGoals: Goal[] = [
  { id: '1', name: 'Emergency Fund', targetAmount: 10000, currentAmount: 7500, deadline: '2025-12-31', category: 'Savings' },
  { id: '2', name: 'Vacation to Hawaii', targetAmount: 5000, currentAmount: 2100, deadline: '2025-06-30', category: 'Travel' },
  { id: '3', name: 'New Laptop', targetAmount: 2000, currentAmount: 1800, deadline: '2025-03-15', category: 'Technology' },
  { id: '4', name: 'Home Down Payment', targetAmount: 50000, currentAmount: 35000, deadline: '2026-12-31', category: 'Real Estate' },
];

const Goals: React.FC = () => {
  const [goals] = useState<Goal[]>(mockGoals);

  const stats = useMemo(() => {
    const totalTarget = goals.reduce((sum, g) => sum + g.targetAmount, 0);
    const totalSaved = goals.reduce((sum, g) => sum + g.currentAmount, 0);
    const avgProgress = (totalSaved / totalTarget) * 100;
    const completedGoals = goals.filter((g) => g.currentAmount >= g.targetAmount).length;

    return { totalTarget, totalSaved, avgProgress, completedGoals };
  }, [goals]);

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-slate-100">Financial Goals</h1>
          <p className="text-slate-400 mt-2">Track and achieve your financial milestones.</p>
        </div>
        <button className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
          <Plus className="w-5 h-5" />
          New Goal
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <p className="text-slate-400 text-sm font-medium">Total Goal Amount</p>
          <h3 className="text-2xl font-bold text-slate-100 mt-2">${stats.totalTarget.toLocaleString('en-US', { minimumFractionDigits: 0 })}</h3>
        </Card>
        <Card>
          <p className="text-slate-400 text-sm font-medium">Total Saved</p>
          <h3 className="text-2xl font-bold text-green-400 mt-2">${stats.totalSaved.toLocaleString('en-US', { minimumFractionDigits: 0 })}</h3>
        </Card>
        <Card>
          <p className="text-slate-400 text-sm font-medium">Overall Progress</p>
          <h3 className="text-2xl font-bold text-purple-400 mt-2">{stats.avgProgress.toFixed(1)}%</h3>
        </Card>
        <Card>
          <p className="text-slate-400 text-sm font-medium">Completed Goals</p>
          <h3 className="text-2xl font-bold text-slate-100 mt-2">{stats.completedGoals}/{goals.length}</h3>
        </Card>
      </div>

      <div className="space-y-4">
        {goals.map((goal) => {
          const progress = (goal.currentAmount / goal.targetAmount) * 100;
          const daysLeft = Math.ceil((new Date(goal.deadline).getTime() - Date.now()) / (1000 * 60 * 60 * 24));
          const isCompleted = progress >= 100;

          return (
            <Card key={goal.id}>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Target className="w-5 h-5 text-purple-400" />
                    <h3 className="text-lg font-semibold text-slate-100">{goal.name}</h3>
                    {isCompleted && <span className="text-xs px-2 py-1 bg-green-500/20 text-green-400 rounded-lg">Completed</span>}
                  </div>
                  <p className="text-sm text-slate-400 mb-4">{goal.category}</p>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-300">${goal.currentAmount.toLocaleString('en-US', { minimumFractionDigits: 0 })} / ${goal.targetAmount.toLocaleString('en-US', { minimumFractionDigits: 0 })}</span>
                      <span className="text-sm font-semibold text-purple-400">{progress.toFixed(1)}%</span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-2">
                      <div className={`h-2 rounded-full transition-all ${isCompleted ? 'bg-green-500' : 'bg-purple-500'}`} style={{ width: `${Math.min(progress, 100)}%` }}></div>
                    </div>
                  </div>
                </div>

                <div className="text-right ml-4">
                  <div className="flex items-center gap-1 text-slate-400 mb-2">
                    <Calendar className="w-4 h-4" />
                    <span className="text-xs">{daysLeft > 0 ? `${daysLeft} days` : 'Overdue'}</span>
                  </div>
                  <p className={`text-sm font-semibold ${daysLeft > 0 ? 'text-slate-300' : 'text-red-400'}`}>
                    ${Math.max(0, goal.targetAmount - goal.currentAmount).toLocaleString('en-US', { minimumFractionDigits: 0 })} remaining
                  </p>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Goals;
