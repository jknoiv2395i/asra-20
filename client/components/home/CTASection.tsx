export default function CTASection() {
  return (
    <section className="relative w-full min-h-[777px] sm:min-h-screen md:h-96 lg:h-[900px] bg-gradient-to-r from-[#60A5FA] to-[#2563EB] overflow-hidden">
      {/* Background Image */}
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/457b2aacc7cd7e03e4be7cb6836ebe3a9f88eab2?width=3840"
        alt="Modern architectural building"
        className="absolute inset-0 w-full object-cover"
        style={{
          height: "112%",
        }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center px-4 md:px-8 lg:px-12 py-12 md:py-16 lg:py-20" style={{ paddingTop: "180px", marginTop: "39px" }}>
        <div
          className="max-w-2xl w-full flex flex-col justify-start items-start sm:flex-row sm:items-center sm:justify-start sm:h-auto"
          style={{ height: "272px", margin: "200px 0 auto" }}
        >
          <h2 className="font-normal text-3xl md:text-5xl lg:text-7xl leading-tight md:leading-tight lg:leading-[96px] text-white mb-4 md:mb-6 tracking-tight">
            Schedule a free consultation
          </h2>
          <p className="text-white text-base md:text-lg leading-6 md:leading-7 mb-6 md:mb-10">
            Schedule a Free Consultation. Your property goals, our expertise —
            making real estate simple, secure, and profitable.
          </p>
          <button className="inline-flex items-center gap-3 px-5 md:px-6 py-2.5 md:py-3 bg-white rounded-full hover:bg-gray-50 transition-all">
            <span className="text-black text-base md:text-lg font-medium">
              Get started
            </span>
            <div className="flex items-center justify-center w-9 md:w-10 lg:w-[42px] h-9 md:h-10 lg:h-[42px] bg-black rounded-full flex-shrink-0">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.15817 5.14453H12.9898V11.9761M12.5154 5.61895L5.58887 12.5455"
                  stroke="white"
                  strokeWidth="1.61023"
                  strokeMiterlimit="10"
                  strokeLinecap="square"
                />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
