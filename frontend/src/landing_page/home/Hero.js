import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
    return (
        <section className="bg-light py-5">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12 text-center">
                        <img
                            src="media/images/homeHero.png"
                            alt="hero"
                            className="img-fluid mb-4 rounded shadow"
                            style={{ maxHeight: '220px' }}
                        />
                        <h1 className="h2 fw-bold mb-3">Invest in everything</h1>
                        <p className="lead mb-4 px-2">
                            Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.
                        </p>
                        <Link
                            to="/signup"
                            className="btn btn-primary btn-lg w-100"
                            style={{ maxWidth: '190px' }}
                        >
                            Sign up for free
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
