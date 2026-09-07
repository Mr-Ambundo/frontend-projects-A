import type { Transaction, BudgetCategory, Investment, Goal } from '../types';

export const mockTransactions: Transaction[] = [
  { id: '1', date: '2024-05-31', description: 'Salary', amount: 4250.0, category: 'Income', type: 'income', icon: 'TrendingUp' },
  { id: '2', date: '2024-05-30', description: 'Rent Payment', amount: 1200.0, category: 'Housing', type: 'expense', icon: 'Home' },
  { id: '3', date: '2024-05-29', description: 'Grocery Store', amount: 85.6, category: 'Food & Dining', type: 'expense', icon: 'ShoppingCart' },
  { id: '4', date: '2024-05-28', description: 'Freelance Project', amount: 1200.0, category: 'Income', type: 'income', icon: 'Briefcase' },
  { id: '5', date: '2024-05-27', description: 'Netflix Subscription', amount: 15.99, category: 'Entertainment', type: 'expense', icon: 'Film' },
];

export const mockBudgets: BudgetCategory[] = [
  { id: '1', name: 'Housing', limit: 2000, spent: 1518.46, color: 'purple' },
  { id: '2', name: 'Food & Dining', limit: 1600, spent: 1032.34, color: 'pink' },
  { id: '3', name: 'Transportation', limit: 1500, spent: 814.2, color: 'orange' },
  { id: '4', name: 'Entertainment', limit: 1000, spent: 597.32, color: 'green' },
  { id: '5', name: 'Shopping', limit: 800, spent: 488.5, color: 'blue' },
  { id: '6', name: 'Other', limit: 1000, spent: 979.38, color: 'gray' },
];

export const mockInvestments: Investment[] = [
  { id: '1', name: 'Stocks', type: 'stocks', value: 7536.3, change: 892.5, changePercent: 13.2, allocation: 60 },
  { id: '2', name: 'ETFs', type: 'etfs', value: 3140.12, change: 798.3, changePercent: 12.7, allocation: 25 },
  { id: '3', name: 'Bonds', type: 'bonds', value: 1256.05, change: 79.3, changePercent: 6.3, allocation: 10 },
  { id: '4', name: 'Crypto', type: 'crypto', value: 628.03, change: 141.5, changePercent: 22.5, allocation: 5 },
];

export const mockGoals: Goal[] = [
  { id: '1', name: 'Emergency Fund', targetAmount: 15000, currentAmount: 9200, deadline: '2025-12-31', priority: 'high' },
  { id: '2', name: 'Vacation', targetAmount: 5000, currentAmount: 2150, deadline: '2024-08-31', priority: 'medium' },
  { id: '3', name: 'Home Down Payment', targetAmount: 50000, currentAmount: 18500, deadline: '2027-06-30', priority: 'high' },
];
