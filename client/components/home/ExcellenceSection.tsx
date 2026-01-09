export default function ExcellenceSection() {
  return (
    <section className="w-full bg-white px-4 md:px-8 lg:px-[137px] py-12 md:py-16 lg:py-20">
      <div className="max-w-[1440px] mx-auto">
        {/* Heading and CTA */}
        <div className="flex flex-col gap-[43px] w-full sm:pb-[43px] sm:gap-[18px] mb-8 md:mb-12">
          {/* Text Content */}
          <div className="flex flex-col gap-[17px]">
            <h2 className="text-[#2B0A01] font-bold text-3xl md:text-4xl lg:text-[48px] leading-[1.17] tracking-[-2.118px]">
              We use Real Estate to
              <br />
              show our appreciation of
              <br />
              the world.
            </h2>
            <p className="text-[#7B7B7B] text-base md:text-lg leading-[27px]">
              We provide equity and debt capital globally to back
              <br className="hidden md:block" />
              projects that make an impact.
            </p>
          </div>

          {/* CTA Button */}
          <button className="inline-flex items-center gap-3 bg-white text-black px-5 py-2.5 rounded-full hover:bg-gray-200 transition-all sm:w-[135px] sm:bg-black sm:text-white">
            <span className="font-medium sm:text-white">Get started</span>
          </button>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-8 md:gap-12 lg:gap-[97px]">
          {/* Left Side - Stats Grid */}
          <div className="w-full lg:w-[535px] grid grid-cols-2 gap-x-0 gap-y-0">
            {/* Stat 1 - Years experience */}
            <div className="flex flex-col gap-[10px] pr-8 md:pr-12 lg:pr-20 pb-8 md:pb-12">
              <h3 className="text-[#401408] font-semibold text-4xl md:text-5xl leading-[60px]">
                9
              </h3>
              <p className="text-[#7B7B7B] text-base md:text-lg leading-[27px]">
                Years experience in
                <br />
                real estate
              </p>
            </div>

            {/* Stat 2 - Total Net Profit */}
            <div className="flex flex-col gap-[10px] pr-8 md:pr-12 lg:pr-20 pb-8 md:pb-12">
              <h3 className="text-[#401408] font-semibold text-4xl md:text-5xl leading-[60px]">
                $23K
              </h3>
              <p className="text-[#7B7B7B] text-base md:text-lg leading-[27px]">
                Total Net Profit Every
                <br />
                Month
              </p>
            </div>

            {/* Stat 3 - Happy customers */}
            <div className="flex flex-col gap-[10px] pr-8 md:pr-12 lg:pr-20 pb-8 md:pb-12">
              <h3 className="text-[#401408] font-semibold text-4xl md:text-5xl leading-[60px]">
                17
              </h3>
              <p className="text-[#7B7B7B] text-base md:text-lg leading-[27px]">
                Every month a new
                <br />
                happy customer
              </p>
            </div>

            {/* Stat 4 - Approximate Profit */}
            <div className="flex flex-col gap-[10px] pr-8 md:pr-12 lg:pr-20 pb-8 md:pb-12">
              <h3 className="text-[#401408] font-semibold text-4xl md:text-5xl leading-[60px]">
                $4K-7K
              </h3>
              <p className="text-[#7B7B7B] text-base md:text-lg leading-[27px]">
                Approximate Profit In
                <br />
                20 Business Days
              </p>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="flex flex-col gap-[43px] w-full lg:flex-1">
            {/* Text Content */}
            <div className="flex flex-col gap-[17px]">
              <h2 className="text-[#2B0A01] font-bold text-3xl md:text-4xl lg:text-[48px] leading-[1.17] tracking-[-2.118px]">
                We use Real Estate to
                <br />
                show our appreciation of
                <br />
                the world.
              </h2>
              <p className="text-[#7B7B7B] text-base md:text-lg leading-[27px]">
                We provide equity and debt capital globally to back
                <br className="hidden md:block" />
                projects that make an impact.
              </p>
            </div>

            {/* Button */}
            <button className="bg-black text-white font-bold text-sm leading-5 px-[41px] py-[19px] w-fit hover:bg-gray-900 transition-colors">
              Know More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
