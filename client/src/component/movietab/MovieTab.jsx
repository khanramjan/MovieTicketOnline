import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Link } from 'react-router-dom';
// Import MovieCard component
import './style.css';
import MovieCard from '../sheard/moviecard/MovieCard';
import movieService from '../../services/movieService';

const MovieTab = () => {
    const movieCategories = ['Now Playing', 'Popular Movies'];
    const [movies, setMovies] = useState([]);
    const [popularMovies, setPopularMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMovies = async () => {
            setIsLoading(true);
            try {
                const [allMovies, popular] = await Promise.all([
                    movieService.getAllMovies(),
                    movieService.getPopularMovies()
                ]);
                setMovies(allMovies);
                setPopularMovies(popular);
            } catch (err) {
                console.error('Error fetching movies:', err);
                setError('Error loading movies. Please try again.');
            } finally {
                setIsLoading(false);
            }
        };

        fetchMovies();
    }, []);

    const getMoviesByCategory = (category) => {
        if (category.toLowerCase() === 'popular movies') {
            return popularMovies;
        }
        return movies; // Show all movies for "Now Playing"
    };

    return (
        <div>
            <Tabs>
                <TabList>
                    <section className='flex justify-between mb-2'>
                        <div className='flex gap-4'>
                            {movieCategories.map((item, index) => (
                                <Tab key={index} className='tab-btn items-center capitalize cursor-pointer'>
                                    {item}
                                </Tab>
                            ))}
                        </div>
                        <button className='btn'>
                            <Link to='/viewallmovie'>View All Movies</Link>
                        </button>
                    </section>
                </TabList>

                <div className='my-6'>
                    {movieCategories.map((category, index) => (
                        <TabPanel key={index}>
                            {isLoading ? (
                                <p>Loading movies...</p>
                            ) : error ? (
                                <p>{error}</p>
                            ) : getMoviesByCategory(category).length > 0 ? (
                                <MovieCard movies={getMoviesByCategory(category).slice(0, 4)} />
                            ) : (
                                <p>No movies available in this category.</p>
                            )}
                        </TabPanel>
                    ))}
                </div>

                <div className='flex justify-center mt-4'>
                    <button className='btn'>
                        <Link to='/viewallmovie'>Show All Movies</Link>
                    </button>
                </div>
            </Tabs>
        </div>
    );
};

export default MovieTab;
