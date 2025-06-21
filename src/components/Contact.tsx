import React from "react";
import { Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 bg-white">
      <motion.div
        className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center will-change-[opacity,transform]"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h2>
        <p className="text-gray-600 mb-8">
          Have questions? Reach out to us anytime — we’d love to help you!
        </p>

        <div className="flex flex-col sm:flex-row sm:justify-center sm:gap-8 items-center gap-6">
          {/* Email */}
          <motion.a
            href="mailto:evgoconnect@gmail.com"
            className="flex items-center justify-center space-x-3 text-lg font-medium text-gray-800 hover:text-emerald-600 will-change-[opacity,transform]"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Mail className="h-6 w-6 text-emerald-600" />
            <span>evgoconnect@gmail.com</span>
          </motion.a>

          {/* Phone */}
          <motion.a
            href="tel:+911234512345"
            className="flex items-center justify-center space-x-3 text-lg font-medium text-gray-800 hover:text-emerald-600 will-change-[opacity,transform]"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Phone className="h-6 w-6 text-emerald-600" />
            <span>+91 12345 12345</span>
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
