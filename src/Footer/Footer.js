import React from 'react';
import Title from '../Title/Title';
import Address from '../Address/Address';
import MapFrame from '../MapFrame/MapFrame';

function Footer() {
  return (
    <div>
      <Title />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridGap: '10px' }}>
        <Address addressType="Phone" addressData="+7 (499) 350-66-04" />
        <Address addressType="Socials" addressData="--" />
        <Address addressType="Address" addressData="Dubininskaya Ulitsa, 96, Moscow, Russia, 115093" />
        <Address addressType="Working hours" addressData="24 hours a day" />
      </div>
      <MapFrame />
    </div>
  );
}

export default Footer;
