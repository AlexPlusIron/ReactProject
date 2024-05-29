import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { API_URL } from '../constants'; 
import './CartView.css';

function CartView() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const products = useSelector(state => state.products.products);

  const handleQuantityChange = (itemId, newQuantity) => {
    dispatch({
      type: 'UPDATE_CART_ITEM_QUANTITY',
      payload: { itemId, newQuantity },
    });
  };

  const handleRemoveFromCart = (itemId) => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: itemId,
    });
  };

  const groupedCartItems = cartItems.reduce((acc, item) => {
    if (acc[item.id]) {
      acc[item.id].quantity += item.quantity;
    } else {
      acc[item.id] = { ...item }; 
    }
    return acc;
  }, {});

  const cartTotal = Object.values(groupedCartItems).reduce((total, item) => {
    return total + (item.price * item.quantity);
  }, 0);

return (
    <div className="cart">
     
      {Object.values(groupedCartItems).map(item => {
        const product = products.find(p => p.id === item.id);
        if (!product) return null; 

        return (
          <div key={item.id} className="cart-item">
            <div className="cart-item-image"> 
              <img src={`${API_URL}${product.image}`} alt={product.title} />
            </div>
            <div className="cart-item-details">
              <h4>{product.title}</h4>
              <div className="quantity-controls_01">
              <button 
                onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                disabled={item.quantity === 1} 
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button 
                onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
              >
                +
              </button>
            </div>
              
            </div>

            
                {/* <p><span className="detail-label">Цена:</span> {item.price}</p> */}
                <p className="detail-label"><span >$</span> {(item.price * item.quantity).toFixed(2)}</p>
              <div className="cart-item-actions"> 
              <button 
                className="remove-item-button"
                onClick={() => handleRemoveFromCart(item.id)}
              >
                &times; 
              </button>
            </div>
          </div>
        );
      })}
        <h3>
          {cartTotal === 0 ? "Shopping cart is empty" : `Total: $${(cartTotal).toFixed(2)}`}
        </h3>

    </div>
  );
}

export default CartView;


