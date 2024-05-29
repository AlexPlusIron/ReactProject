import React from 'react';
import './UserPersonalData.css';

function UserPersonalData() {
  return (
    <div className="user-data">
      <input type="text" placeholder="Name" className="input-field" />
      <input type="text" placeholder="Phone number" className="input-field" />
      <input type="text" placeholder="Email" className="input-field" />
      <button className="discount-button">Get a discount</button>
    </div>
  );
}


export default UserPersonalData;