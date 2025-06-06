import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import movieRoutes from './routes/movies.js';
import reviewRoutes from './routes/reviews.js';
import authRoutes from './routes/auth.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// middleware
app.use(express.json());

// mongoDB-anslutning
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error(' MongoDB connection error:', err));

// routes
app.use('/movies', movieRoutes);
app.use('/reviews', reviewRoutes);
app.use('/', authRoutes);

app.get('/', (req, res) => {
  res.send(' Movie Review Backend is running!');
});

app.listen(PORT, () => {
  console.log(` Server running on http://localhost:${PORT}`);
});
