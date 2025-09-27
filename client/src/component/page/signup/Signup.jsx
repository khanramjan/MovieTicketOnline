import React, { useContext, useState } from 'react';
import { GiSightDisabled } from "react-icons/gi";
import { BiSolidShow } from "react-icons/bi";
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../../../provider/AuthProvider';
import Swal from 'sweetalert2'; // Import SweetAlert2 for notifications

const Signup = () => {
    const [passwordVisible, setPasswordVisible] = useState(false); // State for password visibility
    const [loading, setLoading] = useState(false); // State for loading indicator
    const { createUser } = useContext(AuthContext); // Get createUser from AuthContext
    const navigate = useNavigate(); // Hook for navigation

    const handleSubmit = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log({ name, email, password });
        try {
            setLoading(true); // Set loading to true while registering
            await createUser(name, email, password); // Await the createUser process
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Registered successfully!",
                showConfirmButton: false,
                timer: 900,
            });
            
            // Delay navigation to ensure SweetAlert finishes
            setTimeout(() => {
                navigate('/login'); // Redirect to login page after success
            }, 1000); // Delay for smooth transition
            
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: "Registration failed. Please try again.",
            }); // Show SweetAlert for errors
        } finally {
            setLoading(false); // Reset loading state
        }
    };

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible); // Toggle password visibility
    };

    return (
        <>
            <Helmet>
                <title>CinemaHub | Sign Up</title>
            </Helmet>
            <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                {/* Background with movie-themed gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900"></div>
                <div className="absolute inset-0 bg-black/20"></div>
                
                {/* Signup Form Container */}
                <div className="relative max-w-md w-full space-y-8">
                    {/* Header */}
                    <div className="text-center">
                        <div className="flex justify-center mb-6">
                            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center">
                                <span className="text-white font-bold text-2xl">🎭</span>
                            </div>
                        </div>
                        <h1 className="text-4xl font-bold text-white mb-2 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                            Join CinemaHub!
                        </h1>
                        <p className="text-gray-300 text-lg">Create your account and start your movie journey</p>
                    </div>

                    {/* Form */}
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20 p-8">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Name Field */}
                            <div>
                                <label className="block text-white font-medium mb-2">Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Enter your full name"
                                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-md text-white placeholder-gray-300 rounded-lg border border-white/20 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition duration-300"
                                    required
                                />
                            </div>

                            {/* Email Field */}
                            <div>
                                <label className="block text-white font-medium mb-2">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email address"
                                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-md text-white placeholder-gray-300 rounded-lg border border-white/20 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition duration-300"
                                    required
                                />
                            </div>

                            {/* Password Field */}
                            <div>
                                <label className="block text-white font-medium mb-2">Password</label>
                                <div className="relative">
                                    <input
                                        type={passwordVisible ? 'text' : 'password'}
                                        name="password"
                                        placeholder="Create a strong password"
                                        className="w-full px-4 py-3 bg-white/10 backdrop-blur-md text-white placeholder-gray-300 rounded-lg border border-white/20 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition duration-300 pr-12"
                                        required
                                    />
                                    <button
                                        type="button"
                                        className="absolute inset-y-0 right-0 px-3 flex items-center text-gray-300 hover:text-white transition-colors"
                                        onClick={togglePasswordVisibility}
                                    >
                                        {passwordVisible ? <BiSolidShow size={20} /> : <GiSightDisabled size={20} />}
                                    </button>
                                </div>
                            </div>

                            {/* Features Info */}
                            <div className="bg-green-500/20 border border-green-400/30 rounded-lg p-4">
                                <h4 className="text-green-300 font-medium mb-2">What you'll get:</h4>
                                <div className="space-y-1 text-sm text-green-200">
                                    <p>✨ Access to 30+ movies</p>
                                    <p>🎬 Personalized recommendations</p>
                                    <p>❤️ Save favorites</p>
                                    <p>🎫 Easy ticket booking</p>
                                </div>
                            </div>

                            {/* Signup Button */}
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-gradient-to-r from-pink-600 to-purple-600 text-white py-3 px-4 rounded-lg font-bold text-lg hover:from-pink-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-transparent transition duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg"
                            >
                                {loading ? (
                                    <div className="flex items-center justify-center">
                                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                                        Creating Account...
                                    </div>
                                ) : (
                                    '🎭 Create Account'
                                )}
                            </button>
                        </form>

                        {/* Login Link */}
                        <div className="mt-6 text-center">
                            <p className="text-gray-300">
                                Already have an account?{' '}
                                <Link 
                                    to="/login" 
                                    className="text-purple-400 hover:text-purple-300 font-medium transition-colors duration-300 hover:underline"
                                >
                                    Sign In
                                </Link>
                            </p>
                        </div>

                        {/* Back to Home Link */}
                        <div className="mt-4 text-center">
                            <Link 
                                to="/" 
                                className="text-gray-400 hover:text-gray-300 text-sm transition-colors duration-300 hover:underline"
                            >
                                ← Back to Home
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Signup;
