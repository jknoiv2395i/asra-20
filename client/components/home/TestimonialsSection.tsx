"use client";
import { useState, useEffect, useRef } from "react";

const testimonials = [
  {
    text: "I had the pleasure of working with ABC Realty to find my dream home, and I couldn't be happier with the entire experience.",
    fullText:
      "From the moment I walked into their office, I felt welcomed and supported by their friendly team.",
    name: "Sarah M.",
    role: "Property consultation",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/e712ba1143c3cc4c9975370b692ef552547a4710?width=80",
    rating: 5,
  },
  {
    text: "Once we found the perfect home, Sarah guided me through every step of the buying process, making it feel effortless on my part. She was an excellent negotiator, and thanks to her skills, I was able to secure a fantastic deal on my new home.",
    name: "Esther Howard",
    role: "Property consultation",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/9a4f23260f560598daa941dfe6d07724045e970b?width=80",
    rating: 5,
  },
  {
    text: "Working with MPHD Group has been a wonderful experience. Their attention to detail and customer service is exceptional.",
    name: "Shailesh Shende",
    role: "Real Estate Consultant",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/14adce6b0a461ffa324a134f2741062c7cb6b979?width=80",
    rating: 5,
  },
  {
    text: "Excellent work with proper co-ordination, helpful regards the communication must view. Best services & very good co operative nature.",
    name: "Golu Chute",
    role: "Marketing Manager",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/5ad1368ab179fbbf05be0d8e1d4555d07145fed4?width=80",
    rating: 5,
  },
];

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof testimonials)[0];
}) {
  return (
    <div className="testimonial-card flex-shrink-0 w-full md:w-1/2 bg-white p-6 md:p-8 lg:p-10">
      {/* Quote Icon */}
      <div className="quote-icon mb-6">
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 28C10 23.5817 13.5817 20 18 20V14C10.268 14 4 20.268 4 28V38H18V28H10Z"
            fill="#E5E7EB"
          />
          <path
            d="M30 28C30 23.5817 33.5817 20 38 20V14C30.268 14 24 20.268 24 28V38H38V28H30Z"
            fill="#E5E7EB"
          />
        </svg>
      </div>

      {/* Star Rating */}
      <div className="star-rating flex items-center gap-1 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <svg
            key={i}
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z"
              fill="#FCD34D"
            />
          </svg>
        ))}
      </div>

      {/* Testimonial Text */}
      <p className="testimonial-text text-black text-base md:text-lg leading-relaxed mb-4">
        {testimonial.text}
      </p>
      {testimonial.fullText && (
        <p className="testimonial-full-text text-black text-base md:text-lg leading-relaxed mb-8">
          {testimonial.fullText}
        </p>
      )}

      {/* Customer Info */}
      <div className="customer-info flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="customer-avatar w-12 h-12 rounded-full object-cover"
          />
          <div className="customer-details">
            <h4 className="font-instrument customer-name text-black text-base md:text-lg font-semibold">
              {testimonial.name}
            </h4>
            <p className="customer-role text-gray-600 text-sm md:text-base">
              {testimonial.role}
            </p>
          </div>
        </div>

        {/* Verification Badge */}
        <div className="verification-badge">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="16" cy="16" r="16" fill="#000000" />
            <path
              d="M22 12L14 20L10 16"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-play carousel
  useEffect(() => {
    const startAutoplay = () => {
      autoplayRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 4000); // Change every 4 seconds
    };

    startAutoplay();

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    // Reset autoplay timer when manually navigating
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
    }
    autoplayRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
    // Reset autoplay timer when manually navigating
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
    }
    autoplayRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
  };

  return (
    <section
      className="testimonials-section w-full bg-white py-12 md:py-16 lg:py-20 px-4 md:px-8"
      style={{
        "@media (max-width: 640px)": {
          height: "691px",
        },
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-12 mb-12 md:mb-16">
          {/* Heading */}
          <div className="flex-1">
            <h2 className="font-instrument testimonials-heading text-black text-4xl md:text-5xl lg:text-[60px] font-normal leading-tight tracking-tight">
              Our Customers
              <br />
              Think We're
              <br />
              The Best
            </h2>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-4">
            <button
              onClick={prevTestimonial}
              className="nav-arrow-btn w-12 h-12 md:w-14 md:h-14 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
              aria-label="Previous testimonials"
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
              onClick={nextTestimonial}
              className="nav-arrow-btn w-12 h-12 md:w-14 md:h-14 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
              aria-label="Next testimonials"
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

        {/* Testimonials Carousel Container */}
        <div className="testimonials-carousel-wrapper overflow-hidden">
          <div
            className="testimonials-carousel-track flex gap-6 md:gap-8"
            style={{
              transform: `translateX(calc(-${currentIndex * 100}% - ${currentIndex * 1.5}rem))`,
              transition: "transform 0.5s ease-in-out",
            }}
          >
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
