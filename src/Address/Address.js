import React from 'react';
import './Address.css'; // Импортируем файл со стилями

function Address({ addressType, addressData }) {
  return (
    <div className="address-container"> 
      <div className="address-type">
        <label>{addressType}</label>
      </div>
      <div className="address-data">
        <label>{addressData}</label>
      </div>
    </div>
  );
}

export default Address;