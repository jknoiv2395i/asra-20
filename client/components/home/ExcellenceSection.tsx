export default function ExcellenceSection() {
  return (
    <section
      className="w-full bg-white"
      style={{ padding: "0 103px 80px 124px" }}
    >
      <div className="max-w-[1568px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <h2 className="font-instrument text-[48px] md:text-[60px] leading-[48px] md:leading-[60px] text-black mb-8 tracking-tight">
            With a commitment to excellence and customer satisfaction.
          </h2>
          <p className="text-[#5D5D5D] text-[17px] leading-7 mb-10">
            With a commitment to excellence, transparency, and growth, we
            transform property goals into profitable realities. Our team of
            experienced professionals in sales, legal, and compliance works
            together to deliver seamless solutions that maximize value and
            ensure long-term success for every client
          </p>
          <button className="px-8 py-4 bg-[#131313] text-white text-[17px] font-medium rounded-full hover:bg-black transition-colors mb-16">
            Learn more
          </button>

          {/* Stats */}
          <div className="flex gap-24">
            <div>
              <h3 className="font-instrument text-[48px] leading-[48px] text-black mb-2 tracking-tight">
                30+
              </h3>
              <p className="text-[#5D5D5D] text-[17px]">Project Handled</p>
            </div>
            <div>
              <h3 className="font-instrument text-[48px] leading-[48px] text-black mb-2 tracking-tight text-center">
                100+
              </h3>
              <p className="text-[#5D5D5D] text-base text-center">
                Expert teams
              </p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="rounded-3xl overflow-hidden">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/b57b7c71197cd9bfd4d23021b8abd2b37ab5cb3e?width=1120"
            alt="Modern architectural building with curved glass facade"
            className="w-full h-full object-cover"
            style={{ aspectRatio: "560/617" }}
          />
        </div>
      </div>
    </section>
  );
}
