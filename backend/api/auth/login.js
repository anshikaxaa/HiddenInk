import connectToDatabase from '../../../utils/db.js';
import jwt from 'jsonwebtoken';
import User from '../../../models/User.js';
import cors from 'cors';

const corsHandler = cors();

const generateToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '7d' });
};

export default async function handler(req, res) {
  await connectToDatabase();
  await new Promise((resolve) => corsHandler(req, res, resolve));
  if (req.method === 'OPTIONS') return res.status(200).end();

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

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
