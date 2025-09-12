const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();

// Add error handling middleware
app.use((err, req, res, next) => {
  console.error('Express Error:', err);
  res.status(500).json({ error: 'Internal Server Error', message: err.message });
});

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const authRoutes = require('./routes/auth');
const { authenticateToken } = require('./middleware/auth');

app.use('/api/auth', authRoutes);

// Protected route example
app.get('/api/protected', authenticateToken, (req, res) => {
  res.json({
    message: 'This is a protected route',
    userId: req.user.userId
  });
});

// Basic route for testing
app.get('/', (req, res) => {
  console.log('Root route accessed');
  res.json({
    message: 'Secret Diary API Server',
    status: 'running',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  });
});

// Health check route
app.get('/health', (req, res) => {
  console.log('Health check accessed');
  res.json({
    status: 'healthy',
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
    mongodb: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected'
  });
});


// Connect to MongoDB
const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGODB_URI || 'mongodb+srv://anshikaxaaa_db_user:Ansh1k@@S1ng#@hidden-ink.xzafrer.mongodb.net/?retryWrites=true&w=majority&appName=Hidden-ink';
    await mongoose.connect(mongoURI);
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
    console.log('Server will continue without database connection for development');
  }
};

// Start server
const PORT = process.env.PORT || 5000;

// For Vercel deployment
if (process.env.NODE_ENV === 'production') {
  // Initialize database connection for Vercel
  connectDB().catch(console.error);
  module.exports = app;
} else {
  // Local development
  const startServer = async () => {
    await connectDB();

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
      console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
    });
  };

  startServer();
}
