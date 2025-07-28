import React from 'react';

function Education() {
    return ( 
        <div className="container mt-5">
            <div className="row align-items-center">
                <div className="col-md-6 text-center">
                    <img 
                        src="media/images/education.svg" 
                        alt="Education illustration" 
                        className="img-fluid"
                    />
                </div>
                <div className="col-md-6">
                    <h2>Free and open market education</h2>
                    <p>
                        Varsity, the largest online stock market education book in the world,
                        covering everything from the basics to advanced trading.
                    </p>
                    <a href="#" className="d-block mb-4 text-decoration-none">
                        Varsity →
                    </a>

                    <h2>TradingQ&A</h2>
                    <p>
                        TradingQ&A is the most active trading and investment community in India
                        for all your market-related queries.
                    </p>
                    <a href="#" className="d-block text-decoration-none">
                        TradingQ&A →
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Education;
