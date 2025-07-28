import React from 'react';

function Hero() {
  return (
    <div className="container text-center pt-5 mt-5 pb-5 border-bottom mb-5">
      <h1 className="fw-3 mb-3">Zerodha Products</h1>
      <h3 className="mb-4 text-secondary">Sleek, modern, and intuitive trading platforms</h3>
      <p className="lead">
        Check out our{' '}
        <a href="#" className="text-primary text-decoration-none">
          investment offerings →
        </a>
      </p>
    </div>
  );
}

export default Hero;
