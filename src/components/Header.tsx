import React from 'react';
import { Menu, X, Zap } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="bg-gradient-to-r from-emerald-800 to-emerald-700 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-emerald-500 p-2 rounded-lg">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold">EcoCharge</span>
          </div>



          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="hover:text-emerald-300 transition-colors duration-200">Service</a>
            <a href="#" className="hover:text-emerald-300 transition-colors duration-200">Pricing</a>
            <a href="#" className="hover:text-emerald-300 transition-colors duration-200">Contact</a>
            <button className="bg-emerald-500 hover:bg-emerald-400 px-6 py-2 rounded-full font-semibold transition-colors duration-200">
              Online Charging
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-emerald-600">
            <nav className="flex flex-col space-y-4">
              <a href="#" className="hover:text-emerald-300 transition-colors duration-200">Service</a>
              <a href="#" className="hover:text-emerald-300 transition-colors duration-200">Pricing</a>
              <a href="#" className="hover:text-emerald-300 transition-colors duration-200">Contact</a>
              <button className="bg-emerald-500 hover:bg-emerald-400 px-6 py-2 rounded-full font-semibold transition-colors duration-200 w-fit">
                Online Charging
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;