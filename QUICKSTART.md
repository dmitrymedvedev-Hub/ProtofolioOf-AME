# Complete Setup Instructions - Step by Step

## What We've Set Up

✅ Enhanced backend server with database connection  
✅ Health check endpoint for debugging  
✅ Contact messages API endpoint  
✅ Proper error handling  
✅ Database schema and seeding scripts  
✅ Comprehensive documentation  

---

## Step 1: Ensure MySQL is Running

### Option A: Using Docker (Recommended)

**Prerequisites:** Docker Desktop installed and running

```powershell
cd "c:\Users\user\Desktop\Protofolio kimi AI"
docker-compose up -d
```

Wait 10-15 seconds for the container to fully start.

### Option B: Local MySQL Server

Ensure your local MySQL service is running:
- Windows: Start → Services → Find "MySQL80" → Right-click → Start

Verify connection:
```powershell
mysql -h localhost -u root -p
# Enter password: Abdallah1?
# Type: exit
```

---

## Step 2: Initialize Database

```powershell
cd "c:\Users\user\Desktop\Protofolio kimi AI"

# Create tables
npm run db:setup

# Add sample data
npm run db:seed
```

You should see:
```
Database schema executed successfully.
Seed data inserted.
```

---

## Step 3: Verify Database Connection

```powershell
# Check database was created
mysql -u root -p portfolio_db
# Enter password: Abdallah1?
# Type: SELECT * FROM projects;
# Type: exit
```

---

## Step 4: Start the Backend Server

```powershell
cd "c:\Users\user\Desktop\Protofolio kimi AI"
npm run dev
```

You should see:
```
✓ Database connection verified
🚀 Server is running on http://localhost:5000
📊 Health check: http://localhost:5000/api/health
🔐 API Key: ✓ Configured
🔑 JWT Secret: ✓ Configured
💾 Database: portfolio_db @ localhost
```

---

## Step 5: Test the Backend

Open a **new PowerShell terminal** (keep the backend running in the first one):

### Test Health Endpoint (No Auth Required)
```powershell
Invoke-WebRequest http://localhost:5000/api/health | ConvertFrom-Json
```

You should see:
```json
{
  "status": "healthy",
  "message": "Database connection successful",
  "database": "portfolio_db",
  "timestamp": "2025-05-24T10:30:00Z"
}
```

### Test Projects Endpoint (Requires API Key)
```powershell
$headers = @{"x-api-key" = "your_super_secret_api_key_here"}
Invoke-WebRequest http://localhost:5000/api/projects -Headers $headers | ConvertFrom-Json
```

You should see the projects from the database.

### Test Contact Submission (No Auth Required)
```powershell
$body = @{
    name = "Test User"
    email = "test@example.com"
    message = "This is a test message"
} | ConvertTo-Json

Invoke-WebRequest -Uri http://localhost:5000/api/contact `
  -Method POST `
  -Headers @{"Content-Type" = "application/json"} `
  -Body $body | ConvertFrom-Json
```

You should see:
```json
{
  "success": true,
  "message": "Contact message submitted successfully"
}
```

---

## Step 6: Connect Frontend to Backend

Once the backend is running on `http://localhost:5000`, configure your frontend to use the API.

In your React components, use:

```typescript
// Example: Fetch projects
const response = await fetch('http://localhost:5000/api/projects', {
  headers: {
    'x-api-key': 'your_super_secret_api_key_here'
  }
});
const projects = await response.json();
```

```typescript
// Example: Submit contact form
const response = await fetch('http://localhost:5000/api/contact', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: formData.name,
    email: formData.email,
    message: formData.message
  })
});
```

---

## Step 7: Start Frontend Development Server

Open **another new PowerShell terminal** and run:

```powershell
cd "c:\Users\user\Desktop\Protofolio kimi AI"
npm run dev
```

The frontend will typically run on `http://localhost:5173`

---

## Running Everything Together

You now need **3 terminal windows**:

### Terminal 1: Backend API
```powershell
cd "c:\Users\user\Desktop\Protofolio kimi AI"
npm run dev
```
Runs on: `http://localhost:5000`

### Terminal 2: Frontend Dev Server
```powershell
cd "c:\Users\user\Desktop\Protofolio kimi AI"
npm run dev
```
Runs on: `http://localhost:5173` (or similar)

### Terminal 3: Monitoring (Optional)
```powershell
# Watch database container (if using Docker)
docker-compose logs -f db

# Or monitor MySQL directly
mysql -u root -p portfolio_db
```

---

## Configuration Files Overview

| File | Purpose |
|------|---------|
| `.env` | Environment variables (credentials, secrets) |
| `server.ts` | Backend Express server with API endpoints |
| `src/lib/db.ts` | MySQL connection pool |
| `db/schema.sql` | Database tables definition |
| `docker-compose.yml` | Docker MySQL configuration |
| `DATABASE_SETUP.md` | Database setup guide |
| `API_DOCUMENTATION.md` | Complete API reference |

---

## Environment Variables

Your `.env` file contains:

```env
DB_HOST=localhost                              # MySQL server
DB_USER=root                                   # MySQL username
DB_PASSWORD=Abdallah1?                         # MySQL password
DB_NAME=portfolio_db                           # Database name
PORT=5000                                      # Backend port
API_KEY=your_super_secret_api_key_here         # API authentication
JWT_SECRET=your_jwt_access_token_secret_here   # JWT signing
```

⚠️ **Important:** 
- Never commit `.env` to git
- Change `API_KEY` and `JWT_SECRET` for production
- Keep these credentials secure

---

## Available NPM Scripts

```bash
npm run dev          # Start Vite dev server (frontend)
npm run build        # Build production bundle
npm run db:setup     # Create database tables
npm run db:seed      # Add sample data
npm run db:local     # Docker setup + schema + seed (all-in-one)
npm run lint         # Run ESLint
```

---

## Troubleshooting Checklist

- [ ] MySQL is running (Docker container or local service)
- [ ] `.env` file has correct credentials
- [ ] `npm run db:setup` completed successfully
- [ ] Backend starts without errors
- [ ] Health endpoint returns `"status": "healthy"`
- [ ] All 3 terminals running (Backend, Frontend, optional Monitor)
- [ ] API Key used in protected endpoint requests
- [ ] CORS is configured (currently allows all origins)

---

## Next Steps

1. ✅ Database created and running
2. ✅ Backend API endpoints working
3. Next: Integrate API calls in React components
4. Next: Deploy to production
5. Next: Set up environment-specific configurations

---

## Support Documentation

- **Database Issues:** See `DATABASE_SETUP.md`
- **API Reference:** See `API_DOCUMENTATION.md`
- **General Info:** See `README.md`
- **Backend Code:** See `server.ts`

---

## Quick Commands Reference

```powershell
# Start everything
# Terminal 1:
docker-compose up -d          # Start MySQL
npm run db:setup              # Create schema
npm run dev                    # Start backend

# Terminal 2:
npm run dev                    # Start frontend

# Check status
http://localhost:5000/api/health

# Stop everything
# Ctrl+C in each terminal
docker-compose down            # Stop MySQL
```

---

Congratulations! Your database and backend are now connected and ready to use! 🎉
