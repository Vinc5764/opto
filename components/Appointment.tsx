import React from 'react';
// import { Play } from 'lucide-react';
import Image from 'next/image';
import logo from '@/public/optologo3.jpg'
import Link from 'next/link';

const FlexibleAppointmentSection = () => {
  return (
    <div className="relative w-11/12 h-[70vh] m-auto rounded-xl bg-gray-900 text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={logo}
          alt="Eye examination room"
          className="w-full h-full object-cover object-center opacity-50"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl  py-8 h-full flex flex-col  px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-xl lg:text-5xl font-bold leading-tight mb-6">
          Discover the Convenience of Flexible Appointment Options
        </h1>
        <p className="text-lg sm:text-xl mb-8 max-w-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed tempus sem, et auctor justo. Phasellus ac nisi ullamcorper enim accumsan tristique eu a leo. Maecenas eget eros velit. Vestibulum ut justo dolor.
        </p>
        <div className="flex flex-wrap gap-4 items-center">
           
             <Link  href='/book'><button className="bg-gradient-to-r from-[#36accb] to-[#4ecdc4] text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 mt-8">
    Book Consultation
  </button></Link>
          {/* <button className="flex items-center text-white hover:text-blue-300 transition duration-300">
            <div className="bg-white bg-opacity-20 rounded-full p-3 mr-3">
              <Play className="w-6 h-6 text-white" fill="currentColor" />
            </div>
            Watch Video
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default FlexibleAppointmentSection;