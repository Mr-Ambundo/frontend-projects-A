import { Router, Response } from 'express';
import Investment from '../models/Investment';
import { AuthRequest } from '../middleware/auth';

const router = Router();

router.post('/', async (req: AuthRequest, res: Response) => {
  try {
    const investment = new Investment({
      userId: req.userId,
      ...req.body,
    });
    await investment.save();
    res.status(201).json(investment);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create investment' });
  }
});

router.get('/', async (req: AuthRequest, res: Response) => {
  try {
    const investments = await Investment.find({ userId: req.userId });
    res.json(investments);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch investments' });
  }
});

router.put('/:id', async (req: AuthRequest, res: Response) => {
  try {
    const investment = await Investment.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(investment);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update investment' });
  }
});

router.delete('/:id', async (req: AuthRequest, res: Response) => {
  try {
    await Investment.findByIdAndDelete(req.params.id);
    res.json({ message: 'Investment deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete investment' });
  }
});

export default router;
