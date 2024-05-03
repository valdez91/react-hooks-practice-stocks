import React from "react";


function Stock({stock, onStockClick}) {
    const handleClick=()=>{
        onStockClick(stock);
    }
  return (
    <div onClick={handleClick}>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{"Compant Name"}</h5>
          <p className="card-text">{"Stock Price"}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;

