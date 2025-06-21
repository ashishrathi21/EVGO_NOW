import { Users, Download } from "lucide-react";
import Logo from "../logo-l.png";
import MockupImage from "../mockup.png";

const Hero = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-500 to-yellow-100 relative overflow-hidden  shadow-2xl shadow-emerald-500/50" style={{
  borderBottomLeftRadius: '2.5rem',
  borderBottomRightRadius: '2.5rem',
}}>
      {/* Large ECO Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-[25rem] font-black text-white/5 select-none leading-none mt-14">
          EV GO
        </div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-8 py-6 mx-14">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-emerald-400 rounded-full flex items-center justify-center">
            <img src={Logo} className="size-5" alt="Logo" />
          </div>
          <span className="text-white text-xl font-bold">EVGO</span>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-white hover:text-emerald-300 transition-colors">Service</a>
          <span className="text-white/50">•</span>
          <a href="#pricing" className="text-white hover:text-emerald-300 transition-colors">Pricing</a>
          <span className="text-white/50">•</span>
          <a href="#contact" className="text-white hover:text-emerald-300 transition-colors">Contact</a>
          <button className="bg-emerald-400 hover:bg-emerald-300 text-teal-700 font-semibold px-6 py-2 rounded-lg transition-all duration-300 hover:scale-105">
            Register EV
          </button>
        </div>
      </nav>

      {/* Main Headline */}
      <div className="text-center mt-10 relative z-10">
        <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight mb-8">
          Discover, Compare, and Choose
          <br />
          Certified Used EVs.
        </h1>
      </div>

      {/* Main Content */}
      <div className="relative flex flex-col lg:flex-row items-center justify-between px-8 pt-12 lg:pt-20 pb-32">
        {/* Left Side */}
        <div className="flex-1 lg:pr-12 relative z-10 mb-12 lg:mb-0">
          <div className="flex items-center space-x-4 mb-8">
            <div className="flex -space-x-3">
              {["A", "B", "C", "D", "E"].map((label, index) => (
                <div
                  key={index}
                  className={`w-12 h-12 bg-gradient-to-br from-${
                    [
                      "orange-400",
                      "blue-400",
                      "green-400",
                      "yellow-400",
                      "purple-400",
                    ][index]
                  } to-${
                    [
                      "pink-500",
                      "purple-500",
                      "teal-500",
                      "orange-500",
                      "pink-500",
                    ][index]
                  } rounded-full border-3 border-white flex items-center justify-center text-white font-semibold`}
                >
                  {label}
                </div>
              ))}
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 flex items-center space-x-2">
              <Users className="w-5 h-5 text-white" />
              <span className="text-white font-semibold">5m+</span>
              <span className="text-white/80">Active Users</span>
            </div>
          </div>
        </div>

        {/* Right Side Download */}
        <div className="flex-1 lg:pl-12 relative z-10">
          <div className="max-w-md">
            <h2 className="text-3xl font-bold text-white mb-4">Download App</h2>
            <div className="space-y-4 mb-6">
              <button className="w-full bg-white hover:bg-gray-50 rounded-2xl p-4 flex items-center space-x-4 transition-all duration-300 hover:scale-105 group">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">▶</span>
                </div>
                <div className="text-left">
                  <div className="text-xs text-gray-500 uppercase tracking-wide">Get it on</div>
                  <div className="text-xl font-bold text-gray-900">Google Play</div>
                </div>
              </button>

              <button className="w-full bg-white hover:bg-gray-50 rounded-2xl p-4 flex items-center space-x-4 transition-all duration-300 hover:scale-105 group">
                <div className="w-12 h-12 bg-gradient-to-br from-gray-800 to-black rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">🍎</span>
                </div>
                <div className="text-left">
                  <div className="text-xs text-gray-500 uppercase tracking-wide">Download on the</div>
                  <div className="text-xl font-bold text-gray-900">App Store</div>
                </div>
              </button>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              This section highlights key features and encourages users to
              download the app.
            </p>
          </div>
        </div>

        {/* Mockup Image */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-0">
          <img
            src={MockupImage}
            alt="App Mockup"
            className="w-96 h-auto rounded-t-3xl shadow-2xl"
          />
        </div>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden fixed bottom-6 right-6 z-20">
        <button className="bg-emerald-400 hover:bg-emerald-300 text-teal-900 p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110">
          <Download className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
