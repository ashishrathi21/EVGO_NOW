import { BatteryFull, ShieldCheck, Handshake, Headphones } from 'lucide-react';
import Feature from "../features.webp"


const Features = () => {
  const features = [
  {
    icon: BatteryFull,
    title: 'Verified Battery Health Reports',
    description: 'Get a clear, honest report of the EV’s battery health — so you know exactly what you’re buying.'
  },
  {
    icon: ShieldCheck,
    title: 'Certified Inspection Support',
    description: 'Connect with certified EV technicians for detailed inspection and reports.'
  },
  {
    icon: Handshake,
    title: 'Seller Trust Score & Listings',
    description: 'Every EV is listed with a verified trust score — making buying and selling safe, smooth, and transparent.'
  },
  {
    icon: Headphones,
    title: 'Post-Sale Support & Guidance',
    description: 'Access battery health tracking, nearby charging stations, and expert guidance even after your purchase.'
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
                src={Feature}
                alt="Electric vehicle charging"
                className="w-full h-auto object-cover rounded-xl"
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <span className="bg-emerald-100 text-emerald-800 text-sm font-semibold px-4 py-2 rounded-full">
                OUR FEATURE
              </span>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mt-4">
                We make second-hand EV buying simple, transparent, and trustworthy !
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
