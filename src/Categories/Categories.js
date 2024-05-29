// Categories.js
import React from 'react';
import CatHeader from '../CatHeader/CatHeader';
import CatCateg from '../CatCateg/CatCateg';
import './Categories.css';
import CategoryComponent from '../CategoryComponent/CategoryComponent';

function Categories() {
  

  return (
    <div className="categories-container">
      <CatHeader />
      <CategoryComponent count={4} />
      
    </div>
  );
}

export default Categories;
