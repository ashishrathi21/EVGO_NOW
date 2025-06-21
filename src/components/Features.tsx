import React from 'react';
import { Car, Clock, Navigation, MapPin } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Car,
      title: 'Charging Vehicle',
      description: 'Stations designed to serve both EVs and plug-in hybrid vehicles offering traditional fuel vehicles.'
    },
    {
      icon: Clock,
      title: '24 Hours Support',
      description: '24-hour support for electric vehicle (EV) charging, many EV charging networks and providers offer customer service.'
    },
    {
      icon: Navigation,
      title: 'Traffic Information',
      description: 'Real-time Google Maps and Apple Maps now support showing EV charging stations with real-time data.'
    },
    {
      icon: MapPin,
      title: 'GPS Tracker',
      description: 'EV charging GPS tracker is a tool or system that integrates navigation, real-time data on charging station locations.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-2xl p-8">
              <img 
                src="https://images.pexels.com/photos/7893745/pexels-photo-7893745.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Electric vehicle charging"
                className="w-full h-64 object-cover rounded-xl"
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <span className="bg-emerald-100 text-emerald-800 text-sm font-semibold px-4 py-2 rounded-full">
                OUR FEATURE
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-4">
                Revolutionizing Your Charging Experience
              </h2>
            </div>

            <div className="grid gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className="bg-emerald-100 group-hover:bg-emerald-500 p-3 rounded-lg transition-colors duration-300">
                    <feature.icon className="h-6 w-6 text-emerald-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
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

export default Features;