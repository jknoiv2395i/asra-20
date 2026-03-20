import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full bg-[#131313] px-4 py-20 lg:py-24">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row lg:justify-between lg:items-start gap-12 mb-12 lg:mb-16">
        {/* Logo and Description */}
        <div className="max-w-md">
          <img
            src="/asra-logo.png"
            alt="ASRA Real Estate Consulting Services Logo"
            className="h-[70px] w-auto mb-4"
          />
          <p className="text-[#B7B7B7] text-lg leading-relaxed">
            Bring your architectural projects to life with a template that puts
            your work front and center.
          </p>
        </div>

        {/* Footer Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 flex-1">
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
                  to="/contact"
                  className="text-white/90 text-sm hover:text-white transition-colors duration-200"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/service-areas"
                  className="text-white/90 text-sm hover:text-white transition-colors duration-200"
                >
                  Service Areas
                </Link>
              </li>
            </ul>
          </div>

          {/* Property Types */}
          <div>
            <h4 className="font-instrument text-white/60 text-xs font-semibold uppercase tracking-wider mb-4">
              Property Types
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/buy-residential"
                  className="text-white/90 text-sm hover:text-white transition-colors duration-200"
                >
                  Buy Residential
                </Link>
              </li>
              <li>
                <Link
                  to="/2bhk-flats"
                  className="text-white/90 text-sm hover:text-white transition-colors duration-200"
                >
                  2BHK Flats
                </Link>
              </li>
              <li>
                <Link
                  to="/3bhk-apartments"
                  className="text-white/90 text-sm hover:text-white transition-colors duration-200"
                >
                  3BHK Apartments
                </Link>
              </li>
              <li>
                <Link
                  to="/luxury-properties"
                  className="text-white/90 text-sm hover:text-white transition-colors duration-200"
                >
                  Luxury Properties
                </Link>
              </li>
              <li>
                <Link
                  to="/affordable-flats"
                  className="text-white/90 text-sm hover:text-white transition-colors duration-200"
                >
                  Affordable Flats
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-instrument text-white/60 text-xs font-semibold uppercase tracking-wider mb-4">
              Categories
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/properties"
                  className="text-white/90 text-sm hover:text-white transition-colors duration-200"
                >
                  All Properties
                </Link>
              </li>
              <li>
                <Link
                  to="/residential"
                  className="text-white/90 text-sm hover:text-white transition-colors duration-200"
                >
                  Residential
                </Link>
              </li>
              <li>
                <Link
                  to="/commercial"
                  className="text-white/90 text-sm hover:text-white transition-colors duration-200"
                >
                  Commercial
                </Link>
              </li>
              <li>
                <Link
                  to="/industrial"
                  className="text-white/90 text-sm hover:text-white transition-colors duration-200"
                >
                  Industrial
                </Link>
              </li>
            </ul>
          </div>

          {/* Rentals */}
          <div>
            <h4 className="font-instrument text-white/60 text-xs font-semibold uppercase tracking-wider mb-4">
              Rentals
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/residential-rentals"
                  className="text-white/90 text-sm hover:text-white transition-colors duration-200"
                >
                  Residential Rentals
                </Link>
              </li>
              <li>
                <Link
                  to="/commercial-rentals"
                  className="text-white/90 text-sm hover:text-white transition-colors duration-200"
                >
                  Commercial Rentals
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-instrument text-white/60 text-xs font-semibold uppercase tracking-wider mb-4">
              Resources
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/services"
                  className="text-white/90 text-sm hover:text-white transition-colors duration-200"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="text-white/90 text-sm hover:text-white transition-colors duration-200"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/the-brandt"
                  className="text-white/90 text-sm hover:text-white transition-colors duration-200"
                >
                  The Brandt
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-white/90 text-sm hover:text-white transition-colors duration-200"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/ai-assistant"
                  className="text-white/90 text-sm hover:text-white transition-colors duration-200"
                >
                  AI Assistant
                </Link>
              </li>
            </ul>
          </div>

          {/* Local Pages */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="font-instrument text-white/60 text-xs font-semibold uppercase tracking-wider mb-4">
              Local Pages
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/residential-440008"
                  className="text-white/90 text-sm hover:text-white transition-colors duration-200"
                >
                  Residential 440008
                </Link>
              </li>
              <li>
                <Link
                  to="/commercial-440008"
                  className="text-white/90 text-sm hover:text-white transition-colors duration-200"
                >
                  Commercial 440008
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="max-w-6xl mx-auto border-t border-white/10 pt-8 md:pt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          <div>
            <p className="text-[#989898] text-lg leading-relaxed">
              <strong className="font-bold">Office Address</strong>
              <br />
              Bhandara Road, Behind Jk Tower, Small Factory Area Bagadgangj
              Nagper Maharashtra-2440008
            </p>
          </div>
          <div>
            <p className="text-[#989898] text-lg leading-relaxed">
              <strong className="font-bold">Phone Number</strong>
              <br />
              office: 7387777085
              <br />
              Mobile:-7387777686/8275046765
            </p>
          </div>
          <div>
            <p className="text-[#989898] text-lg leading-relaxed">
              <strong className="font-bold">EMAIL</strong>
              <br />
              info@mphdgroup.com
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
