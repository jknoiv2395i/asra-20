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
    <section className="w-full bg-white py-16 px-6 md:px-20 lg:px-80">
      <div className="max-w-[1216px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">
          {/* First Project - Spans more columns */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden mb-6" style={{ aspectRatio: projects[0].aspectRatio }}>
              <img
                src={projects[0].image}
                alt={projects[0].title}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-instrument text-[30px] leading-[38px] text-[#131313] mb-4 tracking-tight">
              {projects[0].title}
            </h3>
            <p className="text-[#5D5D5D] text-lg leading-[29px]">
              {projects[0].description}
            </p>
          </div>

          {/* Second Project */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl overflow-hidden mb-6" style={{ aspectRatio: projects[1].aspectRatio }}>
              <img
                src={projects[1].image}
                alt={projects[1].title}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-instrument text-[30px] leading-[38px] text-[#131313] mb-4 tracking-tight">
              {projects[1].title}
            </h3>
            <p className="text-[#5D5D5D] text-lg leading-[29px]">
              {projects[1].description}
            </p>
          </div>

          {/* Third Project */}
          <div className="lg:col-span-4">
            <div className="rounded-2xl overflow-hidden mb-6" style={{ aspectRatio: projects[2].aspectRatio }}>
              <img
                src={projects[2].image}
                alt={projects[2].title}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-instrument text-[30px] leading-[38px] text-[#131313] mb-4 tracking-tight">
              {projects[2].title}
            </h3>
            <p className="text-[#5D5D5D] text-lg leading-[29px]">
              {projects[2].description}
            </p>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-center gap-6">
          <button className="w-14 h-14 bg-[#071839] rounded-full flex items-center justify-center hover:bg-[#0a2050] transition-colors">
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
          <button className="w-14 h-14 bg-[#071839] rounded-full flex items-center justify-center hover:bg-[#0a2050] transition-colors">
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
