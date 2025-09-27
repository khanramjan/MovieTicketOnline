import React from 'react';
import { Helmet } from 'react-helmet-async';

const About = () => {
    return (
        <>
            <Helmet>
                <title>About Us - Easy Movie Ticket</title>
            </Helmet>
            <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
                {/* Hero Section */}
                <div className="relative py-20 px-4">
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="relative max-w-6xl mx-auto text-center">
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-6">
                            <span className="text-3xl">🎬</span>
                        </div>
                        <h1 className="text-5xl font-bold text-white mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                            Easy Movie Ticket
                        </h1>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Bangladesh's premier online movie ticket booking platform, bringing the magic of cinema to your fingertips
                        </p>
                    </div>
                </div>

                {/* Main Content */}
                <div className="max-w-6xl mx-auto px-4 pb-20">
                    {/* Our Story */}
                    <div className="bg-black/20 backdrop-blur-md rounded-2xl p-8 mb-12 border border-white/10">
                        <h2 className="text-3xl font-bold text-white mb-6 text-center">আমাদের গল্প | Our Story</h2>
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div>
                                <p className="text-gray-300 text-lg leading-relaxed mb-4">
                                    Easy Movie Ticket was born from a simple vision: to revolutionize the movie-going experience in Bangladesh. 
                                    We understand the frustration of long queues at cinema halls, sold-out shows, and the uncertainty of ticket availability.
                                </p>
                                <p className="text-gray-300 text-lg leading-relaxed mb-4">
                                    Starting from Dhaka and expanding across Bangladesh, we've partnered with major cinema chains including 
                                    Star Cineplex, Blockbuster Cinemas, Silver Screen, and local theaters to bring you seamless booking experience.
                                </p>
                                <p className="text-gray-300 text-lg leading-relaxed">
                                    আমরা বাংলাদেশের সিনেমা প্রেমীদের জন্য একটি সহজ এবং নির্ভরযোগ্য টিকেট বুকিং সেবা প্রদান করি।
                                </p>
                            </div>
                            <div className="flex justify-center">
                                <div className="w-80 h-60 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                                    <span className="text-6xl">🇧🇩</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Our Services */}
                    <div className="bg-black/20 backdrop-blur-md rounded-2xl p-8 mb-12 border border-white/10">
                        <h2 className="text-3xl font-bold text-white mb-8 text-center">আমাদের সেবাসমূহ | Our Services</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl">🎫</span>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">Online Booking</h3>
                                <p className="text-gray-300">Book your movie tickets online from anywhere in Bangladesh. No more waiting in long queues!</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl">📱</span>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">Mobile Friendly</h3>
                                <p className="text-gray-300">Our platform works perfectly on your smartphone, making ticket booking convenient on the go.</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl">💳</span>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">Multiple Payment Options</h3>
                                <p className="text-gray-300">Pay with bKash, Rocket, Nagad, credit/debit cards, or mobile banking - whatever suits you best.</p>
                            </div>
                        </div>
                    </div>

                    {/* Coverage Areas */}
                    <div className="bg-black/20 backdrop-blur-md rounded-2xl p-8 mb-12 border border-white/10">
                        <h2 className="text-3xl font-bold text-white mb-8 text-center">আমাদের এলাকা | Coverage Areas</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { city: "ঢাকা", english: "Dhaka", theaters: "25+ Cinemas" },
                                { city: "চট্টগ্রাম", english: "Chattogram", theaters: "15+ Cinemas" },
                                { city: "সিলেট", english: "Sylhet", theaters: "8+ Cinemas" },
                                { city: "রাজশাহী", english: "Rajshahi", theaters: "6+ Cinemas" },
                                { city: "খুলনা", english: "Khulna", theaters: "5+ Cinemas" },
                                { city: "বরিশাল", english: "Barishal", theaters: "4+ Cinemas" },
                                { city: "রংপুর", english: "Rangpur", theaters: "3+ Cinemas" },
                                { city: "ময়মনসিংহ", english: "Mymensingh", theaters: "3+ Cinemas" }
                            ].map((location, index) => (
                                <div key={index} className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl p-4 text-center border border-purple-500/30">
                                    <h4 className="text-lg font-bold text-white">{location.city}</h4>
                                    <p className="text-purple-300 text-sm">{location.english}</p>
                                    <p className="text-gray-300 text-sm mt-2">{location.theaters}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Why Choose Us */}
                    <div className="bg-black/20 backdrop-blur-md rounded-2xl p-8 mb-12 border border-white/10">
                        <h2 className="text-3xl font-bold text-white mb-8 text-center">কেন আমাদের বেছে নেবেন? | Why Choose Us?</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <span className="text-white text-sm">✓</span>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-white mb-2">24/7 Customer Support</h4>
                                        <p className="text-gray-300">আমাদের ২৪/৭ কাস্টমার সাপোর্ট টিম সর্বদা আপনার সেবায় নিয়োজিত।</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <span className="text-white text-sm">✓</span>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-white mb-2">Secure Payments</h4>
                                        <p className="text-gray-300">SSL encrypted payments ensure your financial information is completely safe.</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <span className="text-white text-sm">✓</span>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-white mb-2">No Hidden Charges</h4>
                                        <p className="text-gray-300">স্বচ্ছ মূল্য নীতি - কোন লুকানো চার্জ নেই।</p>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <span className="text-white text-sm">✓</span>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-white mb-2">Instant Confirmation</h4>
                                        <p className="text-gray-300">Get instant booking confirmation via SMS and email.</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <span className="text-white text-sm">✓</span>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-white mb-2">Easy Cancellation</h4>
                                        <p className="text-gray-300">সহজ ক্যান্সেলেশন পলিসি - প্রয়োজনে টিকিট বাতিল করুন।</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <span className="text-white text-sm">✓</span>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-white mb-2">Latest Movies</h4>
                                        <p className="text-gray-300">Hollywood, Bollywood, and Bangladeshi movies - all in one place.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mission & Vision */}
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-black/20 backdrop-blur-md rounded-2xl p-8 border border-white/10">
                            <div className="text-center mb-6">
                                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl">🎯</span>
                                </div>
                                <h3 className="text-2xl font-bold text-white">আমাদের লক্ষ্য | Our Mission</h3>
                            </div>
                            <p className="text-gray-300 text-center leading-relaxed">
                                To make movie ticket booking accessible, affordable, and enjoyable for every cinema lover in Bangladesh. 
                                আমরা চাই বাংলাদেশের প্রতিটি সিনেমা প্রেমী সহজেই তাদের প্রিয় মুভির টিকিট বুক করতে পারুক।
                            </p>
                        </div>
                        
                        <div className="bg-black/20 backdrop-blur-md rounded-2xl p-8 border border-white/10">
                            <div className="text-center mb-6">
                                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl">🚀</span>
                                </div>
                                <h3 className="text-2xl font-bold text-white">আমাদের স্বপ্ন | Our Vision</h3>
                            </div>
                            <p className="text-gray-300 text-center leading-relaxed">
                                To become Bangladesh's leading entertainment platform, connecting millions with the magic of cinema. 
                                বাংলাদেশের শীর্ষস্থানীয় বিনোদন প্ল্যাটফর্ম হিসেবে সিনেমার জাদুর সাথে লাখো মানুষকে যুক্ত করা।
                            </p>
                        </div>
                    </div>

                    {/* Contact Section */}
                    <div className="bg-black/20 backdrop-blur-md rounded-2xl p-8 mt-12 border border-white/10 text-center">
                        <h2 className="text-3xl font-bold text-white mb-6">যোগাযোগ করুন | Get In Touch</h2>
                        <p className="text-gray-300 text-lg mb-8">
                            Have questions or need support? We're here to help!
                        </p>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div>
                                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-3">
                                    <span className="text-xl">📧</span>
                                </div>
                                <h4 className="font-bold text-white mb-2">Email</h4>
                                <p className="text-gray-300">support@easymovieticket.bd</p>
                            </div>
                            <div>
                                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-3">
                                    <span className="text-xl">📱</span>
                                </div>
                                <h4 className="font-bold text-white mb-2">Hotline</h4>
                                <p className="text-gray-300">+880-1700-000000</p>
                            </div>
                            <div>
                                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-3">
                                    <span className="text-xl">📍</span>
                                </div>
                                <h4 className="font-bold text-white mb-2">Office</h4>
                                <p className="text-gray-300">Dhaka, Bangladesh</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;
