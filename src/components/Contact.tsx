import React from 'react';
import { Mail, Phone } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id='contact' className="py-16 bg-white ">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h2>
        <p className="text-gray-600 mb-8">Have questions? Reach out to us anytime — we’d love to help you!</p>

        <div className="flex flex-col sm:flex-row justify-center gap-8">
          {/* Email */}
          <div className="flex items-center space-x-3">
            <Mail className="h-6 w-6 text-emerald-600" />
            <a href="mailto:support@example.com" className="text-lg font-medium text-gray-800 hover:text-emerald-600">
              evgoconnect@gmail.com
            </a>
          </div>

          {/* Phone */}
          <div className="flex items-center space-x-3">
            <Phone className="h-6 w-6 text-emerald-600" />
            <a href="tel:+1234567890" className="text-lg font-medium text-gray-800 hover:text-emerald-600">
              +91 12345 12345
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
