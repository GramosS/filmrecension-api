import express from 'express';
import Review from '../models/Review.js';
import { authenticateToken } from '../middleware/auth.js';

const router = express.Router();

// endast inloggade kan lägga till recension
router.post('/', authenticateToken, async (req, res) => {
  const review = await Review.create({
    ...req.body,
    userId: req.user.userId // spara användar-ID från token
  });
  res.status(201).json(review);
});

router.get('/', async (req, res) => {
  const reviews = await Review.find();
  res.json(reviews);
});

router.get('/:id', async (req, res) => {
  const review = await Review.findById(req.params.id);
  res.json(review);
});

router.put('/:id', authenticateToken, async (req, res) => {
  const review = await Review.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(review);
});

router.delete('/:id', authenticateToken, async (req, res) => {
  await Review.findByIdAndDelete(req.params.id);
  res.status(204).end();
});

export default router;