import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
    const featuredLinks = [
        { text: 'Kite web (login issues, orders & more)', to: '/support/kite' },
        { text: 'Account opening', to: '/support/account-opening' },
        { text: 'Mutual funds (Coin)', to: '/support/coin' },
        { text: 'IPO application', to: '/support/ipo' },
        { text: 'Funds: Add or withdraw', to: '/support/funds' },
    ];

    return (
        <div className="bg-primary text-white py-5">
            <div className="container">
                {/* Header */}
                <div className="row mb-4">
                    <div className="col-md-6">
                        <h2>Support Portal</h2>
                    </div>
                    <div className="col-md-6 text-md-end">
                        <p className="mb-0">Track Tickets</p>
                    </div>
                </div>

                {/* Content */}
                <div className="row">
                    {/* Left: Search Box */}
                    <div className="col-md-6 mb-4">
                        <p className="mb-2">
                            Search for answers or browse help topics to create a ticket
                        </p>
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Search for help..." 
                        />
                    </div>

                    {/* Right: Featured Section as Numbered List */}
                    <div className="col-md-6 mb-4">
                        <p className="mb-2">Featured</p>
                        <ol className="ps-3">
                            {featuredLinks.map((item, idx) => (
                                <li key={idx} className="mb-2">
                                    <Link 
                                        to={item.to} 
                                        className="text-white text-decoration-none"
                                        style={{ transition: "color 0.2s" }}
                                    >
                                        {item.text}
                                    </Link>
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
