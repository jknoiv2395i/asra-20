import { useRef } from "react";
import { Link } from "react-router-dom";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { defaultPropertiesList } from "@shared/propertiesData";

export default function ProjectShowcase() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const showcaseProperties = defaultPropertiesList.slice(0, 8);

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
    <section className="w-full bg-white px-4 md:px-8 lg:px-20 py-8 md:py-10 lg:py-12">
      <div className="max-w-[1440px] mx-auto">
        {/* Header Section */}
        <div className="flex flex-col items-center mb-8 md:mb-12 lg:mb-16">
          <AnimatedSection>
            <h2 className="font-instrument text-center text-[#010101] text-3xl md:text-5xl lg:text-[60px] font-normal lg:leading-[68px] tracking-tight capitalize max-w-4xl">
              Explore Our{" "}
              <span className="font-medium text-[#33A4BB]">Featured</span> Developments
            </h2>
            <p className="text-[#5D5D5D] text-center text-sm md:text-base lg:text-lg mt-3 max-w-2xl">
              Discover prime residential plots, luxury apartments, and commercial projects across Indore and Ujjain Road.
            </p>
          </AnimatedSection>
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
          {showcaseProperties.map((property) => (
            <div
              key={property.id}
              className="property-card flex-shrink-0 w-[300px] md:w-[320px] lg:w-[356px] flex flex-col justify-between"
              style={{ scrollSnapAlign: "start" }}
            >
              <Link to={`/properties/${property.id}`} className="block group">
                {/* Property Image */}
                <div className="property-image-wrapper rounded-2xl overflow-hidden mb-5 bg-gray-100 aspect-[4/3] relative">
                  {property.images && property.images.length > 0 ? (
                    <img
                      src={property.images[0]}
                      alt={property.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-300">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <rect x="3" y="3" width="18" height="18" rx="2" />
                      </svg>
                    </div>
                  )}
                  {property.tag && (
                    <span className="absolute top-3 left-3 bg-[#0E0840] text-white text-[11px] font-semibold px-3 py-1 rounded-full shadow">
                      {property.tag}
                    </span>
                  )}
                </div>

                {/* Property Info */}
                <div className="property-info flex flex-col gap-2">
                  <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">
                    {property.location}
                  </p>
                  <h3 className="font-instrument text-[#010101] text-xl md:text-2xl font-medium leading-snug group-hover:text-[#c9a96e] transition-colors">
                    {property.title}
                  </h3>
                  <p className="text-[#0E0840] text-base md:text-lg font-semibold mt-1">
                    {property.price}
                  </p>
                </div>
              </Link>

              {/* View Details CTA */}
              <div className="mt-4 pt-4 border-t border-gray-100">
                <Link
                  to={`/properties/${property.id}`}
                  className="flex items-center gap-2 group w-fit text-sm font-bold text-[#0E0840] hover:text-[#c9a96e] transition-colors uppercase tracking-wider"
                >
                  <span>View Details</span>
                  <svg
                    className="w-4 h-4 transition-transform group-hover:translate-x-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-center gap-4 md:gap-6 mt-8 md:mt-12">
          <button
            onClick={() => scroll("left")}
            className="w-10 h-10 md:w-12 md:h-12 bg-[#0E0840] rounded-full flex items-center justify-center hover:bg-[#1a1060] transition-colors shadow"
            aria-label="Scroll left"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 18L9 12L15 6" />
            </svg>
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-10 h-10 md:w-12 md:h-12 bg-[#0E0840] rounded-full flex items-center justify-center hover:bg-[#1a1060] transition-colors shadow"
            aria-label="Scroll right"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 18L15 12L9 6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
