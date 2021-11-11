import React from 'react';
import Footer from '../shared/Footer/Footer';
import Navbar from '../shared/Navbar/Navbar';
import Banner from './Banner/Banner';
import BrandPartners from './BrandPartners/BrandPartners';
import HomeProducts from './HomeProducts/HomeProducts';
import Review from './Review/Review';

const HomePage = () => {
    return (
        <div>
            <Navbar />
            <Banner></Banner>
            <HomeProducts></HomeProducts>
            <Review></Review>
            <BrandPartners></BrandPartners>
            <Footer></Footer>
        </div>
    );
};

export default HomePage;