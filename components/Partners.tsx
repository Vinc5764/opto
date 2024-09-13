import React from 'react';

const TrustedPartners = () => {
  const partners = [
    { name: 'Partner 1', logo: '▼' },
    { name: 'Partner 2', logo: '🌐' },
    { name: 'Partner 3', logo: '#' },
    { name: 'Partner 4', logo: '|||' },
    { name: 'Partner 5', logo: '♈' },
  ];

  return (
    <div className="bg-navy-900 text-white p-8 rounded-lg">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">
          Our <span className="text-blue-300">Trusted Partners</span>
          <br />in Your Vision Care
        </h2>
        <div className="flex justify-between items-center">
          {partners.map((partner, index) => (
            <div key={index} className="flex items-center">
              <span className="text-2xl mr-2">{partner.logo}</span>
              <span className="font-semibold">logoipsum</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustedPartners;