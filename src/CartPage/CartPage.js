import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './CartPage.css';
import DataFetchingComponent from '../DataFetchingComponent/DataFetchingComponent';
import CartView from '../CartView/CartView';

import { Link } from 'react-router-dom';


function CartPage() {
 return (
    <div className="app-container">
      <Header />
      <h1>Shopping cart</h1>
      <CartView />
      <Footer />
      
    </div>
  );
}

export default CartPage;