// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import ProductCard from '../ProductCard';
// import './AllDiscountItemsPage.css';
// import HomeSaleHeader from '../HomeSaleHeader/HomeSaleHeader';
// import Header from '../Header/Header';
// import Footer from '../Footer/Footer';
// import DataFetchingComponent from '../DataFetchingComponent/DataFetchingComponent'; 

// function AllDiscountItemsPage() {
  
//   const products = useSelector(state => state.products.products); 

//   // Вызываем DataFetchingComponent при монтировании компонента
//   DataFetchingComponent(); 

//   const AllDiscountItems = products.filter(product => product.discont_price > 0);

//   return (
//     <div className="app-container">
//       <Header />
//       <HomeSaleHeader />
//       <div className="product-grid">
//         {AllDiscountItems.map(product => (
//           <ProductCard key={product.id} product={product} />
//         ))}
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default AllDiscountItemsPage;




import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../ProductCard/ProductCard';
import './AllDiscountItemsPage.css';
import HomeSaleHeader from '../HomeSaleHeader/HomeSaleHeader';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import DataFetchingComponent from '../DataFetchingComponent/DataFetchingComponent';

function AllDiscountItemsPage() {
  // Получаем все товары из Redux хранилища
  const products = useSelector(state => state.products.products); 
  
  DataFetchingComponent();

  // Фильтруем товары со скидкой и берем первые 4
  const AllDiscountItems = products
    .filter(product => product.discont_price > 0); // Фильтруем по наличию скидки
    
  return (
    
    <div className="app-container">
      <Header />
      <HomeSaleHeader />
      <div className="product-grid">
        {AllDiscountItems.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Footer />
    </div>
     
    
  );
}

export default AllDiscountItemsPage;

