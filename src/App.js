import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CategoryPage from './CategoryPage/CategoryPage';
import HomePage from './HomePage/HomePage';
import AllProductsPage from './AllProductsPage/AllProductsPage';
import CategoryProductsPage from './CategoryProductsPage/CategoryProductsPage';
import AllDiscountItemsPage from './AllDiscountItemsPage/AllDiscountItemsPage';
import ProductCardPage from './ProductCardPage/ProductCardPage';
import CartPage from './CartPage/CartPage';
import ScrollToTop from './ScrollToTop/ScrollToTop';
import './App.css'; 

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category" element={<CategoryPage />} />
        <Route path="/allproduct" element={<AllProductsPage />} />
        <Route path="/category/:categoryId" element={<CategoryProductsPage />} />
        <Route path="/alldiscountitems" element={<AllDiscountItemsPage />} />
        <Route path="/products/:id" element={<ProductCardPage />} />
        <Route path="/cart" element={<CartPage />} />
        
      </Routes>
    </Router>
  );
}

export default App;
