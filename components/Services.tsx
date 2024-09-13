import React from 'react';
import { ChevronUp } from 'lucide-react';
import Image, { StaticImageData } from 'next/image';
import logo from '@/public/optologo7.jpg';

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
    { title: "Dry Eye Treatment", image: logo },
    { title: "Eye Disease Care", image: logo },
    { title: "Surgical Eye Care", image: logo },
    { title: "Contact Lens Fitting", image: logo },
    { title: "Color Vision Testing", image: logo },
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
          <div className="bg-[#36accb] text-white rounded-lg p-6 flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-4">
              Take the first step toward healthier eyes and see the world more clearly – contact us now
            </h3>
            <p className="mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <button className="bg-[#36accb] text-white font-semibold py-2 px-4 rounded hover:bg-[#36accb] transition duration-300 self-start">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EyeCareServicesGrid;
