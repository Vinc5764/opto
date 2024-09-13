import React from 'react';
import { Phone, Mail, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const AppointmentBooking = () => {
  return (
    <div className="flex flex-col md:flex-row bg-white p-8 gap-8">
      {/* Left Column */}
      <div className="md:w-1/2">
        <h3 className="text-[#36accb] font-semibold mb-2">Make an Appointment</h3>
        <h1 className="text-4xl font-bold mb-4">Book Your Visit, Make an Appointment Now</h1>
        <p className="text-gray-600 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam iaculis ornare lacus, et porttitor dui accumsan non. Ut vitae rutrum libero, id mollis dui. Aliquam erat volutpat.
        </p>
        
        <div className="bg-gray-100 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Contact Us for More Information</h3>
          <div className="flex items-center mb-4">
            <div className="bg-[#36accb] p-2 rounded-lg mr-4">
              <Phone className="text-white" size={24} />
            </div>
            <div>
              <p className="font-semibold">Call Center</p>
              <p>+12 3456 7890</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="bg-[#36accb] p-2 rounded-lg mr-4">
              <Mail className="text-white" size={24} />
            </div>
            <div>
              <p className="font-semibold">Email Address</p>
              <p>optics@example.net</p>
            </div>
          </div>
        </div>
        
        <div className="mt-8">
          <p className="font-semibold mb-2">Social Media</p>
          <div className="flex space-x-4">
            <Facebook className="text-[#36accb]" size={24} />
            <Instagram className="text-pink-600" size={24} />
            <Twitter className="text-[#36accb]" size={24} />
            <Youtube className="text-red-600" size={24} />
          </div>
        </div>
      </div>
      
      {/* Right Column - Form */}
      <div className="md:w-1/2 bg-[#36accb] p-6 rounded-lg">
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-white mb-1 font-semibold">Your Name *</label>
            <input type="text" id="name" placeholder="Your name" className="w-full p-2 border rounded" />
          </div>
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label htmlFor="email" className="block mb-1 text-white font-semibold">Email *</label>
              <input type="email" id="email" placeholder="Your email" className="w-full p-2 border rounded" />
            </div>
            <div className="w-1/2 text-white">
              <label htmlFor="phone" className="block mb-1 font-semibold">Telephone *</label>
              <input type="tel" id="phone" placeholder="Your telephone" className="w-full p-2 border rounded" />
            </div>
          </div>
          <div className="flex space-x-4">
            <div className="w-1/2 text-white">
              <label htmlFor="date" className="block mb-1 font-semibold">Date *</label>
              <input type="text" id="date" placeholder="mm-dd-yyyy" className="w-full p-2 border rounded" />
            </div>
            <div className="w-1/2">
              <label htmlFor="service" className="block mb-1 text-white font-semibold">Select Your Service</label>
              <select id="service" className="w-full p-2 border rounded">
                <option>Select service</option>
              </select>
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block mb-1 text-white font-semibold">Message</label>
            <textarea id="message" rows={4} placeholder="Add your message here" className="w-full p-2 border rounded"></textarea>
          </div>
          <button type="submit" className="bg-[#36accb] text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
            Make an Appointment
          </button>
        </form>
      </div>
    </div>
  );
};

export default AppointmentBooking;
