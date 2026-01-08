export default function ProjectShowcase() {
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

  return (
    <section className="w-full bg-white px-4 md:px-8 lg:px-12 py-12 md:py-16 lg:py-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 md:gap-8 mb-8 md:mb-12 lg:mb-12">
          {/* First Project - Spans more columns */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl overflow-hidden mb-4 md:mb-6 lg:mb-6" style={{ aspectRatio: projects[0].aspectRatio }}>
              <img
                src={projects[0].image}
                alt={projects[0].title}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-instrument text-lg md:text-2xl lg:text-[30px] leading-snug md:leading-9 lg:leading-9 text-[#131313] mb-3 md:mb-4 lg:mb-4 tracking-tight">
              {projects[0].title}
            </h3>
            <p className="text-[#5D5D5D] text-sm md:text-base lg:text-lg leading-6 md:leading-7 lg:leading-7">
              {projects[0].description}
            </p>
          </div>

          {/* Second Project */}
          <div className="lg:col-span-3">
            <div className="rounded-3xl overflow-hidden mb-4 md:mb-6 lg:mb-6" style={{ aspectRatio: projects[1].aspectRatio }}>
              <img
                src={projects[1].image}
                alt={projects[1].title}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-instrument text-lg md:text-2xl lg:text-[30px] leading-snug md:leading-9 lg:leading-9 text-[#131313] mb-3 md:mb-4 lg:mb-4 tracking-tight">
              {projects[1].title}
            </h3>
            <p className="text-[#5D5D5D] text-sm md:text-base lg:text-lg leading-6 md:leading-7 lg:leading-7">
              {projects[1].description}
            </p>
          </div>

          {/* Third Project */}
          <div className="lg:col-span-4">
            <div className="rounded-3xl overflow-hidden mb-4 md:mb-6 lg:mb-6" style={{ aspectRatio: projects[2].aspectRatio }}>
              <img
                src={projects[2].image}
                alt={projects[2].title}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-instrument text-lg md:text-2xl lg:text-[30px] leading-snug md:leading-9 lg:leading-9 text-[#131313] mb-3 md:mb-4 lg:mb-4 tracking-tight">
              {projects[2].title}
            </h3>
            <p className="text-[#5D5D5D] text-sm md:text-base lg:text-lg leading-6 md:leading-7 lg:leading-7">
              {projects[2].description}
            </p>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-center gap-4 md:gap-6">
          <button className="w-10 h-10 md:w-14 md:h-14 bg-[#071839] rounded-full flex items-center justify-center hover:bg-[#0a2050] transition-colors flex-shrink-0">
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
          <button className="w-10 h-10 md:w-14 md:h-14 bg-[#071839] rounded-full flex items-center justify-center hover:bg-[#0a2050] transition-colors flex-shrink-0">
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
