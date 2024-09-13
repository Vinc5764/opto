import React from 'react';
import { Calendar, Tag, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import logo from '@/public/optologo11.jpg';

const BlogSection = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Featured Blog Post */}
        <div className="md:col-span-1 bg-gray-800 text-white rounded-lg overflow-hidden relative">
          <Image src={logo} alt="Featured blog post" className="w-full h-full object-cover absolute mix-blend-overlay opacity-50" />
          <div className="p-6 relative z-10">
            <h3 className="text-[#36accb] text-lg mb-2">Latest Blog & Update</h3>
            <h2 className="text-3xl font-bold mb-4">Check Out Our Latest Blog</h2>
            <p className="mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            <button className="bg-[#36accb] text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
              Discover More
            </button>
          </div>
        </div>

        {/* Blog Post 1 */}
        <div className="bg-white rounded-lg overflow-hidden shadow-md">
          <Image src={logo} alt="Glasses and contact lenses" className="w-full h-48 object-cover" />
          <div className="p-6">
            <div className="flex items-center text-sm text-gray-500 mb-2">
              <Calendar size={16} className="mr-2" />
              <span>August 20, 2024</span>
              <Tag size={16} className="ml-4 mr-2" />
              <span>Vision Correction</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Choosing Between Glasses and Contact Lenses: Pros and Cons</h3>
            <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sagittis iaculis facilisis. Aenean maximus interdum cursus...</p>
            <a href="#" className="text-[#36accb] hover:text-blue-600 inline-flex items-center">
              Read more
              <ArrowRight size={16} className="ml-2" />
            </a>
          </div>
        </div>

        {/* Blog Post 2 */}
        <div className="bg-white rounded-lg overflow-hidden shadow-md">
          <Image src={logo} alt="Eye examination" className="w-full h-48 object-cover" />
          <div className="p-6">
            <div className="flex items-center text-sm text-gray-500 mb-2">
              <Calendar size={16} className="mr-2" />
              <span>August 17, 2024</span>
              <Tag size={16} className="ml-4 mr-2" />
              <span>Eye Health Tips</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Understanding Glaucoma: Symptoms, Causes, and Treatment Options</h3>
            <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sagittis iaculis facilisis. Aenean maximus interdum cursus...</p>
            <a href="#" className="text-[#36accb] hover:text-blue-600 inline-flex items-center">
              Read more
              <ArrowRight size={16} className="ml-2" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
