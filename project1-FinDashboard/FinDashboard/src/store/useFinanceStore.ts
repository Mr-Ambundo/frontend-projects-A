import { create } from 'zustand';
import type { Transaction, BudgetCategory, Investment, FinanceStats } from '../types/index.ts';

interface FinanceStore {
  transactions: Transaction[];
  budgets: BudgetCategory[];
  investments: Investment[];
  stats: FinanceStats;
  setTransactions: (transactions: Transaction[]) => void;
  setBudgets: (budgets: BudgetCategory[]) => void;
  setInvestments: (investments: Investment[]) => void;
  addTransaction: (transaction: Transaction) => void;
  addBudget: (budget: BudgetCategory) => void;
  addInvestment: (investment: Investment) => void;
  removeTransaction: (id: string) => void;
  removeBudget: (id: string) => void;
  removeInvestment: (id: string) => void;
}

export const useFinanceStore = create<FinanceStore>((set) => ({
  transactions: [],
  budgets: [],
  investments: [],
  stats: {
    totalBalance: 0,
    totalIncome: 0,
    totalExpenses: 0,
    savingsRate: 0,
  },

  setTransactions: (transactions) => set({ transactions }),
  setBudgets: (budgets) => set({ budgets }),
  setInvestments: (investments) => set({ investments }),

  addTransaction: (transaction) =>
    set((state) => ({
      transactions: [transaction, ...state.transactions],
    })),

  addBudget: (budget) =>
    set((state) => ({
      budgets: [budget, ...state.budgets],
    })),

  addInvestment: (investment) =>
    set((state) => ({
      investments: [investment, ...state.investments],
    })),

  removeTransaction: (id) =>
    set((state) => ({
      transactions: state.transactions.filter((tx) => tx.id !== id),
    })),

  removeBudget: (id) =>
    set((state) => ({
      budgets: state.budgets.filter((b) => b.id !== id),
    })),

  removeInvestment: (id) =>
    set((state) => ({
      investments: state.investments.filter((i) => i.id !== id),
    })),
}));
