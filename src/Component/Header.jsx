import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import BrandLogo from "./BrandLogo";

const Header = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "Shop", to: "/shop" },
    { name: "Repairs", to: "/repairs" },
    { name: "Web Services", to: "/web-services" },
    { name: "Portfolio", to: "/portfolio" },
    { name: "Partner With Us", to: "/partner" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-black/70 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <BrandLogo className="w-8 h-auto" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              className="text-gray-300 hover:text-yellow-500 transition"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <Link to="/login">
            <button className="bg-yellow-500 text-black px-5 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition">
              Get Started
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black border-t border-gray-800">
          <div className="flex flex-col px-6 py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                className="text-gray-300 hover:text-yellow-500"
                onClick={() => setOpen(false)}
              >
                {link.name}
              </Link>
            ))}

            <Link to="/login">
              <button className="bg-yellow-500 text-black py-2 rounded-lg font-semibold w-full">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;