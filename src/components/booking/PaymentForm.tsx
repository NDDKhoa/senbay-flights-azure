import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Flight, formatPrice } from '@/data/mockFlights';

interface PaymentFormProps {
  flight: Flight;
  passengerCount: number;
  onSubmit: (paymentData: any) => void;
  onBack: () => void;
}

const PaymentForm: React.FC<PaymentFormProps> = ({ flight, passengerCount, onSubmit, onBack }) => {
  const [paymentData, setPaymentData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardHolder: '',
    billingAddress: '',
    city: '',
    zipCode: '',
  });

  const totalPrice = flight.price * passengerCount;

  const handleInputChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentData(prev => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock payment processing
    onSubmit(paymentData);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Payment Details</h1>
        <p className="text-gray-600">Secure payment processing</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Payment Form */}
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit} className="space-y-6">
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Credit Card Information</h3>
              
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="cardNumber">Card Number *</Label>
                  <Input
                    id="cardNumber"
                    value={paymentData.cardNumber}
                    onChange={handleInputChange('cardNumber')}
                    placeholder="1234 5678 9012 3456"
                    required
                    className="h-12"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="expiryDate">Expiry Date *</Label>
                    <Input
                      id="expiryDate"
                      value={paymentData.expiryDate}
                      onChange={handleInputChange('expiryDate')}
                      placeholder="MM/YY"
                      required
                      className="h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cvv">CVV *</Label>
                    <Input
                      id="cvv"
                      value={paymentData.cvv}
                      onChange={handleInputChange('cvv')}
                      placeholder="123"
                      required
                      className="h-12"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="cardHolder">Cardholder Name *</Label>
                  <Input
                    id="cardHolder"
                    value={paymentData.cardHolder}
                    onChange={handleInputChange('cardHolder')}
                    placeholder="Full name on card"
                    required
                    className="h-12"
                  />
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Billing Address</h3>
              
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="billingAddress">Address *</Label>
                  <Input
                    id="billingAddress"
                    value={paymentData.billingAddress}
                    onChange={handleInputChange('billingAddress')}
                    placeholder="Street address"
                    required
                    className="h-12"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="city">City *</Label>
                    <Input
                      id="city"
                      value={paymentData.city}
                      onChange={handleInputChange('city')}
                      placeholder="City"
                      required
                      className="h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="zipCode">Zip Code *</Label>
                    <Input
                      id="zipCode"
                      value={paymentData.zipCode}
                      onChange={handleInputChange('zipCode')}
                      placeholder="Zip code"
                      required
                      className="h-12"
                    />
                  </div>
                </div>
              </div>
            </Card>

            <div className="flex justify-between">
              <Button variant="senbay-outline" onClick={onBack} type="button">
                Back to Passenger Details
              </Button>
              <Button variant="senbay" type="submit" size="lg">
                Complete Payment
              </Button>
            </div>
          </form>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <Card className="p-6 sticky top-24">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Order Summary</h3>
            
            <div className="space-y-4">
              <div className="border-b border-gray-200 pb-4">
                <div className="font-semibold text-gray-900">{flight.airline}</div>
                <div className="text-sm text-gray-600">{flight.flightNumber}</div>
                <div className="text-sm text-gray-600 mt-1">
                  {flight.departure.city} → {flight.arrival.city}
                </div>
                <div className="text-sm text-gray-600">
                  {flight.departure.time} - {flight.arrival.time}
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Base fare × {passengerCount}</span>
                  <span>{formatPrice(flight.price * passengerCount)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Taxes & fees</span>
                  <span>{formatPrice(Math.round(totalPrice * 0.1))}</span>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <div className="flex justify-between text-xl font-bold text-senbay-blue">
                  <span>Total</span>
                  <span>{formatPrice(Math.round(totalPrice * 1.1))}</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;