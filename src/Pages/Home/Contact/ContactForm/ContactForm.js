import React from 'react';

const ContactForm = () => {
    return (
             <div className="w-3/4 mx-auto">
                <form>
                    <div className="mb-4">
                    <label htmlFor="email" className="block text-[#fff] text-sm font-bold mb-2">Email Address*</label>
                    <input type="email" id="email" className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm text-gray-700 focus:outline-none focus:border-primary" placeholder="Enter your email address" />
                    </div>
                    <div className="mb-4">
                    <label htmlFor="subject" className="block text-[#fff] text-sm font-bold mb-2">Subject*</label>
                    <input type="text" id="subject" className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm text-gray-700 focus:outline-none focus:border-primary" placeholder="Enter the subject" />
                    </div>
                    <div className="mb-4">
                    <label htmlFor="message" className="block text-[#fff] text-sm font-bold mb-2">Your Message*</label>
                    <textarea id="message" rows="6" className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm text-gray-700 focus:outline-none focus:border-primary" placeholder="Enter your message"></textarea>
                    </div>
                    <button type="submit" className="px-4 py-2 bg-primary text-white rounded-md text-sm font-semibold hover:bg-primary focus:outline-none focus:bg-primary">Submit</button>
                </form>
                </div>

    );
};

export default ContactForm;