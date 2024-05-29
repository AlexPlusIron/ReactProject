import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import HomeSaleHeader from '../HomeSaleHeader/HomeSaleHeader';
import './HomeSale.css';

function HomeSale() {
  return (
    <div className="home-sale-container">
      <HomeSaleHeader />
      <div className="product-grid">
        <ProductCard image="product1.jpg" name="Product 1" price="$19.99" />
        <ProductCard image="product2.jpg" name="Product 2" price="$24.99" />
        <ProductCard image="product3.jpg" name="Product 3" price="$29.99" />
        <ProductCard image="product4.jpg" name="Product 4" price="$34.99" />
      </div>
    </div>
  );
}

export default HomeSale;