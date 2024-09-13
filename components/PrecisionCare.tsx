import React from 'react';
import { Star } from 'lucide-react';
import Image from 'next/image';
import doctor1 from '@/public/optologo3.jpg';
import doctor2 from '@/public/optologo2.png';

const EyeCareLandingPage = () => {
  return (
    <div className="bg-[#36accb] p-8 font-sans">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8">
          <h2 className="text-[#36accb] text-xl font-semibold">Your Eye Health Partners</h2>
        </header>

        <main className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Precision Care<br />for Every Eye
            </h1>
            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu molestie odio. Vestibulum cursus nisi sed imperdiet ultricies. Nullam tellus sapien, efficitur eget ligula at.
            </p>
            <div className="space-x-4">
              <button className="bg-white text-[#36accb] px-6 py-2 rounded-md hover:bg-white transition">
                Discover More
              </button>
              <button className="text-white hover:underline">
                Find Doctor →
              </button>
            </div>
          </div>

          <div className="space-y-6 md:flex">
            <div className="gap-8 inline-flex flex-col">
              <div className="bg-white p-4 rounded-lg shadow">
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-5 h-5 ${i < 4 ? 'text-yellow-400' : 'text-yellow-200'}`} fill="currentColor" />
                  ))}
                </div>
                <h3 className="font-bold text-lg">4.5/5 Average Rating</h3>
                <p className="text-sm text-gray-600">Based on 7,500+ reviews of Our Satisfied Patients in 2024</p>
              </div>

              <div className="">
                <Image src={doctor1} alt="Eye examination" className="w-full rounded-lg" />
              </div>
            </div>

            <div className="flex flex-col gap-y-24">
              <div className="inline-flex">
                <Image src={doctor2} alt="Doctor" className="float-right w-[40vh] md:mt-[-7rem] ml-4 rounded-lg" />
              </div>
              <div className="bg-white flex p-4 ml-3 mb-[5rem] rounded-lg shadow">
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-[#36accb]">10+</div>
                  <div>Years of Experience</div>
                </div>
                <div className="ml-8 space-y-2">
                  <div className="text-4xl font-bold text-[#36accb]">15+</div>
                  <div>Location Clinic</div>
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
