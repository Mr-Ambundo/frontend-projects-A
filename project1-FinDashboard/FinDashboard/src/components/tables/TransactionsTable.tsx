import React from 'react';
import { Trash2, Edit2, TrendingUp, Home, ShoppingCart, Briefcase, Film } from 'lucide-react';
import type { Transaction } from '../../types/index.ts';

interface TransactionsTableProps {
  transactions: Transaction[];
}

const iconMap: { [key: string]: React.ReactNode } = {
  TrendingUp: <TrendingUp className="w-5 h-5" />,
  Home: <Home className="w-5 h-5" />,
  ShoppingCart: <ShoppingCart className="w-5 h-5" />,
  Briefcase: <Briefcase className="w-5 h-5" />,
  Film: <Film className="w-5 h-5" />,
};

export const TransactionsTable: React.FC<TransactionsTableProps> = ({ transactions }) => {
  if (transactions.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-slate-400">No transactions found</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-slate-800">
            <th className="text-left py-3 px-4 text-sm font-semibold text-slate-300">Description</th>
            <th className="text-left py-3 px-4 text-sm font-semibold text-slate-300">Category</th>
            <th className="text-left py-3 px-4 text-sm font-semibold text-slate-300">Date</th>
            <th className="text-right py-3 px-4 text-sm font-semibold text-slate-300">Amount</th>
            <th className="text-center py-3 px-4 text-sm font-semibold text-slate-300">Actions</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((tx) => (
            <tr key={tx.id} className="border-b border-slate-800 hover:bg-slate-800/50 transition-colors">
              <td className="py-4 px-4">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${tx.type === 'income' ? 'bg-green-500/20' : 'bg-red-500/20'}`}>
                    {iconMap[tx.icon || 'TrendingUp']}
                  </div>
                  <p className="font-medium text-slate-100">{tx.description}</p>
                </div>
              </td>
              <td className="py-4 px-4">
                <span className="text-sm text-slate-400">{tx.category}</span>
              </td>
              <td className="py-4 px-4">
                <span className="text-sm text-slate-400">{new Date(tx.date).toLocaleDateString()}</span>
              </td>
              <td className="py-4 px-4 text-right">
                <span className={`text-sm font-semibold ${tx.type === 'income' ? 'text-green-400' : 'text-red-400'}`}>
                  {tx.type === 'income' ? '+' : '-'}${Math.abs(tx.amount).toLocaleString('en-US', { minimumFractionDigits: 2 })}
                </span>
              </td>
              <td className="py-4 px-4">
                <div className="flex items-center justify-center gap-2">
                  <button className="p-2 hover:bg-slate-700 rounded-lg text-slate-400 hover:text-slate-300 transition-colors">
                    <Edit2 className="w-4 h-4" />
                  </button>
                  <button className="p-2 hover:bg-slate-700 rounded-lg text-slate-400 hover:text-red-400 transition-colors">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
