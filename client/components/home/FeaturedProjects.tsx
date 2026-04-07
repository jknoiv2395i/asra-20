import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Property } from "@shared/schema";
import { AnimatedSection, StaggerContainer, AnimatedItem } from "@/components/animations/AnimatedSection";

export default function FeaturedProjects() {
  const [projects, setProjects] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/properties?featured=true")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setProjects(data.data.slice(0, 3));
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <section className="w-full bg-white px-4 md:px-8 lg:px-12 pt-8 md:pt-10 lg:pt-12 pb-4 md:pb-6 lg:pb-8">
        <div className="max-w-6xl lg:max-w-7xl mx-auto">
          <div className="h-10 bg-gray-100 rounded w-1/3 mx-auto mb-12 animate-pulse" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 md:gap-8">
            {[4, 5, 3].map((span, i) => (
              <div key={i} className={`lg:col-span-${span}`}>
                <div className="rounded-3xl bg-gray-100 animate-pulse" style={{ aspectRatio: "4/5" }} />
                <div className="h-6 bg-gray-100 rounded mt-4 w-3/4 animate-pulse" />
                <div className="h-4 bg-gray-100 rounded mt-2 w-1/3 animate-pulse" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (projects.length === 0) return null;

  const aspectRatios = ["4/5", "488/407", "4/5"];

  return (
    <section className="w-full bg-white px-4 md:px-8 lg:px-12 pt-8 md:pt-10 lg:pt-12 pb-4 md:pb-6 lg:pb-8">
      <div className="max-w-6xl lg:max-w-7xl mx-auto">
        <AnimatedSection>
          <h2 className="font-instrument text-2xl md:text-4xl lg:text-5xl leading-tight text-black text-center mb-8 md:mb-12 lg:mb-16 tracking-tight">
            Our Featured Projects
          </h2>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 md:gap-8 lg:gap-8">
          {projects.map((project, i) => {
            const colSpans = [4, 5, 3];
            return (
              <AnimatedItem key={project.id} className={`lg:col-span-${colSpans[i] || 4}`}>
                <Link to={`/properties/${project.id}`} className="block group">
                  <div
                    className="rounded-3xl overflow-hidden mb-4 md:mb-6 lg:mb-8"
                    style={{ aspectRatio: aspectRatios[i] || "4/5" }}
                  >
                    {project.images.length > 0 ? (
                      <img
                        src={project.images[0]}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-300">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <rect x="3" y="3" width="18" height="18" rx="2" />
                        </svg>
                      </div>
                    )}
                  </div>
                  <h3 className="font-instrument text-lg md:text-2xl lg:text-[27px] leading-snug md:leading-9 lg:leading-9 text-[#131313] mb-2 md:mb-4 tracking-tight group-hover:text-[#c9a96e] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[#5D5D5D] text-sm md:text-base lg:text-lg tracking-wide">
                    {project.location} — {project.price}
                  </p>
                </Link>
              </AnimatedItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
