import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="w-full bg-transparent absolute top-0 left-0 z-50">
      <div className="w-full px-4 md:px-8 lg:px-12 py-4 md:py-0 flex items-center justify-between h-20 md:h-24">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2Fea71525dd8ea470bb0c07f096721fbd7%2F9d55a1122b3a412091e385b1651a8aa3"
            alt="MPHD Group - Real Estate Consultants Nagpur Logo"
            className="h-[87px] w-[92px] sm:h-[61px] sm:w-auto"
          />
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center md:gap-6 lg:gap-8">
          <Link
            to="/"
            className="text-white/80 hover:text-white text-sm lg:text-base font-normal transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-white/80 hover:text-white text-sm lg:text-base font-normal transition-colors duration-200"
          >
            About us
          </Link>
          <Link
            to="/residential"
            className="text-white/80 hover:text-white text-sm lg:text-base font-normal transition-colors duration-200"
          >
            Residential
          </Link>
          <Link
            to="/commercial"
            className="text-white/80 hover:text-white text-sm lg:text-base font-normal transition-colors duration-200"
          >
            Commercial
          </Link>
          <Link
            to="/industrial"
            className="text-white/80 hover:text-white text-sm lg:text-base font-normal transition-colors duration-200"
          >
            Industrial
          </Link>
        </nav>

        {/* Contact Button */}
        <button className="hidden md:flex items-center justify-center px-6 py-2 bg-white rounded-full text-black text-sm lg:text-base font-medium hover:bg-gray-50 transition-colors duration-200">
          Contact us
        </button>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}
