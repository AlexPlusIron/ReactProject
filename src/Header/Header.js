import React from 'react';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import Cart from '../Cart/Cart';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header-container">
      <div className="header-content">
      <Link to="/">
        <Logo />
      </Link>
        <Navigation />
        <Cart />
      </div>
    </div>
  );
}

export default Header;
