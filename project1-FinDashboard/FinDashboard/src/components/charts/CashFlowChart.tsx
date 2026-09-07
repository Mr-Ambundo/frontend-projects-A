import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { date: 'May 1', income: 2100, expenses: 1800, savings: 1400 },
  { date: 'May 8', income: 2200, expenses: 1900, savings: 1500 },
  { date: 'May 15', income: 2150, expenses: 1850, savings: 1450 },
  { date: 'May 22', income: 2300, expenses: 1950, savings: 1650 },
  { date: 'May 31', income: 2400, expenses: 2050, savings: 1600 },
];

export const CashFlowChart: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
        <XAxis dataKey="date" stroke="#94a3b8" />
        <YAxis stroke="#94a3b8" />
        <Tooltip
          contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #475569', borderRadius: '8px' }}
          labelStyle={{ color: '#e2e8f0' }}
        />
        <Legend />
        <Line type="monotone" dataKey="income" stroke="#10b981" strokeWidth={2} dot={{ fill: '#10b981' }} />
        <Line type="monotone" dataKey="expenses" stroke="#ef4444" strokeWidth={2} dot={{ fill: '#ef4444' }} />
        <Line type="monotone" dataKey="savings" stroke="#8b5cf6" strokeWidth={2} dot={{ fill: '#8b5cf6' }} />
      </LineChart>
    </ResponsiveContainer>
  );
};
