import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Cart.css'; 

function Cart() {
  const cartItemsCount = useSelector(state => state.cart.items.length);

  return (
    <div className="cart-icon-container">
      <Link to="/cart">
        <img src="/cartempty.png" alt="Корзина" className="cart-icon" />
        {cartItemsCount > 0 && <span className="cart-badge">{cartItemsCount}</span>}
      </Link>
    </div>
  );
}

export default Cart;


// import React from 'react';
// import { Link } from 'react-router-dom';

// function Cart() {
//   return (
//     <div>
//     <Link to="/cart"><img src="/cartempty.png" alt="Корзина" style={{ width: '50px' }} /></Link>
//     </div>
//   );
// }

// export default Cart;
