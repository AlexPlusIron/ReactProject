import React from 'react';
import ProductList from '../ProductList/ProductList';
import { useSelector } from 'react-redux';
import './ProductComponent.css';

const ProductComponent = ({ categoryId }) => { 
  const products = useSelector(state => state.products.products);
  const categories = useSelector(state => state.categories.categories);

  // Находим категорию по categoryId, если он передан
  const currentCategory = categories.find(category => category.id == categoryId);

  const filteredProducts = categoryId !== 0 & categoryId !== undefined
    ? products.filter(product => product.categoryId == categoryId)
    : products;

    // console.log (products);
    // console.log (filteredProducts);
    // console.log (categoryId);

  return (
    <div className='product-component'>
      <div className='title-div'>
      {currentCategory && <h1>{currentCategory.title}</h1>} {/*Отображаем название категории */}
      </div>
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default ProductComponent;




// import React, { useState } from 'react';
// import ProductList from './ProductList';
// import { useSelector } from 'react-redux';
// import './ProductComponent.css';

// const ProductComponent = () => {
//   const products = useSelector(state => state.products.products);
//   const categories = useSelector(state => state.categories.categories);
//   const [selectedCategoryId, setSelectedCategoryId] = useState(''); // по умолчанию никакая категория не выбрана

//   const handleCategoryChange = (event) => {
//     setSelectedCategoryId(event.target.value);
//     console.log (event.target.value);
//   };

//   const filteredProducts = selectedCategoryId
//     ? products.filter(product => product.categoryId == selectedCategoryId)
//     : products;

//     console.log (products);
//     console.log (filteredProducts);


//   return (
//     <div className='product-component'>
//       <h2>Categories</h2>
//       <select value={selectedCategoryId} onChange={handleCategoryChange}>
//         <option value="">All Categories</option>
//         {categories.map(category => (
//           <option key={category.id} value={category.id}>
//             {category.title}
//           </option>
//         ))}
//       </select>

      
//       <ProductList products={filteredProducts} />
//     </div>
//   );
// };

// export default ProductComponent;