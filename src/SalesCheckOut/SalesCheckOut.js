import React from 'react';

import './SalesCheckOut.css'; 

function SalesCheckOut({ imageUrl, linkTo }) {
  
  return (
    <div className="image-overlay-container">
      <img src="SaleCheckOutBackGr.jpg" alt="Garden Products" className="background-image" />
      <div className="overlay-content">
        <h2>Amazing Discounts on Garden Products!</h2>
        <button>Check out</button>
      </div>
    </div>
  );
}


export default SalesCheckOut;