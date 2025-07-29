import React from 'react';
import { Link } from 'react-router-dom';

function OpenAccount() {
    return ( 
        <div className="container mt-5 p-5">
            <div className="row align-items-center">
                <div className="col text-center">
                    <h1>Open a Zerodha account</h1>
                    <p>
                        Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.
                    </p>
                    <Link to="/signup" className="btn btn-primary">
                        Sign up for free
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default OpenAccount;
