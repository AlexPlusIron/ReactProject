import React from 'react';
import Header from '../Header/Header';
import HomeMainBlock from '../HomeMainBlock/HomeMainBlock';
import Footer from '../Footer/Footer';
import DataFetchingComponent from '../DataFetchingComponent/DataFetchingComponent';
import './HomePage.css';



function HomePage() {
 return (
    <div className="app-container">
      <DataFetchingComponent />
      <Header />
      <HomeMainBlock />
      <Footer />
    </div>
  );
}

export default HomePage;
