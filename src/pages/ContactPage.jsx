// ContactPage.jsx
import React from 'react';

const ContactPage = () => {
    return (
        <div className="bg-gray-100 font-sans leading-normal tracking-normal">
            
            <main className="py-12">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-gray-800">Contact Us</h1>
                        <p className="text-gray-600 mt-4">We'd love to hear from you! Please fill out the form below or contact us through the provided details.</p>
                    </div>

                    <div className="flex flex-wrap justify-center">
                        {/* Contact Form */}
                        <div className="w-full md:w-1/2 lg:w-1/3 px-4">
                            <div className="bg-white p-8 rounded-lg shadow-lg">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-6">Get in Touch</h2>
                                <form action="#" method="POST">
                                    <div className="mb-4">
                                        <label htmlFor="name" className="block text-gray-700">Name</label>
                                        <input type="text" id="name" name="name" required className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="email" className="block text-gray-700">Email</label>
                                        <input type="email" id="email" name="email" required className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="message" className="block text-gray-700">Message</label>
                                        <textarea id="message" name="message" rows="4" required className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                                    </div>
                                    <button type="submit" className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Send Message</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default ContactPage;
