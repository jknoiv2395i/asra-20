import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Property } from "@shared/schema";
import { motion } from "motion/react";
import { AnimatedSection } from "@/components/animations/AnimatedSection";

export default function PropertyDetail() {
  const { id } = useParams<{ id: string }>();
  const [property, setProperty] = useState<Property | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeImage, setActiveImage] = useState(0);
  const [showLightbox, setShowLightbox] = useState(false);

  useEffect(() => {
    fetch(`/api/properties/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setProperty(data.data);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-pulse text-gray-400">Loading property...</div>
        </div>
      </Layout>
    );
  }

  if (!property) {
    return (
      <Layout>
        <div className="min-h-screen flex flex-col items-center justify-center gap-4">
          <p className="text-gray-500 text-lg">Property not found</p>
          <Link to="/properties" className="text-[#c9a96e] hover:underline text-sm">
            ← Back to Properties
          </Link>
        </div>
      </Layout>
    );
  }

  const allMedia = [...property.images, ...property.videos];
  const hasMultipleImages = property.images.length > 1;

  return (
    <Layout>
      <style>{`
        .detail-gold-text {
          background: linear-gradient(135deg, #0E0840, #2a1a6e);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>

      {/* Hero Image Section */}
      <section className="relative w-full pt-24 md:pt-28">
        <div className="max-w-6xl lg:max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <AnimatedSection>
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
              <Link to="/" className="hover:text-gray-600 transition-colors">Home</Link>
              <span>/</span>
              <Link to="/properties" className="hover:text-gray-600 transition-colors">Properties</Link>
              <span>/</span>
              <span className="text-gray-600 truncate max-w-[200px]">{property.title}</span>
            </div>

            {/* Main Image */}
            <div
              className="relative rounded-3xl overflow-hidden aspect-[16/9] md:aspect-[2.5/1] bg-gray-100 cursor-pointer group"
              onClick={() => setShowLightbox(true)}
            >
              {property.images.length > 0 ? (
                <img
                  src={property.images[activeImage]}
                  alt={property.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-300">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <circle cx="9" cy="9" r="2" />
                    <path d="M21 15l-3.086-3.086a2 2 0 00-2.828 0L6 21" />
                  </svg>
                </div>
              )}

              {/* Image count badge */}
              {property.images.length > 1 && (
                <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full flex items-center gap-1.5">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <circle cx="9" cy="9" r="2" />
                    <path d="M21 15l-3.086-3.086a2 2 0 00-2.828 0L6 21" />
                  </svg>
                  {property.images.length} photos
                </div>
              )}

              {/* Tag */}
              {property.tag && (
                <span className="absolute top-4 left-4 bg-[#0E0840] text-white text-xs font-bold px-4 py-2 rounded-full">
                  {property.tag}
                </span>
              )}
            </div>

            {/* Thumbnail strip */}
            {hasMultipleImages && (
              <div className="flex gap-3 mt-4 overflow-x-auto pb-2">
                {property.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={`flex-shrink-0 w-20 h-16 rounded-xl overflow-hidden border-2 transition-all ${
                      i === activeImage ? "border-[#c9a96e] shadow-md" : "border-transparent opacity-60 hover:opacity-90"
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </AnimatedSection>
        </div>
      </section>

      {/* Property Details */}
      <section className="w-full px-4 md:px-8 lg:px-12 py-8 md:py-12">
        <div className="max-w-6xl lg:max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <AnimatedSection>
                <div className="mb-6">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="text-xs font-bold uppercase px-3 py-1 rounded-full capitalize" style={{ background: "rgba(201,169,110,0.12)", color: "#c9a96e" }}>
                      {property.type}
                    </span>
                    {property.featured && (
                      <span className="text-xs font-bold px-3 py-1 rounded-full bg-blue-50 text-blue-500">★ Featured</span>
                    )}
                  </div>
                  <h1 className="font-instrument text-3xl md:text-4xl lg:text-5xl font-semibold text-[#0E0840] leading-tight mb-3">
                    {property.title}
                  </h1>
                  <div className="flex items-center gap-2 text-gray-500">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 01-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0116 0" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span className="text-sm">{property.location}</span>
                  </div>
                </div>

                {/* Quick stats */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8 p-5 bg-gray-50 rounded-2xl">
                  <div>
                    <p className="text-xs text-gray-400 mb-1">Area</p>
                    <p className="font-semibold text-[#0E0840]">{property.area}</p>
                  </div>
                  {property.beds != null && (
                    <div>
                      <p className="text-xs text-gray-400 mb-1">Bedrooms</p>
                      <p className="font-semibold text-[#0E0840]">{property.beds}</p>
                    </div>
                  )}
                  {property.baths != null && (
                    <div>
                      <p className="text-xs text-gray-400 mb-1">Bathrooms</p>
                      <p className="font-semibold text-[#0E0840]">{property.baths}</p>
                    </div>
                  )}
                  <div>
                    <p className="text-xs text-gray-400 mb-1">Type</p>
                    <p className="font-semibold text-[#0E0840] capitalize">{property.type}</p>
                  </div>
                </div>

                {/* Description */}
                {property.description && (
                  <div className="mb-8">
                    <h2 className="font-instrument text-xl font-semibold text-[#0E0840] mb-3">About this Property</h2>
                    <p className="text-gray-600 leading-relaxed">{property.description}</p>
                  </div>
                )}

                {/* Videos */}
                {property.videos.length > 0 && (
                  <div className="mb-8">
                    <h2 className="font-instrument text-xl font-semibold text-[#0E0840] mb-4">Videos</h2>
                    <div className="grid grid-cols-1 gap-4">
                      {property.videos.map((video, i) => (
                        <video
                          key={i}
                          src={video}
                          controls
                          className="w-full rounded-2xl bg-black"
                        />
                      ))}
                    </div>
                  </div>
                )}
              </AnimatedSection>
            </div>

            {/* Sidebar - Contact CTA */}
            <div className="lg:col-span-1">
              <AnimatedSection delay={0.2}>
                <div className="sticky top-24 bg-white rounded-3xl p-6 md:p-8 shadow-xl shadow-black/[0.06] border border-gray-100">
                  <p className="font-instrument text-3xl md:text-4xl font-bold text-[#0E0840] mb-1">
                    {property.price}
                  </p>
                  <p className="text-gray-400 text-sm mb-6">Asking Price</p>

                  <div className="space-y-3 mb-6">
                    <a
                      href="tel:+917898384899"
                      className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-semibold text-sm text-white transition-all hover:shadow-lg"
                      style={{ background: "linear-gradient(135deg, #0E0840, #1a1060)" }}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                      </svg>
                      Call +91 78983 84899
                    </a>
                    <Link
                      to="/contact"
                      className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-semibold text-sm transition-all border-2 border-[#0E0840] text-[#0E0840] hover:bg-[#0E0840] hover:text-white"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                      </svg>
                      Send Enquiry
                    </Link>
                  </div>

                  <div className="border-t border-gray-100 pt-5">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "linear-gradient(135deg, #c9a96e, #b8943f)" }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0E0840" strokeWidth="2">
                          <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold text-sm text-[#0E0840]">Asra Real Estate</p>
                        <p className="text-xs text-gray-400">Consulting Services</p>
                      </div>
                    </div>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      Verified listing. Free consultation available. Site visits arranged on request.
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {showLightbox && property.images.length > 0 && (
        <motion.div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setShowLightbox(false)}
        >
          <button
            className="absolute top-4 right-4 text-white/60 hover:text-white p-2"
            onClick={() => setShowLightbox(false)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>

          {property.images.length > 1 && (
            <>
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white p-3 bg-white/10 rounded-full backdrop-blur-sm"
                onClick={(e) => { e.stopPropagation(); setActiveImage((prev) => (prev > 0 ? prev - 1 : property.images.length - 1)); }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white p-3 bg-white/10 rounded-full backdrop-blur-sm"
                onClick={(e) => { e.stopPropagation(); setActiveImage((prev) => (prev < property.images.length - 1 ? prev + 1 : 0)); }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </>
          )}

          <img
            src={property.images[activeImage]}
            alt={property.title}
            className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Image counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-sm">
            {activeImage + 1} / {property.images.length}
          </div>
        </motion.div>
      )}
    </Layout>
  );
}
