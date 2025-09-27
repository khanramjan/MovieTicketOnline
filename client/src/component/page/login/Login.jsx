import React, { useContext, useState } from 'react';
import { GiSightDisabled } from "react-icons/gi";
import { BiSolidShow } from "react-icons/bi";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from "react-helmet-async";
import { AuthContext } from '../../../provider/AuthProvider';
import Swal from 'sweetalert2';

const Login = () => {
    const { logIn } = useContext(AuthContext);
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    

    // Get the 'from' location or check localStorage for redirect path
    const from = location.state?.from?.pathname || localStorage.getItem('redirectPath') || "/"

    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        try {
            setLoading(true);
            await logIn(email, password);
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Login successfully",
                showConfirmButton: false,
                timer: 1300,
            });
            e.target.reset()
            // Clear the redirect path from localStorage after successful login
            localStorage.removeItem('redirectPath');
            navigate(from, {replace: true}) // Navigate to the page the user came from
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: "Invalid credentials!",
            });
        } finally {
            setLoading(false);
        }
    };

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <>
            <Helmet>
                <title>Easy Movie Ticket | Login</title>
            </Helmet>
            <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                {/* Background with movie-themed gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900"></div>
                <div className="absolute inset-0 bg-black/20"></div>
                
                {/* Login Form Container */}
                <div className="relative max-w-md w-full space-y-8">
                    {/* Header */}
                    <div className="text-center">
                        <div className="flex justify-center mb-6">
                            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-red-500 to-purple-600 flex items-center justify-center">
                                <span className="text-white font-bold text-2xl">🎬</span>
                            </div>
                        </div>
                        <h1 className="text-4xl font-bold text-white mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                            Welcome Back!
                        </h1>
                        <p className="text-gray-300 text-lg">Sign in to your Easy Movie Ticket account</p>
                    </div>

                    {/* Form */}
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20 p-8">
                        <form onSubmit={handleSubmit} className="space-y-6">
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
                                        placeholder="Enter your password"
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

                            {/* Demo Credentials Info */}
                            <div className="bg-blue-500/20 border border-blue-400/30 rounded-lg p-4">
                                <h4 className="text-blue-300 font-medium mb-2">Demo Credentials:</h4>
                                <div className="space-y-1 text-sm text-blue-200">
                                    <p><strong>User:</strong> ramjan@example.com / password123</p>
                                    <p><strong>Admin:</strong> ramjanKhan@example.com / admin123</p>
                                </div>
                            </div>

                            {/* Login Button */}
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-4 rounded-lg font-bold text-lg hover:from-purple-700 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-transparent transition duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg"
                            >
                                {loading ? (
                                    <div className="flex items-center justify-center">
                                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                                        Signing in...
                                    </div>
                                ) : (
                                    '🎬 Sign In'
                                )}
                            </button>
                        </form>

                        {/* Register Link */}
                        <div className="mt-6 text-center">
                            <p className="text-gray-300">
                                Don't have an account?{' '}
                                <Link 
                                    to="/signup" 
                                    className="text-purple-400 hover:text-purple-300 font-medium transition-colors duration-300 hover:underline"
                                >
                                    Create Account
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

export default Login