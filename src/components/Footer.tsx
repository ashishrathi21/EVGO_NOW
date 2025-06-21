import React from 'react';
import { Zap, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-emerald-900 to-emerald-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-emerald-500 p-2 rounded-lg">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">EcoCharge</span>
            </div>
            <p className="text-emerald-200 text-sm leading-relaxed">
              Revolutionary EV charging solutions for a sustainable future. Find, connect, and charge with ease.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-emerald-200 hover:text-white transition-colors duration-200">Service</a></li>
              <li><a href="#" className="text-emerald-200 hover:text-white transition-colors duration-200">Pricing</a></li>
              <li><a href="#" className="text-emerald-200 hover:text-white transition-colors duration-200">Contact</a></li>
              <li><a href="#" className="text-emerald-200 hover:text-white transition-colors duration-200">About Us</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-emerald-200 hover:text-white transition-colors duration-200">Help Center</a></li>
              <li><a href="#" className="text-emerald-200 hover:text-white transition-colors duration-200">Privacy Policy</a></li>
              <li><a href="#" className="text-emerald-200 hover:text-white transition-colors duration-200">Terms of Service</a></li>
              <li><a href="#" className="text-emerald-200 hover:text-white transition-colors duration-200">FAQ</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="bg-emerald-700 hover:bg-emerald-600 p-2 rounded-lg transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-emerald-700 hover:bg-emerald-600 p-2 rounded-lg transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-emerald-700 hover:bg-emerald-600 p-2 rounded-lg transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-emerald-700 hover:bg-emerald-600 p-2 rounded-lg transition-colors duration-200">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-emerald-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-emerald-200 text-sm">
            © 2025 EcoCharge. All rights reserved.
          </p>
          <p className="text-emerald-200 text-sm mt-4 md:mt-0">
            Empowering sustainable transportation worldwide
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;