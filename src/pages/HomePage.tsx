import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FlightSearchForm from '@/components/FlightSearchForm';
import LotusIcon from '@/components/LotusIcon';

interface FlightSearchData {
  departure: string;
  destination: string;
  date: string;
  passengers: number;
}

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const handleSearch = (searchData: FlightSearchData) => {
    // Navigate to results page with search parameters
    const params = new URLSearchParams({
      from: searchData.departure,
      to: searchData.destination,
      date: searchData.date,
      passengers: searchData.passengers.toString(),
    });
    navigate(`/flights?${params.toString()}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <main>
        <section className="relative py-20 px-4 gradient-hero">
          <div className="max-w-7xl mx-auto text-center">
            {/* Hero Header */}
            <div className="mb-12">
              <div className="flex justify-center mb-8">
                <LotusIcon className="text-senbay-blue" size={80} />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Welcome to <span className="text-senbay-blue">SenBay</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
                Discover Vietnam with comfort and style. Like a lotus blooming on water, 
                we connect you to beautiful destinations across the country.
              </p>
            </div>

            {/* Search Form */}
            <div className="max-w-5xl mx-auto">
              <FlightSearchForm 
                onSearch={handleSearch}
                className="bg-white/90 backdrop-blur-sm"
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose SenBay?</h2>
              <p className="text-xl text-gray-600">Experience the beauty of Vietnamese hospitality</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-8 rounded-xl lotus-shadow hover:lotus-shadow-medium transition-smooth bg-white">
                <div className="bg-senbay-blue-subtle p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <svg className="w-8 h-8 text-senbay-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Best Prices</h3>
                <p className="text-gray-600">Compare prices from all Vietnamese airlines and find the best deals for your journey.</p>
              </div>

              <div className="text-center p-8 rounded-xl lotus-shadow hover:lotus-shadow-medium transition-smooth bg-white">
                <div className="bg-senbay-blue-subtle p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <svg className="w-8 h-8 text-senbay-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Easy Booking</h3>
                <p className="text-gray-600">Book your flights in minutes with our simple and secure booking process.</p>
              </div>

              <div className="text-center p-8 rounded-xl lotus-shadow hover:lotus-shadow-medium transition-smooth bg-white">
                <div className="bg-senbay-blue-subtle p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <svg className="w-8 h-8 text-senbay-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.5a9.5 9.5 0 100 19 9.5 9.5 0 000-19z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">24/7 Support</h3>
                <p className="text-gray-600">Our dedicated customer service team is here to help you anytime, anywhere.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Destinations */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Popular Destinations</h2>
              <p className="text-xl text-gray-600">Explore the most beautiful places in Vietnam</p>
            </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { 
                    city: 'Hanoi', 
                    image: '/image/hanoi.jpg', 
                    description: 'The cultural heart of Vietnam' 
                  },
                  { 
                    city: 'Da Nang', 
                    image: '/image/danang.jpg', 
                    description: 'Beautiful beaches and mountains' 
                  },
                  { 
                    city: 'Phu Quoc', 
                    image: '/image/phuquoc.jpg', 
                    description: 'Tropical paradise island' 
                  },
                  { 
                    city: 'Nha Trang', 
                    image: '/image/nhatrang.jpg', 
                    description: 'Coastal beauty and adventures' 
                  },
                  { 
                    city: 'Hue', 
                    image: '/image/hue.webp', 
                    description: 'Ancient imperial city' 
                  },
                  { 
                    city: 'Can Tho', 
                    image: '/image/cantho.jpg', 
                    description: 'Mekong Delta gateway' 
                  },
                ].map((destination) => (
                  <div 
                    key={destination.city} 
                    className="relative overflow-hidden rounded-xl lotus-shadow hover:lotus-shadow-medium transition-smooth cursor-pointer group"
                  >
                    {/* Dùng ảnh trong public/image */}
                    <div 
                      className="h-64 flex items-end p-6 bg-cover bg-center"
                      style={{ backgroundImage: `url(${destination.image})` }}
                    >
                      <div className="text-white">
                        <h3 className="text-2xl font-bold mb-2">{destination.city}</h3>
                        <p className="opacity-90">{destination.description}</p>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-quick"></div>
                  </div>
                ))}
              </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;