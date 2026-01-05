export default function CTASection() {
  return (
    <section className="relative w-full h-[900px] bg-gradient-to-r from-[#60A5FA] to-[#2563EB] overflow-hidden">
      {/* Background Image */}
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/457b2aacc7cd7e03e4be7cb6836ebe3a9f88eab2?width=3840"
        alt="Modern architectural building"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center px-6 md:px-24">
        <div className="max-w-[614px]">
          <h2 className="font-normal text-[60px] md:text-[87px] leading-[64px] md:leading-[96px] text-white mb-6 tracking-tight">
            Schedule a free consultation
          </h2>
          <p className="text-white text-lg leading-7 mb-10">
            Schedule a Free Consultation. Your property goals, our expertise —
            making real estate simple, secure, and profitable.
          </p>
          <button className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-full hover:bg-gray-50 transition-all">
            <span className="text-black text-[17px] font-medium">
              Get started
            </span>
            <div className="flex items-center justify-center w-[42px] h-[42px] bg-black rounded-full">
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
