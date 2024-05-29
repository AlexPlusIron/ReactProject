

import React from 'react';
import { Link } from 'react-router-dom';
import { API_URL } from '../constants'; 
import './ProductCard.css'; 

const ProductCard = ({ product }) => {
  return (
    <Link to={`/products/${product.id}`} className="product-card"> 
      <div className="product-card-top">
        <img
          src={`${API_URL}${product.image}`}
          alt={product.title}
        />
      </div>
      <div className="product-card-bottom">
        <h4>{product.title}</h4>
        {product.discont_price ? (<p style={{ color: 'grey' }}><del>Price ${product.price}</del></p>) : (<p> Price ${product.price}</p>)}
        {product.discont_price && <p>Discount Price ${product.discont_price}</p>}
        <h6>
          {product.discont_price ? `Discount $${(product.price - product.discont_price).toFixed(2)}` : 'Без скидки'}
        </h6>
      </div>
    </Link>
  );
};

export default ProductCard;

