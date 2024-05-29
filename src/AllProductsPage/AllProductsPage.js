import React from 'react';
import Header from '../Header/Header';
import CategoryComponent from '../CategoryComponent/CategoryComponent';
import Footer from '../Footer/Footer';
import './AllProductsPage.css';
import CatHeader from '../CatHeader/CatHeader';
import DataFetchingComponent from '../DataFetchingComponent/DataFetchingComponent';
import ProductComponent from '../ProductComponent/ProductComponent';
import CartView from '../CartView/CartView';

import { Link } from 'react-router-dom';


function AllProductsPage() {
 return (
    <div className="app-container">
      
      <DataFetchingComponent />
      <Header />
      <h1>All Products</h1>
      <ProductComponent />
      <Footer />
      
    </div>
  );
}

export default AllProductsPage;