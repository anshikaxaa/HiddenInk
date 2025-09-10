# HiddenInk

A full-stack web application for keeping a secret diary, built with React (frontend) and Node.js/Express/MongoDB (backend).

## Features
- Secure user authentication
- Create, edit, and organize diary notes
- Page flip animation for diary pages
- Responsive and modern UI

## Project Structure
```
HiddenInk/
  frontend/   # React app (client)
  backend/    # Node.js/Express API (server)
```

## Getting Started

### Prerequisites
- Node.js and npm installed
- MongoDB Atlas cluster (or local MongoDB)

### Setup
1. Clone the repository:
   ```
   git clone https://github.com/anshikaxaa/HiddenInk.git
   cd HiddenInk
   ```
2. Install dependencies for both frontend and backend:
   ```
   cd frontend
   npm install
   cd ../backend
   npm install
   ```
3. Create a `.env` file in `backend/` with your MongoDB URI and JWT secret:
   ```
   MONGODB_URI=your-mongodb-uri
   JWT_SECRET=your-jwt-secret
   ```
4. Start the backend server:
   ```
   npm start
   ```
5. In a new terminal, start the frontend:
   ```
   cd ../frontend
   npm start
   ```

## Deployment
- Frontend can be deployed on Vercel, Netlify, etc.
- Backend can be deployed on platforms like Vercel, Render, Heroku, or your own server.

