import { useRef } from "react";

export default function ProjectShowcase() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/c2484990aa35d89f140081107583868909a322f2?width=976",
      title: "Urban retreat in Golden Gate Park",
      description:
        "A spacious conference room with natural light for meetings and presentations.",
      aspectRatio: "488/413",
    },
    {
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/493242bd2fd48e5bacad3d77eb20bfe914e98120?width=560",
      title: "Sustainable Offices",
      description:
        "A contemporary, light-filled Offices Ecological technologies and recyclable materials",
      aspectRatio: "280/185",
    },
    {
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/a834ca2d6793d4830086918bc05d17110ce7826e?width=768",
      title: "Shopping Center",
      description:
        "A contemporary, light-filled shopping center offering an unforgettable visitor experience.",
      aspectRatio: "384/350",
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
    <section className="w-full bg-white px-4 md:px-8 lg:px-12 py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto">
        {/* Carousel Container */}
        <div
          ref={carouselRef}
          className="flex gap-6 md:gap-8 overflow-x-auto scroll-smooth mb-8 md:mb-12 lg:mb-12 pb-4"
          style={{
            scrollBehavior: "smooth",
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex-shrink-0"
              style={{
                width: index === 0 ? "clamp(300px, 50vw, 500px)" : "clamp(250px, 40vw, 400px)",
                scrollSnapAlign: "start",
              }}
            >
              <div
                className="rounded-3xl overflow-hidden mb-4 md:mb-6"
                style={{ aspectRatio: project.aspectRatio }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-instrument text-lg md:text-xl lg:text-2xl leading-snug md:leading-8 lg:leading-8 text-[#131313] mb-3 md:mb-4 tracking-tight">
                {project.title}
              </h3>
              <p className="text-[#5D5D5D] text-sm md:text-base leading-6 md:leading-7">
                {project.description}
              </p>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-center gap-4 md:gap-6">
          <button
            onClick={() => scroll("left")}
            className="w-10 h-10 md:w-14 md:h-14 bg-[#071839] rounded-full flex items-center justify-center hover:bg-[#0a2050] transition-colors flex-shrink-0"
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
            className="w-10 h-10 md:w-14 md:h-14 bg-[#071839] rounded-full flex items-center justify-center hover:bg-[#0a2050] transition-colors flex-shrink-0"
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
    </section>
  );
}
