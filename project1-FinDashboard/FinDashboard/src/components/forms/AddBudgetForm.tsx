import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useFinanceStore } from '../../store/useFinanceStore.ts';
import { useModalStore } from '../../store/useModalStore.ts';
import { useToastStore } from '../../store/useToastStore.ts';

const budgetSchema = z.object({
  name: z.string().min(1, 'Budget name is required'),
  limit: z.string().refine((val) => !isNaN(parseFloat(val)) && parseFloat(val) > 0, { message: 'Limit must be a positive number' }),
  color: z.enum(['purple', 'pink', 'orange', 'green', 'blue', 'gray']),
});

type BudgetFormData = z.infer<typeof budgetSchema>;

export const AddBudgetForm: React.FC = () => {
  const { addBudget } = useFinanceStore();
  const { closeModal } = useModalStore();
  const { addToast } = useToastStore();
  const { register, handleSubmit, formState: { errors }, reset } = useForm<BudgetFormData>({
    resolver: zodResolver(budgetSchema),
    defaultValues: { color: 'purple' },
  });

  const onSubmit = (data: BudgetFormData) => {
    addBudget({
      id: Date.now().toString(),
      name: data.name,
      limit: parseFloat(data.limit),
      spent: 0,
      color: data.color,
    });
    addToast(`Budget "${data.name}" created successfully!`, 'success');
    reset();
    closeModal();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-slate-200 mb-2">Budget Name</label>
        <input type="text" placeholder="e.g., Groceries" {...register('name')} className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-purple-500" />
        {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-200 mb-2">Monthly Limit</label>
        <input type="number" step="0.01" placeholder="0.00" {...register('limit')} className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-purple-500" />
        {errors.limit && <p className="text-red-400 text-xs mt-1">{errors.limit.message}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-200 mb-2">Color</label>
        <select {...register('color')} className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-slate-100 focus:outline-none focus:border-purple-500">
          <option value="purple">Purple</option>
          <option value="pink">Pink</option>
          <option value="orange">Orange</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
          <option value="gray">Gray</option>
        </select>
      </div>
      <button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 rounded-lg transition-colors mt-6">Create Budget</button>
    </form>
  );
};
