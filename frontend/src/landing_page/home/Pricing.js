import React from 'react';

function Pricing() {
    return ( 
        <div className="container mt-5">
            <div className="row align-items-center">
                <div className="col-md-6">
                    <h1>Unbeatable pricing</h1>
                    <p>
                        We pioneered the concept of discount broking and price transparency in India.
                        Flat fees and no hidden charges.
                    </p>
                    <a href="#" className="text-decoration-none">
                        See pricing →
                    </a>
                </div>
                <div className="col-md-6 text-center">
                    <img 
                        src="media/images/pricing0.svg" 
                        alt="Pricing illustration" 
                        className="img-fluid"
                    />
                </div>
            </div>
        </div>
    );
}

export default Pricing;
