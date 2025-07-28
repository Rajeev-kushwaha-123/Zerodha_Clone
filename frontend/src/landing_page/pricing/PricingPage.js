import React from 'react';
import Hero from './Hero';
import Brokerage from './Brokerage';
import OpenAccount from '../OpenAccount'; // ✅ Correct import

function PricingPage() {
    return ( 
        <>
            <Hero />
            <OpenAccount />
            <Brokerage />
        </>
    );
}

export default PricingPage;
