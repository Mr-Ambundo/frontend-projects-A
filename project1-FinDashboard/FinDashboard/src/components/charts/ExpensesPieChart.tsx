import React from 'react';
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Housing', value: 28 },
  { name: 'Food & Dining', value: 19 },
  { name: 'Transportation', value: 15 },
  { name: 'Entertainment', value: 11 },
  { name: 'Shopping', value: 9 },
  { name: 'Other', value: 18 },
];

const COLORS = ['#8b5cf6', '#ec4899', '#f97316', '#10b981', '#3b82f6', '#6b7280'];

export const ExpensesPieChart: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={90}
          paddingAngle={2}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}
        </Pie>
        <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #475569', borderRadius: '8px' }} />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
};
