import express from 'express';
import Review from '../models/Review.js';

const router = express.Router();

// POST /reviews
router.post('/', async (req, res) => {
  const review = await Review.create(req.body);
  res.status(201).json(review);
});

// GET /reviews
router.get('/', async (req, res) => {
  const reviews = await Review.find();
  res.json(reviews);
});

// GET /reviews/:id
router.get('/:id', async (req, res) => {
  const review = await Review.findById(req.params.id);
  res.json(review);
});

// PUT /reviews/:id
router.put('/:id', async (req, res) => {
  const review = await Review.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(review);
});

// DELETE /reviews/:id
router.delete('/:id', async (req, res) => {
  await Review.findByIdAndDelete(req.params.id);
  res.status(204).end();
});

export default router;
