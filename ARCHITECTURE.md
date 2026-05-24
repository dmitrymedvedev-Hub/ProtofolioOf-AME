# Architecture & Connection Diagram

## System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                      Your Portfolio                         │
└─────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────────┐
│                    FRONTEND (React + Vite)                       │
│                      Port: 5173                                  │
│                                                                  │
│  • Home Page         → GET /api/projects                        │
│  • Projects Display  → Shows data from database                 │
│  • Contact Form      → POST /api/contact                        │
│  • Admin Panel       → GET /api/contact (protected)             │
└──────────────────────────────────────────────────────────────────┘
              ↕ HTTP Requests (CORS Enabled)
┌──────────────────────────────────────────────────────────────────┐
│                   BACKEND (Express.js)                           │
│                      Port: 5000                                  │
│                                                                  │
│  Routes:                                                         │
│  • GET    /api/health         (Public)                          │
│  • GET    /api/projects       (Protected - API Key)             │
│  • POST   /api/contact        (Public)                          │
│  • GET    /api/contact        (Protected - API Key)             │
└──────────────────────────────────────────────────────────────────┘
              ↕ MySQL Protocol (Port 3306)
┌──────────────────────────────────────────────────────────────────┐
│                   DATABASE (MySQL 8.0)                          │
│                      Port: 3306                                 │
│                  Host: localhost                                │
│                  User: root                                     │
│                Database: portfolio_db                           │
│                                                                  │
│  Tables:                                                         │
│  • projects (id, title, description, tags, image)               │
│  • contact_messages (id, name, email, message)                  │
└──────────────────────────────────────────────────────────────────┘
```

---

## Request Flow Example

### Getting Projects

```
1. Frontend Component
   ├─ React useEffect Hook
   └─ fetch('http://localhost:5000/api/projects', {
        headers: { 'x-api-key': '...' }
      })
        ↓
2. Network Request
   ├─ HTTP: GET
   ├─ URL: http://localhost:5000/api/projects
   ├─ Headers: x-api-key: your_super_secret_api_key_here
   └─ CORS: ✓ Allowed
        ↓
3. Backend Server (server.ts)
   ├─ Route: app.get('/api/projects', authenticateApiKey, ...)
   ├─ Authentication: Verify API key ✓
   └─ Handler: Fetch from database
        ↓
4. Database Connection (src/lib/db.ts)
   ├─ Connection Pool: mysql.createPool()
   ├─ Query: SELECT * FROM projects
   └─ Return: Array of project objects
        ↓
5. MySQL Database
   ├─ Database: portfolio_db
   ├─ Table: projects
   └─ Result: [
        { id: 1, title: 'E-Commerce', ... },
        { id: 2, title: 'Task App', ... }
      ]
        ↓
6. Response to Frontend
   ├─ Status: 200 OK
   ├─ Content-Type: application/json
   └─ Body: [ { id: 1, ... }, { id: 2, ... } ]
        ↓
7. Frontend Display
   ├─ State: setProjects(data)
   └─ Render: Projects displayed on page
```

---

## Data Flow: Contact Submission

```
User fills contact form and clicks "Send"
        ↓
Frontend: fetch('/api/contact', {
  method: 'POST',
  body: { name, email, message }
})
        ↓
Backend: app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;
  // Validate input
  await pool.execute(
    'INSERT INTO contact_messages (...) VALUES (...)',
    [name, email, message]
  );
})
        ↓
Database: INSERT INTO contact_messages (...)
        ↓
Response: { success: true, message: '...' }
        ↓
Frontend: Show success notification to user
```

---

## Authentication Flow

### API Key Authentication

```
Frontend Request
├─ Header: x-api-key: your_super_secret_api_key_here
└─ Endpoint: GET /api/projects
        ↓
Backend Middleware: authenticateApiKey()
├─ Read header: req.header('x-api-key')
├─ Compare: apiKey === process.env.API_KEY
├─ Result: ✓ Match → Continue to endpoint
└─ Result: ✗ No match → Return 403 Unauthorized
        ↓
Proceed with request or return error
```

---

## File Organization

```
project-root/
│
├── 📄 server.ts                    ← Main backend server
│   ├─ Express app setup
│   ├─ API endpoints (GET, POST)
│   ├─ Error handling
│   └─ Database connection check
│
├── 📁 src/lib/
│   └─ db.ts                        ← MySQL connection pool
│       ├─ Pool configuration
│       ├─ Connection management
│       └─ Query execution
│
├── 📁 db/
│   └─ schema.sql                   ← Database structure
│       ├─ CREATE DATABASE
│       ├─ CREATE TABLE projects
│       └─ CREATE TABLE contact_messages
│
├── 📁 scripts/
│   ├─ setup-db.cjs                 ← Initialize database
│   ├─ seed-db.cjs                  ← Add sample data
│   └─ setup.ps1                    ← Automated setup
│
├── 🔧 .env                         ← Credentials & Config
│   ├─ DB_HOST, DB_USER, DB_PASSWORD
│   ├─ API_KEY, JWT_SECRET
│   └─ PORT
│
├── 🐳 docker-compose.yml           ← MySQL container
│   ├─ MySQL 8.0 image
│   ├─ Port 3306 mapping
│   └─ Volume persistence
│
├── 📚 Documentation
│   ├─ DATABASE_SETUP.md            ← Database guide
│   ├─ API_DOCUMENTATION.md         ← API reference
│   ├─ QUICKSTART.md                ← Quick setup
│   ├─ SETUP_COMPLETE.md            ← This setup summary
│   └─ README.md                    ← General info
│
└── 📁 src/
    ├─ components/                  ← React components
    ├─ pages/                       ← React pages
    ├─ App.tsx                      ← Main app
    └─ main.tsx                     ← Entry point
```

---

## Terminal Setup

```
Terminal 1: Database & Backend
┌─────────────────────────────────────┐
│ $ docker-compose up -d              │ MySQL running
│ $ npm run db:setup                  │ Schema created
│ $ npm run db:seed                   │ Sample data added
│ $ npm run dev                       │ Backend running
│                                     │ http://localhost:5000
└─────────────────────────────────────┘

Terminal 2: Frontend
┌─────────────────────────────────────┐
│ $ npm run dev                       │ Frontend running
│                                     │ http://localhost:5173
└─────────────────────────────────────┘

Terminal 3 (Optional): Logs/Monitoring
┌─────────────────────────────────────┐
│ $ docker-compose logs -f db         │ Watch MySQL logs
│ or                                  │
│ $ mysql -u root -p portfolio_db     │ Direct database access
└─────────────────────────────────────┘
```

---

## Deployment Architecture

For production, the architecture would look like:

```
┌─────────────────────────────────────────────────┐
│         CDN / Hosting Provider                  │
├─────────────────────────────────────────────────┤
│  Static Frontend (dist/)                        │
│  • Minified HTML/CSS/JS                         │
│  • Cached globally                              │
└─────────────────────────────────────────────────┘
              ↕ API Calls
┌─────────────────────────────────────────────────┐
│         Backend Server (Production)             │
│  • Node.js/Express                              │
│  • Load balanced (multiple instances)           │
│  • Environment-specific config                  │
│  • SSL/TLS encryption                           │
│  • Rate limiting & security headers             │
└─────────────────────────────────────────────────┘
              ↕ Database Connection
┌─────────────────────────────────────────────────┐
│  Database Server (Production MySQL)             │
│  • Managed database service                     │
│  • Automated backups                            │
│  • High availability setup                      │
│  • Connection pooling                           │
│  • Encrypted connections                        │
└─────────────────────────────────────────────────┘
```

---

## Connection Status Indicators

### ✅ Everything Working
```
Frontend    → HTTP 200 → Backend → Database
✓ Requests successful
✓ Data flowing
✓ No errors
```

### ⚠️ Database Connection Failed
```
Frontend    → Backend    ✗ Cannot reach Database
              (503)      │ MySQL not running
                         │ Credentials wrong
                         │ Network issue
```

### ⚠️ API Key Invalid
```
Frontend    → Backend    ✗ Authentication Failed
              (403)      │ Wrong API key
                         │ Missing header
```

### ⚠️ Frontend Cannot Connect to Backend
```
Frontend    ✗ Cannot reach Backend (CORS issue or server down)
              │ Backend not running
              │ Wrong URL/Port
              │ Firewall blocking
```

---

## Environment Variables Map

```
.env File (Local Development)
├─ DB_HOST=localhost                           → MySQL server address
├─ DB_USER=root                                → MySQL username
├─ DB_PASSWORD=Abdallah1?                      → MySQL password
├─ DB_NAME=portfolio_db                        → Database name
├─ PORT=5000                                   → Backend server port
├─ API_KEY=your_super_secret_api_key_here      → API authentication
└─ JWT_SECRET=your_jwt_token_secret            → JWT signing

Production .env (Different values)
├─ DB_HOST=prod-mysql.example.com              → Remote database
├─ DB_USER=produser                            → Different user
├─ DB_PASSWORD=**STRONG_PASSWORD**             → Strong password
├─ DB_NAME=production_db                       → Production database
├─ PORT=8000                                   → Different port
├─ API_KEY=**PRODUCTION_KEY**                  → Production key
└─ JWT_SECRET=**PRODUCTION_SECRET**            → Production secret
```

---

## Key Components

### Frontend Entry Point
```typescript
// src/main.tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

### Backend Entry Point
```typescript
// server.ts
import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import pool from './src/lib/db'

const app = express()
// ... API endpoints ...
app.listen(PORT, () => console.log(`Server running...`))
```

### Database Connection
```typescript
// src/lib/db.ts
import mysql from 'mysql2/promise'

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
})

export default pool
```

---

## Summary

```
┌────────────────────────────────────────────────────────┐
│  Your portfolio now has a complete full-stack setup:  │
├────────────────────────────────────────────────────────┤
│  ✅ Frontend:    React + Vite (http://localhost:5173) │
│  ✅ Backend:     Express API (http://localhost:5000)  │
│  ✅ Database:    MySQL 8.0 (localhost:3306)           │
│  ✅ Auth:        API Key protection                    │
│  ✅ Error:       Proper error handling                 │
│  ✅ Docs:        Complete documentation               │
└────────────────────────────────────────────────────────┘
```

Ready to build amazing things! 🚀
