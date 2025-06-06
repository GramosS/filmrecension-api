import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const router = express.Router();

router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;
  const hashedPwd = await bcrypt.hash(password, 10);
  const user = await User.create({ username, email, password: hashedPwd });
  res.status(201).json(user);
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(401).json({ message: 'login failed' });

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(401).json({ message: 'failed' });

  const token = jwt.sign(
    { userId: user._id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: '2h' }
  );
  res.json({ token });
});

export default router;