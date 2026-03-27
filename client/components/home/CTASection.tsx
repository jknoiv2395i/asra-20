import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { AnimatedSection } from "@/components/animations/AnimatedSection";

export default function CTASection() {
  return (
    <>
      <style>{`
        @keyframes subtle-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        .cta-float { animation: subtle-float 6s ease-in-out infinite; }
        .cta-float-delay { animation: subtle-float 6s ease-in-out 2s infinite; }
        .cta-gradient-border {
          background: linear-gradient(135deg, rgba(255,255,255,0.3), rgba(255,255,255,0.05));
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
        }
        .cta-section-bg {
          background: linear-gradient(135deg, #0E0840 0%, #150c52 40%, #0a0630 100%);
        }
        .cta-accent-line {
          background: linear-gradient(90deg, #c9a96e, #e8d5a3, #c9a96e);
        }
        .cta-gold-text {
          background: linear-gradient(135deg, #d4af37, #f0d878, #c9a96e);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .cta-btn-gold {
          background: linear-gradient(135deg, #c9a96e, #e8d5a3);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .cta-btn-gold:hover {
          background: linear-gradient(135deg, #e8d5a3, #f0e0b8);
          transform: translateY(-2px);
          box-shadow: 0 12px 40px rgba(201,169,110,0.3);
        }
        .cta-stat-card {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          transition: all 0.3s ease;
        }
        .cta-stat-card:hover {
          background: rgba(255,255,255,0.08);
          border-color: rgba(201,169,110,0.3);
        }
      `}</style>

      <section className="cta-section-bg relative w-full overflow-hidden py-16 md:py-20 lg:py-24">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Top-right glow */}
          <div
            className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-20 cta-float"
            style={{
              background: "radial-gradient(circle, rgba(201,169,110,0.25) 0%, rgba(100,80,200,0.15) 40%, transparent 70%)",
            }}
          />
          {/* Bottom-left glow */}
          <div
            className="absolute -bottom-48 -left-24 w-80 h-80 rounded-full opacity-15 cta-float-delay"
            style={{
              background: "radial-gradient(circle, rgba(100,80,200,0.3) 0%, rgba(201,169,110,0.1) 40%, transparent 70%)",
            }}
          />
          {/* Subtle grid lines */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="relative z-10 max-w-6xl lg:max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Text Content */}
            <AnimatedSection>
            <div className="flex flex-col gap-6 md:gap-8">
              {/* Gold accent line */}
              <div className="cta-accent-line h-[2px] w-16 rounded-full" />

              {/* Overline */}
              <p
                className="text-xs md:text-sm tracking-[0.25em] uppercase font-medium"
                style={{ color: "#c9a96e" }}
              >
                Free Consultation
              </p>

              {/* Heading */}
              <h2 className="font-instrument text-3xl md:text-4xl lg:text-[52px] font-normal leading-tight lg:leading-[1.15] tracking-[-0.02em] text-white">
                Schedule a free{" "}
                <span className="cta-gold-text font-semibold">consultation</span>
              </h2>

              {/* Description */}
              <p className="text-[#8a95a8] text-base md:text-lg leading-relaxed max-w-md">
                Your property goals, our expertise — making real estate simple,
                secure, and profitable across Indore's prime corridors.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4 mt-2">
                <Link to="/contact">
                <button className="cta-btn-gold inline-flex items-center gap-3 px-7 py-3.5 rounded-full text-[#1a1a1a] font-semibold text-base">
                  <span>Book a Call</span>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.15817 5.14453H12.9898V11.9761M12.5154 5.61895L5.58887 12.5455"
                      stroke="#1a1a1a"
                      strokeWidth="1.8"
                      strokeMiterlimit="10"
                      strokeLinecap="square"
                    />
                  </svg>
                </button>
                </Link>
                <Link to="/contact">
                <button className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-white/70 hover:text-white font-medium text-base transition-colors border border-white/10 hover:border-white/25">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span>Call Us</span>
                </button>
                </Link>
              </div>
            </div>
            </AnimatedSection>

            {/* Right - Stats + Image Card */}
            <AnimatedSection delay={0.2}>
            <div className="flex flex-col gap-5">
              {/* Property image with overlay */}
              <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: "16/10" }}>
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/457b2aacc7cd7e03e4be7cb6836ebe3a9f88eab2?width=1200"
                  alt="Modern architectural building"
                  className="w-full h-full object-cover"
                />
                {/* Gradient overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(180deg, transparent 40%, rgba(14,8,64,0.85) 100%)",
                  }}
                />
                {/* Overlay text */}
                <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between">
                  <div>
                    <p className="text-white/60 text-xs uppercase tracking-wider mb-1">
                      Featured Property
                    </p>
                    <p className="text-white text-sm font-medium">
                      Modern Urban Living
                    </p>
                  </div>
                  <div
                    className="flex items-center justify-center w-9 h-9 rounded-full"
                    style={{
                      background: "rgba(255,255,255,0.15)",
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 18 18"
                      fill="none"
                    >
                      <path
                        d="M6.15817 5.14453H12.9898V11.9761M12.5154 5.61895L5.58887 12.5455"
                        stroke="white"
                        strokeWidth="1.6"
                        strokeMiterlimit="10"
                        strokeLinecap="square"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-3">
                <div className="cta-stat-card rounded-xl px-4 py-5 text-center">
                  <p className="cta-gold-text text-2xl md:text-3xl font-semibold font-instrument">
                    100+
                  </p>
                  <p className="text-white/50 text-xs mt-1.5 tracking-wide">
                    Deals Closed
                  </p>
                </div>
                <div className="cta-stat-card rounded-xl px-4 py-5 text-center">
                  <p className="cta-gold-text text-2xl md:text-3xl font-semibold font-instrument">
                    98%
                  </p>
                  <p className="text-white/50 text-xs mt-1.5 tracking-wide">
                    Client Satisfaction
                  </p>
                </div>
                <div className="cta-stat-card rounded-xl px-4 py-5 text-center">
                  <p className="cta-gold-text text-2xl md:text-3xl font-semibold font-instrument">
                    Indore
                  </p>
                  <p className="text-white/50 text-xs mt-1.5 tracking-wide">
                    Market Focus
                  </p>
                </div>
              </div>
            </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
