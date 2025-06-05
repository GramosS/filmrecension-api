import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const router = express.Router();

// POST /register
router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;
  const hashedPwd = await bcrypt.hash(password, 10);
  const user = await User.create({ username, email, password: hashedPwd });
  res.status(201).json(user);
});

// POST /login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(401).json({ message: 'Invalid credentials' });

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(401).json({ message: 'Invalid credentials' });

  const token = jwt.sign({ userId: user._id, role: user.role }, 'secret-key');
  res.json({ token });
});

export default router;
