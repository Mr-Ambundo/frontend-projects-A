import React from 'react';
import { Card } from '../../components/ui/Card.tsx';
import { AlertCircle, CheckCircle, TrendingUp } from 'lucide-react';

const Taxes: React.FC = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-slate-100">Tax Planning</h1>
        <p className="text-slate-400 mt-2">Optimize your taxes and track deductible expenses.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <p className="text-slate-400 text-sm font-medium">Tax Year Income</p>
          <h3 className="text-2xl font-bold text-slate-100 mt-2">$85,500</h3>
        </Card>
        <Card>
          <p className="text-slate-400 text-sm font-medium">Estimated Tax Liability</p>
          <h3 className="text-2xl font-bold text-red-400 mt-2">$18,450</h3>
        </Card>
        <Card>
          <p className="text-slate-400 text-sm font-medium">Deductible Expenses</p>
          <h3 className="text-2xl font-bold text-green-400 mt-2">$12,300</h3>
        </Card>
      </div>

      <Card>
        <h2 className="text-lg font-semibold text-slate-100 mb-4">Tax Deductions</h2>
        <div className="space-y-3">
          {[
            { category: 'Home Office', amount: 3200, status: 'tracked' },
            { category: 'Business Supplies', amount: 1500, status: 'tracked' },
            { category: 'Professional Services', amount: 2800, status: 'tracked' },
            { category: 'Medical Expenses', amount: 4800, status: 'pending' },
          ].map((item) => (
            <div key={item.category} className="flex items-center justify-between p-4 bg-slate-800/50 rounded-lg">
              <div className="flex items-center gap-3">
                {item.status === 'tracked' ? <CheckCircle className="w-5 h-5 text-green-400" /> : <AlertCircle className="w-5 h-5 text-yellow-400" />}
                <div>
                  <p className="font-medium text-slate-100">{item.category}</p>
                  <p className="text-xs text-slate-400">{item.status === 'tracked' ? 'Verified' : 'Pending Review'}</p>
                </div>
              </div>
              <span className="text-lg font-semibold text-slate-300">${item.amount}</span>
            </div>
          ))}
        </div>
      </Card>

      <Card>
        <h2 className="text-lg font-semibold text-slate-100 mb-4">Tax Tips</h2>
        <div className="space-y-3">
          {[
            'Maximize 401(k) contributions for tax-deferred savings',
            'Track business-related expenses throughout the year',
            'Consider using an HSA if you have a high-deductible health plan',
            'Document charitable donations for deductions',
            'Review estimated quarterly taxes to avoid penalties',
          ].map((tip, idx) => (
            <div key={idx} className="flex items-start gap-3 p-3 bg-slate-800/50 rounded-lg">
              <TrendingUp className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-slate-300">{tip}</p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default Taxes;
