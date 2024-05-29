import React from 'react';
import UserPersonalData from '../UserPersonalData/UserPersonalData';
import './DiscountForm.css'; // Импортируем файл со стилями
import discountImage from './DiscountFormImage.png';

function DiscountForm() {
  return (
    <div className="discount-form-container">
      <h2 className="form-heading">5% off on the first order</h2>
      <div className="form-content">
        <img src={discountImage} alt="Discount" className="discount-image" />
        <UserPersonalData />
      </div>
    </div>
  );
}

export default DiscountForm;