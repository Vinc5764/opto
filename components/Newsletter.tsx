import Image from 'next/image';
import React from 'react';
import logo from '@/public/optologo12.png';

const NewsletterSubscription = () => {
  return (
    <div className="bg-[#36accb] text-white mt-8 p-8 rounded-lg relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,0 C40,33 60,67 100,100 L100,0 Z" fill="currentColor" />
        </svg>
      </div>
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-2/3 mb-6 md:mb-0">
          <h2 className="text-4xl font-bold mb-4">Subscribe Our Newsletter</h2>
          <p className="text-gray-300 mb-6">Subscribe to our newsletter to receive early update & info.</p>
          <form className="flex w-full max-w-md">
            <input
              type="email"
              placeholder="Enter your email here"
              className="flex-grow px-4 py-2 rounded-l-md text-gray-900 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-[#36accb] text-white px-6 py-2 rounded-r-md hover:bg-blue-600 transition duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
        <div className="md:w-1/3">
          <Image
            src={logo}
            alt="Doctor giving thumbs up"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default NewsletterSubscription;
