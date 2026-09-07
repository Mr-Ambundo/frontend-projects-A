import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useFinanceStore } from '../../store/useFinanceStore.ts';
import { useModalStore } from '../../store/useModalStore.ts';
import { useToastStore } from '../../store/useToastStore.ts';

const investmentSchema = z.object({
  name: z.string().min(1, 'Investment name is required'),
  type: z.string().min(1, 'Type is required'),
  value: z.string().refine((val) => !isNaN(parseFloat(val)) && parseFloat(val) > 0, { message: 'Value must be a positive number' }),
  allocation: z.string().refine((val) => !isNaN(parseInt(val)) && parseInt(val) >= 0 && parseInt(val) <= 100, { message: 'Allocation must be between 0 and 100' }),
});

type InvestmentFormData = z.infer<typeof investmentSchema>;

export const AddInvestmentForm: React.FC = () => {
  const { addInvestment } = useFinanceStore();
  const { closeModal } = useModalStore();
  const { addToast } = useToastStore();
  const { register, handleSubmit, formState: { errors }, reset } = useForm<InvestmentFormData>({
    resolver: zodResolver(investmentSchema),
    defaultValues: { allocation: '0' },
  });

  const onSubmit = (data: InvestmentFormData) => {
    addInvestment({
      id: Date.now().toString(),
      name: data.name,
      type: data.type,
      value: parseFloat(data.value),
      allocation: parseInt(data.allocation),
      change: 0,
      changePercent: 0,
    });
    addToast(`Investment "${data.name}" added successfully!`, 'success');
    reset();
    closeModal();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-slate-200 mb-2">Investment Name</label>
        <input type="text" placeholder="e.g., Apple Stock" {...register('name')} className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-purple-500" />
        {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-200 mb-2">Type</label>
        <select {...register('type')} className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-slate-100 focus:outline-none focus:border-purple-500">
          <option value="">Select a type</option>
          <option value="Stock">Stock</option>
          <option value="Bond">Bond</option>
          <option value="Mutual Fund">Mutual Fund</option>
          <option value="ETF">ETF</option>
          <option value="Cryptocurrency">Cryptocurrency</option>
          <option value="Real Estate">Real Estate</option>
        </select>
        {errors.type && <p className="text-red-400 text-xs mt-1">{errors.type.message}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-200 mb-2">Current Value</label>
        <input type="number" step="0.01" placeholder="0.00" {...register('value')} className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-purple-500" />
        {errors.value && <p className="text-red-400 text-xs mt-1">{errors.value.message}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-200 mb-2">Portfolio Allocation</label>
        <input type="number" min="0" max="100" placeholder="0" {...register('allocation')} className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-purple-500" />
        {errors.allocation && <p className="text-red-400 text-xs mt-1">{errors.allocation.message}</p>}
      </div>
      <button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 rounded-lg transition-colors mt-6">Add Investment</button>
    </form>
  );
};
