import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const MovieCard = ({ movies }) => {
    return (
        <div className="container mx-auto p-5">
            <Helmet>
                <title>Movie | Movie-Details</title>
            </Helmet>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {movies.map(movie => (
                    <div key={movie.id} className="w-full bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 rounded-xl overflow-hidden shadow-2xl transform hover:scale-105 transition duration-500 hover:shadow-purple-500/25">
                        <div className="relative group">
                            <img
                                src={movie.poster}
                                alt={movie.title}
                                className="w-full h-64 object-cover"
                                onError={(e) => {
                                    e.target.src = 'https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster';
                                }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300">
                                <div className="absolute bottom-4 left-4 right-4">
                                    <div className="flex items-center gap-2 text-yellow-400 mb-2">
                                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                        </svg>
                                        <span className="text-sm font-medium">{movie.rating}/10</span>
                                    </div>
                                    <p className="text-white text-sm font-medium">{movie.duration}</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-5">
                            <h2 className="text-white text-xl font-bold mb-3 line-clamp-2 leading-tight">{movie.title}</h2>
                            <div className="space-y-2 mb-4">
                                <p className="text-gray-300 text-sm">
                                    <span className="text-purple-400 font-medium">Year:</span> {movie.releaseYear}
                                </p>
                                <p className="text-gray-300 text-sm">
                                    <span className="text-purple-400 font-medium">Genre:</span> {movie.genre}
                                </p>
                                <p className="text-gray-300 text-sm">
                                    <span className="text-purple-400 font-medium">Director:</span> {movie.director}
                                </p>
                                <p className="text-green-400 text-lg font-bold">
                                    ${movie.price}
                                </p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <Link to={`/ticket/${movie.id}`} className="w-full">
                                    <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-3 rounded-lg text-sm font-bold hover:from-purple-700 hover:to-pink-700 transition duration-300 transform hover:scale-105 shadow-lg">
                                        🎫 Get Tickets
                                    </button>
                                </Link>
                                <Link to={`/detail/${movie.id}`} className="w-full">
                                    <button className="w-full bg-transparent border-2 border-purple-500 text-purple-300 px-4 py-3 rounded-lg text-sm font-bold hover:bg-purple-500 hover:text-white transition duration-300 transform hover:scale-105">
                                        📖 View Details
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MovieCard;
