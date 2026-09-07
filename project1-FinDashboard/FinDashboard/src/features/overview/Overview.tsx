import React, { useEffect } from 'react';
import { TrendingUp, TrendingDown, PiggyBank, Target } from 'lucide-react';
import { useFinanceStore } from '../../store/useFinanceStore';
import { mockTransactions, mockBudgets, mockInvestments } from '../../data/mockData';
import { StatCard } from '../../components/ui/StatCard';
import { Card } from '../../components/ui/Card';
import { CashFlowChart } from '../../components/charts/CashFlowChart';
import { ExpensesPieChart } from '../../components/charts/ExpensesPieChart';
import { TransactionsList } from '../../components/tables/TransactionsList';
import { BudgetOverview } from '../../components/tables/BudgetOverview';
import { InvestmentPortfolio } from '../../components/tables/InvestmentPortfolio';

const Overview: React.FC = () => {
  const { stats, setTransactions, setBudgets, setInvestments } = useFinanceStore();

  useEffect(() => {
    setTransactions(mockTransactions);
    setBudgets(mockBudgets);
    setInvestments(mockInvestments);
  }, []);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-slate-100">Good morning, Alex! 👋</h1>
        <p className="text-slate-400 mt-2">Here's what's happening with your finances today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          label="Total Balance"
          value={`$${stats.totalBalance.toLocaleString('en-US', { minimumFractionDigits: 2 })}`}
          change="+12.5% from last month"
          isPositive={true}
          icon={PiggyBank}
        />
        <StatCard
          label="Total Income"
          value={`$${stats.totalIncome.toLocaleString('en-US', { minimumFractionDigits: 2 })}`}
          change="+8.2% from last month"
          isPositive={true}
          icon={TrendingUp}
        />
        <StatCard
          label="Total Expenses"
          value={`$${stats.totalExpenses.toLocaleString('en-US', { minimumFractionDigits: 2 })}`}
          change="-3.4% from last month"
          isPositive={true}
          icon={TrendingDown}
        />
        <StatCard
          label="Savings Rate"
          value={`${stats.savingsRate}%`}
          change="+5.7% from last month"
          isPositive={true}
          icon={Target}
        />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-slate-100">Cash Flow Overview</h2>
              <select className="bg-slate-800 border border-slate-700 rounded px-3 py-1 text-sm text-slate-300">
                <option>Daily</option>
                <option>Weekly</option>
                <option>Monthly</option>
              </select>
            </div>
            <CashFlowChart />
          </Card>
        </div>

        <div>
          <Card>
            <h2 className="text-lg font-semibold text-slate-100 mb-6">Expenses by Category</h2>
            <ExpensesPieChart />
            <button className="text-purple-400 hover:text-purple-300 text-sm font-medium mt-4">
              View Report →
            </button>
          </Card>
        </div>
      </div>

      {/* Data Tables Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <Card className="flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-slate-100">Recent Transactions</h2>
              <a href="/transactions" className="text-purple-400 hover:text-purple-300 text-sm">
                View All
              </a>
            </div>
            <TransactionsList limit={5} />
          </Card>
        </div>

        <div className="lg:col-span-1">
          <Card className="flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-slate-100">Budget Overview</h2>
              <a href="/budget" className="text-purple-400 hover:text-purple-300 text-sm">
                View All
              </a>
            </div>
            <BudgetOverview limit={5} />
          </Card>
        </div>

        <div className="lg:col-span-1">
          <Card className="flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-slate-100">Investment Portfolio</h2>
              <a href="/investments" className="text-purple-400 hover:text-purple-300 text-sm">
                View All
              </a>
            </div>
            <InvestmentPortfolio limit={4} />
          </Card>
        </div>
      </div>

      {/* Tip Section */}
      <Card className="bg-gradient-to-r from-purple-600/10 to-blue-600/10 border border-purple-500/20">
        <div className="flex items-start gap-4">
          <div className="text-2xl">💡</div>
          <div>
            <h3 className="font-semibold text-slate-100">Pro Tip</h3>
            <p className="text-slate-400 text-sm mt-1">
              You've spent 15% less on dining out compared to last month. Keep it up!
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Overview;
