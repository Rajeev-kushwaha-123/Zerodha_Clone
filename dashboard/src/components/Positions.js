import { useEffect, useState } from "react";
import axios from "axios";

const Positions = () => {
  const [allPositions, setAllPositions] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/allPositions`).then((res) => {
      setAllPositions(res.data);
    });
  }, []);

  return (
    <>
      <h3 className="title">Positions ({allPositions.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg.</th>
              <th>LTP</th>
              <th>P&L</th>
              <th>Chg.</th>
            </tr>
          </thead>

          <tbody>
            {allPositions.map((stock, index) => {
              const avg = Number(stock.avg);
              const price = Number(stock.price);
              const qty = Number(stock.qty);
              const curValue = price * qty;
              const pnl = curValue - avg * qty;

              const isProfit = pnl >= 0;
              const profClass = isProfit ? "profit" : "loss";
              const dayClass = stock.isLoss ? "loss" : "profit";

              return (
                <tr key={index}>
                  <td>{stock.product}</td>
                  <td>{stock.name}</td>
                  <td>{qty}</td>
                  <td>{isNaN(avg) ? "--" : avg.toFixed(2)}</td>
                  <td>{isNaN(price) ? "--" : price.toFixed(2)}</td>
                  <td className={profClass}>{isNaN(pnl) ? "--" : pnl.toFixed(2)}</td>
                  <td className={dayClass}>{stock.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Positions;
