import { Link } from "react-router-dom";
import { AnimatedSection, StaggerContainer, AnimatedItem } from "@/components/animations/AnimatedSection";

export default function BenefitsSection() {
  const benefits = [
    {
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_601_2879)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2.33325 13.9999H4.92578V23.074C4.92578 23.7616 5.19893 24.421 5.68513 24.9072C6.17134 25.3934 6.83078 25.6666 7.51837 25.6666H20.4813C21.1689 25.6666 21.8284 25.3934 22.3146 24.9072C22.8008 24.421 23.0739 23.7616 23.0739 23.074V13.9999H23.074H25.6666L13.9999 2.33325L2.33325 13.9999Z"
              fill="white"
            />
            <path
              d="M10.5 15.7501L12.8333 18.0834L17.5 13.4167"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_601_2879">
              <rect width="28" height="28" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
      badge: (
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path
            d="M10.815 2.43246L7.60663 1.23079C7.27413 1.10829 6.73163 1.10829 6.39913 1.23079L3.1908 2.43246C2.57247 2.66579 2.0708 3.38912 2.0708 4.04829V8.77329C2.0708 9.24579 2.37997 9.86996 2.75913 10.15L5.96747 12.5475C6.5333 12.9733 7.4608 12.9733 8.02663 12.5475L11.235 10.15C11.6141 9.86412 11.9233 9.24579 11.9233 8.77329V4.04829C11.9291 3.38912 11.4275 2.66579 10.815 2.43246ZM7.43747 7.50746V9.04162C7.43747 9.28079 7.23913 9.47913 6.99997 9.47913C6.7608 9.47913 6.56247 9.28079 6.56247 9.04162V7.50746C5.9733 7.32079 5.54163 6.77246 5.54163 6.12496C5.54163 5.31996 6.19497 4.66662 6.99997 4.66662C7.80497 4.66662 8.4583 5.31996 8.4583 6.12496C8.4583 6.77829 8.02663 7.32079 7.43747 7.50746Z"
            fill="white"
          />
        </svg>
      ),
      title: "Property Insurance",
      description:
        "We offer our customer property protection of liability coverage and insurance for their better life.",
    },
    {
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_601_2897)">
            <path
              d="M5.83325 24.5V5.83333C5.83325 5.21449 6.07908 4.621 6.51667 4.18342C6.95425 3.74583 7.54775 3.5 8.16659 3.5H19.8333C20.4521 3.5 21.0456 3.74583 21.4832 4.18342C21.9208 4.621 22.1666 5.21449 22.1666 5.83333V24.5L18.6666 22.1667L16.3333 24.5L13.9999 22.1667L11.6666 24.5L9.33325 22.1667L5.83325 24.5Z"
              fill="white"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.3334 9.33325H13.4167C12.9526 9.33325 12.5075 9.51763 12.1793 9.84581C11.8511 10.174 11.6667 10.6191 11.6667 11.0833C11.6667 11.5474 11.8511 11.9925 12.1793 12.3207C12.5075 12.6489 12.9526 12.8333 13.4167 12.8333H14.5834C15.0475 12.8333 15.4927 13.0176 15.8209 13.3458C16.149 13.674 16.3334 14.1191 16.3334 14.5833C16.3334 15.0474 16.149 15.4925 15.8209 15.8207C15.4927 16.1489 15.0475 16.3332 14.5834 16.3332H11.6667M14.0001 16.3332V18.0832M14.0001 7.58325V9.33325"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_601_2897">
              <rect width="28" height="28" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
      badge: (
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path
            d="M7.00008 1.16675C3.78008 1.16675 1.16675 3.78008 1.16675 7.00008C1.16675 10.2201 3.78008 12.8334 7.00008 12.8334C10.2201 12.8334 12.8334 10.2201 12.8334 7.00008C12.8334 3.78008 10.2201 1.16675 7.00008 1.16675ZM5.09258 4.46841C5.56508 4.46841 5.95591 4.85342 5.95591 5.33175C5.95591 5.80425 5.57091 6.19508 5.09258 6.19508C4.62008 6.19508 4.22925 5.81008 4.22925 5.33175C4.22925 4.85342 4.61425 4.46841 5.09258 4.46841ZM5.16258 9.21675C5.07508 9.30425 4.96425 9.34508 4.85341 9.34508C4.74258 9.34508 4.63175 9.30425 4.54425 9.21675C4.37508 9.04758 4.37508 8.76758 4.54425 8.59841L8.36508 4.77758C8.53425 4.60841 8.81425 4.60841 8.98342 4.77758C9.15258 4.94675 9.15258 5.22675 8.98342 5.39592L5.16258 9.21675ZM8.90758 9.53175C8.43508 9.53175 8.04425 9.14675 8.04425 8.66842C8.04425 8.19592 8.42925 7.80508 8.90758 7.80508C9.38008 7.80508 9.77092 8.19008 9.77092 8.66842C9.77092 9.14675 9.38592 9.53175 8.90758 9.53175Z"
            fill="white"
          />
        </svg>
      ),
      title: "Best Price",
      description:
        "Not sure what you should be charging for your property? No need to worry, let us do the numbers for you.",
    },
    {
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.9999 24.5L25.6666 16.3333H21.0116L20.9999 3.5H6.99992V16.3333H2.33325L13.9999 24.5Z"
            fill="white"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.5 16.3333L17.5 9.33325"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.0833 10.4999C11.4055 10.4999 11.6667 10.2388 11.6667 9.91659C11.6667 9.59442 11.4055 9.33325 11.0833 9.33325C10.7612 9.33325 10.5 9.59442 10.5 9.91659C10.5 10.2388 10.7612 10.4999 11.0833 10.4999Z"
            fill="#000000"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.9166 16.3334C17.2388 16.3334 17.4999 16.0722 17.4999 15.7501C17.4999 15.4279 17.2388 15.1667 16.9166 15.1667C16.5944 15.1667 16.3333 15.4279 16.3333 15.7501C16.3333 16.0722 16.5944 16.3334 16.9166 16.3334Z"
            fill="#000000"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      badge: (
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path
            d="M9.44425 1.16675H4.55591C2.43258 1.16675 1.16675 2.43258 1.16675 4.55591V9.44425C1.16675 11.5676 2.43258 12.8334 4.55591 12.8334H9.44425C11.5676 12.8334 12.8334 11.5676 12.8334 9.44425V4.55591C12.8334 2.43258 11.5676 1.16675 9.44425 1.16675ZM8.31841 7.00008C8.77341 7.15758 9.38008 7.49008 9.38008 8.53425C9.38008 9.43258 8.68008 10.1617 7.81675 10.1617H7.43758V10.5001C7.43758 10.7392 7.23925 10.9376 7.00008 10.9376C6.76091 10.9376 6.56258 10.7392 6.56258 10.5001V10.1617H6.35258C5.39591 10.1617 4.62008 9.35091 4.62008 8.35925C4.62008 8.12008 4.81258 7.92175 5.05758 7.92175C5.29675 7.92175 5.49508 8.12008 5.49508 8.35925C5.49508 8.87258 5.88008 9.28675 6.35258 9.28675H6.56258V7.30925L5.68175 7.00008C5.22675 6.84258 4.62008 6.51008 4.62008 5.46591C4.62008 4.56758 5.32008 3.83841 6.18341 3.83841H6.56258V3.50008C6.56258 3.26091 6.76091 3.06258 7.00008 3.06258C7.23925 3.06258 7.43758 3.26091 7.43758 3.50008V3.83841H7.64758C8.60425 3.83841 9.38008 4.64925 9.38008 5.64091C9.38008 5.88008 9.18758 6.07841 8.94258 6.07841C8.70341 6.07841 8.50508 5.88008 8.50508 5.64091C8.50508 5.12758 8.12008 4.71341 7.64758 4.71341H7.43758V6.69091L8.31841 7.00008Z"
            fill="white"
          />
        </svg>
      ),
      title: "Lowest Commission",
      description:
        "You no longer have to negotiate commissions and haggle with other agents it only cost 2%!",
    },
  ];

  return (
    <section
      className="w-full bg-white px-6 py-8 md:px-8 lg:px-12 md:py-10 lg:py-12"
      style={{
        "@media (max-width: 640px)": {
          height: "1070.7px",
        },
      }}
    >
      <div className="max-w-sm mx-auto md:max-w-2xl lg:max-w-6xl">
        {/* Illustration Card */}
        <AnimatedSection>
        <div className="relative bg-black rounded-3xl overflow-hidden mb-12 md:mb-16">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/2a46bc55961699466193c6ca637b43432ae50554?width=654"
            alt="Find your new home illustration"
            className="w-full h-auto object-cover opacity-40"
          />

          {/* Content Overlay */}
          <div className="benefits-overlay absolute inset-0 p-8 md:p-10 lg:p-12 flex flex-col justify-start">
            <div className="max-w-xs space-y-4">
              <h2 className="font-instrument text-3xl md:text-4xl font-bold text-white leading-tight">
                <span style={{ fontWeight: "normal" }}>
                  The new way to find your new home
                </span>
              </h2>
              <p className="text-base md:text-lg text-white opacity-70 leading-relaxed">
                Find your dream place to live in with more than 10k+ properties
                listed.
              </p>
              <Link to="/contact">
              <button className="mt-4 inline-flex items-center gap-3 bg-white text-black px-5 py-2.5 rounded-full hover:bg-gray-200 transition-all sm:w-[132px] sm:h-[39px] sm:-ml-1 sm:pl-4">
                <span className="font-medium sm:text-xs sm:-ml-1">
                  Get started
                </span>
                <div className="flex items-center justify-center w-9 h-9 sm:w-[30px] sm:h-[29px] bg-black rounded-full">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.15817 5.14453H12.9898V11.9761M12.5154 5.61895L5.58887 12.5455"
                      stroke="white"
                      strokeWidth="1.61023"
                      strokeMiterlimit="10"
                      strokeLinecap="square"
                    />
                  </svg>
                </div>
              </button>
              </Link>
            </div>
          </div>
        </div>
        </AnimatedSection>

        {/* Benefits List */}
        <StaggerContainer className="flex flex-col gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <AnimatedItem key={index}>
            <div className="benefit-item flex items-start gap-6">
              {/* Icon Container */}
              <div className="relative w-14 h-14 flex-shrink-0">
                {/* Outer circle */}
                <div className="absolute inset-0 rounded-full border border-gray-300 bg-gray-100"></div>
                {/* Inner circle */}
                <div className="absolute inset-1 rounded-full bg-gray-200"></div>
                {/* Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {benefit.icon}
                </div>
                {/* Badge */}
                {benefit.badge && (
                  <div className="absolute -bottom-0.5 -right-0.5 w-5 h-5 rounded-full bg-black flex items-center justify-center">
                    {benefit.badge}
                  </div>
                )}
              </div>

              {/* Text Content */}
              <div className="flex-1 space-y-4">
                <h3 className="font-instrument text-xl md:text-2xl font-bold text-black leading-tight">
                  <span style={{ fontWeight: "normal" }}>{benefit.title}</span>
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
            </AnimatedItem>
          ))}
        </StaggerContainer>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .benefits-overlay {
            background-image: url(https://cdn.builder.io/api/v1/image/assets%2F7246dc4011f944fd97de5fc88477069e%2F24a63a841a044e0a92d49c1b485d61ad);
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
          }
        }
      `}</style>
    </section>
  );
}
