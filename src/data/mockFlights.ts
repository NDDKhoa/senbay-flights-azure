export interface Flight {
  id: string;
  airline: string;
  flightNumber: string;
  departure: {
    city: string;
    airport: string;
    time: string;
  };
  arrival: {
    city: string;
    airport: string;
    time: string;
  };
  duration: string;
  price: number;
  stops: number;
  aircraft: string;
}

export const mockFlights: Flight[] = [
  {
    id: '1',
    airline: 'Vietnam Airlines',
    flightNumber: 'VN123',
    departure: {
      city: 'Ho Chi Minh City',
      airport: 'SGN',
      time: '08:30',
    },
    arrival: {
      city: 'Hanoi',
      airport: 'HAN',
      time: '10:45',
    },
    duration: '2h 15m',
    price: 1250000,
    stops: 0,
    aircraft: 'Airbus A321',
  },
  {
    id: '2',
    airline: 'Jetstar Pacific',
    flightNumber: 'BL456',
    departure: {
      city: 'Ho Chi Minh City',
      airport: 'SGN',
      time: '14:20',
    },
    arrival: {
      city: 'Hanoi',
      airport: 'HAN',
      time: '16:35',
    },
    duration: '2h 15m',
    price: 890000,
    stops: 0,
    aircraft: 'Airbus A320',
  },
  {
    id: '3',
    airline: 'VietJet Air',
    flightNumber: 'VJ789',
    departure: {
      city: 'Ho Chi Minh City',
      airport: 'SGN',
      time: '19:10',
    },
    arrival: {
      city: 'Hanoi',
      airport: 'HAN',
      time: '21:25',
    },
    duration: '2h 15m',
    price: 750000,
    stops: 0,
    aircraft: 'Airbus A321',
  },
  {
    id: '4',
    airline: 'Bamboo Airways',
    flightNumber: 'QH234',
    departure: {
      city: 'Ho Chi Minh City',
      airport: 'SGN',
      time: '06:45',
    },
    arrival: {
      city: 'Hanoi',
      airport: 'HAN',
      time: '09:00',
    },
    duration: '2h 15m',
    price: 980000,
    stops: 0,
    aircraft: 'Embraer E190',
  },
  {
    id: '5',
    airline: 'Vietnam Airlines',
    flightNumber: 'VN567',
    departure: {
      city: 'Ho Chi Minh City',
      airport: 'SGN',
      time: '12:15',
    },
    arrival: {
      city: 'Da Nang',
      airport: 'DAD',
      time: '13:30',
    },
    duration: '1h 15m',
    price: 650000,
    stops: 0,
    aircraft: 'Boeing 737',
  },
  {
    id: '6',
    airline: 'VietJet Air',
    flightNumber: 'VJ890',
    departure: {
      city: 'Hanoi',
      airport: 'HAN',
      time: '15:30',
    },
    arrival: {
      city: 'Da Nang',
      airport: 'DAD',
      time: '17:00',
    },
    duration: '1h 30m',
    price: 720000,
    stops: 0,
    aircraft: 'Airbus A320',
  },
];

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  }).format(price);
};