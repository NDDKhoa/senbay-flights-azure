import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';

interface FlightSearchData {
  departure: string;
  destination: string;
  date: string;
  passengers: number;
}

interface FlightSearchFormProps {
  onSearch: (data: FlightSearchData) => void;
  className?: string;
}

const FlightSearchForm: React.FC<FlightSearchFormProps> = ({ onSearch, className = "" }) => {
  const [formData, setFormData] = useState<FlightSearchData>({
    departure: '',
    destination: '',
    date: '',
    passengers: 1,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(formData);
  };

  const handleInputChange = (field: keyof FlightSearchData) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData(prev => ({
      ...prev,
      [field]: field === 'passengers' ? parseInt(e.target.value) || 1 : e.target.value,
    }));
  };

  return (
    <Card className={`p-6 lotus-shadow-medium ${className}`}>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Departure City */}
          <div className="space-y-2">
            <Label htmlFor="departure" className="text-sm font-semibold text-gray-700">
              From
            </Label>
            <Input
              id="departure"
              type="text"
              placeholder="Departure city"
              value={formData.departure}
              onChange={handleInputChange('departure')}
              className="h-12 rounded-lg border-2 focus:border-senbay-blue transition-quick"
              required
            />
          </div>

          {/* Destination City */}
          <div className="space-y-2">
            <Label htmlFor="destination" className="text-sm font-semibold text-gray-700">
              To
            </Label>
            <Input
              id="destination"
              type="text"
              placeholder="Destination city"
              value={formData.destination}
              onChange={handleInputChange('destination')}
              className="h-12 rounded-lg border-2 focus:border-senbay-blue transition-quick"
              required
            />
          </div>

          {/* Date */}
          <div className="space-y-2">
            <Label htmlFor="date" className="text-sm font-semibold text-gray-700">
              Departure Date
            </Label>
            <Input
              id="date"
              type="date"
              value={formData.date}
              onChange={handleInputChange('date')}
              className="h-12 rounded-lg border-2 focus:border-senbay-blue transition-quick"
              required
              min={new Date().toISOString().split('T')[0]}
            />
          </div>

          {/* Passengers */}
          <div className="space-y-2">
            <Label htmlFor="passengers" className="text-sm font-semibold text-gray-700">
              Passengers
            </Label>
            <Input
              id="passengers"
              type="number"
              min="1"
              max="9"
              value={formData.passengers}
              onChange={handleInputChange('passengers')}
              className="h-12 rounded-lg border-2 focus:border-senbay-blue transition-quick"
              required
            />
          </div>
        </div>

        {/* Search Button */}
        <div className="flex justify-center pt-4">
          <Button variant="search" type="submit" className="px-12">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            Search Flights
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default FlightSearchForm;