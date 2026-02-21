import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-300 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-10">

        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            EMMCORE
          </h2>
          <p className="text-sm leading-relaxed">
            Your trusted hub for smartphones, repairs, accessories, and digital
            solutions. We deliver quality tech and reliable services you can count on.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Shop</li>
            <li className="hover:text-white cursor-pointer">Repairs</li>
            <li className="hover:text-white cursor-pointer">Web Services</li>
            <li className="hover:text-white cursor-pointer">Partner With Us</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            <li>Device Sales</li>
            <li>Phone Repairs</li>
            <li>Accessories</li>
            <li>Website Development</li>
            <li>Investment Partnership</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact</h3>

          <div className="space-y-3 text-sm">

            <div className="flex items-center gap-2">
              <Phone size={16} />
              <span>+234 XXX XXX XXXX</span>
            </div>

            <div className="flex items-center gap-2">
              <Mail size={16} />
              <span>info@emmcore.com</span>
            </div>

            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>Port Harcourt, Nigeria</span>
            </div>

          </div>

          {/* Social */}
          <div className="flex gap-4 mt-4">
            <Facebook className="cursor-pointer hover:text-white" />
            <Instagram className="cursor-pointer hover:text-white" />
            <Twitter className="cursor-pointer hover:text-white" />
          </div>

        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} EMMCORE-GLOBAL NETWORKS LTD. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;