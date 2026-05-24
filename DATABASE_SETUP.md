# Database Setup Guide

This guide explains how to set up and connect your MySQL database to the backend.

## Prerequisites

You need one of the following:
1. **Docker & Docker Compose** (Recommended - Simplest)
2. **Local MySQL Server** (Manual setup required)

---

## Option 1: Using Docker (Recommended)

### Step 1: Install Docker
- Download and install [Docker Desktop](https://www.docker.com/products/docker-desktop)
- Ensure Docker is running before proceeding

### Step 2: Start the Database
From the project root directory, run:

```bash
docker-compose up -d
```

This will:
- Pull the MySQL 8.0 image
- Create a container named `proto_db`
- Automatically create the `portfolio_db` database
- Set up the `root` user with password `Abdallah1?`

### Step 3: Initialize Schema and Seed Data
```bash
npm run db:setup
npm run db:seed
```

### Step 4: Verify Connection
The database should now be running on `localhost:3306`

### To stop the database later:
```bash
docker-compose down
```

---

## Option 2: Local MySQL Server

### Step 1: Install MySQL
- Download and install [MySQL Community Server](https://dev.mysql.com/downloads/mysql/)
- During installation, remember your root password

### Step 2: Update .env File
Update `c:\Users\user\Desktop\Protofolio kimi AI\.env` with your MySQL credentials:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=portfolio_db
API_KEY=your_super_secret_api_key_here
JWT_SECRET=your_jwt_access_token_secret_here
```

### Step 3: Start MySQL Service
**Windows:**
```powershell
# MySQL is usually installed as a service
# Check Services: Start → services.msc → find "MySQL80" (or your version)
# Or start it manually if installed:
"C:\Program Files\MySQL\MySQL Server 8.0\bin\mysqld"
```

### Step 4: Initialize Schema and Seed Data
```bash
npm run db:setup
npm run db:seed
```

### Step 5: Verify Connection
```bash
mysql -h localhost -u root -p
```

---

## Environment Variables Explained

```env
DB_HOST=localhost          # MySQL server hostname
DB_USER=root               # MySQL username
DB_PASSWORD=Abdallah1?     # MySQL password
DB_NAME=portfolio_db       # Database name to use
PORT=5000                  # Backend server port
API_KEY=...                # Secret key for API authentication
JWT_SECRET=...             # Secret for JWT token signing
```

---

## Database Schema

### Tables Created:

#### `projects`
- `id` - Auto-incrementing primary key
- `title` - Project name (VARCHAR 255)
- `description` - Project description (TEXT)
- `tags` - Comma-separated tags (VARCHAR 255)
- `image` - Image URL (VARCHAR 512)
- `created_at` - Timestamp

#### `contact_messages`
- `id` - Auto-incrementing primary key
- `name` - Sender name (VARCHAR 255)
- `email` - Sender email (VARCHAR 255)
- `message` - Message content (TEXT)
- `created_at` - Timestamp

---

## Available NPM Scripts

```bash
npm run dev              # Start development server with Vite
npm run build            # Build production bundle
npm run db:setup         # Run schema.sql to create database tables
npm run db:seed          # Seed sample data into database
npm run db:local         # Docker setup + db:setup + db:seed (all-in-one)
npm run lint             # Run ESLint
```

---

## Backend API Endpoints

Once the database is set up and the backend is running:

### GET /api/projects
Fetch all projects from the database.

**Headers:**
```
x-api-key: your_super_secret_api_key_here
```

**Response:**
```json
[
  {
    "id": 1,
    "title": "E-Commerce Platform",
    "description": "Full-featured online store",
    "tags": "React,Node",
    "image": "/images/project-ecommerce.jpg",
    "created_at": "2025-05-24T10:30:00Z"
  }
]
```

---

## Troubleshooting

### "Access denied for user 'root'@'localhost'"
- **Issue:** Database credentials in `.env` are incorrect
- **Solution:** Verify your MySQL password in `.env` matches your MySQL installation

### "Can't connect to MySQL server"
- **Issue:** MySQL server is not running
- **Solution:** 
  - For Docker: Run `docker-compose up -d`
  - For Local MySQL: Start the MySQL service

### "Connection timeout"
- **Issue:** Database is not responding
- **Solution:** Wait a few seconds and retry (Docker may take time to start)

### "Tables don't exist"
- **Issue:** Schema hasn't been initialized
- **Solution:** Run `npm run db:setup`

---

## Next Steps

1. ✅ Set up the database (Docker or Local MySQL)
2. ✅ Run schema and seed scripts
3. Next: Start the backend server
   ```bash
   npm run dev
   ```
4. Next: Start the frontend development server
   ```bash
   npm run dev
   ```

---

## Database Connection Flow

```
Frontend (React/Vite)
        ↓
    (HTTP Requests)
        ↓
Backend Server (Express on port 5000)
        ↓
    (SQL Queries)
        ↓
MySQL Database (port 3306)
```

---

## Need Help?

- Check database logs: `docker-compose logs db`
- Verify port availability: MySQL needs port 3306
- Test connection: `mysql -h localhost -u root -p portfolio_db`
