import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { motion } from "motion/react";
import {
  AnimatedSection,
  StaggerContainer,
  AnimatedItem,
} from "@/components/animations/AnimatedSection";

type PropertyType = "all" | "residential" | "commercial" | "industrial";

interface Property {
  id: number;
  image: string;
  title: string;
  location: string;
  price: string;
  type: PropertyType;
  beds?: number;
  baths?: number;
  area: string;
  tag?: string;
}

const properties: Property[] = [
  {
    id: 1,
    image: "https://api.builder.io/api/v1/image/assets/TEMP/f9294423c5aad854317c1b8f2ce93fa9d31a0933?width=712",
    title: "Forest Retreat Villa",
    location: "Indore-Ujjain Road, Indore",
    price: "₹45 Lakh",
    type: "residential",
    beds: 4,
    baths: 3,
    area: "2,800 sq ft",
    tag: "Featured",
  },
  {
    id: 2,
    image: "https://api.builder.io/api/v1/image/assets/TEMP/bab3c32ceeb7ebac77c03707ae7f7e41b7732007?width=712",
    title: "Woodland Heights Apartment",
    location: "MR-5 Road, Indore",
    price: "₹38 Lakh",
    type: "residential",
    beds: 3,
    baths: 2,
    area: "1,650 sq ft",
  },
  {
    id: 3,
    image: "https://api.builder.io/api/v1/image/assets/TEMP/a743906f7efa3f52462098d0c43e9d94f22a2d7c?width=712",
    title: "Harmony Business Centre",
    location: "Vijay Nagar, Indore",
    price: "₹2.5 Cr",
    type: "commercial",
    area: "5,200 sq ft",
    tag: "New",
  },
  {
    id: 4,
    image: "https://api.builder.io/api/v1/image/assets/TEMP/4b0c97890a88c03aeec91fbcf464d29dec32a560?width=712",
    title: "Aliva Priva Jardin",
    location: "Chhota Bangarda, Indore",
    price: "₹32 Lakh",
    type: "residential",
    beds: 2,
    baths: 2,
    area: "1,200 sq ft",
  },
  {
    id: 5,
    image: "https://api.builder.io/api/v1/image/assets/TEMP/93f9f38075eab9840ba7cf8f13a676f64d35dfcf?width=976",
    title: "Skyline Commercial Plaza",
    location: "Indore-Ujjain Road, Indore",
    price: "₹3.8 Cr",
    type: "commercial",
    area: "8,500 sq ft",
    tag: "Premium",
  },
  {
    id: 6,
    image: "https://api.builder.io/api/v1/image/assets/TEMP/ad33659c33381eac40061641b81f19d65a13ad9f?width=712",
    title: "Asatti Industrial Park",
    location: "Indore Bypass, Indore",
    price: "₹4.2 Cr",
    type: "industrial",
    area: "12,000 sq ft",
  },
  {
    id: 7,
    image: "https://api.builder.io/api/v1/image/assets/TEMP/416addc2782b9fb53a01c93ece15343753c56e75?width=768",
    title: "Green Valley Residence",
    location: "AB Road, Indore",
    price: "₹72 Lakh",
    type: "residential",
    beds: 3,
    baths: 3,
    area: "2,100 sq ft",
    tag: "Hot Deal",
  },
  {
    id: 8,
    image: "https://api.builder.io/api/v1/image/assets/TEMP/bde2d192e63f2855084f213abbf4641d25defc35?width=560",
    title: "Nexus Office Tower",
    location: "MR 10, Indore",
    price: "₹1.8 Cr",
    type: "commercial",
    area: "3,800 sq ft",
  },
  {
    id: 9,
    image: "https://api.builder.io/api/v1/image/assets/TEMP/f9294423c5aad854317c1b8f2ce93fa9d31a0933?width=712",
    title: "Warehouse Complex Unit",
    location: "Sanwer Road, Indore",
    price: "₹5.5 Cr",
    type: "industrial",
    area: "20,000 sq ft",
    tag: "Exclusive",
  },
];

const filterTabs: { label: string; value: PropertyType }[] = [
  { label: "All Properties", value: "all" },
  { label: "Residential", value: "residential" },
  { label: "Commercial", value: "commercial" },
  { label: "Industrial", value: "industrial" },
];

function PropertyCard({ property }: { property: Property }) {
  return (
    <motion.div
      className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300"
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {property.tag && (
          <span className="absolute top-4 left-4 bg-[#0E0840] text-white text-xs font-semibold px-3 py-1.5 rounded-full">
            {property.tag}
          </span>
        )}
        <span className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-[#0E0840] text-xs font-semibold px-3 py-1.5 rounded-full capitalize">
          {property.type}
        </span>
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
          {property.beds && (
            <div className="flex items-center gap-1">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 4v16" /><path d="M2 8h18a2 2 0 0 1 2 2v10" /><path d="M2 17h20" /><path d="M6 8v9" />
              </svg>
              <span>{property.beds} Beds</span>
            </div>
          )}
          {property.baths && (
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
          <Link
            to="/contact"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[#c9a96e] hover:text-[#b8943f] transition-colors"
          >
            <span>Enquire</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default function Properties() {
  const [activeFilter, setActiveFilter] = useState<PropertyType>("all");

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
                        {tab.value === "all" && (
                          <svg className="w-3.5 h-3.5 md:w-[15px] md:h-[15px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>
                        )}
                        {tab.value === "residential" && (
                          <svg className="w-3.5 h-3.5 md:w-[15px] md:h-[15px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
                        )}
                        {tab.value === "commercial" && (
                          <svg className="w-3.5 h-3.5 md:w-[15px] md:h-[15px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/></svg>
                        )}
                        {tab.value === "industrial" && (
                          <svg className="w-3.5 h-3.5 md:w-[15px] md:h-[15px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="M17 18h1"/><path d="M12 18h1"/><path d="M7 18h1"/></svg>
                        )}
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
          <StaggerContainer
            key={activeFilter}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {filteredProperties.map((property) => (
              <AnimatedItem key={property.id}>
                <PropertyCard property={property} />
              </AnimatedItem>
            ))}
          </StaggerContainer>

          {filteredProperties.length === 0 && (
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
