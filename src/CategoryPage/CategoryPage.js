import React from 'react';
import Header from '../Header/Header';
import CategoryComponent from '../CategoryComponent/CategoryComponent';
import Footer from '../Footer/Footer';
import CatHeader from '../CatHeader/CatHeader';
import DataFetchingComponent from '../DataFetchingComponent/DataFetchingComponent';
import './CategoryPage.css';
import { Link } from 'react-router-dom';


function CategoryPage() {
 return (
    <div className="app-container">
      <DataFetchingComponent />
      <Header />
      <CatHeader />
      <CategoryComponent count={0} />
      <Footer />
    </div>
  );
}

export default CategoryPage;