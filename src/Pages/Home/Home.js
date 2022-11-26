import React from 'react';
import Advertisement from './Advertisement';
import Banner from './Banner';
import Categories from './Categories';
import DeliveryOptions from './DeliveryOptions';
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <Advertisement></Advertisement>
            <DeliveryOptions></DeliveryOptions>
        </div>
    );
};

export default Home;