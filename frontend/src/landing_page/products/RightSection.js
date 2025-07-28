import React from 'react';

function RightSection({
    productName,
    productDescription,
    tryDemo,
    imgURL
}) {
    return ( 
        <div className="container mt-5">
            <div className="row">
                <div className="col-6 p-5 mt-5">
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <div className="mb-3">
                        <a href={tryDemo}>{tryDemo}</a>
                    </div>
                </div>
                <div className="col-6">
                    <img src={imgURL} alt="product" style={{width:"95%"}}/>
                </div>
            </div>
        </div>
    );
}

export default RightSection;
