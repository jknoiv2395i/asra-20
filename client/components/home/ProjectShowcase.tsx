import { useRef } from "react";

export default function ProjectShowcase() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const properties = [
    {
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/f9294423c5aad854317c1b8f2ce93fa9d31a0933?width=712",
      title: "Forest Retreat",
      description:
        "Are you looking to find your dream home or invest in a lucrative property.",
    },
    {
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/bab3c32ceeb7ebac77c03707ae7f7e41b7732007?width=712",
      title: "Woodland Retreat",
      description:
        "When it comes to selling your property, our team is equipped with the expertise.",
    },
    {
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/a743906f7efa3f52462098d0c43e9d94f22a2d7c?width=712",
      title: "Harmony House",
      description:
        "Our agents will guide you through the entire buying process, from property",
    },
    {
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/4b0c97890a88c03aeec91fbcf464d29dec32a560?width=712",
      title: "Aliva Priva Jardin",
      description:
        "If you're in need of rental services, our team can assist you in finding suitable",
    },
    {
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/ad33659c33381eac40061641b81f19d65a13ad9f?width=712",
      title: "Asatti Garden City",
      description:
        "Interested in real estate investment opportunities? Our experts can provide",
    },
    {
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/ad33659c33381eac40061641b81f19d65a13ad9f?width=712",
      title: "Citraland Puri Serang",
      description:
        "If you're planning a relocation to our area, we understand that the process",
    },
  ];

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = 400;
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="w-full bg-white px-4 md:px-8 lg:px-20 py-12 md:py-16 lg:py-20">
      <div className="max-w-[1440px] mx-auto">
        {/* Header Section */}
        <div className="flex flex-col items-center mb-8 md:mb-12 lg:mb-16">
          {/* Dreamer Home Badge */}
          <div className="flex items-center gap-2 mb-6 md:mb-8">
            <svg
              className="w-5 h-5 opacity-90"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.9">
                <path
                  d="M4.11768 16.7824H16.7828V4.11722"
                  stroke="#33A4BB"
                  strokeWidth="3.48327"
                  strokeMiterlimit="20"
                  strokeLinecap="square"
                />
                <path
                  d="M4.11768 4.11722L15.5167 15.5162"
                  stroke="#33A4BB"
                  strokeWidth="3.48327"
                  strokeMiterlimit="20"
                  strokeLinecap="square"
                />
              </g>
            </svg>
            <span className="text-black font-bold text-base md:text-lg lg:text-[19px] uppercase tracking-[0.12em] leading-tight">
              Dreamer Home
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-center text-[#010101] text-3xl md:text-5xl lg:text-[69px] font-normal lg:leading-[77px] tracking-tight lg:tracking-[-3.8px] capitalize max-w-4xl">
            If you're in need of{" "}
            <span className="font-medium text-[#33A4BB]">rental</span> services
          </h2>
        </div>

        {/* Carousel Container */}
        <div
          ref={carouselRef}
          className="flex gap-6 md:gap-8 lg:gap-9 overflow-x-auto scroll-smooth pb-4"
          style={{
            scrollBehavior: "smooth",
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {properties.map((property, index) => (
            <div
              key={index}
              className="property-card flex-shrink-0 w-[300px] md:w-[320px] lg:w-[356px]"
              style={{ scrollSnapAlign: "start" }}
            >
              {/* Property Image */}
              <div className="property-image-wrapper rounded-[10px] overflow-hidden mb-6 md:mb-7 lg:mb-8">
                <img
                  src={property.image}
                  alt={property.title}
                  className="property-image w-full h-[300px] md:h-[400px] lg:h-[449px] object-cover"
                />
              </div>

              {/* Property Info */}
              <div className="property-info flex flex-col gap-4 md:gap-5">
                {/* Title and Description */}
                <div className="property-text flex flex-col gap-2 md:gap-3">
                  <h3 className="property-title text-[#010101] text-2xl md:text-[28px] lg:text-[30px] font-medium leading-normal">
                    {property.title}
                  </h3>
                  <p className="property-description text-[#010101] text-base md:text-[17px] lg:text-[18px] leading-[1.52] font-normal">
                    {property.description}
                  </p>
                </div>

                {/* Book Now CTA */}
                <button className="book-now-btn flex items-center gap-2 group w-fit">
                  <span className="book-now-text text-black text-base md:text-[18px] lg:text-[19px] font-bold uppercase leading-tight tracking-wide">
                    Book Now
                  </span>
                  <svg
                    className="book-now-arrow w-5 h-5 transition-transform group-hover:translate-x-1"
                    viewBox="0 0 21 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0)" opacity="0.9">
                      <path
                        d="M11.4035 17.3651L18.3143 10.4543L11.4035 3.5435"
                        stroke="#6E00FF"
                        strokeWidth="2.68794"
                        strokeMiterlimit="20"
                        strokeLinecap="square"
                      />
                      <path
                        d="M4.49268 10.4543H16.9325"
                        stroke="#6E00FF"
                        strokeWidth="2.68794"
                        strokeMiterlimit="20"
                        strokeLinecap="square"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <rect
                          width="14.7836"
                          height="14.7836"
                          fill="white"
                          transform="translate(0 10.4536) rotate(-45)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-center gap-4 md:gap-6 mt-8 md:mt-12">
          <button
            onClick={() => scroll("left")}
            className="nav-btn-prev w-10 h-10 md:w-14 md:h-14 bg-[#071839] rounded-full flex items-center justify-center hover:bg-[#0a2050] transition-colors"
            aria-label="Scroll left"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 18L9 12L15 6"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            onClick={() => scroll("right")}
            className="nav-btn-next w-10 h-10 md:w-14 md:h-14 bg-[#071839] rounded-full flex items-center justify-center hover:bg-[#0a2050] transition-colors"
            aria-label="Scroll right"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 18L15 12L9 6"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      <style>{`
        .property-card::-webkit-scrollbar {
          display: none;
        }
        
        div[ref]::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
