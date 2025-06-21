import React from 'react';
import { Check, Smartphone } from 'lucide-react';

const Pricing = () => {
  const packages = [
    {
      name: 'Super Fast Charging',
      power: '350 kW',
      price: 160,
      originalPrice: 175,
      features: ['Level 3 charging', 'Fastest available', 'Premium locations', '24/7 support']
    },
    {
      name: 'Medium Charging',
      power: '200+ kW',
      price: 45,
      originalPrice: 55,
      features: ['Level 2 charging', 'Daily use optimal', 'Good network coverage', 'Standard support'],
      popular: true
    },
    {
      name: 'Normal Charging',
      power: '100+ kW',
      price: 30,
      originalPrice: 35,
      features: ['Level 1 charging', 'Basic needs', 'Wide availability', 'Email support']
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Phone Mockup */}
          <div className="relative">
            <div className="bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-3xl p-8">
              <div className="bg-black rounded-2xl p-1 mx-auto max-w-xs">
                <div className="bg-gray-900 rounded-2xl p-4 space-y-4">
                  <div className="flex justify-center">
                    <div className="w-12 h-1 bg-gray-600 rounded-full"></div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-emerald-500 rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                            <Smartphone className="h-4 w-4 text-emerald-500" />
                          </div>
                          <span className="text-white text-sm font-semibold">Anna Murphy</span>
                        </div>
                        <div className="w-8 h-8 bg-emerald-400 rounded-full"></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      {[1, 2, 3, 4, 5].map((item) => (
                        <div key={item} className="w-4 h-4 bg-emerald-400 rounded-full"></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing Content */}
          <div className="space-y-8">
            <div>
              <span className="bg-emerald-100 text-emerald-800 text-sm font-semibold px-4 py-2 rounded-full">
                PRICING PLAN
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-4">
                Select Package
              </h2>
              <p className="text-gray-600 mt-4">
                EV charging providers key benefits, including reducing environmental impact through lower emissions and supporting renewable energy use.
              </p>
            </div>

            <div className="space-y-4">
              {packages.map((pkg, index) => (
                <div key={index} className={`relative border-2 rounded-xl p-6 transition-all duration-300 ${
                  pkg.popular 
                    ? 'border-emerald-500 bg-emerald-50 shadow-lg' 
                    : 'border-gray-200 hover:border-emerald-300 hover:shadow-md'
                }`}>
                  {pkg.popular && (
                    <div className="absolute -top-3 left-6 bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Popular
                    </div>
                  )}
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{pkg.name}</h3>
                      <p className="text-emerald-600 font-medium">{pkg.power}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl font-bold text-gray-900">${pkg.price}</span>
                      <span className="text-gray-500 line-through ml-2">${pkg.originalPrice}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;