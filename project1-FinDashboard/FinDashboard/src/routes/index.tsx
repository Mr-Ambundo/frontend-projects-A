import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { DashboardLayout } from '../layouts/DashboardLayout.tsx';
import Overview from '../features/overview/Overview.tsx';
import Transactions from '../features/transactions/Transactions.tsx';
import Budget from '../features/budget/Budget.tsx';
import Investments from '../features/investments/Investments.tsx';
import Goals from '../features/goals/Goals.tsx';
import Reports from '../features/reports/Reports.tsx';
import Taxes from '../features/taxes/Taxes.tsx';
import ImportExport from '../features/import-export/ImportExport.tsx';
import Settings from '../features/settings/Settings.tsx';

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout><Overview /></DashboardLayout>} />
      <Route path="/transactions" element={<DashboardLayout><Transactions /></DashboardLayout>} />
      <Route path="/budget" element={<DashboardLayout><Budget /></DashboardLayout>} />
      <Route path="/investments" element={<DashboardLayout><Investments /></DashboardLayout>} />
      <Route path="/goals" element={<DashboardLayout><Goals /></DashboardLayout>} />
      <Route path="/reports" element={<DashboardLayout><Reports /></DashboardLayout>} />
      <Route path="/taxes" element={<DashboardLayout><Taxes /></DashboardLayout>} />
      <Route path="/import-export" element={<DashboardLayout><ImportExport /></DashboardLayout>} />
      <Route path="/settings" element={<DashboardLayout><Settings /></DashboardLayout>} />
    </Routes>
  );
};
