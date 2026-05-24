import dotenv from 'dotenv';
// 1. Always load environment variables before any other local imports
dotenv.config();

import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import jwt from 'jsonwebtoken';
// 2. Import the database pool
import pool from './src/lib/db';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

/**
 * Middleware: API Key Authentication
 * Checks for a secret key in the 'x-api-key' header.
 */
const authenticateApiKey = (req: Request, res: Response, next: NextFunction) => {
  const apiKey = req.header('x-api-key');
  if (apiKey && apiKey === process.env.API_KEY) {
    return next();
  }
  res.status(403).json({ error: 'Unauthorized: Invalid API Key' });
};

/**
 * Middleware: JWT Authentication
 * Verifies a token provided in the 'Authorization' header.
 */
const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Format: Bearer <token>

  if (!token) return res.status(401).json({ error: 'Unauthorized: Missing Token' });

  jwt.verify(token, process.env.JWT_SECRET as string, (err, user) => {
    if (err) return res.status(403).json({ error: 'Forbidden: Invalid or Expired Token' });
    (req as any).user = user;
    next();
  });
};

/**
 * Health Check Endpoint
 * Tests database connectivity
 */
app.get('/api/health', async (_req, res) => {
  try {
    const connection = await pool.getConnection();
    await connection.ping();
    connection.release();
    res.json({ 
      status: 'healthy',
      message: 'Database connection successful',
      database: process.env.DB_NAME,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Health check failed:', error);
    res.status(503).json({ 
      status: 'unhealthy',
      message: 'Database connection failed',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

/**
 * GET /api/projects
 * Fetches all projects from the MySQL database.
 */
app.get('/api/projects', authenticateApiKey, async (_req, res) => {
  try {
    // Use pool.execute: it automatically acquires and releases connections
    // which prevents connection leaks if the query fails.
    const [rows] = await pool.execute('SELECT * FROM projects');
    res.json(rows);
  } catch (error) {
    console.error('Error fetching projects:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

/**
 * POST /api/contact
 * Submit a contact message
 */
app.post('/api/contact', async (req: Request, res: Response) => {
  try {
    const { name, email, message } = req.body;
    
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields: name, email, message' });
    }

    await pool.execute(
      'INSERT INTO contact_messages (name, email, message) VALUES (?, ?, ?)',
      [name, email, message]
    );

    res.status(201).json({ 
      success: true,
      message: 'Contact message submitted successfully'
    });
  } catch (error) {
    console.error('Error submitting contact:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

/**
 * GET /api/contact (Protected)
 * Retrieve all contact messages (requires API key)
 */
app.get('/api/contact', authenticateApiKey, async (_req, res) => {
  try {
    const [rows] = await pool.execute('SELECT * FROM contact_messages ORDER BY created_at DESC');
    res.json(rows);
  } catch (error) {
    console.error('Error fetching contact messages:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

/**
 * Initialize & Start Server
 */
async function initializeServer() {
  try {
    // Test database connection on startup
    const connection = await pool.getConnection();
    await connection.ping();
    connection.release();
    console.log('✓ Database connection verified');
  } catch (error) {
    console.error('✗ Failed to connect to database:', error instanceof Error ? error.message : error);
    console.error('Please ensure:');
    console.error('  1. MySQL server is running');
    console.error('  2. Database credentials in .env are correct');
    console.error('  3. Database has been initialized with: npm run db:setup');
    process.exit(1);
  }
}

// Initialize and start server
initializeServer().then(() => {
  app.listen(PORT, () => {
    console.log(`\n🚀 Server is running on http://localhost:${PORT}`);
    console.log(`📊 Health check: http://localhost:${PORT}/api/health`);
    console.log(`🔐 API Key: ${process.env.API_KEY ? '✓ Configured' : '✗ Not set'}`);
    console.log(`🔑 JWT Secret: ${process.env.JWT_SECRET ? '✓ Configured' : '✗ Not set'}`);
    console.log(`💾 Database: ${process.env.DB_NAME} @ ${process.env.DB_HOST}\n`);
  });
});
