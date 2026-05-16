// Database pool - kept for reference
// For a frontend-only Vite app, database access should be through an API
// To use a backend, create a separate Node.js/Express server

// Example usage (commented out):
/*
import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'portfolio_db',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default pool;
*/