import mongoose, { Schema, Document } from 'mongoose';

export interface IInvestment extends Document {
  userId: string;
  name: string;
  type: string;
  value: number;
  allocation: number;
  change: number;
  changePercent: number;
  createdAt: Date;
}

const investmentSchema = new Schema<IInvestment>({
  userId: { type: String, required: true },
  name: { type: String, required: true },
  type: { type: String, required: true },
  value: { type: Number, required: true },
  allocation: { type: Number, required: true },
  change: { type: Number, default: 0 },
  changePercent: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
});

investmentSchema.index({ userId: 1 });

export default mongoose.model<IInvestment>('Investment', investmentSchema);
