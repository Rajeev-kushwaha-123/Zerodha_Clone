import React from 'react';

function LeftSection({
    imgURL,
    productName,
    productDescription,
    tryDemo,
    learnMore,
    googlePlay,
    appStore
}) {
    return ( 
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <img src={imgURL} alt="product" />
                </div>
                <div className="col-6 p-5 mt-5">
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <div className="mb-3">
                        <a href={tryDemo}>Try Demo →</a>
                        <a href={learnMore} style={{ marginLeft: "50px" }}>Learn More →</a>
                    </div>
                    <div>
                        <a href={googlePlay}>
                            <img src="media/images/googlePlayBadge.svg" alt="Google Play" />
                        </a>
                        <a href={appStore} style={{ marginLeft: "50px" }}>
                            <img src="media/images/appstoreBadge.svg" alt="App Store" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftSection;
