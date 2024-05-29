import React from 'react';
import './CatHeader.css';
import { Link } from 'react-router-dom';

function CatHeader() {
    return (
      <div className="cat-header-container">
        <div className="cat-header-text">
          <h1>Categories</h1>
        </div>
        <div className="cat-header-line"></div>
        <div>
        <Link to="/category">
          <h4 className="cat-header-mark">All categories</h4>
        </Link>
        </div>
      </div>
    );
  }

export default CatHeader;