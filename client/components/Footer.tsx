import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full bg-[#131313] py-20 px-6 md:px-20 lg:px-80">
      <div className="max-w-[1280px] mx-auto">
        {/* Logo and Description */}
        <div className="mb-14">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/b4aac2549760714a8a79fe7578ca74940e6e1a4c?width=272"
            alt="MPHD Group Logo"
            className="h-[110px] w-[136px] mb-4"
          />
          <p className="text-[#B7B7B7] text-lg leading-[29px] max-w-[392px]">
            Bring your architectural projects to life with a template that puts
            your work front and center.
          </p>
        </div>

        {/* Footer Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-8 mb-14">
          {/* Company */}
          <div>
            <h4 className="text-white/60 text-[11px] font-semibold uppercase tracking-wide mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-white/90 text-sm hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-white/90 text-sm hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-white/90 text-sm hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/service-areas"
                  className="text-white/90 text-sm hover:text-white transition-colors"
                >
                  Service Areas
                </Link>
              </li>
            </ul>
          </div>

          {/* Property Types */}
          <div>
            <h4 className="text-white/60 text-[11px] font-semibold uppercase tracking-wide mb-4">
              Property Types
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/buy-residential"
                  className="text-white/90 text-sm hover:text-white transition-colors"
                >
                  Buy Residential
                </Link>
              </li>
              <li>
                <Link
                  to="/2bhk-flats"
                  className="text-white/90 text-sm hover:text-white transition-colors"
                >
                  2BHK Flats
                </Link>
              </li>
              <li>
                <Link
                  to="/3bhk-apartments"
                  className="text-white/90 text-sm hover:text-white transition-colors"
                >
                  3BHK Apartments
                </Link>
              </li>
              <li>
                <Link
                  to="/luxury-properties"
                  className="text-white/90 text-sm hover:text-white transition-colors"
                >
                  Luxury Properties
                </Link>
              </li>
              <li>
                <Link
                  to="/affordable-flats"
                  className="text-white/90 text-sm hover:text-white transition-colors"
                >
                  Affordable Flats
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-white/60 text-[11px] font-semibold uppercase tracking-wide mb-4">
              Categories
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/properties"
                  className="text-white/90 text-sm hover:text-white transition-colors"
                >
                  All Properties
                </Link>
              </li>
              <li>
                <Link
                  to="/residential"
                  className="text-white/90 text-sm hover:text-white transition-colors"
                >
                  Residential
                </Link>
              </li>
              <li>
                <Link
                  to="/commercial"
                  className="text-white/90 text-sm hover:text-white transition-colors"
                >
                  Commercial
                </Link>
              </li>
              <li>
                <Link
                  to="/industrial"
                  className="text-white/90 text-sm hover:text-white transition-colors"
                >
                  Industrial
                </Link>
              </li>
            </ul>
          </div>

          {/* Rentals */}
          <div>
            <h4 className="text-white/60 text-[11px] font-semibold uppercase tracking-wide mb-4">
              Rentals
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/residential-rentals"
                  className="text-white/90 text-sm hover:text-white transition-colors"
                >
                  Residential Rentals
                </Link>
              </li>
              <li>
                <Link
                  to="/commercial-rentals"
                  className="text-white/90 text-sm hover:text-white transition-colors"
                >
                  Commercial Rentals
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white/60 text-[11px] font-semibold uppercase tracking-wide mb-4">
              Resources
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/services"
                  className="text-white/90 text-sm hover:text-white transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="text-white/90 text-sm hover:text-white transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/the-brandt"
                  className="text-white/90 text-sm hover:text-white transition-colors"
                >
                  The Brandt
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-white/90 text-sm hover:text-white transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/ai-assistant"
                  className="text-white/90 text-sm hover:text-white transition-colors"
                >
                  AI Assistant
                </Link>
              </li>
            </ul>
          </div>

          {/* Local Pages */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="text-white/60 text-[11px] font-semibold uppercase tracking-wide mb-4">
              Local Pages
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/residential-440008"
                  className="text-white/90 text-sm hover:text-white transition-colors"
                >
                  Residential 440008
                </Link>
              </li>
              <li>
                <Link
                  to="/commercial-440008"
                  className="text-white/90 text-sm hover:text-white transition-colors"
                >
                  Commercial 440008
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Information */}
        <div className="border-t border-white/10 pt-7">
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div>
              <p className="text-[#989898] text-base leading-6">
                <strong className="font-bold">Office Address</strong>
                <br />
                Bhandara Road, Behind Jk Tower, Small Factory Area Bagadgangj
                Nagper Maharashtra-2440008
              </p>
            </div>
            <div>
              <p className="text-[#989898] text-base leading-6">
                <strong className="font-bold">Phone Number</strong>
                <br />
                office: 7387777085
                <br />
                Mobile:-7387777686/8275046765
              </p>
            </div>
            <div>
              <p className="text-[#989898] text-base leading-6">
                EMAIL :- info@mphdgroup.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
