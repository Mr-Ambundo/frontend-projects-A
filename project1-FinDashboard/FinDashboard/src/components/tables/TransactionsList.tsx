import React from 'react';
import { useFinanceStore } from '../../store/useFinanceStore';
import { TrendingUp, Home, ShoppingCart, Briefcase, Film } from 'lucide-react';

interface TransactionsListProps {
  limit?: number;
}

const iconMap: { [key: string]: React.ReactNode } = {
  TrendingUp: <TrendingUp className="w-5 h-5" />,
  Home: <Home className="w-5 h-5" />,
  ShoppingCart: <ShoppingCart className="w-5 h-5" />,
  Briefcase: <Briefcase className="w-5 h-5" />,
  Film: <Film className="w-5 h-5" />,
};

export const TransactionsList: React.FC<TransactionsListProps> = ({ limit = 10 }) => {
  const transactions = useFinanceStore((state) => state.transactions).slice(0, limit);

  return (
    <div className="space-y-3">
      {transactions.map((tx) => (
        <div key={tx.id} className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg hover:bg-slate-800 transition-colors">
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-lg ${tx.type === 'income' ? 'bg-green-500/20' : 'bg-red-500/20'}`}>
              {iconMap[tx.icon || 'TrendingUp']}
            </div>
            <div>
              <p className="text-sm font-medium text-slate-100">{tx.description}</p>
              <p className="text-xs text-slate-500">{tx.date}</p>
            </div>
          </div>
          <span className={`text-sm font-semibold ${tx.type === 'income' ? 'text-green-400' : 'text-red-400'}`}>
            {tx.type === 'income' ? '+' : '-'}${Math.abs(tx.amount).toFixed(2)}
          </span>
        </div>
      ))}
    </div>
  );
};
