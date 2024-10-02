import React from 'react';
import { Star } from 'lucide-react';
import Image from 'next/image';
import doctor1 from '@/public/optologo3.jpg';
import doctor2 from '@/public/optologo2.png';
import Link from 'next/link';

const EyeCareLandingPage = () => {
  return (
    <div className="bg-gradient-to-r from-[#e0f7fa] to-[#b2ebf2] p-12 font-sans">
      <div className="max-w-6xl mx-auto">
        <header className="mb-10 text-center">
          <h2 className="text-2xl font-bold text-[#36accb]">Your Eye Health Partners</h2>
        </header>

        <main className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Side - Main Content */}
          <div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-[#36accb] mb-6 leading-tight">
              Precision Care<br />for Every Eye
            </h1>
            <p className="text-gray-700 text-lg mb-8">
              Get the best care for your eyes with our team of experienced professionals. From comprehensive eye exams to specialized treatments, we prioritize your vision health.
            </p>
            <div className="space-x-4">
             <Link  href='/book'><button className="bg-gradient-to-r from-[#36accb] to-[#4ecdc4] text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 mt-8">
    Book Consultation
  </button></Link>
            </div>
          </div>

          {/* Right Side - Testimonials and Images */}
          <div className="space-y-8 md:flex md:space-y-0 md:space-x-8">
            <div className="flex flex-col space-y-8">
              {/* Rating Box */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-6 h-6 ${i < 4 ? 'text-yellow-500' : 'text-gray-300'}`} fill="currentColor" />
                  ))}
                </div>
                <h3 className="text-[#004d40] text-xl font-semibold">4.5/5 Average Rating</h3>
                <p className="text-sm text-gray-600">Based on 7,500+ reviews of Our Satisfied Patients in 2024</p>
              </div>

              {/* Doctor Image 1 */}
              <div className="rounded-lg overflow-hidden">
                <Image src={doctor1} alt="Eye examination" className="object-cover w-full h-64" />
              </div>
            </div>

            <div className="flex flex-col space-y-16 justify-between">
              {/* Doctor Image 2 */}
              <div className="relative">
                <Image src={doctor2} alt="Doctor" className="rounded-lg object-cover w-full h-[300px] md:h-[350px]" />
              </div>

              {/* Experience & Location Stats */}
              <div className="bg-white flex justify-around p-6 rounded-lg shadow-lg">
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#00796b]">10+</div>
                  <p className="text-gray-600">Years of Experience</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#00796b]">15+</div>
                  <p className="text-gray-600">Location Clinics</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default EyeCareLandingPage;
