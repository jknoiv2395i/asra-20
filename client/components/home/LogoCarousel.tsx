export default function LogoCarousel() {
  return (
    <>
      <style>{`
        @media (max-width: 640px) {
          .logo-carousel-section {
            color: #0e0840;
            background-color: #0e0840;
          }
        }
      `}</style>
      <LogoCarouselContent />
    </>
  );
}

function LogoCarouselContent() {
  const logos = [
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/f7594c995dd6a2991a68df5162dbb03264d997c1?width=166",
      alt: "Cars24 logo",
      className: "h-8 md:h-10",
    },
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/121077c224b9a545cb3b0123da6a8a2bc7ebb67e?width=153",
      alt: "PNB logo",
      className: "h-8 md:h-10",
    },
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/b742e8bc5093637a40fcd9f1df1dfc6db0d82642?width=251",
      alt: "Rai Udyog logo",
      className: "h-8 md:h-10",
    },
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/b7f43f6eee9e832d3ee11e2a63c7f223e294730d?width=270",
      alt: "Afcons logo",
      className: "h-7 md:h-9",
    },
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/aa9ba4ec54155bb4c45d356a6c1a7d618162afef?width=114",
      alt: "GRIL logo",
      className: "h-10 md:h-12",
    },
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/35e1d5c17211c651ec11ad1fb0238b70b6ada86a?width=278",
      alt: "GMMCO logo",
      className: "h-7 md:h-9",
    },
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/38d6a55a749cfcda3c6d354cab920e14d4183e30?width=271",
      alt: "LIC HFL logo",
      className: "h-8 md:h-10",
    },
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/7780b0758ca5aff830321321f264244302a78b80?width=352",
      alt: "Kalpataru logo",
      className: "h-7 md:h-9",
    },
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/4b5b7ab03dcb6b0b44fe750f1ad2ac98e8e2ef54?width=215",
      alt: "Blinkit logo",
      className: "h-8 md:h-10",
    },
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/9098532fd54a96721dfed89d0e573f088f7aa397?width=157",
      alt: "Rail Vikas Nigam Limited logo",
      className: "h-10 md:h-12",
    },
  ];

  return (
    <section className="w-full h-auto bg-white flex items-center justify-center py-8 md:py-16 overflow-hidden sm:bg-[#0e0840] sm:text-[#0e0840]">
      <div className="w-full flex items-center justify-center overflow-hidden px-4">
        <div className="flex items-center gap-12 md:gap-20 animate-scroll">
          {/* Render logos twice for seamless loop */}
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex items-center justify-center h-16 md:h-20"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className={`${logo.className} w-auto object-contain opacity-90`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
