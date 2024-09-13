import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <div className="text-[#36accb] mr-2">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">OPTICS</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
              luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Quick Links</h3>
            <ul className="space-y-2">
              {['About Us', 'Our Services', 'Contact Us', 'Our Doctors', 'Pricing'].map((item, index) => (
                <li key={index}><a href="#" className="text-gray-600 hover:text-[#36accb]">{item}</a></li>
              ))}
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Opening Hours</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Weekdays: 8.00 AM - 5.00 PM</li>
              <li>Sat : 9.00 AM - 2.00 PM</li>
              <li>Sun : Closed on Sundays</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Contact Info</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-[#36accb]" />
                +12 3456 7890
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-[#36accb]" />
                optics@example.net
              </li>
              <li className="flex items-center">
                <MapPin size={18} className="mr-2 text-[#36accb]" />
                593 Where Road, London
              </li>
            </ul>
            <div className="flex space-x-4 mt-4">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, index) => (
                <a key={index} href="#" className="text-[#36accb] hover:text-blue-600">
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm mb-4 md:mb-0">
            Copyright © 2024 Optics, All rights reserved. Present by CreedCreatives
          </p>
          <div className="space-x-4">
            <a href="#" className="text-gray-600 hover:text-[#36accb] text-sm">Terms & Service</a>
            <a href="#" className="text-gray-600 hover:text-[#36accb] text-sm">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
