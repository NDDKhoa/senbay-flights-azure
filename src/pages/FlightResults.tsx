import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FlightCard from '@/components/FlightCard';
import PassengerDetails from '@/components/booking/PassengerDetails';
import PaymentForm from '@/components/booking/PaymentForm';
import Confirmation from '@/components/booking/Confirmation';
import { Button } from '@/components/ui/button';
import { mockFlights, Flight } from '@/data/mockFlights';

type BookingStep = 'search' | 'passengers' | 'payment' | 'confirmation';

const FlightResults: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  
  const [currentStep, setCurrentStep] = useState<BookingStep>('search');
  const [selectedFlight, setSelectedFlight] = useState<Flight | null>(null);
  const [passengers, setPassengers] = useState<any[]>([]);
  const [sortBy, setSortBy] = useState<'price' | 'duration'>('price');
  const [bookingReference, setBookingReference] = useState('');

  // Get search parameters
  const from = searchParams.get('from') || '';
  const to = searchParams.get('to') || '';
  const date = searchParams.get('date') || '';
  const passengerCount = parseInt(searchParams.get('passengers') || '1');

  // Filter and sort flights
  const filteredFlights = mockFlights.filter(flight => 
    flight.departure.city.toLowerCase().includes(from.toLowerCase()) &&
    flight.arrival.city.toLowerCase().includes(to.toLowerCase())
  );

  const sortedFlights = [...filteredFlights].sort((a, b) => {
    if (sortBy === 'price') {
      return a.price - b.price;
    } else {
      // Sort by duration (convert duration string to minutes for comparison)
      const durationA = parseInt(a.duration.split('h')[0]) * 60 + parseInt(a.duration.split('h')[1]?.split('m')[0] || '0');
      const durationB = parseInt(b.duration.split('h')[0]) * 60 + parseInt(b.duration.split('h')[1]?.split('m')[0] || '0');
      return durationA - durationB;
    }
  });

  const handleFlightSelect = (flight: Flight) => {
    setSelectedFlight(flight);
    setCurrentStep('passengers');
  };

  const handlePassengerSubmit = (passengerData: any[]) => {
    setPassengers(passengerData);
    setCurrentStep('payment');
  };

  const handlePaymentSubmit = (paymentData: any) => {
    // Mock payment processing
    setBookingReference(`SB${Date.now().toString().slice(-6)}`);
    setCurrentStep('confirmation');
  };

  const handleNewSearch = () => {
    navigate('/');
  };

  const renderBookingStep = () => {
    if (!selectedFlight) return null;

    switch (currentStep) {
      case 'passengers':
        return (
          <PassengerDetails
            passengerCount={passengerCount}
            onSubmit={handlePassengerSubmit}
            onBack={() => setCurrentStep('search')}
          />
        );
      case 'payment':
        return (
          <PaymentForm
            flight={selectedFlight}
            passengerCount={passengerCount}
            onSubmit={handlePaymentSubmit}
            onBack={() => setCurrentStep('passengers')}
          />
        );
      case 'confirmation':
        return (
          <Confirmation
            flight={selectedFlight}
            passengerCount={passengerCount}
            bookingReference={bookingReference}
            onNewSearch={handleNewSearch}
          />
        );
      default:
        return null;
    }
  };

  if (currentStep !== 'search') {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        {renderBookingStep()}
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Search Summary */}
        <div className="bg-white rounded-xl lotus-shadow p-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                {from} → {to}
              </h1>
              <p className="text-gray-600">
                {new Date(date).toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })} • {passengerCount} passenger{passengerCount > 1 ? 's' : ''}
              </p>
            </div>
            <Button variant="senbay-outline" onClick={() => navigate('/')}>
              Modify Search
            </Button>
          </div>
        </div>

        {/* Results Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 sm:mb-0">
            {sortedFlights.length} flight{sortedFlights.length !== 1 ? 's' : ''} found
          </h2>
          
          {/* Sort Options */}
          <div className="flex space-x-4">
            <Button
              variant={sortBy === 'price' ? 'senbay' : 'senbay-ghost'}
              onClick={() => setSortBy('price')}
              size="sm"
            >
              Sort by Price
            </Button>
            <Button
              variant={sortBy === 'duration' ? 'senbay' : 'senbay-ghost'}
              onClick={() => setSortBy('duration')}
              size="sm"
            >
              Sort by Duration
            </Button>
          </div>
        </div>

        {/* Flight Results */}
        {sortedFlights.length > 0 ? (
          <div className="space-y-4">
            {sortedFlights.map((flight) => (
              <FlightCard
                key={flight.id}
                flight={flight}
                onSelect={handleFlightSelect}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="bg-gray-100 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No flights found</h3>
            <p className="text-gray-600 mb-6">
              We couldn't find any flights matching your search criteria. 
              Try adjusting your search or check our available destinations.
            </p>
            <Button variant="senbay" onClick={() => navigate('/')}>
              Try New Search
            </Button>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default FlightResults;