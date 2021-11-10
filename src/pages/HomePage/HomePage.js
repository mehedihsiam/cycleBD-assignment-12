import React from 'react';
import Banner from './Banner/Banner';
import BrandPartners from './BrandPartners/BrandPartners';
import HomeProducts from './HomeProducts/HomeProducts';
import Review from './Review/Review';

const HomePage = () => {
    return (
        <div>
            <Banner></Banner>
            <HomeProducts></HomeProducts>
            <Review></Review>
            <BrandPartners></BrandPartners>
        </div>
    );
};

export default HomePage;