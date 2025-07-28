import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import GeneralContext from "./GeneralContext";

const BuyActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

  const handleBuyClick = () => {
    axios.post("http://localhost:3002/newOrder", {
      name: uid,
      qty: stockQuantity,
      price: stockPrice,
      mode: "BUY",
    });

    GeneralContext.closeBuyWindow();
  };

  const handleCancelClick = () => {
    GeneralContext.closeBuyWindow();
  };

  return (
    <div
      className="container border shadow p-4 bg-light position-absolute"
      style={{
        width: "50%",
        bottom: "5%",
        left: "35%",
        zIndex: 100,
        borderRadius: "8px",
        cursor: "move",
      }}
      id="buy-window"
      draggable="true"
    >
      <div className="mb-3">
        <h5 className="text-primary">Place Buy Order</h5>
      </div>

      <div className="row mb-3">
        <div className="col">
          <label htmlFor="qty" className="form-label">
            Quantity
          </label>
          <input
            type="number"
            id="qty"
            className="form-control"
            value={stockQuantity}
            onChange={(e) => setStockQuantity(e.target.value)}
          />
        </div>
        <div className="col">
          <label htmlFor="price" className="form-label">
            Price
          </label>
          <input
            type="number"
            id="price"
            step="0.05"
            className="form-control"
            value={stockPrice}
            onChange={(e) => setStockPrice(e.target.value)}
          />
        </div>
      </div>

      <div className="d-flex justify-content-between align-items-center">
        <span className="text-muted small">Margin required ₹140.65</span>
        <div>
          <Link
            className="btn btn-primary me-2"
            onClick={handleBuyClick}
            to="#"
          >
            Buy
          </Link>
          <Link
            className="btn btn-secondary"
            onClick={handleCancelClick}
            to="#"
          >
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;
