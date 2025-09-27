import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../../../provider/AuthProvider';
import movieService from '../../../services/movieService';
import Swal from 'sweetalert2';

const BuyTicket = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [movie, setMovie] = useState(null);
  const [selectedShowTime, setSelectedShowTime] = useState('');
  const [ticketQuantity, setTicketQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const MAX_TICKET_LIMIT = 5;

  // Helper function to format the date to include the local day name and date
  const formatLocalDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, {
      weekday: 'long', // Day name
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  // Helper function to format time to local time
  const formatLocalTime = (timeString) => {
    const time = new Date(`1970-01-01T${timeString}Z`); // Convert time to Date object (adjust for timezone if needed)
    return time.toLocaleTimeString(undefined, {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true, // Display time in 12-hour format (optional)
    });
  };

  // Generate show times for the movie
  const generateShowTimes = () => {
    const times = ['10:00 AM', '1:00 PM', '4:00 PM', '7:00 PM', '10:00 PM'];
    const today = new Date();
    const showTimes = [];

    for (let i = 0; i < 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      
      times.forEach(time => {
        showTimes.push({
          id: `${date.toISOString().split('T')[0]}_${time}`,
          date: date.toISOString().split('T')[0],
          time: time,
          availableSeats: Math.floor(Math.random() * 50) + 20, // Random seats between 20-70
          price: movie?.price || 12.99
        });
      });
    }
    return showTimes;
  };

  // Fetch movie data
  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setLoading(true);
        const movieData = await movieService.getMovieById(id);
        setMovie(movieData);
        setError(null);
      } catch (error) {
        console.error("Error fetching movie data:", error);
        setError("Movie not found or failed to load.");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchMovie();
    }
  }, [id]);

  // Handle ticket purchase
  const handlePurchase = async () => {
    if (!selectedShowTime) {
      Swal.fire({
        title: 'Select Show Time',
        text: 'Please select a show time before proceeding.',
        icon: 'warning',
        confirmButtonColor: '#7c3aed',
      });
      return;
    }

    try {
      const booking = await movieService.bookTicket(
        parseInt(id),
        user.email,
        selectedShowTime,
        ticketQuantity
      );

      Swal.fire({
        title: 'Booking Successful!',
        html: `
          <div class="text-left">
            <p><strong>Movie:</strong> ${movie.title}</p>
            <p><strong>Show Time:</strong> ${selectedShowTime}</p>
            <p><strong>Tickets:</strong> ${ticketQuantity}</p>
            <p><strong>Total:</strong> $${booking.totalPrice.toFixed(2)}</p>
            <p><strong>Booking ID:</strong> ${booking.id}</p>
          </div>
        `,
        icon: 'success',
        confirmButtonColor: '#7c3aed',
      });

    } catch (error) {
      Swal.fire({
        title: 'Booking Failed',
        text: 'There was an error processing your booking. Please try again.',
        icon: 'error',
        confirmButtonColor: '#7c3aed',
      });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-white mx-auto mb-4"></div>
          <p className="text-white text-xl">Loading movie details...</p>
        </div>
      </div>
    );
  }

  if (error || !movie) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-white text-2xl mb-4">Movie Not Found</h2>
          <p className="text-gray-300 mb-6">{error}</p>
          <button 
            onClick={() => window.history.back()} 
            className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  const showTimes = generateShowTimes();

  return (
    <>
      <Helmet>
        <title>Book Tickets - {movie.title} - Easy Movie Ticket</title>
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-6">
        <div className="container mx-auto max-w-7xl">
          {/* Movie Header */}
          <div className="bg-black/20 backdrop-blur-md rounded-2xl p-6 mb-8 border border-white/10">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <img 
                src={movie.poster} 
                alt={movie.title}
                className="w-48 h-72 object-cover rounded-xl shadow-lg"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster';
                }}
              />
              <div className="flex-1 text-white">
                <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {movie.title}
                </h1>
                <div className="grid md:grid-cols-2 gap-4 text-gray-300">
                  <p><span className="text-purple-400 font-medium">Year:</span> {movie.releaseYear}</p>
                  <p><span className="text-purple-400 font-medium">Duration:</span> {movie.duration}</p>
                  <p><span className="text-purple-400 font-medium">Genre:</span> {movie.genre}</p>
                  <p><span className="text-purple-400 font-medium">Director:</span> {movie.director}</p>
                  <p><span className="text-purple-400 font-medium">Rating:</span> ⭐ {movie.rating}/10</p>
                  <p><span className="text-purple-400 font-medium">Price:</span> <span className="text-green-400 font-bold">${movie.price}</span></p>
                </div>
                <p className="mt-4 text-gray-300 leading-relaxed">{movie.description}</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left section: Show Times Selection */}
            <div className="col-span-2 space-y-8">
              <div className="bg-black/20 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-6">Select Show Time</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-h-96 overflow-y-auto">
                  {showTimes.map((showTime) => (
                    <div
                      key={showTime.id}
                      className={`p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                        selectedShowTime === showTime.id 
                          ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg transform scale-105' 
                          : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                      }`}
                      onClick={() => setSelectedShowTime(showTime.id)}
                    >
                      <p className="font-semibold text-center">{formatLocalDate(showTime.date)}</p>
                      <p className="text-sm text-center mt-1">{showTime.time}</p>
                      <p className="text-xs text-center mt-2">
                        {showTime.availableSeats} seats available
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ticket Quantity */}
              <div className="bg-black/20 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4">Ticket Quantity</h3>
                <div className="flex items-center justify-center space-x-6">
                  <button
                    className="bg-purple-600 hover:bg-purple-700 text-white w-12 h-12 rounded-full text-xl font-bold transition-colors"
                    onClick={() => setTicketQuantity(Math.max(1, ticketQuantity - 1))}
                  >
                    -
                  </button>
                  <span className="text-white text-2xl font-bold px-8">{ticketQuantity} Tickets</span>
                  <button
                    className="bg-purple-600 hover:bg-purple-700 text-white w-12 h-12 rounded-full text-xl font-bold transition-colors"
                    onClick={() => {
                      if (ticketQuantity < MAX_TICKET_LIMIT) {
                        setTicketQuantity(ticketQuantity + 1);
                      } else {
                        Swal.fire({
                          title: 'Ticket Limit Reached',
                          text: 'Maximum 5 tickets allowed per booking.',
                          icon: 'info',
                          confirmButtonColor: '#7c3aed',
                        });
                      }
                    }}
                  >
                    +
                  </button>
                </div>
                <p className="text-gray-400 text-center mt-4">Maximum {MAX_TICKET_LIMIT} tickets per booking</p>
              </div>
            </div>

            {/* Right section: Ticket Summary */}
            <div className="bg-black/20 backdrop-blur-md rounded-2xl p-6 border border-white/10 h-fit">
              <h3 className="text-xl font-bold text-white mb-6">Booking Summary</h3>
              
              {movie && (
                <div className="space-y-4 text-gray-300">
                  <div className="pb-4 border-b border-white/10">
                    <h4 className="text-lg font-bold text-white">{movie.title}</h4>
                    <p className="text-sm text-gray-400">{movie.genre}</p>
                  </div>
                  
                  {selectedShowTime && (
                    <div className="space-y-2">
                      <p><span className="text-purple-400">Show Time:</span> {
                        (() => {
                          const showTime = showTimes.find(st => st.id === selectedShowTime);
                          return showTime ? `${formatLocalDate(showTime.date)} at ${showTime.time}` : 'Not selected';
                        })()
                      }</p>
                    </div>
                  )}
                  
                  <div className="space-y-2 pt-4 border-t border-white/10">
                    <p><span className="text-purple-400">Tickets:</span> {ticketQuantity}</p>
                    <p><span className="text-purple-400">Price per ticket:</span> ${movie.price}</p>
                    <p className="text-xl font-bold text-green-400">
                      Total: ${(ticketQuantity * movie.price).toFixed(2)}
                    </p>
                  </div>
                </div>
              )}

              {/* Purchase Button */}
              <div className="mt-8">
                <button 
                  onClick={handlePurchase}
                  disabled={!selectedShowTime}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 px-6 rounded-lg font-bold text-lg hover:from-purple-700 hover:to-pink-700 disabled:from-gray-600 disabled:to-gray-600 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 disabled:transform-none shadow-lg"
                >
                  {selectedShowTime ? '🎫 Purchase Tickets' : 'Select Show Time First'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BuyTicket;
