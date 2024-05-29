import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './CategoryProductsPage.css';
import DataFetchingComponent from '../DataFetchingComponent/DataFetchingComponent';
import ProductComponent from '../ProductComponent/ProductComponent';
import { useParams } from 'react-router-dom';




function CategoryProductsPage() {
  const {categoryId} = useParams(); // Получаем categoryId из URL
  console.log (categoryId);
 return (
    <div className="app-container">
      <DataFetchingComponent />
      <Header />
      <ProductComponent categoryId={categoryId} />
      <Footer />
    </div>
  );
}

export default CategoryProductsPage;