import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import type { Investment } from '../../types/index.ts';

interface PortfolioAllocationChartProps {
  investments: Investment[];
}

export const PortfolioAllocationChart: React.FC<PortfolioAllocationChartProps> = ({ investments }) => {
  const data = investments.map((inv) => ({
    name: inv.name,
    value: inv.value,
    allocation: inv.allocation,
    change: inv.changePercent,
  }));

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
        <XAxis dataKey="name" stroke="#94a3b8" />
        <YAxis stroke="#94a3b8" />
        <Tooltip
          contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #475569', borderRadius: '8px' }}
          labelStyle={{ color: '#e2e8f0' }}
        />
        <Legend />
        <Bar dataKey="value" fill="#8b5cf6" name="Value ($)" />
        <Bar dataKey="change" fill="#10b981" name="Change (%)" />
      </BarChart>
    </ResponsiveContainer>
  );
};
