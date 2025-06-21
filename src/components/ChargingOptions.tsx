import React from 'react';
import { Zap, Battery, Gauge } from 'lucide-react';

const ChargingOptions = () => {
  const options = [
    {
      icon: Zap,
      title: 'Super Fast Charging',
      description: 'Level 3 heavy networks offer super fast EV charging',
      speed: 'Up to 350 kW'
    },
    {
      icon: Battery,
      title: 'Medium Charging',
      description: 'Level 2 charging offers a practical speed for daily EV use',
      speed: 'Up to 100 kW'
    },
    {
      icon: Gauge,
      title: 'Normal Charging',
      description: 'Level 3 charging is suitable for extended daily driving slow speed',
      speed: 'Up to 100+ kW'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-emerald-50 to-emerald-100 rounded-3xl ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <span className="bg-emerald-200 text-emerald-800 text-sm font-semibold px-4 py-2 rounded-full">
                OUR SERVICE
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-4">
                Instant Charging, Anytime, Anywhere
              </h2>
            </div>

            <div className="space-y-6">
              {options.map((option, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="bg-emerald-100 p-3 rounded-lg">
                        <option.icon className="h-6 w-6 text-emerald-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{option.title}</h3>
                        <p className="text-gray-600 text-sm">{option.description}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-emerald-600 font-semibold">{option.speed}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-yellow-200 to-green-300 rounded-2xl p-8">
              <img 
                src="https://images.pexels.com/photos/18833260/pexels-photo-18833260.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="EV charging station"
                className="w-full h-80 object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChargingOptions;