import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="container text-center my-5">
      <h1 className="display-4 fw-bold text-danger p-3">404</h1>
      <h3 className="mb-3">Page Not Found</h3>
      <p className="text-muted mb-4">Sorry, the page you are looking for does not exist.</p>
      <Link to="/" className="btn btn-primary">Go to Home</Link>
    </div>
  );
}

export default NotFound;
