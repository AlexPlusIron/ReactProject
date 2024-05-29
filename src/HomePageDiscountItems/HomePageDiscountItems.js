import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../ProductCard/ProductCard';
import './HomePageDiscountItems.css';
import HomeSaleHeader from '../HomeSaleHeader/HomeSaleHeader';


function HomePageDiscountItems() {
  // Получаем все товары из Redux хранилища
  const products = useSelector(state => state.products.products); 

  // Фильтруем товары со скидкой и берем первые 4
  const discountedProducts = products
    .filter(product => product.discont_price > 0) // Фильтруем по наличию скидки
    .slice(0, 4); // Берем первые 4 товара

  return (
    <div>
    <HomeSaleHeader />
      <div className="product-grid">
        {discountedProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default HomePageDiscountItems;




// import React, { useState } from 'react';
// import ProductCard from './ProductCard';
// import './HomePageDiscountItems.css';

// const HomePageDiscountItems = ({ products }) => {
//   const [sortType, setSortType] = useState('');

//   const handleSortChange = (event) => {
//     setSortType(event.target.value);
//   };

//   const sortedProducts = [...products]; // создаем копию массива

//   if (sortType) {
//     switch (sortType) {
//       case 'priceAsc':
//         sortedProducts.sort((a, b) => a.price - b.price);
//         break;
//       case 'priceDesc':
//         sortedProducts.sort((a, b) => b.price - a.price);
//         break;
//       case 'discountDesc':
//         sortedProducts.sort((a, b) => {
//           const discountA = a.discont_price ? a.price - a.discont_price : 0;
//           const discountB = b.discont_price ? b.price - b.discont_price : 0;
//           return discountB - discountA;
//         });
//         break;
//       default:
//         break;
//     }
//   }

//   return (
//     <div>
//       <div className='sort-list'>
//       <h3>Sorted</h3>
//       <select value={sortType} onChange={handleSortChange}>
//         <option value={""}>by default</option>
//         <option value="priceAsc">Price low to high</option>
//         <option value="priceDesc">Price high to low</option>
//         <option value="discountDesc">Maximum discount</option>
//       </select>
//       </div>
//       <div className="product-grid">
//       {sortedProducts.map((product, index) => (
//         <ProductCard key={index} product={product} />
//       ))}
//     </div>
//     </div>
//   );
// };

// export default HomePageDiscountItems;
