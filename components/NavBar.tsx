'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import logo from '@/public/logoOpto.jpg';
import Link from 'next/link';

const Header = () => {
  // State to manage sidebar visibility
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Toggle sidebar
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        
        {/* Logo */}
        <div className="flex items-center">
          <Image src={logo} alt="Logo" className="h-8 w-full" />
        </div>

        {/* Hamburger icon for mobile */}
        <button 
          className="block md:hidden text-[#36accb]" 
          onClick={toggleSidebar}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Navigation for desktop */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="text-[#36accb] hover:text-[#36accb]">Home</Link>
          <Link href="/about" className="text-[#36accb] hover:text-[#36accb]">About Us</Link>

          {/* Dropdown */}
          <div className="relative group">
            <button className="text-[#36accb] hover:text-[#36accb]">
              Services
              <svg className="w-4 h-4 inline ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute hidden group-hover:block bg-white shadow-lg mt-2 rounded">
              <Link href="#" className="block px-4 py-2 text-sm text-[#36accb] hover:bg-gray-100">Service 1</Link>
              <Link href="#" className="block px-4 py-2 text-sm text-[#36accb] hover:bg-gray-100">Service 2</Link>
            </div>
          </div>

          <Link href="/blog" className="text-[#36accb] hover:text-[#36accb]">Blog</Link>

          {/* Another Dropdown */}
          <div className="relative group">
            <button className="text-[#36accb] hover:text-[#36accb]">
              Pages
              <svg className="w-4 h-4 inline ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute hidden group-hover:block bg-white shadow-lg mt-2 rounded">
              <Link href="#" className="block px-4 py-2 text-sm text-[#36accb] hover:bg-gray-100">Page 1</Link>
              <Link href="#" className="block px-4 py-2 text-sm text-[#36accb] hover:bg-gray-100">Page 2</Link>
            </div>
          </div>

          <Link href="/contact" className="text-[#36accb] hover:text-[#36accb]">Contact Us</Link>
        </nav>

        {/* Make an Appointment Button */}
        <Link href="/appointment" className="bg-[#36accb] text-white py-2 px-4 rounded hover:bg-[#36accb] hidden md:block">Make an Appointment</Link>
      </div>

      {/* Sidebar for mobile */}
      <div className={`fixed inset-0 bg-gray-800 bg-opacity-75 z-50 transform ${sidebarOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}>
        <div className="bg-white h-full w-64 p-6">
          {/* Close button */}
          <button 
            className="text-gray-600 mb-6" 
            onClick={toggleSidebar}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          {/* Sidebar links */}
          <nav className="space-y-4">
            <Link href="/" className="block text-[#36accb] hover:text-[#36accb]">Home</Link>
            <Link href="/about" className="block text-[#36accb] hover:text-[#36accb]">About Us</Link>
            <Link href="/services" className="block text-[#36accb] hover:text-[#36accb]">Services</Link>
            <Link href="/blog" className="block text-[#36accb] hover:text-[#36accb]">Blog</Link>
            <Link href="/pages" className="block text-[#36accb] hover:text-[#36accb]">Pages</Link>
            <Link href="/contact" className="block text-[#36accb] hover:text-[#36accb]">Contact Us</Link>
            <Link href="/appointment" className="block bg-[#36accb] text-white py-2 px-4 rounded hover:bg-[#36accb]">Make an Appointment</Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
