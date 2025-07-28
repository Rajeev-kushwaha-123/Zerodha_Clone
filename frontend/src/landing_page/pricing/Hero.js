import React from 'react';

function Hero() {
    return ( 
        <div className="container mt-5">
            <div className="row mb-4">
                <div className="col-12 text-center">
                    <h1>Charges</h1>
                    <p>List of all charges and taxes</p>
                </div>
            </div>

            <div className="row text-center">
                <div className="col-md-4 mb-4">
                    <img src="media/images/pricing0.svg" alt="Free equity delivery" className="mb-3" />
                    <h2>Free equity delivery</h2>
                    <p>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className="col-md-4 mb-4">
                    <img src="media/images/pricing20.svg" alt="Intraday and F&O" className="mb-3" />
                    <h2>Intraday and F&O trades</h2>
                    <p>Flat ₹20 or 0.03% (whichever is lower) per executed order across equity, currency, and commodities. Flat ₹20 on all option trades.</p>
                </div>
                <div className="col-md-4 mb-4">
                    <img src="media/images/pricing0.svg" alt="Free direct MF" className="mb-3" />
                    <h2>Free direct MF</h2>
                    <p>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
        </div>
    );
}

export default Hero;
