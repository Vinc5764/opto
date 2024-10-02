import Image, { StaticImageData } from 'next/image';
import React from 'react';
import doctorTeam from '@/public/optologo9.jpg';

// Adding the className prop type and passing it to the component
interface DoctorCardProps {
  name: string;
  role: string;
  imageSrc: StaticImageData;
  className?: string;
}

const DoctorCard: React.FC<DoctorCardProps> = ({ name, role, imageSrc, className }) => (
  <div className={`relative rounded-lg overflow-hidden shadow-md ${className}`}>
    <Image src={imageSrc} alt={`Picture of ${name}`} className="w-full h-64 object-cover" />
    <div className="absolute bottom-0 left-0 right-0 bg-[#36accb] text-white p-4">
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-white">{role}</p> {/* Updated role text color for readability */}
    </div>
  </div>
);

const EyeCareExperts = () => {
  const doctors = [
    { name: "Steve Hendery", role: "Optometrist", image: doctorTeam },
    { name: "Emily Gross", role: "Optometrist", image: doctorTeam },
    { name: "Frans Govert", role: "Optometrist", image: doctorTeam },
  ];

  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-[#36accb] text-2xl font-bold mb-2">Our Doctors</h2>
            <h3 className="text-4xl font-bold text-navy-900 mb-4">
              Meet Your Eye Care Experts
            </h3>
            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <button className="bg-gradient-to-r from-[#36accb] to-[#4ecdc4] text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 mt-8">
    Book Consultation
  </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {doctors.map((doctor, index) => (
              <DoctorCard
                key={index}
                name={doctor.name}
                role={doctor.role}
                imageSrc={doctor.image}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EyeCareExperts;
