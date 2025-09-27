import React from 'react';
import MovieCard from '../sheard/moviecard/MovieCard';

// Test component to verify movie card layout fixes
const TestCards = () => {
    const testMovies = [
        {
            id: 1,
            title: "Avatar: The Way of Water",
            poster: "https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_SX300.jpg",
            rating: 8.3,
            duration: "131 min",
            releaseYear: 2022,
            genre: "Action, Adventure, Fantasy",
            director: "James Cameron",
            price: 12.99
        },
        {
            id: 2,
            title: "Top Gun: Maverick",
            poster: "https://m.media-amazon.com/images/M/MV5BYzE2NjNhNjMtM2YzYy00NTkxLWFkY2UtZTIwMzgzYWIwMDkwXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_SX300.jpg",
            rating: 8.7,
            duration: "130 min", 
            releaseYear: 2022,
            genre: "Action, Drama",
            director: "Joseph Kosinski",
            price: 11.99
        },
        {
            id: 3,
            title: "Black Panther: Wakanda Forever",
            poster: "https://m.media-amazon.com/images/M/MV5BNTM4NjIxNmEtYWE5NS00NDczLTkyNWQtYThhNmQyZGQzMjM0XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
            rating: 7.2,
            duration: "161 min",
            releaseYear: 2022,
            genre: "Action, Adventure, Drama",
            director: "Ryan Coogler",
            price: 12.99
        },
        {
            id: 4,
            title: "Spider-Man: No Way Home",
            poster: "https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_SX300.jpg",
            rating: 8.5,
            duration: "148 min",
            releaseYear: 2021,
            genre: "Action, Adventure, Fantasy",
            director: "Jon Watts",
            price: 12.99
        }
    ];

    return (
        <div className="min-h-screen bg-gray-900 p-4">
            <h1 className="text-white text-3xl font-bold text-center mb-8">
                Movie Card Layout Test
            </h1>
            <MovieCard movies={testMovies} />
        </div>
    );
};

export default TestCards;