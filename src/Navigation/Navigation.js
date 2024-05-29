import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <ul style={{ listStyleType: 'none', display: 'flex', gap: '20px' }}>
      <Link to="/"><li>Main page</li></Link>
      <Link to="/category"><li>Categories</li></Link>
      <Link to="/allproduct"><li>All products</li></Link>
      <Link to="/alldiscountitems"><li>All sales</li></Link>
      </ul>
    </div>
  );
}

export default Navigation;
