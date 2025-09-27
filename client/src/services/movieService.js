import staticMovies from '../data/staticMovies.json';

class MovieService {
  constructor() {
    this.movies = staticMovies;
    this.favorites = JSON.parse(localStorage.getItem('userFavorites') || '[]');
    this.bookings = JSON.parse(localStorage.getItem('userBookings') || '[]');
  }

  // Simulate API delay
  delay(ms = 500) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // Get all movies
  async getAllMovies() {
    await this.delay();
    return this.movies;
  }

  // Get popular movies
  async getPopularMovies() {
    await this.delay();
    return this.movies.filter(movie => movie.isPopular);
  }

  // Get movie by ID
  async getMovieById(id) {
    await this.delay();
    const movie = this.movies.find(m => m.id === parseInt(id));
    if (!movie) {
      throw new Error('Movie not found');
    }
    return movie;
  }

  // Search movies
  async searchMovies(query) {
    await this.delay();
    const searchTerm = query.toLowerCase();
    return this.movies.filter(movie => 
      movie.title.toLowerCase().includes(searchTerm) ||
      movie.genre.toLowerCase().includes(searchTerm) ||
      movie.director.toLowerCase().includes(searchTerm) ||
      movie.cast.some(actor => actor.toLowerCase().includes(searchTerm))
    );
  }

  // Filter movies by genre
  async getMoviesByGenre(genre) {
    await this.delay();
    return this.movies.filter(movie => 
      movie.genre.toLowerCase().includes(genre.toLowerCase())
    );
  }

  // Get movies by year
  async getMoviesByYear(year) {
    await this.delay();
    return this.movies.filter(movie => movie.releaseYear === parseInt(year));
  }

  // Add to favorites
  async addToFavorites(movieId, userId) {
    await this.delay(200);
    const userFavorites = JSON.parse(localStorage.getItem(`favorites_${userId}`) || '[]');
    if (!userFavorites.includes(movieId)) {
      userFavorites.push(movieId);
      localStorage.setItem(`favorites_${userId}`, JSON.stringify(userFavorites));
    }
    return userFavorites;
  }

  // Remove from favorites
  async removeFromFavorites(movieId, userId) {
    await this.delay(200);
    const userFavorites = JSON.parse(localStorage.getItem(`favorites_${userId}`) || '[]');
    const updatedFavorites = userFavorites.filter(id => id !== movieId);
    localStorage.setItem(`favorites_${userId}`, JSON.stringify(updatedFavorites));
    return updatedFavorites;
  }

  // Get user favorites
  async getUserFavorites(userId) {
    await this.delay(200);
    const favoriteIds = JSON.parse(localStorage.getItem(`favorites_${userId}`) || '[]');
    return this.movies.filter(movie => favoriteIds.includes(movie.id));
  }

  // Book a ticket
  async bookTicket(movieId, userId, showTime, seats = 1) {
    await this.delay(300);
    const movie = await this.getMovieById(movieId);
    const booking = {
      id: Date.now(),
      movieId,
      movieTitle: movie.title,
      moviePoster: movie.poster,
      userId,
      showTime,
      seats,
      totalPrice: movie.price * seats,
      bookingDate: new Date().toISOString(),
      status: 'confirmed'
    };

    const userBookings = JSON.parse(localStorage.getItem(`bookings_${userId}`) || '[]');
    userBookings.push(booking);
    localStorage.setItem(`bookings_${userId}`, JSON.stringify(userBookings));
    
    return booking;
  }

  // Get user bookings
  async getUserBookings(userId) {
    await this.delay(200);
    return JSON.parse(localStorage.getItem(`bookings_${userId}`) || '[]');
  }

  // Get genres list
  getGenres() {
    const allGenres = this.movies.flatMap(movie => 
      movie.genre.split(', ').map(g => g.trim())
    );
    return [...new Set(allGenres)].sort();
  }

  // Get years list
  getYears() {
    const years = [...new Set(this.movies.map(movie => movie.releaseYear))];
    return years.sort((a, b) => b - a);
  }

  // Get show times for a movie
  getShowTimes(movieId) {
    const movie = this.movies.find(m => m.id === parseInt(movieId));
    return movie ? movie.showTimes : [];
  }
}

// Create a singleton instance
const movieService = new MovieService();
export default movieService;