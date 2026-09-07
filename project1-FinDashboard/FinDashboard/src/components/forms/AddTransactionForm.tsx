import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useFinanceStore } from '../../store/useFinanceStore.ts';
import { useModalStore } from '../../store/useModalStore.ts';
import { useToastStore } from '../../store/useToastStore.ts';

const transactionSchema = z.object({
  description: z.string().min(1, 'Description is required'),
  category: z.string().min(1, 'Category is required'),
  amount: z.string().refine((val) => !isNaN(parseFloat(val)) && parseFloat(val) > 0, {
    message: 'Amount must be a positive number',
  }),
  type: z.enum(['income', 'expense']),
  date: z.string().min(1, 'Date is required'),
});

type TransactionFormData = z.infer<typeof transactionSchema>;

export const AddTransactionForm: React.FC = () => {
  const { addTransaction } = useFinanceStore();
  const { closeModal } = useModalStore();
  const { addToast } = useToastStore();
  const { register, handleSubmit, formState: { errors }, reset } = useForm<TransactionFormData>({
    resolver: zodResolver(transactionSchema),
    defaultValues: { type: 'expense', date: new Date().toISOString().split('T')[0] },
  });

  const onSubmit = (data: TransactionFormData) => {
    addTransaction({
      id: Date.now().toString(),
      description: data.description,
      category: data.category,
      amount: parseFloat(data.amount),
      type: data.type,
      date: data.date,
      icon: 'TrendingUp',
    });
    addToast(`${data.type === 'income' ? 'Income' : 'Expense'} of $${parseFloat(data.amount).toFixed(2)} added successfully!`, 'success');
    reset();
    closeModal();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-slate-200 mb-2">Type</label>
        <div className="flex gap-3">
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="radio" value="income" {...register('type')} />
            <span className="text-sm text-slate-300">Income</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="radio" value="expense" {...register('type')} />
            <span className="text-sm text-slate-300">Expense</span>
          </label>
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-200 mb-2">Description</label>
        <input type="text" placeholder="e.g., Grocery shopping" {...register('description')} className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-purple-500" />
        {errors.description && <p className="text-red-400 text-xs mt-1">{errors.description.message}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-200 mb-2">Category</label>
        <select {...register('category')} className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-slate-100 focus:outline-none focus:border-purple-500">
          <option value="">Select a category</option>
          <option value="Food & Dining">Food & Dining</option>
          <option value="Transportation">Transportation</option>
          <option value="Shopping">Shopping</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Utilities">Utilities</option>
          <option value="Salary">Salary</option>
          <option value="Freelance">Freelance</option>
          <option value="Investment">Investment</option>
        </select>
        {errors.category && <p className="text-red-400 text-xs mt-1">{errors.category.message}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-200 mb-2">Amount</label>
        <input type="number" step="0.01" placeholder="0.00" {...register('amount')} className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-purple-500" />
        {errors.amount && <p className="text-red-400 text-xs mt-1">{errors.amount.message}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-200 mb-2">Date</label>
        <input type="date" {...register('date')} className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-slate-100 focus:outline-none focus:border-purple-500" />
        {errors.date && <p className="text-red-400 text-xs mt-1">{errors.date.message}</p>}
      </div>
      <button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 rounded-lg transition-colors mt-6">Add Transaction</button>
    </form>
  );
};
