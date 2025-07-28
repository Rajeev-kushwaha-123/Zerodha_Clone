# Zerodha Clone - Application Flow

## Overview
This application consists of two separate React applications that work together to provide a complete trading platform experience:

1. **Frontend (Port 3000)** - Landing page with authentication
2. **Dashboard (Port 3001)** - Trading dashboard (requires authentication)
3. **Backend (Port 3002)** - API server

## Application Flow

### 1. Entry Point
- Users start at `http://localhost:3000` (Frontend)
- This is the main landing page with navigation, about, pricing, etc.

### 2. Authentication
- Users can sign up or login from the frontend
- Authentication is handled by the backend API
- After successful login/signup, users are automatically redirected to the dashboard

### 3. Dashboard Access
- Dashboard is available at `http://localhost:3001`
- **Important**: Dashboard requires authentication
- If a user tries to access the dashboard without being logged in, they are redirected to the frontend login page

### 4. Logout
- When users logout from the dashboard, they are redirected back to the frontend (`http://localhost:3000`)
- This completes the circular flow

## How to Run

1. **Start all services:**
   ```bash
   node start-app.js
   ```

2. **Access the application:**
   - Open `http://localhost:3000` in your browser
   - Login or signup to access the dashboard
   - Dashboard will open at `http://localhost:3001`

## Technical Details

### Cross-Origin Communication
- Backend CORS is configured to allow both frontend and dashboard
- Cookies are shared between applications for authentication
- Redirects use `window.location.href` for cross-origin navigation

### Authentication Flow
1. User logs in/signs up on frontend
2. Backend sets authentication cookies
3. Frontend redirects to dashboard
4. Dashboard verifies authentication with backend
5. If authenticated, dashboard loads; if not, redirects to frontend login

### Security
- Authentication is verified on every dashboard load
- Unauthenticated users cannot access the dashboard
- Logout clears authentication and redirects to frontend

## File Structure
```
├── frontend/          # Landing page (Port 3000)
├── dashboard/         # Trading dashboard (Port 3001)
├── backend/           # API server (Port 3002)
└── start-app.js       # Script to start all services
```

## Troubleshooting

1. **Dashboard not loading after login:**
   - Check if backend is running on port 3002
   - Verify CORS settings in backend
   - Check browser console for errors

2. **Authentication issues:**
   - Clear browser cookies
   - Restart all services
   - Check backend authentication routes

3. **Port conflicts:**
   - Ensure ports 3000, 3001, and 3002 are available
   - Check if other applications are using these ports 