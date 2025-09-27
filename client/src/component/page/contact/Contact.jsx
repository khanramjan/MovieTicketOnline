import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Show success message
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Message Sent Successfully!",
            text: "We'll get back to you soon.",
            showConfirmButton: false,
            timer: 2000,
        });
        
        // Reset form
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
    };

    return (
        <>
            <Helmet>
                <title>Contact Us - Easy Movie Ticket</title>
            </Helmet>
            <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
                {/* Hero Section */}
                <div className="relative py-20 px-4">
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="relative max-w-6xl mx-auto text-center">
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-6">
                            <span className="text-3xl">📞</span>
                        </div>
                        <h1 className="text-5xl font-bold text-white mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                            Contact Us
                        </h1>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            যোগাযোগ করুন | Get in touch with us for any queries or support
                        </p>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 pb-20">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Information */}
                        <div className="space-y-8">
                            {/* Developer Information */}
                            <div className="bg-black/20 backdrop-blur-md rounded-2xl p-8 border border-white/10">
                                <div className="text-center mb-8">
                                    <div className="w-24 h-24 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <span className="text-4xl">👨‍💻</span>
                                    </div>
                                    <h2 className="text-3xl font-bold text-white mb-2">Developer Information</h2>
                                    <p className="text-gray-300">ডেভেলপার তথ্য</p>
                                </div>
                                
                                <div className="space-y-6">
                                    <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl p-6 border border-purple-500/30">
                                        <div className="flex items-center space-x-4 mb-4">
                                            <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                                                <span className="text-xl">👤</span>
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-white">Ramjan Khan</h3>
                                                <p className="text-purple-300">Software Developer</p>
                                            </div>
                                        </div>
                                        <div className="space-y-3 text-gray-300">
                                            <p className="flex items-center space-x-3">
                                                <span className="text-purple-400">🎓</span>
                                                <span>Department of Computer Science and Engineering</span>
                                            </p>
                                            <p className="flex items-center space-x-3">
                                                <span className="text-purple-400">🏛️</span>
                                                <span>Jashore University of Science and Technology</span>
                                            </p>
                                            <p className="flex items-center space-x-3">
                                                <span className="text-purple-400">📧</span>
                                                <a href="mailto:khanramjan001@gmail.com" className="text-purple-300 hover:text-purple-100 transition-colors">
                                                    khanramjan001@gmail.com
                                                </a>
                                            </p>
                                            <p className="flex items-center space-x-3">
                                                <span className="text-purple-400">📱</span>
                                                <a href="tel:+8801518686883" className="text-purple-300 hover:text-purple-100 transition-colors">
                                                    +880 1518 686 883
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Quick Contact Options */}
                            <div className="bg-black/20 backdrop-blur-md rounded-2xl p-8 border border-white/10">
                                <h3 className="text-2xl font-bold text-white mb-6 text-center">Quick Contact</h3>
                                <div className="grid grid-cols-2 gap-4">
                                    <a 
                                        href="mailto:khanramjan001@gmail.com"
                                        className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 rounded-xl p-4 text-center transition-all duration-300 transform hover:scale-105"
                                    >
                                        <div className="text-2xl mb-2">📧</div>
                                        <div className="text-white font-semibold">Email</div>
                                        <div className="text-red-100 text-sm">Send Message</div>
                                    </a>
                                    <a 
                                        href="tel:+8801518686883"
                                        className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 rounded-xl p-4 text-center transition-all duration-300 transform hover:scale-105"
                                    >
                                        <div className="text-2xl mb-2">📞</div>
                                        <div className="text-white font-semibold">Call</div>
                                        <div className="text-green-100 text-sm">Direct Contact</div>
                                    </a>
                                </div>
                            </div>

                            {/* Office Hours */}
                            <div className="bg-black/20 backdrop-blur-md rounded-2xl p-8 border border-white/10">
                                <h3 className="text-2xl font-bold text-white mb-6 text-center">Support Hours</h3>
                                <div className="space-y-3 text-gray-300">
                                    <div className="flex justify-between">
                                        <span>Saturday - Wednesday:</span>
                                        <span className="text-purple-300">9:00 AM - 6:00 PM</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Thursday:</span>
                                        <span className="text-purple-300">10:00 AM - 4:00 PM</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Sunday:</span>
                                        <span className="text-purple-300">Closed</span>
                                    </div>
                                    <div className="border-t border-white/10 pt-3 mt-4">
                                        <p className="text-sm text-center">
                                            <span className="text-purple-400">Emergency Support:</span> Available 24/7 via email
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-black/20 backdrop-blur-md rounded-2xl p-8 border border-white/10">
                            <div className="text-center mb-8">
                                <h2 className="text-3xl font-bold text-white mb-2">Send us a Message</h2>
                                <p className="text-gray-300">আমাদের একটি বার্তা পাঠান</p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-white font-medium mb-2">Your Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-purple-500 focus:bg-white/20 transition-all"
                                            placeholder="Enter your full name"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-white font-medium mb-2">Email Address</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-purple-500 focus:bg-white/20 transition-all"
                                            placeholder="your.email@example.com"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-white font-medium mb-2">Subject</label>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-purple-500 focus:bg-white/20 transition-all"
                                        placeholder="What is this about?"
                                    />
                                </div>

                                <div>
                                    <label className="block text-white font-medium mb-2">Message</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="6"
                                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-purple-500 focus:bg-white/20 transition-all resize-none"
                                        placeholder="Tell us more about your inquiry..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-4 px-6 rounded-lg hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
                                >
                                    <span className="flex items-center justify-center space-x-2">
                                        <span>Send Message</span>
                                        <span>📤</span>
                                    </span>
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* FAQ Section */}
                    <div className="bg-black/20 backdrop-blur-md rounded-2xl p-8 mt-12 border border-white/10">
                        <h2 className="text-3xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-6">
                                <div>
                                    <h4 className="text-lg font-bold text-white mb-2">How do I book movie tickets?</h4>
                                    <p className="text-gray-300">Simply browse movies, select your preferred show time, choose seats, and make payment. You'll receive instant confirmation.</p>
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-white mb-2">What payment methods do you accept?</h4>
                                    <p className="text-gray-300">We accept bKash, Rocket, Nagad, credit/debit cards, and all major mobile banking services in Bangladesh.</p>
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-white mb-2">Can I cancel my booking?</h4>
                                    <p className="text-gray-300">Yes, you can cancel your booking up to 2 hours before the show time for a full refund.</p>
                                </div>
                            </div>
                            <div className="space-y-6">
                                <div>
                                    <h4 className="text-lg font-bold text-white mb-2">Is my payment information secure?</h4>
                                    <p className="text-gray-300">Absolutely! We use SSL encryption and secure payment gateways to protect your financial information.</p>
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-white mb-2">Do you have a mobile app?</h4>
                                    <p className="text-gray-300">Our website is fully mobile-responsive. A dedicated mobile app is coming soon!</p>
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-white mb-2">How do I get my tickets?</h4>
                                    <p className="text-gray-300">You can show your booking confirmation on your phone or print the e-ticket at the cinema.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;
