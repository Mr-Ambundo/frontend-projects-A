import React, { useState, useMemo } from 'react';
import { Search, Filter, Download, Plus } from 'lucide-react';
import { Card } from '../../components/ui/Card.tsx';
import { useFinanceStore } from '../../store/useFinanceStore.ts';
import { useModalStore } from '../../store/useModalStore.ts';
import { TransactionsTable } from '../../components/tables/TransactionsTable.tsx';
import { mockTransactions } from '../../data/mockData.ts';

type FilterType = 'all' | 'income' | 'expense';

const Transactions: React.FC = () => {
  const { setTransactions } = useFinanceStore();
  const transactions = useFinanceStore((state) => state.transactions);
  const { openModal } = useModalStore();
  
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState<FilterType>('all');
  const [sortBy, setSortBy] = useState<'date' | 'amount'>('date');

  React.useEffect(() => {
    setTransactions(mockTransactions);
  }, []);

  const filteredAndSortedTransactions = useMemo(() => {
    let filtered = transactions;

    if (filterType !== 'all') {
      filtered = filtered.filter((tx) => tx.type === filterType);
    }

    if (searchTerm) {
      filtered = filtered.filter((tx) =>
        tx.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tx.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (sortBy === 'date') {
      filtered.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    } else if (sortBy === 'amount') {
      filtered.sort((a, b) => b.amount - a.amount);
    }

    return filtered;
  }, [transactions, searchTerm, filterType, sortBy]);

  const stats = {
    totalIncome: filteredAndSortedTransactions
      .filter((tx) => tx.type === 'income')
      .reduce((sum, tx) => sum + tx.amount, 0),
    totalExpenses: filteredAndSortedTransactions
      .filter((tx) => tx.type === 'expense')
      .reduce((sum, tx) => sum + tx.amount, 0),
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-slate-100">Transactions</h1>
          <p className="text-slate-400 mt-2">Manage and track all your financial transactions.</p>
        </div>
        <button
          onClick={() => openModal('addTransaction')}
          className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
        >
          <Plus className="w-5 h-5" />
          New Transaction
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <p className="text-slate-400 text-sm font-medium">Total Income</p>
          <h3 className="text-2xl font-bold text-green-400 mt-2">
            ${stats.totalIncome.toLocaleString('en-US', { minimumFractionDigits: 2 })}
          </h3>
        </Card>
        <Card>
          <p className="text-slate-400 text-sm font-medium">Total Expenses</p>
          <h3 className="text-2xl font-bold text-red-400 mt-2">
            ${stats.totalExpenses.toLocaleString('en-US', { minimumFractionDigits: 2 })}
          </h3>
        </Card>
        <Card>
          <p className="text-slate-400 text-sm font-medium">Net</p>
          <h3 className={`text-2xl font-bold mt-2 ${stats.totalIncome - stats.totalExpenses >= 0 ? 'text-green-400' : 'text-red-400'}`}>
            ${(stats.totalIncome - stats.totalExpenses).toLocaleString('en-US', { minimumFractionDigits: 2 })}
          </h3>
        </Card>
      </div>

      <Card>
        <div className="space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-500" />
            <input
              type="text"
              placeholder="Search transactions by description or category..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 rounded-lg pl-10 pr-4 py-2.5 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/50"
            />
          </div>

          <div className="flex flex-wrap gap-3">
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-slate-400" />
              <span className="text-sm text-slate-400">Filter:</span>
            </div>

            <button
              onClick={() => setFilterType('all')}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                filterType === 'all'
                  ? 'bg-purple-600 text-white'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              All
            </button>

            <button
              onClick={() => setFilterType('income')}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                filterType === 'income'
                  ? 'bg-green-600 text-white'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              Income
            </button>

            <button
              onClick={() => setFilterType('expense')}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                filterType === 'expense'
                  ? 'bg-red-600 text-white'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              Expenses
            </button>

            <div className="ml-auto flex items-center gap-2">
              <span className="text-sm text-slate-400">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'date' | 'amount')}
                className="bg-slate-800 border border-slate-700 rounded-lg px-3 py-1.5 text-sm text-slate-300 focus:outline-none focus:border-purple-500"
              >
                <option value="date">Date (Newest)</option>
                <option value="amount">Amount (Highest)</option>
              </select>
            </div>

            <button className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-300 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors">
              <Download className="w-4 h-4" />
              Export
            </button>
          </div>
        </div>
      </Card>

      <Card>
        <TransactionsTable transactions={filteredAndSortedTransactions} />
      </Card>
    </div>
  );
};

export default Transactions;
