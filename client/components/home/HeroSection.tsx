import { motion } from "motion/react";

export default function HeroSection() {
  return (
    <section
      className="relative w-full bg-[#0E0840] overflow-hidden"
      style={{
        "@media (max-width: 640px)": {
          height: "1032.6px",
        },
      }}
    >
      {/* Background House Image - Desktop Only */}
      <div className="hidden lg:block absolute right-0 top-[174px] w-[756px] h-[800px]">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/1ec8c53d0601e692be66b84a2ddbf1b3724282f1?width=1512"
          alt="Real Estate Property"
          className="w-full h-full object-cover"
        />
      </div>

      <header className="relative z-50 w-full" style={{ padding: "32px 139px" }} />

      {/* Mobile Image */}
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/1ec8c53d0601e692be66b84a2ddbf1b3724282f1?width=800"
        alt="Real Estate Property"
        className="block lg:hidden w-full h-auto object-cover"
        style={{ marginBottom: "33px" }}
      />

      {/* Main Content */}
      <h2
        className="text-[#F6DEE3] font-bold text-4xl md:text-5xl lg:text-[72px] leading-[45px] lg:leading-[72px] tracking-tighter"
        style={{
          letterSpacing: "-1.8px",
          margin: "0 -1px 2px 8px",
          "@media (max-width: 640px)": {
            marginTop: "-3px",
            paddingBottom: "10px",
          },
        }}
      >
        Creative Real
        <br />
        Estate Agency
      </h2>

      {/* Description */}
      <div
        className="text-white font-normal text-base leading-[26px] max-w-[492px]"
        style={{
          margin: "-5px 0 0 9px",
        }}
      >
        Spanty is an international estate company that offers services like propery appraisal as well as the sale, purchase, and investment of real estate.
      </div>

      {/* Form and Services Row */}
      <div
        className="flex flex-row relative z-10"
        style={{
          "@media (max-width: 640px)": {
            margin: "15px 0 75px",
          },
        }}
      >
        {/* Search Form */}
        <div
          className="bg-white shadow-lg backdrop-blur-sm"
          style={{
            backdropFilter: "blur(4px)",
            boxShadow: "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px",
            maxWidth: "260px",
            marginLeft: "13px",
            padding: "20px",
            "@media (max-width: 640px)": {
              height: "319px",
              width: "205px",
              boxShadow: "2px 7px 0 0 rgba(0, 0, 0, 0)",
            },
          }}
        >
          <div className="flex flex-col gap-7 mb-8">
            {/* Location */}
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 bg-[#ECECEC]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.83"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ color: "#020817", stroke: "#020817" }}
                >
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div className="flex flex-col">
                <div className="text-[#686A79] text-xs font-normal leading-4">Location</div>
                <div className="text-[#191A23] text-sm font-bold leading-[17.5px]">
                  California, US
                </div>
              </div>
            </div>

            {/* Price */}
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 bg-[#ECECEC]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.83"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ color: "#020817", stroke: "#020817" }}
                >
                  <line x1="12" x2="12" y1="2" y2="22" />
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <div className="flex flex-col">
                <div className="text-[#686A79] text-xs font-normal leading-4">Price</div>
                <div className="text-[#191A23] text-[13px] font-bold leading-4">
                  $1500-$2500
                </div>
              </div>
            </div>

            {/* Type of Property */}
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 bg-[#ECECEC]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.83"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ color: "#020817", stroke: "#020817" }}
                >
                  <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z" />
                  <path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12" />
                  <path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17" />
                </svg>
              </div>
              <div className="flex flex-col">
                <div className="text-[#686A79] text-xs font-normal leading-4">Type of Property</div>
                <div className="text-[#191A23] text-sm font-bold leading-[17.5px]">
                  Apartment
                </div>
              </div>
            </div>
          </div>

          {/* Search Button */}
          <button className="w-full bg-black text-white font-bold text-sm py-4 hover:bg-gray-900 transition-colors">
            Search
          </button>
        </div>

        {/* Services Section */}
        <div
          style={{
            marginLeft: "20px",
            "@media (max-width: 640px)": {
              width: "181px",
            },
          }}
        >
          <div
            className="text-white font-semibold text-xl mb-6 tracking-tighter"
            style={{ letterSpacing: "-0.5px" }}
          >
            Our Services
          </div>

          <div className="flex flex-col gap-12">
            {/* Service 1 */}
            <div className="flex flex-col gap-3">
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.4" d="M12.6262 5C14.2044 3.45352 16.3658 2.5 18.7499 2.5C23.5824 2.5 27.4999 6.41751 27.4999 11.25C27.4999 13.6342 26.5464 15.7956 24.9999 17.3738" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M11.25 27.5C16.0825 27.5 20 23.5825 20 18.75C20 13.9175 16.0825 10 11.25 10C6.41751 10 2.5 13.9175 2.5 18.75C2.5 23.5825 6.41751 27.5 11.25 27.5Z" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div className="text-white text-[15px] font-normal leading-[24px] max-w-[189px]">
                The price we offer accordance with the quality we provide
              </div>
            </div>

            {/* Service 2 */}
            <div className="flex flex-col gap-3">
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.4" d="M15 7.5V27.5M15 7.5H10.5804C9.92916 7.5 9.30463 7.23661 8.84416 6.76777C8.38369 6.29893 8.125 5.66304 8.125 5C8.125 4.33696 8.38369 3.70107 8.84416 3.23223C9.30463 2.76339 9.92916 2.5 10.5804 2.5C14.0179 2.5 15 7.5 15 7.5ZM15 7.5H19.4196C20.0708 7.5 20.6954 7.23661 21.1558 6.76777C21.6163 6.29893 21.875 5.66304 21.875 5C21.875 4.33696 21.6163 3.70107 21.1558 3.23223C20.6954 2.76339 20.0708 2.5 19.4196 2.5C15.9821 2.5 15 7.5 15 7.5Z" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M25 13.75V23.5C25 24.9001 25 25.6002 24.7275 26.135C24.4878 26.6054 24.1054 26.9878 23.635 27.2275C23.1002 27.5 22.4001 27.5 21 27.5L9 27.5C7.59987 27.5 6.8998 27.5 6.36502 27.2275C5.89462 26.9878 5.51217 26.6054 5.27248 26.135C5 25.6002 5 24.9001 5 23.5V13.75M2.5 9.5L2.5 11.75C2.5 12.4501 2.5 12.8001 2.63624 13.0675C2.75608 13.3027 2.94731 13.4939 3.18251 13.6138C3.4499 13.75 3.79993 13.75 4.5 13.75L25.5 13.75C26.2001 13.75 26.5501 13.75 26.8175 13.6138C27.0527 13.4939 27.2439 13.3027 27.3638 13.0675C27.5 12.8001 27.5 12.4501 27.5 11.75V9.5C27.5 8.79993 27.5 8.4499 27.3638 8.18251C27.2439 7.94731 27.0527 7.75608 26.8175 7.63624C26.5501 7.5 26.2001 7.5 25.5 7.5L4.5 7.5C3.79993 7.5 3.4499 7.5 3.18251 7.63624C2.94731 7.75608 2.75608 7.94731 2.63624 8.18251C2.5 8.4499 2.5 8.79993 2.5 9.5Z" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div className="text-white text-[15px] font-normal leading-[24px] max-w-[175px]">
                Official legality in the relevant government
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
