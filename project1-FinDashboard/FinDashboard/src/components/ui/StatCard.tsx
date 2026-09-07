import React from 'react';
import type { LucideIcon } from 'lucide-react';

interface StatCardProps {
  label: string;
  value: string | number;
  change: string;
  isPositive: boolean;
  icon: LucideIcon;
}

export const StatCard: React.FC<StatCardProps> = ({ label, value, change, isPositive, icon: Icon }) => {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-slate-400 text-sm font-medium">{label}</p>
          <h3 className="text-2xl font-bold text-slate-100 mt-2">{value}</h3>
          <p className={`text-xs mt-2 ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
            {change}
          </p>
        </div>
        <div className={`p-3 rounded-lg ${isPositive ? 'bg-green-500/10' : 'bg-red-500/10'}`}>
          <Icon className={`w-6 h-6 ${isPositive ? 'text-green-500' : 'text-red-500'}`} />
        </div>
      </div>
    </div>
  );
};
