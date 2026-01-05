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
    <section className="w-full bg-white py-16 md:py-24 px-6 md:px-20 lg:px-80">
      <div className="max-w-[1280px] mx-auto">
        <h2 className="font-instrument text-[40px] md:text-[54px] leading-[54px] text-black text-center mb-16 tracking-tight">
          Our Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {/* First Project */}
          <div className="lg:col-span-4">
            <div className="rounded-[18px] overflow-hidden mb-6" style={{ aspectRatio: projects[0].aspectRatio }}>
              <img
                src={projects[0].image}
                alt={projects[0].title}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-instrument text-[27px] leading-[36px] text-[#131313] mb-4 tracking-tight">
              {projects[0].title}
            </h3>
            <p className="text-[#5D5D5D] text-lg tracking-wide">
              {projects[0].date}
            </p>
          </div>

          {/* Second Project */}
          <div className="lg:col-span-5">
            <div className="rounded-[18px] overflow-hidden mb-6" style={{ aspectRatio: projects[1].aspectRatio }}>
              <img
                src={projects[1].image}
                alt={projects[1].title}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-instrument text-[27px] leading-[36px] text-[#131313] mb-4 tracking-tight">
              {projects[1].title}
            </h3>
            <p className="text-[#5D5D5D] text-lg tracking-wide">
              {projects[1].date}
            </p>
          </div>

          {/* Third Project */}
          <div className="lg:col-span-3">
            <div className="rounded-[18px] overflow-hidden mb-6" style={{ aspectRatio: projects[2].aspectRatio }}>
              <img
                src={projects[2].image}
                alt={projects[2].title}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-instrument text-[27px] leading-[36px] text-[#131313] mb-4 tracking-tight">
              {projects[2].title}
            </h3>
            <p className="text-[#5D5D5D] text-lg tracking-wide">
              {projects[2].date}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
