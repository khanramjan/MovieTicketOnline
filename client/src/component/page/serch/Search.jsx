import React from 'react';
import { Helmet } from 'react-helmet-async';

const Search = () => {
    return (
        <div className="w-full min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-800">
            <Helmet>
                <title>Search Movies - Easy Movie Ticket</title>
            </Helmet>
            
            <div className="w-full px-4 py-8">
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-bold text-white mb-4">
                        🔍 Search Movies
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Search functionality coming soon!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Search;
