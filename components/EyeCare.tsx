import Image from 'next/image';
import React from 'react';
import doctorTeam from '@/public/optologo9.jpg';

const DoctorCard = ({ name, role, imageSrc }) => (
  <div className="relative rounded-lg overflow-hidden shadow-md">
    <Image src={imageSrc} alt={name} className="w-full h-64 object-cover" />
    <div className="absolute bottom-0 left-0 right-0 bg-[#36accb] text-white p-4">
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-[#36accb]">{role}</p>
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
            <button className="bg-[#36accb] text-white font-semibold py-2 px-6 rounded-md hover:bg-blue-700 transition duration-300">
              Discover More
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {doctors.map((doctor, index) => (
              <DoctorCard key={index} name={doctor.name} role={doctor.role} imageSrc={doctor.image} className='' />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EyeCareExperts;
