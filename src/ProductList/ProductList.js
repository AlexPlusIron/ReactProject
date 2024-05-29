import React, { useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './ProductList.css';

const ProductList = ({ products }) => {
  const [sortType, setSortType] = useState('');

  const handleSortChange = (event) => {
    setSortType(event.target.value);
  };

  const sortedProducts = [...products]; // создаем копию массива

  if (sortType) {
    switch (sortType) {
      case 'priceAsc':
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case 'priceDesc':
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
      case 'discountDesc':
        sortedProducts.sort((a, b) => {
          const discountA = a.discont_price ? a.price - a.discont_price : 0;
          const discountB = b.discont_price ? b.price - b.discont_price : 0;
          return discountB - discountA;
        });
        break;
      default:
        break;
    }
  }

  return (
    <div>
      <div className='sort-list'>
      <h3>Sorted</h3>
      <select value={sortType} onChange={handleSortChange}>
        <option value={""}>by default</option>
        <option value="priceAsc">Price low to high</option>
        <option value="priceDesc">Price high to low</option>
        <option value="discountDesc">Maximum discount</option>
      </select>
      </div>
      <div className="product-grid">
      {sortedProducts.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
    </div>
  );
};

export default ProductList;
