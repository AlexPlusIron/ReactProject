import React, { useState } from "react";
import { useDispatch } from "react-redux"; // Для Redux

function AddToCartButton({ product }) {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch(); // Для Redux

  const handleAddToCart = () => {
    const item = {
      id: product.id,
      quantity: quantity,
      price: product.discont_price || product.price,
    };

    
    dispatch({ type: "ADD_TO_CART", payload: item });

    
  };

  return (
    <button onClick={handleAddToCart}>Add to Cart</button>
  );
}

export default AddToCartButton;
