import React from 'react';
import { Gift, Star, Rocket } from 'lucide-react';

const Pricing = () => {
  const packages = [
    {
      name: 'Free Plan',
      icon: Gift,
      price: 0,
      features: [
        '1 EV listing per month',
        'Basic battery health report',
        'Suitable for individuals & occasional sellers',
      ],
    },
    {
      name: 'Premium Plan',
      icon: Star,
      price: 499,
      features: [
        'Up to 5 EV listings per month',
        'Priority placement & better visibility',
        'Enhanced battery report & trust badge',
        'Listing optimization support',
      ],
      popular: true,
    },
    {
      name: 'Enterprise Plan',
      icon: Rocket,
      price: 1999,
      features: [
        'Unlimited EV listings',
        'Featured listings & verified trust score',
        'Advanced analytics dashboard',
        'Dedicated support & inspection assistance',
      ],
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-emerald-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
        <span className="bg-emerald-100 text-emerald-800 text-sm font-medium px-4 py-2 rounded-full inline-block mb-4">
          PRICING PLAN
        </span>
        <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-2">
          Upgrade your plan anytime
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Enjoy more visibility, better trust, and faster connections with serious buyers!
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-8">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className={`relative border rounded-2xl p-8 flex flex-col items-center bg-white shadow-md hover:shadow-xl transition-shadow duration-300 ${
              pkg.popular ? 'border-emerald-500 scale-105' : 'border-emerald-200'
            }`}
          >
            {pkg.popular && (
              <div className="absolute -top-4 bg-emerald-500 text-white text-xs font-medium px-3 py-1 rounded-full shadow-md">
                Popular
              </div>
            )}

            {/* Icon */}
            <div className="bg-emerald-100 p-3 rounded-full mb-4">
              <pkg.icon className="h-8 w-8 text-emerald-600" />
            </div>

            {/* Title & Price */}
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{pkg.name}</h3>
            <div className="text-2xl font-bold text-emerald-700 mb-6">₹{pkg.price}/month</div>

            {/* Features */}
            <ul className="space-y-2 text-left w-full mb-6 text-gray-700 text-sm">
              {pkg.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center space-x-2">
                  <span className="bg-emerald-100 text-emerald-600 w-5 h-5 flex items-center justify-center rounded-full text-xs font-bold">
                    ✓
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* Action Button */}
            <button
              className={`w-full py-2 rounded-lg font-medium transition-colors ${
                pkg.popular
                  ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                  : 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200'
              }`}
            >
              Choose {pkg.name}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
