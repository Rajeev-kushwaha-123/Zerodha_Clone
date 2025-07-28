# Zerodha Clone - Full Stack Trading Platform

A complete trading platform clone with authentication, dashboard, and real-time data visualization.

## Project Structure

```
Zerodha clone/
├── backend/          # Node.js + Express + MongoDB API
├── frontend/         # React landing page and authentication
└── dashboard/        # React trading dashboard
```

## Features

- **Authentication System**: Secure login/signup with JWT tokens
- **Landing Page**: Modern UI with pricing, products, and support pages
- **Trading Dashboard**: Real-time portfolio management with holdings, positions, and orders
- **Responsive Design**: Works on desktop and mobile devices
- **Protected Routes**: Authentication-based access control

## Quick Start

### Option 1: Start All Services at Once

1. Install dependencies for all services:
   ```bash
   cd backend && npm install
   cd ../frontend && npm install
   cd ../dashboard && npm install
   ```

2. Create `.env` file in backend directory:
   ```
   MONGO_URL=your_mongodb_connection_string
   TOKEN_KEY=your_jwt_secret_key
   PORT=3002
   ```

3. Start all services:
   ```bash
   node start-app.js
   ```

### Option 2: Start Services Individually

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or pnpm

### 1. Backend Setup

```bash
cd backend
npm install
# or
pnpm install
```

Create a `.env` file in the backend directory:
```
MONGO_URL=your_mongodb_connection_string
TOKEN_KEY=your_jwt_secret_key
PORT=3002
```

Start the backend server:
```bash
npm start
# or
pnpm start
```

### 2. Frontend Setup

```bash
cd frontend
npm install
# or
pnpm install
```

Start the frontend development server:
```bash
npm start
# or
pnpm start
```

### 3. Dashboard Setup

```bash
cd dashboard
npm install
# or
pnpm install
```

Start the dashboard development server:
```bash
npm start
# or
pnpm start
```

## Running the Application

1. **Start Backend** (Port 3002):
   ```bash
   cd backend && npm start
   ```

2. **Start Frontend** (Port 3000):
   ```bash
   cd frontend && npm start
   ```

3. **Start Dashboard** (Port 3001):
   ```bash
   cd dashboard && npm start
   ```

## Authentication Flow

1. **Signup**: Users can create accounts at `http://localhost:3000/signup`
2. **Login**: Users can login at `http://localhost:3000/login`
3. **Dashboard Access**: After authentication, users are redirected to the dashboard
4. **Protected Routes**: Dashboard requires valid authentication token

## API Endpoints

### Authentication
- `POST /signup` - User registration
- `POST /login` - User login
- `POST /logout` - User logout
- `POST /` - Verify authentication token

### Trading Data
- `GET /allHoldings` - Get user holdings
- `GET /allPositions` - Get user positions
- `POST /newOrder` - Create new order

## Technologies Used

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication
- bcryptjs for password hashing
- CORS for cross-origin requests

### Frontend
- React.js
- React Router for navigation
- Axios for API calls
- React Toastify for notifications
- Bootstrap for styling

### Dashboard
- React.js
- Context API for state management
- Custom hooks for authentication
- Real-time data visualization

## Development

### Adding New Features

1. **Backend**: Add new routes in `backend/Routes/` and controllers in `backend/Controllers/`
2. **Frontend**: Add new pages in `frontend/src/landing_page/`
3. **Dashboard**: Add new components in `dashboard/src/components/`

### Database Models

- **UserModel**: User authentication and profile data
- **HoldingsModel**: User's stock holdings
- **PositionsModel**: User's trading positions
- **OrdersModel**: User's trading orders

## Troubleshooting

### Common Issues

1. **CORS Errors**: Ensure backend CORS configuration includes both frontend and dashboard URLs
2. **Authentication Issues**: Check JWT token configuration and cookie settings
3. **Database Connection**: Verify MongoDB connection string in `.env` file
4. **Port Conflicts**: Ensure ports 3000, 3001, and 3002 are available

### Debug Mode

Enable debug logging by setting `NODE_ENV=development` in backend `.env` file.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is for educational purposes only. 