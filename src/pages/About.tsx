import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LotusIcon from '@/components/LotusIcon';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-8">
            <LotusIcon className="text-senbay-blue" size={80} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-senbay-blue">SenBay</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Born from the beauty of the Vietnamese lotus flower, SenBay connects travelers 
            to the stunning destinations across Vietnam with grace, reliability, and comfort.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                SenBay was founded with a simple vision: to make traveling across Vietnam 
                as beautiful and serene as a lotus blooming on water. Just as the lotus 
                rises above the surface to reveal its beauty, we elevate your travel 
                experience above the ordinary.
              </p>
              <p>
                Our name combines "Sen" (lotus in Vietnamese) with "Bay" (to fly), 
                symbolizing our commitment to helping you soar to new destinations 
                while staying rooted in Vietnamese values of hospitality and care.
              </p>
              <p>
                Today, we're proud to be Vietnam's leading flight booking platform, 
                connecting millions of travelers to their dream destinations with 
                competitive prices, excellent service, and the warmth of Vietnamese hospitality.
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-senbay-blue-subtle to-white rounded-2xl p-8 lotus-shadow">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <div className="bg-senbay-blue text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 text-sm">1</div>
                <span>Make travel accessible and affordable for everyone</span>
              </li>
              <li className="flex items-start">
                <div className="bg-senbay-blue text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 text-sm">2</div>
                <span>Showcase the incredible beauty of Vietnam to the world</span>
              </li>
              <li className="flex items-start">
                <div className="bg-senbay-blue text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 text-sm">3</div>
                <span>Provide exceptional customer service with Vietnamese warmth</span>
              </li>
              <li className="flex items-start">
                <div className="bg-senbay-blue text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 text-sm">4</div>
                <span>Support sustainable tourism that benefits local communities</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-xl lotus-shadow">
              <div className="bg-senbay-blue-subtle p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <LotusIcon className="text-senbay-blue" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Purity</h3>
              <p className="text-gray-600">
                Like the pure lotus flower, we maintain transparency and honesty 
                in all our dealings with customers and partners.
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-xl lotus-shadow">
              <div className="bg-senbay-blue-subtle p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-senbay-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Care</h3>
              <p className="text-gray-600">
                We treat every customer with the warmth and hospitality that 
                Vietnam is famous for, ensuring their journey is memorable.
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-xl lotus-shadow">
              <div className="bg-senbay-blue-subtle p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-senbay-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Excellence</h3>
              <p className="text-gray-600">
                We continuously strive for excellence in service, technology, 
                and customer satisfaction, always raising above expectations.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            SenBay is powered by a passionate team of travel enthusiasts, technology experts, 
            and customer service professionals who share a love for Vietnam and a commitment 
            to exceptional service.
          </p>
          
          <div className="bg-senbay-blue-subtle rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Join Our Journey</h3>
            <p className="text-gray-700 mb-6">
              We're always looking for talented individuals who share our passion for 
              travel and commitment to excellence. Come be part of the SenBay family!
            </p>
            <div className="text-senbay-blue font-semibold">
              careers@senbay.vn
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;