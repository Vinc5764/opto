import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactInfoSection = () => {
  return (
    <div className="bg-white lg:flex p-8 max-w-6xl  mx-auto">
      <div className='mr-8'>
      <h2 className="text-blue-500 text-xl mb-2">Contact Us</h2>
      <h1 className="text-4xl font-bold text-gray-900 mb-8">
        Talk to Us About<br />
        Your Vision and<br />
        Eye Health
      </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ContactCard
          icon={<Phone className="w-6 h-6" />}
          title="Call Center"
          info="+233 548 481 866   +233 548 503 833"
        />
        <ContactCard
          icon={<Mail className="w-6 h-6" />}
          title="Email Address"
          info="kountryeyecare@gmail.com"
        />
        <ContactCard
          icon={<MapPin className="w-6 h-6" />}
          title="Our Location"
          info="Goil Fueling Station ,Basket Junction , Spintex Road"
        />
      </div>
    </div>
  );
};

const ContactCard = ({ icon, title, info }) => {
  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg relative overflow-hidden">
      <div className="mb-4 bg-blue-500 inline-block p-2 rounded-lg">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-300">{info}</p>
      <div className="absolute top-1/2 right-0 transform translate-x-1/4 -translate-y-1/2">
        <svg className="w-32 h-32 text-gray-800 opacity-20" viewBox="0 0 100 100">
          <path d="M0,50 a1,1 0 0,0 100,0" fill="none" stroke="currentColor" strokeWidth="20" />
        </svg>
      </div>
    </div>
  );
};

export default ContactInfoSection;