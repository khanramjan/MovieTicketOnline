import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-black/30 backdrop-blur-md border-t border-white/10 text-white mt-16">
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="md:col-span-2">
                        <div className="flex items-center space-x-3 mb-4">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-red-500 to-purple-600 flex items-center justify-center">
                                <span className="text-white font-bold text-xl">🎬</span>
                            </div>
                            <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                CinemaHub
                            </h1>
                        </div>
                        <p className="text-gray-300 text-lg mb-4 max-w-md">
                            Your ultimate destination for the latest movies, blockbusters, and cinema experiences. 
                            Book your tickets now and enjoy the magic of movies!
                        </p>
                        <p className="text-gray-400 text-sm">
                            © 2024 CinemaHub. All rights reserved.
                        </p>
                    </div>
                    
                    <div>
                        <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="/" className="text-gray-300 hover:text-purple-400 transition-colors">Home</a></li>
                            <li><a href="/viewallmovie" className="text-gray-300 hover:text-purple-400 transition-colors">All Movies</a></li>
                            <li><a href="/about" className="text-gray-300 hover:text-purple-400 transition-colors">About Us</a></li>
                            <li><a href="/contact" className="text-gray-300 hover:text-purple-400 transition-colors">Contact</a></li>
                        </ul>
                    </div>
                    
                    <div>
                        <h3 className="text-white text-lg font-semibold mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                                </svg>
                            </a>
                            <a href="#" className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors">
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                                </svg>
                            </a>
                            <a href="#" className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center hover:bg-blue-900 transition-colors">
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                                </svg>
                            </a>
                        </div>
                        <div className="mt-4">
                            <p className="text-gray-400 text-sm">
                                🎬 Experience Cinema Like Never Before
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
