import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import MovieCard from '../../sheard/moviecard/MovieCard';
import './style.css';
import { Helmet } from 'react-helmet-async';
import movieService from '../../../services/movieService';

const ViewAllMovie = () => {
    const movieCategories = ['All Movies', 'Popular', 'Action', 'Comedy', 'Drama', 'Sci-Fi'];
    const [allMovies, setAllMovies] = useState([]);
    const [popularMovies, setPopularMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedYear, setSelectedYear] = useState('');

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const [movies, popular] = await Promise.all([
                    movieService.getAllMovies(),
                    movieService.getPopularMovies()
                ]);
                setAllMovies(movies);
                setPopularMovies(popular);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching movies:', error);
                setIsLoading(false);
            }
        };

        fetchMovies();
    }, []);

    const getMoviesByCategory = (category) => {
        let movies = allMovies;
        
        if (category === 'Popular') {
            movies = popularMovies;
        } else if (category !== 'All Movies') {
            movies = allMovies.filter(movie => 
                movie.genre.toLowerCase().includes(category.toLowerCase())
            );
        }

        // Apply search filter
        if (searchTerm) {
            movies = movies.filter(movie =>
                movie.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                movie.director.toLowerCase().includes(searchTerm.toLowerCase()) ||
                movie.cast.some(actor => actor.toLowerCase().includes(searchTerm.toLowerCase()))
            );
        }

        // Apply year filter
        if (selectedYear) {
            movies = movies.filter(movie => movie.releaseYear.toString() === selectedYear);
        }

        return movies;
    };

    const years = [...new Set(allMovies.map(movie => movie.releaseYear))].sort((a, b) => b - a);

    return (
        <div className="container mx-auto px-4 py-6 max-w-7xl">
            <Helmet>
                <title>CinemaHub | All Movies</title>
            </Helmet>
            
            {/* Hero Section */}
            <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 rounded-2xl overflow-hidden mb-10">
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="relative hero-content text-center py-20">
                    <div className="max-w-4xl">
                        <h1 className="text-6xl font-bold text-white mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                            🎬 All Movies
                        </h1>
                        <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                            Discover our complete collection of blockbuster movies. From action-packed adventures to heartwarming dramas, find your next favorite film here.
                        </p>
                        
                        {/* Search and Filter Section */}
                        <div className="flex flex-col md:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
                            <div className="relative flex-1 w-full md:w-auto">
                                <input
                                    type="text"
                                    placeholder="Search movies, directors, actors..."
                                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-md text-white placeholder-gray-300 rounded-lg border border-white/20 focus:outline-none focus:border-purple-400"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                                <div className="absolute right-3 top-3 text-gray-300">🔍</div>
                            </div>
                            <select
                                className="px-4 py-3 bg-white/10 backdrop-blur-md text-white rounded-lg border border-white/20 focus:outline-none focus:border-purple-400"
                                value={selectedYear}
                                onChange={(e) => setSelectedYear(e.target.value)}
                            >
                                <option value="">All Years</option>
                                {years.map(year => (
                                    <option key={year} value={year} className="bg-gray-800 text-white">
                                        {year}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tabs Section */}
            <div className="my-10">
                <Tabs>
                    <TabList className="flex flex-wrap justify-center gap-2 mb-8">
                        {movieCategories.map((category, index) => (
                            <Tab
                                key={index}
                                className="px-6 py-3 bg-white/10 backdrop-blur-md text-white rounded-full cursor-pointer hover:bg-white/20 transition-all duration-300 border border-white/20 focus:outline-none"
                                selectedClassName="bg-gradient-to-r from-purple-600 to-pink-600 text-white border-transparent shadow-lg transform scale-105"
                            >
                                {category}
                            </Tab>
                        ))}
                    </TabList>

                    <div className="my-9">
                        {movieCategories.map((category, index) => (
                            <TabPanel key={index}>
                                {isLoading ? (
                                    <div className="flex items-center justify-center py-20">
                                        <div className="text-white text-xl">
                                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500 mx-auto mb-4"></div>
                                            Loading amazing movies...
                                        </div>
                                    </div>
                                ) : getMoviesByCategory(category).length > 0 ? (
                                    <>
                                        <div className="text-center mb-6">
                                            <h2 className="text-3xl font-bold text-white mb-2">
                                                {category === 'All Movies' ? 'Complete Collection' : category}
                                            </h2>
                                            <p className="text-gray-300">
                                                {getMoviesByCategory(category).length} movies available
                                            </p>
                                        </div>
                                        <MovieCard movies={getMoviesByCategory(category)} />
                                    </>
                                ) : (
                                    <div className="text-center py-20">
                                        <div className="text-6xl mb-4">🎭</div>
                                        <h3 className="text-2xl font-bold text-white mb-2">No Movies Found</h3>
                                        <p className="text-gray-300">
                                            {searchTerm || selectedYear 
                                                ? 'Try adjusting your search filters'
                                                : `No movies available in ${category} category yet.`
                                            }
                                        </p>
                                    </div>
                                )}
                            </TabPanel>
                        ))}
                    </div>
                </Tabs>
            </div>
        </div>
    );
};

export default ViewAllMovie;
