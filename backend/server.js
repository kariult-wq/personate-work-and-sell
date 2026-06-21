/**
 * PERSONATE BACKEND SERVER
 * Express.js API Server
 * 
 * This is the main backend server for the Personate app.
 * It handles all API requests from the mobile app.
 */

const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ===== ROUTES =====

/**
 * Health Check
 * GET /api/health
 * Check if server is running
 */
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running!', timestamp: new Date() });
});

// ===== AUTHENTICATION ROUTES =====
// TODO: Implement auth routes
// POST /api/auth/signup - Register new user
// POST /api/auth/login - Login user
// POST /api/auth/logout - Logout user

/**
 * Signup
 * POST /api/auth/signup
 * Register a new user
 */
app.post('/api/auth/signup', (req, res) => {
  try {
    const { name, email, password, age, userType } = req.body;
    
    // TODO: Validate input
    // TODO: Hash password
    // TODO: Save to Firebase/Database
    // TODO: Return user object and auth token
    
    res.json({
      success: true,
      message: 'User created successfully',
      user: {
        id: '123',
        name,
        email,
        userType,
        age,
      },
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

/**
 * Login
 * POST /api/auth/login
 * Login a user
 */
app.post('/api/auth/login', (req, res) => {
  try {
    const { email, password } = req.body;
    
    // TODO: Validate credentials
    // TODO: Return auth token
    
    res.json({
      success: true,
      message: 'Login successful',
      token: 'auth_token_here',
      user: {
        id: '123',
        email,
      },
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// ===== JOBS ROUTES =====
// GET /api/jobs - Get all jobs
// POST /api/jobs - Create job
// GET /api/jobs/:id - Get specific job
// PUT /api/jobs/:id - Update job
// DELETE /api/jobs/:id - Delete job

/**
 * Get All Jobs
 * GET /api/jobs
 * Returns list of all jobs
 */
app.get('/api/jobs', (req, res) => {
  try {
    // TODO: Query database for jobs
    // TODO: Filter by category, location, etc.
    // TODO: Implement pagination
    
    res.json({
      success: true,
      jobs: [
        {
          id: 1,
          title: 'Lawn Mowing',
          company: 'Green Care',
          location: 'New York, NY',
          price: '$50',
          isPremium: true,
        },
      ],
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

/**
 * Create Job
 * POST /api/jobs
 * Create a new job posting
 */
app.post('/api/jobs', (req, res) => {
  try {
    const { title, description, location, budget, category } = req.body;
    
    // TODO: Validate input
    // TODO: Save to database
    // TODO: Return created job
    
    res.json({
      success: true,
      message: 'Job created successfully',
      job: {
        id: 1,
        title,
        description,
        location,
        budget,
        category,
      },
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// ===== PRODUCTS ROUTES =====
app.get('/api/products', (req, res) => {
  res.json({ success: true, products: [] });
});

// ===== FOOD ROUTES =====
app.get('/api/food', (req, res) => {
  res.json({ success: true, food: [] });
});

// ===== SKILLS/COURSES ROUTES =====
app.get('/api/courses', (req, res) => {
  res.json({ success: true, courses: [] });
});

// ===== USER ROUTES =====
app.get('/api/users/:id', (req, res) => {
  res.json({
    success: true,
    user: {
      id: req.params.id,
      name: 'John Doe',
      email: 'john@example.com',
    },
  });
});

// ===== PAYMENT ROUTES =====
app.post('/api/payments/create-subscription', (req, res) => {
  try {
    // TODO: Create Stripe subscription for premium
    res.json({
      success: true,
      message: 'Subscription created',
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// ===== ERROR HANDLING =====
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Internal server error' });
});

// ===== START SERVER =====
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📍 http://localhost:${PORT}`);
  console.log(`✅ Health check: http://localhost:${PORT}/api/health`);
});
