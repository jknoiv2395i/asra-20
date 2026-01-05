export default function HeroSection() {
  return (
    <section className="relative w-full h-[915px] bg-[#1E9CE8] overflow-hidden">
      {/* Background Image */}
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/ec4dbbbabe37a36b8cd44006f5f5207c0c897340?width=3840"
        alt="Hero background - Nagpur properties"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Gradient Overlay */}
      <div className="absolute bottom-0 left-0 w-full h-60 bg-gradient-to-t from-white to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 pt-24 md:pt-32">
        <div className="max-w-[631px] mx-auto text-center">
          {/* Main Heading */}
          <h1 className="font-instrument text-[48px] md:text-[72px] leading-[48px] md:leading-[72px] text-white mb-6">
            Your gateway to prestige properties
          </h1>

          {/* Subheading */}
          <p className="text-white/90 text-base md:text-[19px] leading-7 mb-12 px-4">
            Bring your architectural projects to life with a template that puts
            your work front and center.
          </p>

          {/* CTA Button */}
          <button className="inline-flex items-center gap-2 px-8 py-4 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-all">
            <span className="text-[#111827] text-[15px] font-medium">
              Get started
            </span>
            <div className="flex items-center justify-center w-6 h-6 bg-[#111827] rounded-full">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.625 7H11.375M11.375 7L7 2.625M11.375 7L7 11.375"
                  stroke="white"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
