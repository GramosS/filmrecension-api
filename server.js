import express from 'express';
import mongoose from 'mongoose';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware för att hantera JSON
app.use(express.json());

// Anslut till MongoDB
mongoose.connect('mongodb://localhost:27017/movieDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB connected'))
.catch((err) => console.error('❌ MongoDB connection error:', err));

// Test-route
app.get('/', (req, res) => {
  res.send('🎬 Movie Review Backend is running!');
});

// Starta servern
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
