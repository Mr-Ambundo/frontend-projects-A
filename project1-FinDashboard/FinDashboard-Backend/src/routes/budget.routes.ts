import { Router, Response } from 'express';
import Budget from '../models/Budget';
import { AuthRequest } from '../middleware/auth';

const router = Router();

router.post('/', async (req: AuthRequest, res: Response) => {
  try {
    const budget = new Budget({
      userId: req.userId,
      ...req.body,
    });
    await budget.save();
    res.status(201).json(budget);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create budget' });
  }
});

router.get('/', async (req: AuthRequest, res: Response) => {
  try {
    const budgets = await Budget.find({ userId: req.userId });
    res.json(budgets);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch budgets' });
  }
});

router.put('/:id', async (req: AuthRequest, res: Response) => {
  try {
    const budget = await Budget.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(budget);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update budget' });
  }
});

router.delete('/:id', async (req: AuthRequest, res: Response) => {
  try {
    await Budget.findByIdAndDelete(req.params.id);
    res.json({ message: 'Budget deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete budget' });
  }
});

export default router;
