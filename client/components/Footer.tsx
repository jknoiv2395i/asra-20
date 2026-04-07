import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full bg-[#131313] px-4 py-20 lg:py-24 xl:px-16">
      <div className="max-w-6xl lg:max-w-7xl mx-auto flex flex-col lg:flex-row lg:justify-between lg:items-start gap-12 mb-12 lg:mb-16">
        {/* Logo and Description */}
        <div className="max-w-md">
          <img
            src="/asra-logo.png"
            alt="ASRA Real Estate Consulting Services Logo"
            className="h-[70px] w-auto mb-4"
          />
          <p className="text-[#B7B7B7] text-lg leading-relaxed">
            Your trusted real estate partner in Indore. Verified listings, best
            prices, and personalized investment guidance across Super Corridor,
            MR-5, and Ujjain Road.
          </p>
          <p className="text-[#B7B7B7] text-sm mt-3">
            +91 78983 84899
          </p>
        </div>

        {/* Footer Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 flex-1">
          {/* Company */}
          <div>
            <h4 className="font-instrument text-white/60 text-xs font-semibold uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-white/90 text-sm hover:text-white transition-colors duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-white/90 text-sm hover:text-white transition-colors duration-200"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/properties"
                  className="text-white/90 text-sm hover:text-white transition-colors duration-200"
                >
                  Properties
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-white/90 text-sm hover:text-white transition-colors duration-200"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="font-instrument text-white/60 text-xs font-semibold uppercase tracking-wider mb-4">
              Our Services
            </h4>
            <ul className="space-y-3">
              <li className="text-white/90 text-sm">Plot Buying & Selling</li>
              <li className="text-white/90 text-sm">Investment Consulting</li>
              <li className="text-white/90 text-sm">Residential Properties</li>
              <li className="text-white/90 text-sm">Commercial & Industrial</li>
              <li className="text-white/90 text-sm">Farm Land</li>
            </ul>
          </div>

          {/* Prime Locations */}
          <div>
            <h4 className="font-instrument text-white/60 text-xs font-semibold uppercase tracking-wider mb-4">
              Prime Locations
            </h4>
            <ul className="space-y-3">
              <li className="text-white/90 text-sm">Super Corridor</li>
              <li className="text-white/90 text-sm">MR-5 Road</li>
              <li className="text-white/90 text-sm">Ujjain Road</li>
              <li className="text-white/90 text-sm">Chhota Bangarda</li>
              <li className="text-white/90 text-sm">Indore Bypass & Ring Road</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-instrument text-white/60 text-xs font-semibold uppercase tracking-wider mb-4">
              Contact Info
            </h4>
            <ul className="space-y-3">
              <li className="text-white/90 text-sm">+91 78983 84899</li>
              <li className="text-white/90 text-sm">info@asrarealestate.com</li>
              <li className="text-white/90 text-sm">Super Corridor, Palakhedi, Indore 453112</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="max-w-6xl lg:max-w-7xl mx-auto border-t border-white/10 pt-8 md:pt-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#989898] text-sm">
            © 2025 Asra Real Estate Consulting Services. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <p className="text-[#989898] text-sm">
              Indore 453112 &nbsp;|&nbsp; +91 78983 84899 &nbsp;|&nbsp; info@asrarealestate.com
            </p>
            <Link
              to="/admin/login"
              className="text-white/[0.12] hover:text-white/40 transition-colors text-[10px]"
              title=""
            >
              ●
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
