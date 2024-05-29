import React from 'react';
import { API_URL } from '../constants'; 
import './CategoryCard.css'; 

const CategoryCard = ({ category }) => {
  return (
    <div className="category-card">
      <div className="category-card-top">
      <img
        src={`${API_URL}${category.image}`}
        alt={category.title}
      />
      </div>
            <div className="category-card-bottom">
      <h4>{category.title}</h4>
      
      </div>
    </div>
  );
};

export default CategoryCard;