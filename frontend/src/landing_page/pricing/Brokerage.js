import React from 'react';

function Brokerage() {
    return (  
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-8 mb-4 text-center">
                    <h3>Brokerage Calculator</h3>
                    <ul className="list-unstyled">
                        <li>Calculate charges for equity, F&O, commodity, and currency trades</li>
                        <li>Includes brokerage, taxes, and all other fees</li>
                        <li>Helps you understand net profit/loss before placing a trade</li>
                    </ul>
                </div>
                <div className="col-md-4 mb-4 text-center">
                    <h3>List of Charges</h3>
                    <ul className="list-unstyled">
                        <li>Equity delivery: ₹0</li>
                        <li>Equity intraday: ₹20 or 0.03% (whichever is lower)</li>
                        <li>F&O: ₹20 per order</li>
                        <li>AMC, DP charges, and more</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Brokerage;
