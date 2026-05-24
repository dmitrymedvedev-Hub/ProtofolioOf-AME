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
 * GET /api/projects
 * Fetches all projects from the MySQL database.
 */
app.get('/api/projects', authenticateApiKey, async (_req, res) => {
  try {
    // 3. Use pool.execute: it automatically acquires and releases connections
    // which prevents connection leaks if the query fails.
    const [rows] = await pool.execute('SELECT * FROM projects');
    res.json(rows);
  } catch (error) {
    console.error('Error fetching projects:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});