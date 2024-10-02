import Image from 'next/image';
import doctorImage4 from '@/public/optologo4.jpg'; // Replace with actual image paths
import doctorImage5 from '@/public/optologo5.jpg'; // Replace with actual image paths
import doctorImage6 from '@/public/optologo6.jpg'; // Replace with actual image paths
// import signature from '@/public/signature.png'; // Replace with actual image paths

const AboutUs = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left Content */}
              
        <div className='grid grid-cols-2 mx-8'>        
        <div className=" gap-4  px-4">
          <div className="rounded-lg overflow-hidden">
            <Image src={doctorImage4} alt="Doctor Image" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-lg my-4 overflow-hidden">
            <Image src={doctorImage5} alt="Doctor Image" className="w-full h-full object-cover" />
          </div>
        </div>
          <div className="rounded-lg overflow-hidden">
            <Image src={doctorImage6} alt="Doctor Image" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Right Content */}
        <div className='mx-8 '>
          <h2 className="text-[#36accb] text-lg font-semibold">About Us</h2>
          <h1 className="text-4xl font-bold text-gray-900 mt-2">Committed to Offering You the Best in Vision Health</h1>
          <div className="mt-4">
            <span className="bg-[#36accb] bg-opacity-10 text-[#36accb] px-3 py-1 rounded-full text-sm mr-2">Pediatric Eye Care</span>
            <span className="bg-[#36accb] bg-opacity-10 text-[#36accb] px-3 py-1 rounded-full text-sm mr-2">Senior Eye Care</span>
            <span className="bg-[#36accb] bg-opacity-10 text-[#36accb] px-3 py-1 rounded-full text-sm">Contact Lens Fitting & Care</span>
          </div>
          <p className="text-gray-600 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nisl urna, dictum vel cursus at, bibendum ac lectus. Nam purus libero, venenatis vel tempus vel, porttitor nec odio.
          </p>
          <blockquote className="mt-6 text-gray-500 italic">
            “Sed feugiat velit in commodo tincidunt. Suspendisse at enim nisl. Nulla facilisi.”
          </blockquote>

          <div className="mt-6 flex items-center">
            <Image src={doctorImage5} alt="Doctor Image" className="w-12 h-12 rounded-full object-cover" />
            <div className="ml-4">
              <p className="font-semibold text-gray-900">Steve Hendery</p>
              <p className="text-gray-500 text-sm">Optometrist</p>
            </div>
            {/* <Image src={signature} alt="Signature" className="ml-8 w-24" /> */}
          </div>

          <div className="mt-8">
            <button className="bg-gradient-to-r from-[#36accb] to-[#4ecdc4] text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 mt-8">
    Explore Products
  </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
