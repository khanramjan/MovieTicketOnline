import React from 'react';
import HeroSlider from '../../HeroSlider/HeroSlider';
import MovieTab from '../../movietab/MovieTab';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div className='w-full'>
            <Helmet>
                <title>CinemaHub | Home</title>
            </Helmet>
            <HeroSlider/>
            <div className='container mx-auto px-4 py-6 max-w-7xl'>
                <MovieTab/>
            </div>
        </div>
    );
}

export default Home;
