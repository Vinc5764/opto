import React from 'react';
import { Star } from 'lucide-react';
import Image, { StaticImageData } from 'next/image';
import logo from '@/public/optologo10.jpg';

interface TestimonialProps{
  quote: string;
  name: string;
  role: string;
  imageSrc: StaticImageData;
  rating:  number;

}
const TestimonialCard: React.FC<TestimonialProps> = ({ quote, name, role, imageSrc, rating }) => (
  <div className="bg-gradient-to-r from-[#36accb] to-[#4ecdc4] rounded-lg p-8 my-6 shadow-lg hover:shadow-xl transition-transform transform hover:scale-105">
    <div className="flex mb-4 space-x-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-6 h-6 transition-colors duration-300 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
          fill="currentColor"
        />
      ))}
    </div>
    <p className="text-white italic text-lg mb-6 leading-relaxed">"{quote}"</p>
    <div className="flex items-center">
      <Image src={imageSrc} alt={name} className="w-14 h-14 rounded-full mr-6 object-cover border-2 border-white" />
      <div>
        <h4 className="font-bold text-white text-lg">{name}</h4>
        <p className="text-gray-200 text-sm">{role}</p>
      </div>
    </div>
  </div>
);


const ProgressBar = ({ label, percentage }:{label:string, percentage:number}) => (
  <div className="mb-4">
    <div className="flex justify-between mb-1">
      <span className="text-navy-900 font-semibold">{label}</span>
      <span className="text-[#36accb] font-semibold">{percentage}%</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2.5">
      <div className="bg-[#36accb] h-2.5 rounded-full" style={{ width: `${percentage}%` }}></div>
    </div>
  </div>
);

const TestimonialsReviews = () => {
  const testimonials = [
    {
      quote: "Sed malesuada dolor quam, et commodo justo maximus eget. Ut convallis id sem at fermentum. Morbi rutrum accumsan ipsum.",
      name: "Frans Edwin",
      role: "Programmer",
      imageSrc: logo,
      rating: 4.5
    },
    {
      quote: "Nam pharetra facilisis urna, eget eleifend tellus tempor ornare. In blandit consequat semper, aliquet eu lobortis eget.",
      name: "Katy Aleena",
      role: "Accountant",
      imageSrc: logo,
      rating: 5
    }
  ];

  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
         <div className="bg-white p-8 rounded-lg shadow-lg">
  <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-[#36accb] to-[#4ecdc4] text-3xl font-bold mb-3">
    Testimonials & Reviews
  </h2>
  <h3 className="text-3xl font-bold text-navy-900 mb-6 leading-tight">
    Words from Our Patients, See What They Have to Say
  </h3>
  <p className="text-gray-600 text-lg leading-relaxed mb-8">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Duis est lacus, dignissim ut justo a, lobortis mattis quam.
  </p>
  
  <div className="space-y-4">
    <ProgressBar label="Patients Satisfaction" percentage={98} />
    <ProgressBar label="Doctor Rating" percentage={95} />
  </div>

  <button className="bg-gradient-to-r from-[#36accb] to-[#4ecdc4] text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 mt-8">
    Explore Products
  </button>
</div>

        </div>
      </div>
    </div>
  );
};

export default TestimonialsReviews;
