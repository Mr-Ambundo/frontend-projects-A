import mongoose, { Schema, Document } from 'mongoose';

export interface IBudget extends Document {
  userId: string;
  name: string;
  limit: number;
  spent: number;
  color: string;
  createdAt: Date;
}

const budgetSchema = new Schema<IBudget>({
  userId: { type: String, required: true },
  name: { type: String, required: true },
  limit: { type: Number, required: true },
  spent: { type: Number, default: 0 },
  color: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

budgetSchema.index({ userId: 1 });

export default mongoose.model<IBudget>('Budget', budgetSchema);
