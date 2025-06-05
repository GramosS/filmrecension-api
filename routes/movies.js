import express from 'express';
import Movie from '../models/Movie.js';
import Review from '../models/Review.js';

const router = express.Router();

// POST /movies
router.post('/', async (req, res) => {
  const movie = await Movie.create(req.body);
  res.status(201).json(movie);
});

// GET /movies
router.get('/', async (req, res) => {
  const movies = await Movie.find();
  res.json(movies);
});

// GET /movies/:id
router.get('/:id', async (req, res) => {
  const movie = await Movie.findById(req.params.id);
  res.json(movie);
});

// PUT /movies/:id
router.put('/:id', async (req, res) => {
  const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(movie);
});

// DELETE /movies/:id
router.delete('/:id', async (req, res) => {
  await Movie.findByIdAndDelete(req.params.id);
  res.status(204).end();
});

// GET /movies/:id/reviews
router.get('/:id/reviews', async (req, res) => {
  const reviews = await Review.find({ movieId: req.params.id });
  res.json(reviews);
});

export default router;
