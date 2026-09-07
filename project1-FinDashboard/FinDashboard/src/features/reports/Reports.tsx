import React, { useMemo } from 'react';
import { Card } from '../../components/ui/Card.tsx';
import { useFinanceStore } from '../../store/useFinanceStore.ts';
import { mockTransactions } from '../../data/mockData.ts';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const Reports: React.FC = () => {
  const { setTransactions } = useFinanceStore();
  const transactions = useFinanceStore((state) => state.transactions);

  React.useEffect(() => {
    setTransactions(mockTransactions);
  }, []);

  const monthlyData = useMemo(() => {
    const data: { [key: string]: { income: number; expenses: number } } = {};

    transactions.forEach((tx) => {
      const date = new Date(tx.date);
      const monthKey = date.toLocaleString('default', { month: 'short', year: 'numeric' });

      if (!data[monthKey]) {
        data[monthKey] = { income: 0, expenses: 0 };
      }

      if (tx.type === 'income') {
        data[monthKey].income += tx.amount;
      } else {
        data[monthKey].expenses += tx.amount;
      }
    });

    return Object.entries(data)
      .sort(([a], [b]) => new Date(`1 ${a}`).getTime() - new Date(`1 ${b}`).getTime())
      .map(([month, values]) => ({
        month,
        income: values.income,
        expenses: values.expenses,
      }));
  }, [transactions]);

  const categoryData = useMemo(() => {
    const categoryMap: { [key: string]: number } = {};

    transactions
      .filter((tx) => tx.type === 'expense')
      .forEach((tx) => {
        categoryMap[tx.category] = (categoryMap[tx.category] || 0) + tx.amount;
      });

    return Object.entries(categoryMap).map(([name, value]) => ({ name, value }));
  }, [transactions]);

  const COLORS = ['#8b5cf6', '#ec4899', '#f97316', '#10b981', '#3b82f6', '#6366f1', '#f59e0b', '#ef4444'];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-slate-100">Reports & Analytics</h1>
        <p className="text-slate-400 mt-2">Comprehensive financial analysis and insights.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <h2 className="text-lg font-semibold text-slate-100 mb-4">Monthly Trends</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="month" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #475569', borderRadius: '8px' }} labelStyle={{ color: '#e2e8f0' }} />
              <Legend />
              <Line type="monotone" dataKey="income" stroke="#10b981" strokeWidth={2} />
              <Line type="monotone" dataKey="expenses" stroke="#ef4444" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        <Card>
          <h2 className="text-lg font-semibold text-slate-100 mb-4">Expense Categories</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={categoryData} cx="50%" cy="50%" labelLine={false} label={({ name, value }) => `${name}: $${value.toFixed(0)}`} outerRadius={80} fill="#8884d8" dataKey="value">
                {categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #475569', borderRadius: '8px' }} labelStyle={{ color: '#e2e8f0' }} />
            </PieChart>
          </ResponsiveContainer>
        </Card>
      </div>

      <Card>
        <h2 className="text-lg font-semibold text-slate-100 mb-4">Comparison by Category</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={categoryData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
            <XAxis dataKey="name" stroke="#94a3b8" />
            <YAxis stroke="#94a3b8" />
            <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #475569', borderRadius: '8px' }} labelStyle={{ color: '#e2e8f0' }} />
            <Bar dataKey="value" fill="#8b5cf6" />
          </BarChart>
        </ResponsiveContainer>
      </Card>
    </div>
  );
};

export default Reports;
