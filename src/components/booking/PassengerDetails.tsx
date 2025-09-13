import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface Passenger {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  gender: 'male' | 'female';
}

interface PassengerDetailsProps {
  passengerCount: number;
  onSubmit: (passengers: Passenger[]) => void;
  onBack: () => void;
}

const PassengerDetails: React.FC<PassengerDetailsProps> = ({ passengerCount, onSubmit, onBack }) => {
  const [passengers, setPassengers] = useState<Passenger[]>(
    Array.from({ length: passengerCount }, () => ({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      dateOfBirth: '',
      gender: 'male' as const,
    }))
  );

  const handlePassengerChange = (index: number, field: keyof Passenger, value: string) => {
    setPassengers(prev => 
      prev.map((passenger, i) => 
        i === index ? { ...passenger, [field]: value } : passenger
      )
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(passengers);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Passenger Details</h1>
        <p className="text-gray-600">Please provide information for all passengers</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {passengers.map((passenger, index) => (
          <Card key={index} className="p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Passenger {index + 1}
              {index === 0 && <span className="text-sm text-gray-500 ml-2">(Primary Contact)</span>}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor={`firstName-${index}`}>First Name *</Label>
                <Input
                  id={`firstName-${index}`}
                  value={passenger.firstName}
                  onChange={(e) => handlePassengerChange(index, 'firstName', e.target.value)}
                  placeholder="Enter first name"
                  required
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor={`lastName-${index}`}>Last Name *</Label>
                <Input
                  id={`lastName-${index}`}
                  value={passenger.lastName}
                  onChange={(e) => handlePassengerChange(index, 'lastName', e.target.value)}
                  placeholder="Enter last name"
                  required
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor={`email-${index}`}>Email *</Label>
                <Input
                  id={`email-${index}`}
                  type="email"
                  value={passenger.email}
                  onChange={(e) => handlePassengerChange(index, 'email', e.target.value)}
                  placeholder="Enter email address"
                  required
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor={`phone-${index}`}>Phone Number *</Label>
                <Input
                  id={`phone-${index}`}
                  type="tel"
                  value={passenger.phone}
                  onChange={(e) => handlePassengerChange(index, 'phone', e.target.value)}
                  placeholder="Enter phone number"
                  required
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor={`dateOfBirth-${index}`}>Date of Birth *</Label>
                <Input
                  id={`dateOfBirth-${index}`}
                  type="date"
                  value={passenger.dateOfBirth}
                  onChange={(e) => handlePassengerChange(index, 'dateOfBirth', e.target.value)}
                  required
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor={`gender-${index}`}>Gender *</Label>
                <select
                  id={`gender-${index}`}
                  value={passenger.gender}
                  onChange={(e) => handlePassengerChange(index, 'gender', e.target.value)}
                  required
                  className="h-12 w-full px-3 py-2 border border-input rounded-md focus:border-senbay-blue transition-quick"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
            </div>
          </Card>
        ))}

        <div className="flex justify-between pt-6">
          <Button variant="senbay-outline" onClick={onBack} type="button">
            Back to Flight Selection
          </Button>
          <Button variant="senbay" type="submit">
            Continue to Payment
          </Button>
        </div>
      </form>
    </div>
  );
};

export default PassengerDetails;