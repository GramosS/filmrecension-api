import express from 'express';
import Movie from '../models/Movie.js';
import Review from '../models/Review.js';
import { authenticateToken } from '../middleware/auth.js';

const router = express.Router();

// endast inloggade användare kan lägga till filmer
router.post('/', authenticateToken, async (req, res) => {
  const movie = await Movie.create(req.body);
  res.status(201).json(movie);
});

router.get('/', async (req, res) => {
  const movies = await Movie.find();
  res.json(movies);
});

router.get('/:id', async (req, res) => {
  const movie = await Movie.findById(req.params.id);
  res.json(movie);
});

router.put('/:id', authenticateToken, async (req, res) => {
  const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(movie);
});

router.delete('/:id', authenticateToken, async (req, res) => {
  await Movie.findByIdAndDelete(req.params.id);
  res.status(204).end();
});

router.get('/:id/reviews', async (req, res) => {
  const reviews = await Review.find({ movieId: req.params.id });
  res.json(reviews);
});

export default router;