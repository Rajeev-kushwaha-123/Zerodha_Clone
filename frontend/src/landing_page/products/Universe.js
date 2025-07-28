import React from 'react';

function Universe() {
    return ( 
        <div className="container mt-5">
            <div className="row mb-4">
                <div className="col-12 text-center">
                    <h1>The Zerodha Universe</h1>
                    <p>Extend your trading and investment experience even further with our partner platforms</p>
                </div>
            </div>

            <div className="row">
                <div className="col-md-4 p-3">
                    <img src="media/images/smallcaseLogo.png" alt="Smallcase Logo" className="mb-2" />
                    <p>Thematic investing platform that helps you invest in diversified baskets of stocks and ETFs.</p>
                </div>
                <div className="col-md-4 p-3">
                    <img src="media/images/streakLogo.png" alt="Streak Logo" className="mb-2" style={{ width: "45%" }} />
                    <p>Systematic trading platform that allows you to create and backtest strategies without coding.</p>
                </div>
                <div className="col-md-4 p-3">
                    <img src="media/images/sensibullLogo.svg" alt="Sensibull Logo" className="mb-2" />
                    <p>Options trading platform that lets you create strategies, analyze positions, and examine data points.</p>
                </div>
            </div>

            <div className="row">
                <div className="col-md-4 p-3">
                    <img src="media/images/zerodhaFundhouse.png" alt="Zerodha Fundhouse Logo" className="mb-2" style={{ width: "45%" }} />
                    <p>Our asset management venture that is creating simple and transparent index funds to help you save for your goals.</p>
                </div>
                <div className="col-md-4 p-3">
                    <img src="media/images/dittoLogo.png" alt="Ditto Logo" className="mb-2" style={{ width: "30%" }} />
                    <p>Personalized advice on life and health insurance. No spam and no mis-selling.</p>
                </div>
                <div className="col-md-4 p-3">
                    <img src="media/images/goldenpiLogo.png" alt="GoldenPi Logo" className="mb-2" />
                    <p>Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.</p>
                </div>
            </div>

            <div className="row mt-4">
                <div className="col-12 text-center mb-5">
                    <a href="http://localhost:3000/signup" className="btn btn-primary btn-lg">
                        Sign up for free
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Universe;
