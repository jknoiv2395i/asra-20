export default function FeaturedProjects() {
  const projects = [
    {
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/416addc2782b9fb53a01c93ece15343753c56e75?width=768",
      title:
        "The Green Space Revolution: Is the 'Living Building' the Future of Cities?",
      date: "March 19, 2025",
      aspectRatio: "4/5",
    },
    {
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/93f9f38075eab9840ba7cf8f13a676f64d35dfcf?width=976",
      title: "The Rise of Biophilic Design: Merging Nature with Urban Spaces",
      date: "March 19, 2025",
      aspectRatio: "488/407",
    },
    {
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/bde2d192e63f2855084f213abbf4641d25defc35?width=560",
      title: "Adaptive Reuse: The Future of Sustainable Development",
      date: "March 19, 2025",
      aspectRatio: "4/5",
    },
  ];

  return (
    <section
      className="w-full bg-white px-4 md:px-8 lg:px-12 py-12 md:py-16 lg:py-20"
      style={{
        "@media (max-width: 640px)": {
          height: "1515.7px",
        },
      }}
    >
      <div className="max-w-6xl mx-auto">
        <h2
          className="font-instrument text-2xl md:text-4xl lg:text-5xl leading-tight text-black text-center mb-8 md:mb-12 lg:mb-16 tracking-tight"
          style={{
            "@media (max-width: 640px)": {
              fontSize: "32px",
            },
          }}
        >
          Our Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 md:gap-8 lg:gap-8">
          {/* First Project */}
          <div className="lg:col-span-4">
            <div
              className="rounded-3xl overflow-hidden mb-4 md:mb-6 lg:mb-8"
              style={{ aspectRatio: projects[0].aspectRatio }}
            >
              <img
                src={projects[0].image}
                alt={projects[0].title}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-instrument text-lg md:text-2xl lg:text-[27px] leading-snug md:leading-9 lg:leading-9 text-[#131313] mb-2 md:mb-4 tracking-tight">
              {projects[0].title}
            </h3>
            <p className="text-[#5D5D5D] text-sm md:text-base lg:text-lg tracking-wide">
              {projects[0].date}
            </p>
          </div>

          {/* Second Project */}
          <div className="lg:col-span-5">
            <div
              className="rounded-3xl overflow-hidden mb-4 md:mb-6 lg:mb-8"
              style={{ aspectRatio: projects[1].aspectRatio }}
            >
              <img
                src={projects[1].image}
                alt={projects[1].title}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-instrument text-lg md:text-2xl lg:text-[27px] leading-snug md:leading-9 lg:leading-9 text-[#131313] mb-2 md:mb-4 tracking-tight">
              {projects[1].title}
            </h3>
            <p className="text-[#5D5D5D] text-sm md:text-base lg:text-lg tracking-wide">
              {projects[1].date}
            </p>
          </div>

          {/* Third Project */}
          <div className="lg:col-span-3">
            <div
              className="rounded-3xl overflow-hidden mb-4 md:mb-6 lg:mb-8"
              style={{ aspectRatio: projects[2].aspectRatio }}
            >
              <img
                src={projects[2].image}
                alt={projects[2].title}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-instrument text-lg md:text-2xl lg:text-[27px] leading-snug md:leading-9 lg:leading-9 text-[#131313] mb-2 md:mb-4 tracking-tight">
              {projects[2].title}
            </h3>
            <p className="text-[#5D5D5D] text-sm md:text-base lg:text-lg tracking-wide">
              {projects[2].date}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
