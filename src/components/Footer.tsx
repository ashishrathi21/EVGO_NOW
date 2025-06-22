import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import Logo from "../logo-l.png";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-teal-600 to-teal-500 text-white rounded-t-3xl">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 will-change-[opacity,transform]"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <motion.div
            className="space-y-4 will-change-[opacity,transform]"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-center space-x-2">
              <div className="bg-emerald-500 p-2 rounded-lg">
                <img src={Logo} alt="" className="size-5" />
              </div>
              <span className="text-xl font-bold">EVGO</span>
            </div>
            <p className="text-emerald-200 text-sm leading-relaxed">
              Your trusted marketplace for pre-owned EVs — buy, sell, and drive
              towards a greener tomorrow.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="space-y-4 will-change-[opacity,transform]"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.2 }}
          >
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {["Service", "Pricing", "Contact", "About Us"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-emerald-200 hover:text-white transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div
            className="space-y-4 will-change-[opacity,transform]"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.2 }}
          >
            <h3 className="text-lg font-semibold">Support</h3>
            <ul className="space-y-2">
              {["Help Center", "Privacy Policy", "Terms of Service", "FAQ"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-emerald-200 hover:text-white transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="space-y-4 will-change-[opacity,transform]"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.2 }}
          >
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="flex space-x-4">
              {[
                { Icon: Facebook, href: "#" },
                { Icon: Twitter, href: "#" },
                { Icon: Instagram, href: "https://www.instagram.com/evgo_official/" },
                { Icon: Linkedin, href: "https://www.linkedin.com/company/evgo-official/about/?viewAsMember=true" },
              ].map(({ Icon, href }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  className="bg-emerald-700 hover:bg-emerald-600 p-2 rounded-lg transition-colors duration-200 will-change-[opacity,transform]"
                  whileHover={{ scale: 1.1 }}
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-emerald-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-emerald-200 text-sm">© 2025 EVGO. All rights reserved.</p>
          <p className="text-emerald-200 text-sm mt-4 md:mt-0">
            Empowering smart EV choices for a cleaner, greener tomorrow.
          </p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
