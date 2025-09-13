import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import LotusIcon from './LotusIcon';
import { Button } from '@/components/ui/button';

const Navbar: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Flights', path: '/flights' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-white lotus-shadow-medium sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-quick">
            <LotusIcon className="text-senbay-blue" size={40} />
            <span className="text-2xl font-bold text-senbay-blue">SenBay</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`font-medium transition-quick hover:text-senbay-blue ${
                  location.pathname === item.path
                    ? 'text-senbay-blue border-b-2 border-senbay-blue pb-1'
                    : 'text-gray-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Button variant="senbay" size="sm">
              Sign In
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - You could expand this with state management */}
      <div className="md:hidden bg-white border-t border-gray-200">
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`block px-3 py-2 rounded-md font-medium transition-quick ${
                location.pathname === item.path
                  ? 'text-senbay-blue bg-senbay-blue-subtle'
                  : 'text-gray-600 hover:text-senbay-blue hover:bg-gray-50'
              }`}
            >
              {item.name}
            </Link>
          ))}
          <div className="px-3 py-2">
            <Button variant="senbay" size="sm" className="w-full">
              Sign In
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;