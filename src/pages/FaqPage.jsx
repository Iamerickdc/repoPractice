import React from 'react';

const FaqPage = () => {
    return (
        <div className="bg-gray-100 font-sans leading-normal tracking-normal">
            <main className="py-12">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-gray-800">Frequently Asked Questions</h1>
                        <p className="text-gray-600 mt-4">Find answers to some of the most common questions we receive.</p>
                    </div>

                    <div className="space-y-8">
                        
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">What is your return policy?</h2>
                            <p className="text-gray-600">Our return policy allows for returns within 30 days of purchase. Items must be in their original condition and packaging. For more details, please refer to our returns page.</p>
                        </div>

                        {/* FAQ Item 2 */}
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">How can I track my order?</h2>
                            <p className="text-gray-600">Once your order has shipped, you will receive an email with a tracking number. You can use this number to track your order on our website or the carrier's website.</p>
                        </div>

                        {/* FAQ Item 3 */}
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Do you offer international shipping?</h2>
                            <p className="text-gray-600">Yes, we offer international shipping to most countries. Shipping rates and delivery times vary based on the destination. Please check our shipping policy for more details.</p>
                        </div>

                        {/* FAQ Item 4 */}
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">How can I contact customer support?</h2>
                            <p className="text-gray-600">You can contact our customer support team via email at support@example.com or through our contact form on the website. Our team is available 24/7 to assist you with any questions or concerns.</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default FaqPage;
