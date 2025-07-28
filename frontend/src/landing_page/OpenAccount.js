import React from 'react';

function OpenAccount() {
    return ( 
        <div className="container mt-5 p-5">
            <div className="row align-items-center">
                <div className="col text-center">
                    <h1>Open a Zerodha account</h1>
                    <p>
                        Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.
                    </p>
                    <a href="http://localhost:3000/signup" className="btn btn-primary">
                        Sign up for free
                    </a>
                </div>
            </div>
        </div>
    );
}

export default OpenAccount;
