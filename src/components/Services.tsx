import { motion } from "framer-motion";
import { BatteryFull, ListChecks, MapPin, Headphones } from "lucide-react";
import Service from "../services.png";

const Services = () => {
  const services = [
    {
      icon: BatteryFull,
      title: "Battery Health Check & Report",
      description:
        "Get a quick and accurate battery health report for any EV — so buyers can trust what they’re getting.",
    },
    {
      icon: ListChecks,
      title: "Seamless EV Listing Support",
      description:
        "We help sellers list their EVs easily with all the key details, photos, and trust badges — for faster, transparent sales.",
    },
    {
      icon: MapPin,
      title: "Post-Sale Guidance & Support",
      description:
        "Stay supported even after the sale — with battery tracking, nearby charging station maps, and expert EV tips.",
    },
    {
      icon: Headphones,
      title: "Dedicated User Assistance",
      description:
        "Have questions or need help? Our team is here to guide you at every step — ensuring a smooth buying and selling experience.",
    },
  ];

  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-br from-green-300 via-green-200 to-yellow-100 rounded-3xl"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <motion.div
              className="space-y-2"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="bg-emerald-500 text-emerald-50 text-sm font-semibold px-4 py-2 rounded-full">
                OUR SERVICE
              </span>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mt-4">
                Offering real support and verified info at every stage of your EV buying and
                selling journey!
              </h2>
            </motion.div>

            {/* Service Cards */}
            <div className="space-y-6">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center space-x-4">
                    <div className="bg-emerald-100 p-3 rounded-lg">
                      <service.icon className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 text-sm mt-1">{service.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-emerald-300 to-emerald-200 rounded-2xl p-8">
              <img
                src={Service}
                alt="EV support services"
                className="w-full h-auto object-cover rounded-xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
