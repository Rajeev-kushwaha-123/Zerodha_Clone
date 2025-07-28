import React from 'react';
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

function Product() {
    return ( 
        <>
            <Hero />
            <LeftSection 
                imgURL="media/images/kite.png"
                productName="Kite"
                productDescription="Our modern flagship trading platform with a sleek UI."
                tryDemo="#"
                learnMore="#"
                googlePlay="#"
                appStore="#"
            />
            <RightSection 
                productName="Console"
                productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
                tryDemo="Learn More →"
                imgURL="media/images/console.png"/>

             <LeftSection 
                imgURL="media/images/coin.png"
                productName="Coin"
                productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
                tryDemo="#"
                learnMore="#"
                googlePlay="#"
                appStore="#"/>

             <RightSection
                productName="Kite Connect API"
                productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
                tryDemo="Kite Connect →"
                imgURL="media/images/kiteconnect.png" />

             <LeftSection 
                imgURL="media/images/varsity.png"
                productName="Varsity mobile"
                productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
                tryDemo="#"
                learnMore="#"
                googlePlay="#"
                appStore="#" />
            <p className='text-center mt-5'>Want to know more about our technology stack? Check out the Zerodha.tech blog.</p>
            <Universe />
        </>
    );
}

export default Product;
