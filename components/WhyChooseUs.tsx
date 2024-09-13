import Image from 'next/image';
import doctorTeam from '@/public/optologo8.jpg'; // Replace with your actual image path

const WhyChooseUs = () => {
  return (
    <section className="bg-[#36accb] py-16 mx-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Content */}
        <div>
          <h3 className="text-[#36accb] text-lg font-semibold">Why Choose Us</h3>
          <h1 className="text-4xl font-bold text-white mt-2">Why We&apos;re Your Best Choice</h1>
          <p className="text-gray-300 mt-4 max-w-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Mauris ex elit, efficitur non nisl vel.
          </p>

          <div className="mt-8 space-y-4">
            {/* Card 1 */}
            <div className="bg-[#36accb] rounded-lg p-4">
              <h3 className="text-lg font-bold text-blue-900">Advanced Technology</h3>
              <p className="text-gray-600 text-sm">
                We bring the right people together to challenge established thinking and drive transformation in 2020.
              </p>
            </div>
            {/* Card 2 */}
            <div className="bg-gray-700 rounded-lg p-4">
              <h3 className="text-lg font-bold text-white">Experienced and Professional</h3>
              <p className="text-gray-400 text-sm">
                We bring the right people together to challenge established thinking and drive transformation in 2020.
              </p>
            </div>
            {/* Card 3 */}
            <div className="bg-gray-700 rounded-lg p-4">
              <h3 className="text-lg font-bold text-white">Personalized Care</h3>
              <p className="text-gray-400 text-sm">
                We bring the right people together to challenge established thinking and drive transformation in 2020.
              </p>
            </div>
            {/* Card 4 */}
            <div className="bg-gray-700 rounded-lg p-4">
              <h3 className="text-lg font-bold text-white">Comprehensive Services</h3>
              <p className="text-gray-400 text-sm">
                We bring the right people together to challenge established thinking and drive transformation in 2020.
              </p>
            </div>
          </div>
        </div>

        {/* Right Content: Image & Statistic */}
        <div className="relative">
          <Image
            src={doctorTeam}
            alt="Doctors Team"
            className="rounded-lg w-full h-full object-cover"
          />
          <div className="absolute bottom-4 left-4 bg-[#36accb] p-4 rounded-lg">
            <h2 className="text-4xl font-bold text-white">150K+</h2>
            <p className="text-gray-400">Satisfied Patients</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
