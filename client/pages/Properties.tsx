import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { motion } from "motion/react";
import { Property } from "@shared/schema";
import { defaultPropertiesList } from "@shared/propertiesData";
import {
  AnimatedSection,
  StaggerContainer,
  AnimatedItem,
} from "@/components/animations/AnimatedSection";

type FilterType = "all" | "residential" | "commercial" | "industrial";

const filterTabs: { label: string; value: FilterType }[] = [
  { label: "All Properties", value: "all" },
  { label: "Residential", value: "residential" },
  { label: "Commercial", value: "commercial" },
  { label: "Industrial", value: "industrial" },
];

function PropertyCard({ property }: { property: Property }) {
  return (
    <Link to={`/properties/${property.id}`}>
      <motion.div
        className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300 cursor-pointer"
        whileHover={{ y: -6 }}
        transition={{ duration: 0.3 }}
      >
        {/* Image */}
        <div className="relative overflow-hidden aspect-[4/3]">
          {property.images.length > 0 ? (
            <img
              src={property.images[0]}
              alt={property.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-300">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="9" cy="9" r="2" />
                <path d="M21 15l-3.086-3.086a2 2 0 00-2.828 0L6 21" />
              </svg>
            </div>
          )}
          {property.tag && (
            <span className="absolute top-4 left-4 bg-[#0E0840] text-white text-xs font-semibold px-3 py-1.5 rounded-full">
              {property.tag}
            </span>
          )}
          <span className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-[#0E0840] text-xs font-semibold px-3 py-1.5 rounded-full capitalize">
            {property.type}
          </span>
          {/* Image count */}
          {property.images.length > 1 && (
            <span className="absolute bottom-3 right-3 bg-black/50 text-white text-[10px] px-2 py-1 rounded-full flex items-center gap-1">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <rect x="3" y="3" width="18" height="18" rx="2" />
              </svg>
              {property.images.length}
            </span>
          )}
        </div>

        {/* Content */}
        <div className="p-5 md:p-6">
          <div className="flex items-center gap-1.5 text-[#6b7280] text-xs mb-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span>{property.location}</span>
          </div>

          <h3 className="font-instrument text-[#0E0840] text-lg md:text-xl font-medium leading-snug mb-3">
            {property.title}
          </h3>

          {/* Details */}
          <div className="flex items-center gap-4 text-[#6b7280] text-sm mb-4">
            {property.beds != null && (
              <div className="flex items-center gap-1">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 4v16" /><path d="M2 8h18a2 2 0 0 1 2 2v10" /><path d="M2 17h20" /><path d="M6 8v9" />
                </svg>
                <span>{property.beds} Beds</span>
              </div>
            )}
            {property.baths != null && (
              <div className="flex items-center gap-1">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5" />
                  <line x1="10" x2="8" y1="5" y2="7" /><line x1="2" x2="22" y1="12" y2="12" />
                  <line x1="7" x2="7" y1="19" y2="21" /><line x1="17" x2="17" y1="19" y2="21" />
                </svg>
                <span>{property.baths} Baths</span>
              </div>
            )}
            <div className="flex items-center gap-1">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect width="18" height="18" x="3" y="3" rx="2" />
                <path d="M3 9h18" /><path d="M9 21V9" />
              </svg>
              <span>{property.area}</span>
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <p className="font-instrument text-[#0E0840] text-xl md:text-2xl font-semibold">
              {property.price}
            </p>
            <span className="inline-flex items-center gap-1.5 text-sm font-medium text-[#c9a96e] hover:text-[#b8943f] transition-colors">
              <span>View Details</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
              </svg>
            </span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

export default function Properties() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");
  const [properties, setProperties] = useState<Property[]>(() => defaultPropertiesList);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("/api/properties")
      .then((res) => res.json())
      .then((data) => {
        if (data.success && Array.isArray(data.data) && data.data.length > 0) {
          setProperties(data.data);
        }
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const filteredProperties =
    activeFilter === "all"
      ? properties
      : properties.filter((p) => p.type === activeFilter);

  return (
    <Layout>
      <style>{`
        .properties-accent-line {
          background: linear-gradient(90deg, #c9a96e, #e8d5a3, #c9a96e);
        }
        .properties-gold-text {
          background: linear-gradient(135deg, #0E0840, #2a1a6e);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative w-full overflow-hidden pt-32 md:pt-40 pb-16 md:pb-20 bg-gradient-to-b from-[#f0f4ff] to-white">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-[0.06]"
            style={{
              background: "radial-gradient(circle, rgba(14,8,64,0.4) 0%, rgba(201,169,110,0.2) 40%, transparent 70%)",
            }}
          />
          <div
            className="absolute -bottom-48 -left-24 w-80 h-80 rounded-full opacity-[0.05]"
            style={{
              background: "radial-gradient(circle, rgba(201,169,110,0.4) 0%, rgba(14,8,64,0.15) 40%, transparent 70%)",
            }}
          />
        </div>

        <div className="relative z-10 max-w-6xl lg:max-w-7xl mx-auto px-6 md:px-8 lg:px-12 xl:px-16">
          <AnimatedSection>
            <div className="text-center mb-12">
              <div className="properties-accent-line h-[2px] w-16 rounded-full mx-auto mb-6" />
              <p
                className="text-sm md:text-base tracking-[0.25em] uppercase font-medium mb-4"
                style={{ color: "#c9a96e" }}
              >
                Our Portfolio
              </p>
              <h1 className="font-instrument text-4xl md:text-6xl lg:text-[64px] font-normal leading-tight tracking-[-0.02em] text-[#0E0840] mb-4">
                Explore <span className="properties-gold-text font-semibold">Properties</span>
              </h1>
              <p className="text-[#4b5563] text-base md:text-lg leading-relaxed max-w-lg mx-auto">
              Discover premium residential, commercial, and industrial properties across Indore's prime corridors.
              </p>
            </div>
          </AnimatedSection>

          {/* Filter Tabs */}
          <AnimatedSection delay={0.15}>
            <div className="flex justify-center mb-8">
              <div className="inline-flex items-center bg-white rounded-xl p-1 md:p-1.5 shadow-lg shadow-black/[0.04] border border-gray-100/80">
                {filterTabs.map((tab) => {
                  const count =
                    tab.value === "all"
                      ? properties.length
                      : properties.filter((p) => p.type === tab.value).length;
                  const isActive = activeFilter === tab.value;
                  return (
                    <button
                      key={tab.value}
                      onClick={() => setActiveFilter(tab.value)}
                      className="relative px-2.5 py-2 md:px-4 md:py-2.5 rounded-lg md:rounded-xl text-xs md:text-sm font-medium transition-colors duration-200 flex items-center gap-1.5 md:gap-2 whitespace-nowrap"
                    >
                      {isActive && (
                        <motion.div
                          layoutId="activeFilterBg"
                          className="absolute inset-0 bg-[#0E0840] rounded-lg md:rounded-xl shadow-md shadow-[#0E0840]/25"
                          transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        />
                      )}
                      <span className={`relative z-10 flex items-center gap-1.5 md:gap-2 ${isActive ? "text-white" : "text-[#6b7280] hover:text-[#0E0840]"}`}>
                        <span className="hidden md:inline">{tab.label}</span>
                        <span className="md:hidden">{tab.value === "all" ? "All" : tab.label.slice(0, 3)}</span>
                        <span className={`text-[10px] md:text-[11px] font-semibold rounded-full min-w-[18px] md:min-w-[20px] h-4 md:h-5 flex items-center justify-center px-1 md:px-1.5 ${isActive ? "bg-white/20 text-white" : "bg-gray-100 text-gray-500"}`}>
                          {count}
                        </span>
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="w-full bg-white px-6 md:px-8 lg:px-12 py-10 md:py-16">
        <div className="max-w-6xl lg:max-w-7xl mx-auto">
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="bg-white rounded-2xl overflow-hidden border border-gray-100 animate-pulse">
                  <div className="aspect-[4/3] bg-gray-100" />
                  <div className="p-6 space-y-3">
                    <div className="h-3 bg-gray-100 rounded w-1/2" />
                    <div className="h-5 bg-gray-100 rounded w-3/4" />
                    <div className="h-3 bg-gray-100 rounded w-1/3" />
                    <div className="h-8 bg-gray-100 rounded w-1/4 mt-4" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div
              key={activeFilter}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            >
              {filteredProperties.map((property, idx) => (
                <motion.div
                  key={property.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                >
                  <PropertyCard property={property} />
                </motion.div>
              ))}
            </div>
          )}

          {!loading && filteredProperties.length === 0 && (
            <div className="text-center py-16">
              <p className="text-[#6b7280] text-lg">
                No properties found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Bar */}
      <section className="w-full bg-[#0E0840] py-12 md:py-16">
        <div className="max-w-6xl lg:max-w-7xl mx-auto px-6 md:px-8 lg:px-12 xl:px-16">
          <AnimatedSection>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <p className="font-instrument text-3xl md:text-4xl font-semibold text-white mb-1">200+</p>
                <p className="text-white/60 text-sm">Properties Listed</p>
              </div>
              <div>
                <p className="font-instrument text-3xl md:text-4xl font-semibold text-white mb-1">150+</p>
                <p className="text-white/60 text-sm">Happy Families</p>
              </div>
              <div>
                <p className="font-instrument text-3xl md:text-4xl font-semibold text-white mb-1">50+</p>
                <p className="text-white/60 text-sm">Commercial Spaces</p>
              </div>
              <div>
                <p className="font-instrument text-3xl md:text-4xl font-semibold text-white mb-1">15+</p>
                <p className="text-white/60 text-sm">Years Experience</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-gradient-to-b from-white to-[#f0f4ff] px-6 md:px-8 lg:px-12 py-16 md:py-20">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <p
              className="text-sm tracking-[0.25em] uppercase font-medium mb-4"
              style={{ color: "#c9a96e" }}
            >
              Can't Find What You're Looking For?
            </p>
            <h2 className="font-instrument text-3xl md:text-4xl lg:text-5xl font-normal text-[#0E0840] leading-tight mb-6">
              Let us help you find your <span className="properties-gold-text font-semibold">perfect property</span>
            </h2>
            <p className="text-[#6b7280] text-base md:text-lg leading-relaxed mb-8 max-w-xl mx-auto">
              Our expert team is ready to assist you in finding the ideal property that matches your needs and budget. Get in touch today.
            </p>
            <Link to="/contact">
              <motion.button
                className="inline-flex items-center gap-3 bg-[#0E0840] text-white px-8 py-4 rounded-full font-semibold text-base hover:bg-[#1a1060] transition-colors"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <span>Contact Us Today</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                </svg>
              </motion.button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
