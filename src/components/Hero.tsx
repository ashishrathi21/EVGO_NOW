import { Users, CheckCircle } from "lucide-react";
import Logo from "../logo-l.png";
import MockupImage from "../mockuper.png";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-teal-500 to-yellow-100 overflow-hidden shadow-2xl shadow-emerald-500/50 rounded-b-3xl flex flex-col">
      {/* Big background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-[15rem] sm:text-[20rem] lg:text-[25rem] font-black text-white/10 select-none leading-none mt-14 text-center">
          EVGO
        </div>
      </div>

      {/* Nav */}
      <motion.nav
        className="fixed top-0 left-0 w-full z-50 px-2 sm:px-4 will-change-[opacity,transform]"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="backdrop-blur-md bg-white/20 border border-white/20 rounded-xl mt-2 max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-2">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-emerald-400 rounded-full flex items-center justify-center">
              <img src={Logo} className="w-5 h-5" alt="Logo" />
            </div>
            <span className="text-black text-xl font-bold">EVGO</span>
          </div>
          {/* Right side */}
          <div className="flex items-center space-x-8">
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-black hover:text-emerald-300">Service</a>
              <span className="text-white/50">•</span>
              <a href="#pricing" className="text-black hover:text-emerald-300">Pricing</a>
              <span className="text-white/50">•</span>
              <a href="#contact" className="text-black hover:text-emerald-300">Contact</a>
            </div>
            <button className="bg-emerald-400 hover:bg-emerald-300 text-white font-semibold px-6 py-2 rounded-lg transition-transform hover:scale-105">
              Register EV
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center gap-12 px-6 pt-14 pb-24 w-full max-w-7xl mx-auto mt-10">
        {/* Left Section */}
        <motion.div
          className="flex-1 flex flex-col items-center lg:items-start space-y-8 text-center lg:text-left will-change-[opacity,transform]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-black text-white leading-tight">
            Discover, Compare, and Choose <br /> Certified Used EVs.
          </h1>

          <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 flex items-center space-x-2 w-fit">
            <Users className="w-5 h-5 text-white" />
            <span className="text-white font-semibold">200+ Active Users</span>
          </div>

          <h2 className="hidden sm:block text-2xl sm:text-3xl font-bold text-white mt-2">
            Features highlight
          </h2>

          <div className="hidden sm:block w-full max-w-xs sm:max-w-sm space-y-3 text-left">
            {[
              "Battery Health Check",
              "Trusted Listings",
              "Post-Sale Support & Guidance",
              "User-Friendly Comparison Tools",
            ].map((feature, index) => (
              <motion.div
                key={feature}
                className="flex items-center space-x-2 text-white/90 text-base font-medium will-change-[opacity,transform]"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <CheckCircle className="w-5 h-5 text-yellow-200" />
                <span>{feature}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Section */}
        <motion.div
          className="flex-1 flex justify-center lg:justify-end w-full will-change-[opacity,transform]"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <img
            src={MockupImage}
            alt="App Mockup"
            className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl h-auto rounded-3xl"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
