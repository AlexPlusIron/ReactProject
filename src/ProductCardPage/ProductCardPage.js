

import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './ProductCardPage.css';
import DataFetchingComponent from '../DataFetchingComponent/DataFetchingComponent';
import ProductComponent from '../ProductComponent/ProductComponent';
import { useParams } from 'react-router-dom';
import ProductCardPageUnit from '../ProductCardPageUnit/ProductCardPageUnit';




function ProductCardPage() {
  const {id} = useParams(); // Получаем Id из URL
  console.log (id);
 return (
     <div className="app-container">
       {/* <DataFetchingComponent /> */}
       <Header />
      <ProductCardPageUnit />
       {/* <ProductComponent categoryId={categoryId} /> */}
       <Footer />
     </div>
  );
}

export default ProductCardPage;