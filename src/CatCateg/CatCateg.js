// CatCateg.js
import React from 'react';

function CatCateg({ image, text }) {
  return (
    <div>
      <img src={image} alt={text} />
      <p>{text}</p>
    </div>
  );
}

export default CatCateg;
