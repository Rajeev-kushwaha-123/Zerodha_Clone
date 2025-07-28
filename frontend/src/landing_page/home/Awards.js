import React from 'react';

function Awards() {
    return ( 
        <div className="container mt-5">
            <div className="row align-items-center">
                <div className="col-md-6 text-center">
                    <img 
                        src="media/images/largestBroker.svg" 
                        alt="Largest broker award" 
                        className="img-fluid"
                    />
                </div>
                <div className="col-md-6">
                    <h2>Largest stock broker in India</h2>
                    <p>2+ million Zerodha clients contribute to over 15% of all market activity.</p>
                    <div className="row">
                        <div className="col-6">
                            <ul>
                                <li>Futures and Options</li>
                                <li>Commodity Derivatives</li>
                                <li>Currency Derivatives</li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <ul>
                                <li>Stocks and IPOs</li>
                                <li>Direct Mutual Funds</li>
                                <li>Bonds and more</li>
                            </ul>
                        </div>
                    </div>
                    <img 
                        src="media/images/pressLogos.png" 
                        alt="Featured in press logos" 
                        className="img-fluid mt-4"
                    />
                </div>
            </div>
        </div>
    );
}

export default Awards;
