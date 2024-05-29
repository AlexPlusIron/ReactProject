import React from 'react';
import Categories from '../Categories/Categories';
import SalesCheckOut from '../SalesCheckOut/SalesCheckOut';
import DiscountForm from '../DiscountForm/DiscountForm';
import HomeSale from '../HomeSale/HomeSale';
import CategoryComponent from '../CategoryComponent/CategoryComponent';
import HomePageDiscountItems from '../HomePageDiscountItems/HomePageDiscountItems';

function MainBlock() {
  return (
    <div>
      <p></p>
      <SalesCheckOut />
      <Categories />
      <DiscountForm />
      <HomePageDiscountItems />
    </div>
  );
}

export default MainBlock;
