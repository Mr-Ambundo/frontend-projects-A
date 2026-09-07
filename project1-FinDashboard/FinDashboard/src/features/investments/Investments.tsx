import React, { useMemo } from 'react';
import { Plus, TrendingUp, PieChart as PieChartIcon } from 'lucide-react';
import { Card } from '../../components/ui/Card.tsx';
import { useFinanceStore } from '../../store/useFinanceStore.ts';
import { useModalStore } from '../../store/useModalStore.ts';
import { InvestmentCard } from '../../components/cards/InvestmentCard.tsx';
import { PortfolioAllocationChart } from '../../components/charts/PortfolioAllocationChart.tsx';
import { mockInvestments } from '../../data/mockData.ts';

const Investments: React.FC = () => {
  const { setInvestments } = useFinanceStore();
  const investments = useFinanceStore((state) => state.investments);
  const { openModal } = useModalStore();

  React.useEffect(() => {
    setInvestments(mockInvestments);
  }, []);

  const stats = useMemo(() => {
    const totalValue = investments.reduce((sum, inv) => sum + inv.value, 0);
    const totalChange = investments.reduce((sum, inv) => sum + inv.change, 0);
    const avgChangePercent = investments.length > 0
      ? investments.reduce((sum, inv) => sum + inv.changePercent, 0) / investments.length
      : 0;

    return { totalValue, totalChange, avgChangePercent };
  }, [investments]);

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-slate-100">Investments</h1>
          <p className="text-slate-400 mt-2">Manage and track your investment portfolio.</p>
        </div>
        <button
          onClick={() => openModal('addInvestment')}
          className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
        >
          <Plus className="w-5 h-5" />
          Add Investment
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <p className="text-slate-400 text-sm font-medium">Total Portfolio Value</p>
          <h3 className="text-3xl font-bold text-slate-100 mt-2">
            ${stats.totalValue.toLocaleString('en-US', { minimumFractionDigits: 2 })}
          </h3>
        </Card>
        <Card>
          <p className="text-slate-400 text-sm font-medium">Total Gain/Loss</p>
          <h3 className={`text-3xl font-bold mt-2 ${stats.totalChange >= 0 ? 'text-green-400' : 'text-red-400'}`}>
            {stats.totalChange >= 0 ? '+' : ''}${stats.totalChange.toLocaleString('en-US', { minimumFractionDigits: 2 })}
          </h3>
        </Card>
        <Card>
          <p className="text-slate-400 text-sm font-medium">Average Return</p>
          <div className="flex items-end gap-2 mt-2">
            <h3 className={`text-3xl font-bold ${stats.avgChangePercent >= 0 ? 'text-green-400' : 'text-red-400'}`}>
              {stats.avgChangePercent >= 0 ? '+' : ''}{stats.avgChangePercent.toFixed(2)}%
            </h3>
            <TrendingUp className={`w-6 h-6 ${stats.avgChangePercent >= 0 ? 'text-green-400' : 'text-red-400'}`} />
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <div className="flex items-center gap-2 mb-6">
              <PieChartIcon className="w-5 h-5 text-purple-400" />
              <h2 className="text-lg font-semibold text-slate-100">Portfolio Allocation</h2>
            </div>
            <PortfolioAllocationChart investments={investments} />
          </Card>
        </div>

        <Card>
          <h2 className="text-lg font-semibold text-slate-100 mb-6">Asset Classes</h2>
          <div className="space-y-3">
            {investments.map((inv) => (
              <div key={inv.id} className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
                <div>
                  <p className="text-sm font-medium text-slate-100">{inv.name}</p>
                  <p className="text-xs text-slate-400">{inv.type}</p>
                </div>
                <span className="text-xs font-semibold text-slate-300">{inv.allocation}%</span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-slate-100 mb-4">Holdings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {investments.map((investment) => (
            <InvestmentCard key={investment.id} investment={investment} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Investments;
