# Backend API Documentation

## Base URL
```
http://localhost:5000
```

## Authentication Methods

### API Key Authentication
Used for most protected endpoints. Include in headers:
```
x-api-key: your_super_secret_api_key_here
```

### JWT Authentication
For token-based endpoints. Include in headers:
```
Authorization: Bearer <your_jwt_token>
```

---

## Endpoints

### 1. Health Check (Public)
**GET** `/api/health`

Check database connectivity and server status.

**Response (200):**
```json
{
  "status": "healthy",
  "message": "Database connection successful",
  "database": "portfolio_db",
  "timestamp": "2025-05-24T10:30:00Z"
}
```

**Response (503):**
```json
{
  "status": "unhealthy",
  "message": "Database connection failed",
  "error": "Access denied for user 'root'"
}
```

---

### 2. Get All Projects (Protected)
**GET** `/api/projects`

Retrieve all projects from the database.

**Headers:**
```
x-api-key: your_super_secret_api_key_here
```

**Response (200):**
```json
[
  {
    "id": 1,
    "title": "E-Commerce Platform",
    "description": "Full-featured online store",
    "tags": "React,Node",
    "image": "/images/project-ecommerce.jpg",
    "created_at": "2025-05-24T10:30:00Z"
  },
  {
    "id": 2,
    "title": "Task Management App",
    "description": "Collaborative project management",
    "tags": "Next.js,TS",
    "image": "/images/project-taskapp.jpg",
    "created_at": "2025-05-24T10:30:00Z"
  }
]
```

**Response (403):**
```json
{
  "error": "Unauthorized: Invalid API Key"
}
```

---

### 3. Submit Contact Message (Public)
**POST** `/api/contact`

Submit a contact form message. No authentication required.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "I'd like to discuss a project opportunity."
}
```

**Response (201):**
```json
{
  "success": true,
  "message": "Contact message submitted successfully"
}
```

**Response (400):**
```json
{
  "error": "Missing required fields: name, email, message"
}
```

**Response (500):**
```json
{
  "error": "Internal Server Error"
}
```

---

### 4. Get All Contact Messages (Protected)
**GET** `/api/contact`

Retrieve all submitted contact messages. Requires API key.

**Headers:**
```
x-api-key: your_super_secret_api_key_here
```

**Response (200):**
```json
[
  {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com",
    "message": "I'd like to discuss a project opportunity.",
    "created_at": "2025-05-24T10:30:00Z"
  }
]
```

**Response (403):**
```json
{
  "error": "Unauthorized: Invalid API Key"
}
```

---

## Error Responses

### 400 Bad Request
Request is malformed or missing required fields.

### 401 Unauthorized
Missing required authentication token.

### 403 Forbidden
- Invalid API key
- Invalid or expired JWT token
- Missing required authentication

### 500 Internal Server Error
Server error occurred while processing the request.

### 503 Service Unavailable
Database connection failed.

---

## Environment Variables

Configure these in `.env`:

```env
# Database
DB_HOST=localhost              # MySQL hostname
DB_USER=root                   # MySQL username
DB_PASSWORD=Abdallah1?         # MySQL password
DB_NAME=portfolio_db           # Database name

# Server
PORT=5000                      # Server port

# Security
API_KEY=your_super_secret_api_key_here
JWT_SECRET=your_jwt_access_token_secret_here
```

---

## Example Requests

### Using cURL

#### Get Projects
```bash
curl -X GET http://localhost:5000/api/projects \
  -H "x-api-key: your_super_secret_api_key_here"
```

#### Submit Contact
```bash
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Jane Smith",
    "email": "jane@example.com",
    "message": "Great portfolio!"
  }'
```

#### Health Check
```bash
curl http://localhost:5000/api/health
```

### Using JavaScript/Fetch

#### Get Projects
```javascript
fetch('http://localhost:5000/api/projects', {
  headers: {
    'x-api-key': 'your_super_secret_api_key_here'
  }
})
.then(res => res.json())
.then(data => console.log(data));
```

#### Submit Contact
```javascript
fetch('http://localhost:5000/api/contact', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'Jane Smith',
    email: 'jane@example.com',
    message: 'Great portfolio!'
  })
})
.then(res => res.json())
.then(data => console.log(data));
```

---

## Database Schema

### projects Table
| Column | Type | Description |
|--------|------|-------------|
| id | INT UNSIGNED | Primary key, auto-increment |
| title | VARCHAR(255) | Project title |
| description | TEXT | Project description |
| tags | VARCHAR(255) | Comma-separated tags |
| image | VARCHAR(512) | Image URL |
| created_at | TIMESTAMP | Creation timestamp |

### contact_messages Table
| Column | Type | Description |
|--------|------|-------------|
| id | INT UNSIGNED | Primary key, auto-increment |
| name | VARCHAR(255) | Sender name |
| email | VARCHAR(255) | Sender email |
| message | TEXT | Message content |
| created_at | TIMESTAMP | Submission timestamp |

---

## Rate Limiting & Security

- No built-in rate limiting (consider adding for production)
- API Key stored in `.env` - keep secure, don't commit
- JWT Secret also in `.env` - change for production
- CORS enabled for all origins (configure for production)

---

## Troubleshooting

### "Unauthorized: Invalid API Key"
- Verify `x-api-key` header is included
- Confirm the API key matches `API_KEY` in `.env`

### Database errors
- Ensure MySQL is running
- Check `DB_HOST`, `DB_USER`, `DB_PASSWORD` in `.env`
- Run `npm run db:setup` to create schema

### Connection refused
- Backend not running: use `npm run dev`
- Check `PORT` setting in `.env`

---

## Starting the Backend

```bash
npm run dev
```

The server will start and verify database connectivity. Check the console for:
- ✓ Database connection verified
- 🚀 Server is running on http://localhost:5000
