import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Flight, formatPrice } from '@/data/mockFlights';

interface FlightCardProps {
  flight: Flight;
  onSelect: (flight: Flight) => void;
}

const FlightCard: React.FC<FlightCardProps> = ({ flight, onSelect }) => {
  return (
    <Card className="p-6 hover:lotus-shadow-medium transition-smooth cursor-pointer">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
        {/* Flight Info */}
        <div className="flex-1">
          <div className="flex items-center space-x-4 mb-3">
            <div className="bg-senbay-blue-subtle text-senbay-blue px-3 py-1 rounded-full text-sm font-semibold">
              {flight.airline}
            </div>
            <span className="text-gray-500 text-sm">{flight.flightNumber}</span>
            <span className="text-gray-500 text-sm">{flight.aircraft}</span>
          </div>

          {/* Route and Times */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
            {/* Departure */}
            <div className="text-center md:text-left">
              <div className="text-2xl font-bold text-gray-900">{flight.departure.time}</div>
              <div className="text-sm text-gray-600">{flight.departure.city}</div>
              <div className="text-xs text-gray-500">{flight.departure.airport}</div>
            </div>

            {/* Duration and Stops */}
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-1">
                <div className="w-3 h-3 bg-senbay-blue rounded-full"></div>
                <div className="flex-1 h-0.5 bg-gray-300 relative">
                  {flight.stops === 0 && (
                    <div className="absolute inset-0 bg-senbay-blue"></div>
                  )}
                </div>
                <div className="w-3 h-3 bg-senbay-blue rounded-full"></div>
              </div>
              <div className="text-sm text-gray-600">{flight.duration}</div>
              <div className="text-xs text-gray-500">
                {flight.stops === 0 ? 'Direct' : `${flight.stops} stop${flight.stops > 1 ? 's' : ''}`}
              </div>
            </div>

            {/* Arrival */}
            <div className="text-center md:text-right">
              <div className="text-2xl font-bold text-gray-900">{flight.arrival.time}</div>
              <div className="text-sm text-gray-600">{flight.arrival.city}</div>
              <div className="text-xs text-gray-500">{flight.arrival.airport}</div>
            </div>
          </div>
        </div>

        {/* Price and Select Button */}
        <div className="lg:ml-8 flex flex-col items-center lg:items-end space-y-3">
          <div className="text-center lg:text-right">
            <div className="text-2xl font-bold text-senbay-blue">
              {formatPrice(flight.price)}
            </div>
            <div className="text-sm text-gray-500">per person</div>
          </div>
          <Button 
            variant="senbay" 
            onClick={() => onSelect(flight)}
            className="w-full lg:w-auto px-8"
          >
            Select Flight
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default FlightCard;