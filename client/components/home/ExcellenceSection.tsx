import { Link } from "react-router-dom";
import { AnimatedSection, StaggerContainer, AnimatedItem } from "@/components/animations/AnimatedSection";

export default function ExcellenceSection() {
  return (
    <>
      <style>{`
        @media (max-width: 640px) {
          .excellence-heading-cta {
            gap: 13px !important;
          }
          .excellence-cta-button {
            background-color: rgba(0, 0, 0, 1) !important;
            width: 143px !important;
          }
          .excellence-cta-text {
            color: rgba(255, 255, 255, 1) !important;
            width: 216px !important;
            margin-left: 4px !important;
          }
        }
      `}</style>
      <section
        className="w-full bg-white px-4 md:px-8 lg:px-[137px] pt-4 md:pt-6 lg:pt-8 pb-8 md:pb-10 lg:pb-12 max-sm:h-[719.5px]"
      >
        <div className="max-w-[1440px] mx-auto">
          {/* Heading and CTA */}
          <AnimatedSection>
          <div className="excellence-heading-cta flex flex-col gap-[43px] w-full sm:pb-[43px] sm:gap-[18px] mb-8 md:mb-12">
            {/* Text Content */}
            <div className="flex flex-col gap-[17px]">
              <h2
                className="font-instrument text-[#2B0A01] font-bold text-3xl md:text-4xl lg:text-[48px] leading-[1.17] tracking-[-2.118px] max-sm:tracking-[-1.1px]"
              >
                <div className="max-sm:text-black" />
                <br />
                <div className="max-sm:text-black" />
                <br />
                <div className="max-sm:text-black">
                  <div
                    style={{
                      display: "inline",
                      fontWeight: "400",
                    }}
                  >
                    <h2>Indore: India's fastest</h2>
                    <h2>growing city for real</h2>
                    <p>estate investment.</p>
                  </div>
                </div>
              </h2>
              <p className="text-[#7B7B7B] text-base md:text-lg leading-[27px]">
                IT hubs (TCS, Infosys), Metro connectivity, Ring Road
                <br className="hidden md:block" />
                — high ROI, rapid infrastructure growth. Invest now!
              </p>
            </div>

            {/* CTA Button */}
            <Link to="/contact">
            <button className="excellence-cta-button inline-flex items-center gap-3 bg-white text-black px-5 py-2.5 rounded-full hover:bg-gray-200 transition-all sm:w-[135px] sm:bg-black sm:text-white">
              <span className="excellence-cta-text font-medium sm:text-white">
                Get started
              </span>
            </button>
            </Link>
          </div>
          </AnimatedSection>

          <div className="flex flex-col lg:flex-row items-start gap-8 md:gap-12 lg:gap-[97px]">
            {/* Left Side - Stats Grid */}
            <StaggerContainer className="w-full lg:w-[535px] grid grid-cols-2 gap-x-0 gap-y-0">
              {/* Stat 1 - Years experience */}
              <AnimatedItem>
              <div className="flex flex-col gap-[10px] pr-8 md:pr-12 lg:pr-20 pb-8 md:pb-12">
                <h3
                  className="font-instrument text-[#401408] font-semibold text-4xl md:text-5xl leading-[60px] max-sm:text-black"
                >
                  <span style={{ fontWeight: "normal" }}>100+</span>
                </h3>
                <p className="text-[#7B7B7B] text-base md:text-lg leading-[27px]">
                  Successful transactions
                  <br />
                  completed
                </p>
              </div>
              </AnimatedItem>

              {/* Stat 2 - Total Net Profit */}
              <AnimatedItem>
              <div className="flex flex-col gap-[10px] pr-8 md:pr-12 lg:pr-20 pb-8 md:pb-12">
                <h3
                  className="font-instrument text-[#401408] font-semibold text-4xl md:text-5xl leading-[60px] max-sm:text-black"
                >
                  <span style={{ fontWeight: "normal" }}>5+</span>
                </h3>
                <p className="text-[#7B7B7B] text-base md:text-lg leading-[27px]">
                  Prime locations
                  <br />
                  served in Indore
                </p>
              </div>
              </AnimatedItem>

              {/* Stat 3 - Happy customers */}
              <AnimatedItem>
              <div className="flex flex-col gap-[10px] pr-8 md:pr-12 lg:pr-20 pb-8 md:pb-12">
                <h3
                  className="font-instrument text-[#401408] font-semibold text-4xl md:text-5xl leading-[60px] max-sm:text-black"
                >
                  <span style={{ fontWeight: "normal" }}>High</span>
                </h3>
                <p className="text-[#7B7B7B] text-base md:text-lg leading-[27px]">
                  ROI potential near
                  <br />
                  IT hubs & Metro
                </p>
              </div>
              </AnimatedItem>

              {/* Stat 4 - Approximate Profit */}
              <AnimatedItem>
              <div className="flex flex-col gap-[10px] pr-8 md:pr-12 lg:pr-20 pb-8 md:pb-12">
                <h3
                  className="font-instrument text-[#401408] font-semibold text-4xl md:text-5xl leading-[60px] max-sm:text-black"
                >
                  <span style={{ fontWeight: "normal" }}>100%</span>
                </h3>
                <p className="text-[#7B7B7B] text-base md:text-lg leading-[27px]">
                  Commitment to ethical
                  <br />
                  hassle-free deals
                </p>
              </div>
              </AnimatedItem>
            </StaggerContainer>
          </div>
        </div>
      </section>
    </>
  );
}
