import React from 'react';

function Stats() {
    return ( 
        <div className="container mt-5">
            <div className="row align-items-center">
                <div className="col-md-6">
                    <h1 className="mb-4">Trust with confidence</h1>

                    <h3>Customer-first always</h3>
                    <p>
                        That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments
                        and contribute to 15% of daily retail exchange volumes in India.
                    </p>

                    <h3>No spam or gimmicks</h3>
                    <p>
                        No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use
                        at your pace, the way you like.
                    </p>

                    <h3>The Zerodha universe</h3>
                    <p>
                        Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored
                        services specific to your needs.
                    </p>

                    <h3>Do better with money</h3>
                    <p>
                        With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively
                        help you do better with your money.
                    </p>
                </div>

                <div className="col-md-6 text-center">
                    <img 
                        src="media/images/ecosystem.png" 
                        alt="Zerodha ecosystem" 
                        className="img-fluid mt-4"
                    />
                    <div className="text-center mt-4">
                        <a href="#" className="btn btn-outline-primary me-2">Explore our products</a>
                        <a href="#" className="btn btn-primary">Try Kite demo</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stats;

