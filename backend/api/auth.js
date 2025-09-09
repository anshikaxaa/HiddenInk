import connectToDatabase from '../../utils/db.js';
import jwt from 'jsonwebtoken';
import User from '../../models/User.js';
import { authenticateToken } from '../../middleware/auth.js';
import cors from 'cors';

const corsHandler = cors();

const generateToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '7d' });
};

export default async function handler(req, res) {
  await connectToDatabase();
  await new Promise((resolve) => corsHandler(req, res, resolve));
  if (req.method === 'OPTIONS') return res.status(200).end();

  if (req.method === 'POST' && req.url === '/signup') {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        return res.status(400).json({ success: false, message: 'Email and password are required' });
      }
      if (password.length < 6) {
        return res.status(400).json({ success: false, message: 'Password must be at least 6 characters long' });
      }
      const existingUser = await User.findOne({ email: email.toLowerCase() });
      if (existingUser) {
        return res.status(400).json({ success: false, message: 'User with this email already exists' });
      }
      const user = new User({ email: email.toLowerCase(), password });
      await user.save();
      const token = generateToken(user._id);
      return res.status(201).json({ success: true, message: 'User created successfully', token, user: { id: user._id, email: user.email, createdAt: user.createdAt } });
    } catch (error) {
      console.error('Signup error:', error);
      return res.status(500).json({ success: false, message: 'Server error during signup' });
    }
  }

  if (req.method === 'POST' && req.url === '/login') {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        return res.status(400).json({ success: false, message: 'Email and password are required' });
      }
      const user = await User.findOne({ email: email.toLowerCase() });
      if (!user) {
        return res.status(401).json({ success: false, message: 'Invalid email or password' });
      }
      const isPasswordValid = await user.comparePassword(password);
      if (!isPasswordValid) {
        return res.status(401).json({ success: false, message: 'Invalid email or password' });
      }
      const token = generateToken(user._id);
      return res.json({ success: true, message: 'Login successful', token, user: { id: user._id, email: user.email, createdAt: user.createdAt } });
    } catch (error) {
      console.error('Login error:', error);
      return res.status(500).json({ success: false, message: 'Server error during login' });
    }
  }

  if (req.method === 'GET' && req.url === '/me') {
    try {
      await authenticateToken(req, res, async () => {
        const user = await User.findById(req.user.userId).select('-password');
        if (!user) {
          return res.status(404).json({ success: false, message: 'User not found' });
        }
        return res.json({ success: true, user: { id: user._id, email: user.email, createdAt: user.createdAt } });
      });
    } catch (error) {
      console.error('Get user error:', error);
      return res.status(500).json({ success: false, message: 'Server error' });
    }
  }

  // Not found
  return res.status(404).json({ success: false, message: 'Not found' });
}
