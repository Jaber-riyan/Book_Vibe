import React from 'react';
import bannerImage from '../../../public/banner.png'
import Banner from '../Banner/Banner';
import Books from '../Books/Books';
import Book from '../Books/Book/Book';

const Home = () => {
    return (
        <div className='playfair-display'>
            <Banner></Banner>
            <Books></Books>
        </div>
    );
};

export default Home;