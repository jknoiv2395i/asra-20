import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full absolute top-0 left-0 z-50 bg-transparent">
      <div className="w-full px-4 md:px-8 lg:px-12 py-4 md:py-0 flex items-center justify-between h-20 md:h-24">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="/asra-logo.png"
            alt="ASRA Real Estate Consulting Services Logo"
            className="h-[60px] w-auto sm:h-[50px] sm:w-auto"
          />
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center md:gap-6 lg:gap-8">
          <Link
            to="/"
            className="text-gray-600 hover:text-[#0E0840] text-sm lg:text-base font-normal transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-gray-600 hover:text-[#0E0840] text-sm lg:text-base font-normal transition-colors duration-200"
          >
            About Us
          </Link>
          <Link
            to="/properties"
            className="text-gray-600 hover:text-[#0E0840] text-sm lg:text-base font-normal transition-colors duration-200"
          >
            Properties
          </Link>
        </nav>

        {/* Contact Button */}
        <Link
          to="/contact"
          className="hidden md:flex items-center justify-center px-6 py-2 bg-black rounded-full text-white text-sm lg:text-base font-medium hover:bg-gray-900 transition-colors duration-200"
        >
          Contact us
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <svg className="w-6 h-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg z-40">
          <nav className="flex flex-col px-6 py-4 gap-0">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-600 hover:text-[#0E0840] text-base font-normal py-3 px-2 transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-600 hover:text-[#0E0840] text-base font-normal py-3 px-2 transition-colors duration-200"
            >
              About Us
            </Link>
            <Link
              to="/properties"
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-600 hover:text-[#0E0840] text-base font-normal py-3 px-2 transition-colors duration-200"
            >
              Properties
            </Link>

            {/* Contact Button */}
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center mt-4 px-6 py-3 bg-black rounded-full text-white text-base font-semibold hover:bg-gray-900 transition-colors duration-200"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
