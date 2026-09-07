import mongoose, { Schema, Document } from 'mongoose';

export interface ITransaction extends Document {
  userId: string;
  description: string;
  category: string;
  amount: number;
  type: 'income' | 'expense';
  date: Date;
  icon: string;
  createdAt: Date;
}

const transactionSchema = new Schema<ITransaction>({
  userId: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  amount: { type: Number, required: true },
  type: { type: String, enum: ['income', 'expense'], required: true },
  date: { type: Date, required: true },
  icon: { type: String, default: 'TrendingUp' },
  createdAt: { type: Date, default: Date.now },
});

transactionSchema.index({ userId: 1, date: -1 });

export default mongoose.model<ITransaction>('Transaction', transactionSchema);
