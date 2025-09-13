import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Flight, formatPrice } from '@/data/mockFlights';
import LotusIcon from '../LotusIcon';

interface ConfirmationProps {
  flight: Flight;
  passengerCount: number;
  bookingReference: string;
  onNewSearch: () => void;
}

const Confirmation: React.FC<ConfirmationProps> = ({ 
  flight, 
  passengerCount, 
  bookingReference,
  onNewSearch 
}) => {
  const totalPrice = Math.round(flight.price * passengerCount * 1.1);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Success Header */}
      <div className="text-center mb-12">
        <div className="flex justify-center mb-6">
          <div className="bg-travel-success/10 p-4 rounded-full">
            <svg className="w-16 h-16 text-travel-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Booking Confirmed!</h1>
        <p className="text-xl text-gray-600">Thank you for choosing SenBay</p>
        <div className="mt-6 bg-senbay-blue-subtle p-4 rounded-lg inline-block">
          <p className="text-sm font-medium text-gray-700">Booking Reference</p>
          <p className="text-2xl font-bold text-senbay-blue">{bookingReference}</p>
        </div>
      </div>

      {/* Flight Details */}
      <Card className="p-8 mb-8">
        <div className="flex items-center mb-6">
          <LotusIcon className="text-senbay-blue mr-3" size={32} />
          <h2 className="text-2xl font-semibold text-gray-900">Flight Details</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="bg-senbay-blue-subtle text-senbay-blue px-4 py-2 rounded-full font-semibold">
                {flight.airline}
              </div>
              <span className="text-gray-600">{flight.flightNumber}</span>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Departure</h3>
                <div className="text-2xl font-bold text-gray-900">{flight.departure.time}</div>
                <div className="text-gray-600">{flight.departure.city} ({flight.departure.airport})</div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Arrival</h3>
                <div className="text-2xl font-bold text-gray-900">{flight.arrival.time}</div>
                <div className="text-gray-600">{flight.arrival.city} ({flight.arrival.airport})</div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Flight Duration</h3>
                <div className="text-gray-600">{flight.duration} • {flight.stops === 0 ? 'Direct flight' : `${flight.stops} stop(s)`}</div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Booking Summary</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Passengers</span>
                  <span>{passengerCount}</span>
                </div>
                <div className="flex justify-between">
                  <span>Aircraft</span>
                  <span>{flight.aircraft}</span>
                </div>
                <div className="flex justify-between border-t border-gray-200 pt-3">
                  <span className="font-semibold">Total Paid</span>
                  <span className="font-bold text-senbay-blue">{formatPrice(totalPrice)}</span>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <h4 className="font-semibold text-yellow-800 mb-2">Important Information</h4>
              <ul className="text-sm text-yellow-700 space-y-1">
                <li>• Arrive at airport at least 2 hours before departure</li>
                <li>• Check-in opens 24 hours before departure</li>
                <li>• Bring valid ID or passport</li>
                <li>• Confirmation email sent to your registered email</li>
              </ul>
            </div>
          </div>
        </div>
      </Card>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
        <Button variant="senbay-outline" size="lg">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4-4m0 0l-4 4m4-4v12" />
          </svg>
          Download Ticket
        </Button>
        <Button variant="senbay" size="lg" onClick={onNewSearch}>
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          Book Another Flight
        </Button>
      </div>
    </div>
  );
};

export default Confirmation;