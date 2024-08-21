import React from 'react'


const AboutPage = () => {
    return (
        <div className="bg-gray-100 font-sans leading-normal tracking-normal">
            {/* Navigation */}
            <nav className="bg-gray-800 p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <a href="#" className="text-white text-lg font-semibold">My Company</a>
                    <div>
                        <a href="#" className="text-gray-300 hover:text-white px-4">Home</a>
                        <a href="#" className="text-gray-300 hover:text-white px-4">Services</a>
                        <a href="#" className="text-gray-300 hover:text-white px-4">About</a>
                        <a href="#" className="text-gray-300 hover:text-white px-4">Contact</a>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main className="py-10">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-gray-800">About Us</h1>
                        <p className="text-gray-600 mt-4">Learn more about our journey and values</p>
                    </div>

                    <div className="flex flex-wrap">
                        {/* Mission Section */}
                        <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                            <div className="bg-white p-6 rounded-lg shadow-lg">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
                                <p className="text-gray-600">Our mission is to deliver exceptional value through innovative solutions and superior customer service. We are committed to making a positive impact in our industry and the communities we serve.</p>
                            </div>
                        </div>

                        {/* Vision Section */}
                        <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                            <div className="bg-white p-6 rounded-lg shadow-lg">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Vision</h2>
                                <p className="text-gray-600">We envision a future where our products and services set the benchmark for quality and innovation. Our goal is to continuously evolve and adapt to meet the needs of our clients and the challenges of the ever-changing marketplace.</p>
                            </div>
                        </div>

                        {/* Values Section */}
                        <div className="w-full lg:w-1/3 px-4 mb-8">
                            <div className="bg-white p-6 rounded-lg shadow-lg">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Values</h2>
                                <ul className="list-disc list-inside text-gray-600">
                                    <li>Integrity: We uphold the highest standards of integrity in all our actions.</li>
                                    <li>Innovation: We embrace creativity and innovation to drive progress.</li>
                                    <li>Customer Focus: We prioritize our customers' needs and work to exceed their expectations.</li>
                                    <li>Excellence: We strive for excellence in everything we do.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

        </div>
    );
};

export default AboutPage;
