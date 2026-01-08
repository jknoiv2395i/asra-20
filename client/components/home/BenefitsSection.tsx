export default function BenefitsSection() {
  const benefits = [
    {
      icon: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_property)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2.66667 16.0001H5.62956V26.3705C5.62956 27.1563 5.94173 27.9099 6.49739 28.4656C7.05305 29.0212 7.80669 29.3334 8.59252 29.3334H23.4073C24.1932 29.3334 24.9468 29.0212 25.5025 28.4656C26.0581 27.9099 26.3703 27.1563 26.3703 26.3705V16.0001H26.3704H29.3333L16 2.66675L2.66667 16.0001Z"
              fill="white"
            />
            <path
              d="M12 18.0002L14.6667 20.6668L20 15.3335"
              stroke="#1E9CE8"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_property">
              <rect width="32" height="32" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
      badge: (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M12.36 2.78009L8.69334 1.40676C8.31333 1.26676 7.69334 1.26676 7.31333 1.40676L3.64667 2.78009C2.94 3.04676 2.36667 3.87343 2.36667 4.62676V10.0268C2.36667 10.5668 2.72 11.2801 3.15334 11.6001L6.82 14.3401C7.46667 14.8268 8.52667 14.8268 9.17334 14.3401L12.84 11.6001C13.2733 11.2734 13.6267 10.5668 13.6267 10.0268V4.62676C13.6333 3.87343 13.06 3.04676 12.36 2.78009ZM8.5 8.58009V10.3334C8.5 10.6068 8.27333 10.8334 8 10.8334C7.72667 10.8334 7.5 10.6068 7.5 10.3334V8.58009C6.82667 8.36676 6.33333 7.74009 6.33333 7.00009C6.33333 6.08009 7.08 5.33343 8 5.33343C8.92 5.33343 9.66667 6.08009 9.66667 7.00009C9.66667 7.74676 9.17333 8.36676 8.5 8.58009Z"
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
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_price)">
            <path
              d="M6.66663 28V6.66667C6.66663 5.95942 6.94758 5.28115 7.44767 4.78105C7.94777 4.28095 8.62605 4 9.33329 4H22.6666C23.3739 4 24.0521 4.28095 24.5522 4.78105C25.0523 5.28115 25.3333 5.95942 25.3333 6.66667V28L21.3333 25.3333L18.6666 28L16 25.3333L13.3333 28L10.6666 25.3333L6.66663 28Z"
              fill="white"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18.6667 10.6667H15.3334C14.8029 10.6667 14.2942 10.8775 13.9192 11.2525C13.5441 11.6276 13.3334 12.1363 13.3334 12.6667C13.3334 13.1972 13.5441 13.7059 13.9192 14.081C14.2942 14.456 14.8029 14.6667 15.3334 14.6667H16.6667C17.1971 14.6667 17.7058 14.8775 18.0809 15.2525C18.456 15.6276 18.6667 16.1363 18.6667 16.6667C18.6667 17.1972 18.456 17.7059 18.0809 18.081C17.7058 18.456 17.1971 18.6667 16.6667 18.6667H13.3334M16 18.6667V20.6667M16 8.66675V10.6667"
              stroke="#1E9CE8"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_price">
              <rect width="32" height="32" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
      badge: (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M8.00016 1.3335C4.32016 1.3335 1.3335 4.32016 1.3335 8.00016C1.3335 11.6802 4.32016 14.6668 8.00016 14.6668C11.6802 14.6668 14.6668 11.6802 14.6668 8.00016C14.6668 4.32016 11.6802 1.3335 8.00016 1.3335ZM5.82016 5.10683C6.36016 5.10683 6.80683 5.54683 6.80683 6.0935C6.80683 6.6335 6.36683 7.08016 5.82016 7.08016C5.28016 7.08016 4.8335 6.64016 4.8335 6.0935C4.8335 5.54683 5.2735 5.10683 5.82016 5.10683ZM5.90016 10.5335C5.80016 10.6335 5.6735 10.6802 5.54683 10.6802C5.42016 10.6802 5.2935 10.6335 5.1935 10.5335C5.00016 10.3402 5.00016 10.0202 5.1935 9.82683L9.56016 5.46016C9.7535 5.26683 10.0735 5.26683 10.2668 5.46016C10.4602 5.6535 10.4602 5.9735 10.2668 6.16683L5.90016 10.5335ZM10.1802 10.8935C9.64016 10.8935 9.1935 10.4535 9.1935 9.90683C9.1935 9.36683 9.6335 8.92016 10.1802 8.92016C10.7202 8.92016 11.1668 9.36016 11.1668 9.90683C11.1668 10.4535 10.7268 10.8935 10.1802 10.8935Z"
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
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 28L29.3333 18.6667H24.0133L24 4H8V18.6667H2.66667L16 28Z"
            fill="white"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 18.6667L20 10.6667"
            stroke="#1E9CE8"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.6667 12.0001C13.0349 12.0001 13.3333 11.7016 13.3333 11.3334C13.3333 10.9652 13.0349 10.6667 12.6667 10.6667C12.2985 10.6667 12 10.9652 12 11.3334C12 11.7016 12.2985 12.0001 12.6667 12.0001Z"
            fill="#1E9CE8"
            stroke="#1E9CE8"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19.3333 18.6666C19.7015 18.6666 20 18.3681 20 17.9999C20 17.6317 19.7015 17.3333 19.3333 17.3333C18.9651 17.3333 18.6667 17.6317 18.6667 17.9999C18.6667 18.3681 18.9651 18.6666 19.3333 18.6666Z"
            fill="#1E9CE8"
            stroke="#1E9CE8"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      badge: (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M10.7933 1.33325H5.20667C2.78 1.33325 1.33333 2.77992 1.33333 5.20659V10.7933C1.33333 13.2199 2.78 14.6666 5.20667 14.6666H10.7933C13.22 14.6666 14.6667 13.2199 14.6667 10.7933V5.20659C14.6667 2.77992 13.22 1.33325 10.7933 1.33325ZM9.50667 7.99992C10.0267 8.17992 10.72 8.55992 10.72 9.75325C10.72 10.7799 9.92 11.6133 8.93333 11.6133H8.5V11.9999C8.5 12.2733 8.27333 12.4999 8 12.4999C7.72667 12.4999 7.5 12.2733 7.5 11.9999V11.6133H7.26C6.16667 11.6133 5.28 10.6866 5.28 9.55325C5.28 9.27992 5.5 9.05325 5.78 9.05325C6.05333 9.05325 6.28 9.27992 6.28 9.55325C6.28 10.1399 6.72 10.6133 7.26 10.6133H7.5V8.35325L6.49333 7.99992C5.97333 7.81992 5.28 7.43992 5.28 6.24659C5.28 5.21992 6.08 4.38659 7.06667 4.38659H7.5V3.99992C7.5 3.72659 7.72667 3.49992 8 3.49992C8.27333 3.49992 8.5 3.72659 8.5 3.99992V4.38659H8.74C9.83333 4.38659 10.72 5.31325 10.72 6.44659C10.72 6.71992 10.5 6.94659 10.22 6.94659C9.94667 6.94659 9.72 6.71992 9.72 6.44659C9.72 5.85992 9.28 5.38659 8.74 5.38659H8.5V7.64659L9.50667 7.99992Z"
            fill="white"
          />
        </svg>
      ),
      title: "Lowest Commission",
      description:
        "You no longer have to negotiate commissions and haggle with other agents it only cost 2%!",
    },
    {
      icon: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_control)">
            <path
              d="M21.3334 26.6666V23.9999C21.3334 23.2927 21.6143 22.6144 22.1144 22.1143C22.6145 21.6142 23.2928 21.3333 24 21.3333H26.6667"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M21.3334 37.3333V39.9999C21.3334 40.7072 21.6143 41.3854 22.1144 41.8855C22.6145 42.3856 23.2928 42.6666 24 42.6666H26.6667"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M37.3334 21.3333H40C40.7073 21.3333 41.3856 21.6142 41.8857 22.1143C42.3858 22.6144 42.6667 23.2927 42.6667 23.9999V26.6666"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M37.3334 42.6666H40C40.7073 42.6666 41.3856 42.3856 41.8857 41.8855C42.3858 41.3854 42.6667 40.7072 42.6667 39.9999V37.3333"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M32 40L27.3333 33.3333C26.8841 32.5213 26.6544 31.6062 26.6671 30.6784C26.6798 29.7505 26.9344 28.842 27.4057 28.0426C27.877 27.2433 28.5486 26.5807 29.3544 26.1204C30.1601 25.6601 31.072 25.418 32 25.418C32.9279 25.418 33.8398 25.6601 34.6455 26.1204C35.4513 26.5807 36.123 27.2433 36.5943 28.0426C37.0655 28.842 37.3201 29.7505 37.3328 30.6784C37.3455 31.6062 37.1159 32.5213 36.6666 33.3333L32 40Z"
              fill="white"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M32 30.6667V30.6801"
              stroke="#1E9CE8"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_control">
              <rect width="32" height="32" fill="white" transform="translate(16 16)" />
            </clipPath>
          </defs>
        </svg>
      ),
      badge: null,
      title: "Overall Control",
      description:
        "Get a virtual tour, and schedule visits before you rent or buy any properties. You get overall control.",
    },
  ];

  return (
    <section className="w-full bg-white px-4 md:px-8 lg:px-12 py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Side - Illustration and CTA */}
          <div className="order-2 lg:order-1">
            <div className="relative bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 md:p-10 lg:p-12 shadow-lg">
              {/* Illustration - Using gradient colors to represent the house */}
              <div className="mb-8 flex justify-center">
                <div className="relative w-64 h-48">
                  {/* Simple house illustration using CSS */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-48 h-32">
                    {/* House base */}
                    <div className="absolute bottom-0 w-full h-24 bg-gradient-to-br from-[#1E9CE8] to-[#0D6EAD] rounded-lg shadow-xl"></div>
                    {/* Roof */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[6rem] border-r-[6rem] border-b-[3rem] border-l-transparent border-r-transparent border-b-[#1E9CE8]"></div>
                    {/* Door */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-12 bg-white rounded-t-lg"></div>
                    {/* Windows */}
                    <div className="absolute bottom-12 left-6 w-6 h-6 bg-white rounded"></div>
                    <div className="absolute bottom-12 right-6 w-6 h-6 bg-white rounded"></div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h2 className="font-instrument text-2xl md:text-3xl lg:text-4xl font-bold text-[#071839] leading-tight">
                  The new way to find your new home
                </h2>
                <p className="text-base md:text-lg text-[#071839] opacity-70 leading-relaxed">
                  Find your dream place to live in with more than 10k+ properties
                  listed.
                </p>
                <button className="mt-6 px-6 py-3 bg-[#071839] text-white text-sm md:text-base font-bold rounded-lg hover:bg-[#0a1f4d] transition-colors">
                  Browse Properties
                </button>
              </div>
            </div>
          </div>

          {/* Right Side - Benefits Grid */}
          <div className="order-1 lg:order-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="benefit-card flex flex-col gap-6"
                >
                  {/* Icon Container */}
                  <div className="relative w-16 h-16">
                    {/* Outer circle */}
                    <div className="absolute inset-0 rounded-full border border-[#E0DEF7] bg-white"></div>
                    {/* Inner circle */}
                    <div className="absolute inset-1 rounded-full bg-[#E0DEF7]"></div>
                    {/* Icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      {benefit.icon}
                    </div>
                    {/* Badge */}
                    {benefit.badge && (
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-[#1E9CE8] flex items-center justify-center">
                        {benefit.badge}
                      </div>
                    )}
                  </div>

                  {/* Text Content */}
                  <div className="space-y-4">
                    <h3 className="font-instrument text-xl md:text-2xl font-bold text-[#000929] leading-tight">
                      {benefit.title}
                    </h3>
                    <p className="text-sm md:text-base text-[#4D5461] leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
