import React from 'react';
import HeroSlider from '../../HeroSlider/HeroSlider';
import MovieTab from '../../movietab/MovieTab';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div className='w-full overflow-x-hidden'>
            <Helmet>
                <title>Easy Movie Ticket | Home</title>
            </Helmet>
            <HeroSlider/>
            <div className='w-full px-4 py-6 pb-12'>
                <MovieTab/>
            </div>
        </div>
    );
}

export default Home;
