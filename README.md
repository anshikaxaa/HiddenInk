# Hidden Ink Backend

Backend API for the Secret Diary Web App built with Node.js, Express, and MongoDB.

## Features

- User authentication (signup/login) with JWT
- Password hashing with bcrypt
- MongoDB database integration
- Serverless deployment on Vercel
- CORS support for frontend integration

## API Endpoints

### Authentication
- `POST /api/auth/signup` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/simple-test` - Simple test endpoint

## Environment Variables

Create a `.env` file in the root directory with:

```
MONGODB_URI=mongodb+srv://your-connection-string
JWT_SECRET=your-jwt-secret-key
CORS_ORIGIN=https://your-frontend-domain.vercel.app
```

## Deployment

This project is configured for Vercel serverless functions. The API routes are located in the `api/` directory.

### Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create `.env` file with required variables

3. Run locally:
   ```bash
   npm start
   ```

### Vercel Deployment

1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push

## Project Structure

```
├── api/
│   ├── auth/
│   │   ├── signup.js
│   │   ├── login.js
│   │   ├── simple-test.js
│   │   └── test.js
├── models/
│   └── User.js
├── utils/
│   └── db.js
├── package.json
├── vercel.json
└── README.md
```

## Technologies Used

- Node.js
- Express.js
- MongoDB with Mongoose
- bcryptjs for password hashing
- jsonwebtoken for JWT authentication
- CORS for cross-origin requests
- Vercel for serverless deployment
