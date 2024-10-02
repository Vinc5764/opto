import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import Link from 'next/link';
import optologo from '@/public/logoOpto.jpg';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Link href="/" className="flex-shrink-0 flex items-center">
            <Image src={optologo} alt="Optics Logo" className="w-24" />
          </Link>
            </div>
            <p className="text-gray-600 mb-4">
              At Kountry Eyecare Clinic, we are dedicated to providing exceptional eye care services tailored to your individual needs. 
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Services</h3>
            <ul className="space-y-2">
              {['General Eyecare', 'Pediatric Optometry', 'Geriatic Optometry', 'OCT/VFT', 'Contact Lens Fitting'].map((item, index) => (
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
                +233 548 481 866 +233 548 503 833
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-[#36accb]" />
                kountryeyecare@gmail.com
              </li>
              <li className="flex items-center">
                <MapPin size={18} className="mr-2 text-[#36accb]" />
                Goil Fueling Station  , Spintex Road
              </li>
            </ul>
            <div className="flex space-x-4 mt-4">
  {[Facebook, Instagram, Twitter].map((Icon, index) => (
    <a
      key={index}
      href={
        index === 0
          ? "https://www.facebook.com/share/GHbzVCWJ4DMbfNQZ/?mibextid=LQQJ4d"
          : index === 1
          ? "https://www.instagram.com/kountryeyecare?igsh=djd1cHJ0b2NpdWhh"
          : index === 2
          ? "https://x.com/kountryeyecare?s=11&t=jdMw6OvVfvaMi3dkuaNLcA"
          : ""
      }
      className="text-[#36accb] "
      target="_blank" // Opens the link in a new tab
      rel="noopener noreferrer" // Ensures security when opening new tabs
    >
      <Icon size={24} />
    </a>
  ))}
</div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm mb-4 md:mb-0">
            Copyright © 2024 KountryEyeCare, All rights reserved.
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
