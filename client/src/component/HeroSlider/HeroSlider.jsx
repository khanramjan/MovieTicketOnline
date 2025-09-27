import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import movieService from '../../services/movieService';

const HeroSlider = () => {
    const [featuredMovies, setFeaturedMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchFeaturedMovies = async () => {
            try {
                const popularMovies = await movieService.getPopularMovies();
                // Get first 5 popular movies for the slider
                setFeaturedMovies(popularMovies.slice(0, 5));
            } catch (error) {
                console.error('Error fetching featured movies:', error);
            } finally {
                setLoading(false);
            }
        };
        
        fetchFeaturedMovies();
    }, []);

    if (loading) {
        return (
            <div className="w-full h-96 bg-gradient-to-r from-purple-900 to-blue-900 rounded-2xl flex items-center justify-center">
                <div className="text-white text-xl">Loading...</div>
            </div>
        );
    }

    return (
        <div className="relative">
            <Carousel
                autoPlay
                infiniteLoop
                interval={5000}
                showThumbs={false}
                showStatus={false}
                className="rounded-2xl overflow-hidden shadow-2xl"
            >
                {featuredMovies.map((movie) => (
                    <div key={movie.id} className="relative h-96 lg:h-[500px]">
                        <div 
                            className="w-full h-full bg-cover bg-center bg-no-repeat"
                            style={{
                                backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url(${movie.backdrop})`
                            }}
                        >
                            <div className="absolute inset-0 flex items-center justify-start p-8 lg:p-16">
                                <div className="max-w-2xl text-left">
                                    <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                                        {movie.title}
                                    </h1>
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="flex items-center gap-1 text-yellow-400">
                                            <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                            </svg>
                                            <span className="text-lg font-bold">{movie.rating}</span>
                                        </div>
                                        <span className="text-gray-300 text-lg">{movie.duration}</span>
                                        <span className="text-gray-300 text-lg">{movie.releaseYear}</span>
                                    </div>
                                    <p className="text-gray-200 text-lg mb-6 line-clamp-3 max-w-xl">
                                        {movie.description}
                                    </p>
                                    <div className="flex gap-4">
                                        <Link to={`/ticket/${movie.id}`}>
                                            <button className="bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-xl text-lg font-bold hover:from-red-700 hover:to-red-800 transition duration-300 transform hover:scale-105 shadow-lg">
                                                🎫 Book Now
                                            </button>
                                        </Link>
                                        <Link to={`/detail/${movie.id}`}>
                                            <button className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-white/30 transition duration-300 transform hover:scale-105 border border-white/30">
                                                ℹ️ More Info
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    );
}

export default HeroSlider;
