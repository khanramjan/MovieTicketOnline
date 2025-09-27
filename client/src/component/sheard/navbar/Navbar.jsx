import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";
import { FaUserAlt } from "react-icons/fa";
import { AuthContext } from '../../../provider/AuthProvider';

const Navbar = () => {

    const {user}=useContext(AuthContext)
    // Simulate user authentication status (change this according to your logic)
    // Example: simulate the user being logged out

    // State tracking the authentication status (initially set based on `user`)
    

    const link = [
        <li key="home"><NavLink to="/">Home</NavLink></li>,
        <li key="about"><NavLink to="/about">About</NavLink></li>,
        <li key="contact"><NavLink to="/contact">Contact</NavLink></li>
    ];

    return (
        <div className="navbar bg-black/20 backdrop-blur-md border-b border-white/10 z-50 sticky top-0">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-white hover:bg-white/10">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-black/90 backdrop-blur-md rounded-box z-[1] mt-3 w-52 p-2 shadow-xl border border-white/10"
                    >
                        {link}
                    </ul>
                </div>
                <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-red-500 to-purple-600 flex items-center justify-center">
                        <span className="text-white font-bold text-lg">🎬</span>
                    </div>
                    <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        CinemaHub
                    </h1>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-2">
                    {link.map((item, index) => (
                        <li key={index} className="text-white hover:text-purple-400 transition-colors duration-200">
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="navbar-end gap-3">
                {/* Search Icon */}
                <Link to="/search-movie" className="btn btn-ghost btn-circle text-white hover:bg-white/10 hover:text-purple-400">
                    <CiSearch size={24} />
                </Link>

                {/* Conditionally render Login/Logout buttons based on authentication */}
                {user ? (
                    <div className="flex items-center gap-3">
                        <span className="text-white text-sm hidden md:block">
                            Welcome, {user.name}
                        </span>
                        <Link to="/profile" className="btn btn-ghost btn-circle text-white hover:bg-white/10 hover:text-purple-400">
                            <FaUserAlt size={18} />
                        </Link>
                    </div>
                ) : (
                    <div className="flex gap-2">
                        <Link to="/login" className="btn btn-sm bg-gradient-to-r from-purple-600 to-pink-600 text-white border-none hover:from-purple-700 hover:to-pink-700">
                            Login
                        </Link>
                        <Link to="/signup" className="btn btn-sm btn-outline text-white border-white/30 hover:bg-white hover:text-black">
                            Sign Up
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
