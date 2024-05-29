import React from 'react';
import { Link } from 'react-router-dom';
import './HomeSaleHeader.css';

function HomeSaleHeader() {
    return (
      <div className="home-header-container">
        <div className="home-header-text">
          <h1>Sales</h1>
        </div>
        <div className="home-header-line"></div>
        <div>
        <Link to="/alldiscountitems"><h4 className="home-header-mark">All sales</h4></Link>
            
        </div>
      </div>
    );
  }

export default HomeSaleHeader;