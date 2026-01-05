export default function LogoCarousel() {
  const logos = [
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/f7594c995dd6a2991a68df5162dbb03264d997c1?width=166",
      alt: "Cars24 logo",
      width: 83,
      height: 40,
    },
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/121077c224b9a545cb3b0123da6a8a2bc7ebb67e?width=153",
      alt: "PNB logo",
      width: 77,
      height: 40,
    },
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/b742e8bc5093637a40fcd9f1df1dfc6db0d82642?width=251",
      alt: "Rai Udyog logo",
      width: 125,
      height: 40,
    },
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/b7f43f6eee9e832d3ee11e2a63c7f223e294730d?width=270",
      alt: "Afcons logo",
      width: 135,
      height: 36,
    },
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/aa9ba4ec54155bb4c45d356a6c1a7d618162afef?width=114",
      alt: "GRIL logo",
      width: 57,
      height: 48,
    },
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/35e1d5c17211c651ec11ad1fb0238b70b6ada86a?width=278",
      alt: "GMMCO logo",
      width: 139,
      height: 36,
    },
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/38d6a55a749cfcda3c6d354cab920e14d4183e30?width=271",
      alt: "LIC HFL logo",
      width: 136,
      height: 44,
    },
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/7780b0758ca5aff830321321f264244302a78b80?width=352",
      alt: "Kalpataru logo",
      width: 176,
      height: 36,
    },
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/4b5b7ab03dcb6b0b44fe750f1ad2ac98e8e2ef54?width=215",
      alt: "Blinkit logo",
      width: 107,
      height: 44,
    },
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/9098532fd54a96721dfed89d0e573f088f7aa397?width=157",
      alt: "Rail Vikas Nigam Limited logo",
      width: 79,
      height: 48,
    },
  ];

  return (
    <section className="w-full h-20 bg-white flex items-center overflow-hidden">
      <div className="flex items-center gap-20 px-10 animate-scroll">
        {/* Render logos twice for seamless loop */}
        {[...logos, ...logos].map((logo, index) => (
          <div
            key={index}
            className="flex-shrink-0 flex items-center justify-center"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              style={{ width: logo.width, height: logo.height }}
              className="opacity-90 object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
