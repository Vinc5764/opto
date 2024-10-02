import React from 'react';
import { ChevronUp } from 'lucide-react';
import Image, { StaticImageData } from 'next/image';
import logo from '@/public/optologo7.jpg';
import Link from 'next/link';

interface EyecareProps{
  title: string;
  imageSrc: StaticImageData;
}

const EyeCareService:React.FC<EyecareProps> = ({ title, imageSrc }) => (
  <div className="relative rounded-lg overflow-hidden shadow-md">
    <Image src={imageSrc} alt={title} className="w-full h-48 object-cover" />
    <div className="absolute bottom-0 left-0 right-0 bg-[#36accb] text-white p-3 flex justify-between items-center">
      <span className="font-semibold">{title}</span>
      <ChevronUp className="w-5 h-5" />
    </div>
  </div>
);

const EyeCareServicesGrid = () => {
  const services = [
    { title: "General Eyecare", image: logo },
    { title: "Pediatric Optometry", image: logo },
    { title: "Geriatic Optometry", image: logo },
    { title: "OCT/VFT", image: logo },
    { title: "Contact Lens Fitting", image: logo },
  ];

  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
          Professional Eye Care Offerings
        </h2>
        <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <EyeCareService key={index} title={service.title} imageSrc={service.image} />
          ))}
          <div className="bg-gradient-to-r from-[#36accb] to-[#4ecdc4] text-white rounded-lg p-8 flex flex-col justify-center shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl">
  <h3 className="text-3xl font-extrabold mb-4 text-white">
    Specialist Consultation
  </h3>
  <p className="text-lg mb-4 font-medium text-gray-100">
    Low Vision
  </p>
  <p className="text-lg mb-6 font-medium text-gray-100">
    Binocular Vision
  </p>
  <Link href='/book'><button className="bg-white text-[#36accb] font-bold py-3 px-6 rounded-full hover:bg-[#4ecdc4] hover:text-white hover:shadow-lg transition duration-300 self-start">
    Consultation
  </button></Link>
</div>

        </div>
      </div>
    </div>
  );
};

export default EyeCareServicesGrid;
