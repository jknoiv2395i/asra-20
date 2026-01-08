export default function ExcellenceSection() {
  return (
    <section className="w-full bg-white px-4 md:px-8 lg:px-12 py-12 md:py-16 lg:py-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
        {/* Left Content */}
        <div>
          <h2 className="font-instrument text-2xl md:text-4xl lg:text-5xl leading-tight md:leading-tight lg:leading-tight text-black mb-6 md:mb-8 lg:mb-8 tracking-tight">
            With a commitment to excellence and customer satisfaction.
          </h2>
          <p className="text-[#5D5D5D] text-base md:text-lg leading-relaxed md:leading-8 mb-8 md:mb-10 lg:mb-10">
            With a commitment to excellence, transparency, and growth, we
            transform property goals into profitable realities. Our team of
            experienced professionals in sales, legal, and compliance works
            together to deliver seamless solutions that maximize value and
            ensure long-term success for every client
          </p>
          <button className="px-6 md:px-8 py-3 md:py-4 bg-[#131313] text-white text-base md:text-lg font-medium rounded-full hover:bg-black transition-colors mb-12 md:mb-16 lg:mb-16">
            Learn more
          </button>

          {/* Stats */}
          <div className="flex gap-12 md:gap-16 lg:gap-24">
            <div>
              <h3 className="font-instrument text-3xl md:text-4xl lg:text-5xl leading-tight text-black mb-2 tracking-tight">
                30+
              </h3>
              <p className="text-[#5D5D5D] text-sm md:text-base lg:text-lg">Project Handled</p>
            </div>
            <div>
              <h3 className="font-instrument text-3xl md:text-4xl lg:text-5xl leading-tight text-black mb-2 tracking-tight">
                100+
              </h3>
              <p className="text-[#5D5D5D] text-sm md:text-base lg:text-lg">
                Expert teams
              </p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="rounded-3xl overflow-hidden order-first lg:order-last">
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
