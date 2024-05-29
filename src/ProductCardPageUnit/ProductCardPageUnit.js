import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'; // Импортируем useDispatch
import './ProductCardPageUnit.css';
import { API_URL } from '../constants'; 
import DataFetchingComponent from '../DataFetchingComponent/DataFetchingComponent';

const ProductCardPageUnit = () => {
  const { id } = useParams();
  const dispatch = useDispatch(); // Хук для диспетчеризации actions

  DataFetchingComponent();

  const products = useSelector(state => state.products.products);
  const cartItems = useSelector(state => state.cart.items);
  const product = products.find(product => product.id === parseInt(id, 10));
  
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (action) => {
    if (action === 'increment') {
      setQuantity(quantity + 1);
    } else if (action === 'decrement' && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    dispatch({ 
      type: "ADD_TO_CART", 
      payload: {
        id: product.id,
        quantity: quantity,
        price: product.discont_price || product.price
      } 
    });
  };

  if (!product) {
    return <div>Товар не найден</div>;
  }

  // Проверяем, есть ли товар в корзине
  const isProductInCart = cartItems.some(item => item.id === product.id);
  console.log(cartItems); 

  
  return (
    <div className="product-card-page">
      <div className="product-image">
        <img src={`${API_URL}${product.image}`} alt={product.title} />
      </div>

      <div className="product-details">
        <h2>{product.title}</h2>
        <p>Price: ${product.price}</p>
        {product.discont_price && <p>Discount Price: ${product.discont_price}</p>}

        <div className="quantity-controls">
          <button onClick={() => handleQuantityChange('decrement')} disabled={isProductInCart}>-</button>
          <span>{quantity}</span>
          <button onClick={() => handleQuantityChange('increment')} disabled={isProductInCart}>+</button>
        </div>

        <div className="add-to-cart-container">
        <button
          className="add-to-cart" 
          onClick={handleAddToCart}
          disabled={isProductInCart}> 
              Add to Cart
         </button>
        </div>
        <h3>Description:</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. 
           Vestibulum eget lectus vitae enim scelerisque suscipit.</p>
      </div>
    </div>
  );
};
  
export default ProductCardPageUnit;

