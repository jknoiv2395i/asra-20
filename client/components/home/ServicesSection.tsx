export default function ServicesSection() {
  const services = [
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.60864 19.0167V10.3767C4.60864 10.0727 4.6768 9.78473 4.81312 9.51272C4.94944 9.24072 5.13729 9.01672 5.37664 8.84072L11.1367 4.52072C11.4727 4.26472 11.8567 4.13672 12.2887 4.13672C12.7207 4.13672 13.1047 4.26472 13.4407 4.52072L19.2007 8.84072C19.4407 9.01672 19.6288 9.24072 19.7651 9.51272C19.9015 9.78473 19.9693 10.0727 19.9687 10.3767V19.0167C19.9687 19.5447 19.7805 19.9968 19.4042 20.3731C19.0279 20.7495 18.576 20.9373 18.0487 20.9367H15.1687C14.8967 20.9367 14.6688 20.8445 14.4851 20.6602C14.3015 20.4759 14.2093 20.2481 14.2087 19.9767V15.1767C14.2087 14.9047 14.1165 14.6768 13.9322 14.4932C13.7479 14.3095 13.5201 14.2173 13.2487 14.2167H11.3287C11.0567 14.2167 10.8288 14.3088 10.6451 14.4932C10.4615 14.6775 10.3693 14.9053 10.3687 15.1767V19.9767C10.3687 20.2486 10.2765 20.4768 10.0922 20.6612C9.90786 20.8455 9.68005 20.9373 9.40864 20.9367H6.52864C6.00064 20.9367 5.5488 20.7488 5.17312 20.3731C4.79745 19.9975 4.60929 19.5453 4.60864 19.0167Z"
            fill="white"
          />
        </svg>
      ),
      title: "Residential Property",
      description:
        "Functional design organizes the residential property to meet its use objectives.",
    },
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.57092 5.7358L10.9027 9.29068C11.1658 9.46596 11.3815 9.70349 11.5307 9.98218C11.6799 10.2608 11.7581 10.572 11.7581 10.888V20.9344C11.7581 21.1083 11.7109 21.2788 11.6217 21.428C11.5324 21.5771 11.4042 21.6991 11.251 21.7811C11.0977 21.863 10.9251 21.9019 10.7515 21.8935C10.5779 21.885 10.4099 21.8296 10.2653 21.7332L4.93348 18.1792C4.67029 18.0039 4.4545 17.7662 4.30528 17.4874C4.15606 17.2086 4.07803 16.8972 4.07813 16.5808V6.53452C4.07811 6.36072 4.12526 6.19018 4.21457 6.04107C4.30388 5.89197 4.43199 5.76992 4.58524 5.68792C4.73848 5.60593 4.91111 5.56708 5.0847 5.57551C5.2583 5.58395 5.42635 5.63935 5.57092 5.7358ZM8.425 3.7678C8.57829 3.68579 8.75096 3.64692 8.92461 3.65538C9.09825 3.66383 9.26634 3.71928 9.41092 3.8158L14.7427 7.37068C15.0058 7.54596 15.2215 7.78348 15.3707 8.06215C15.5199 8.34082 15.5981 8.65202 15.5981 8.96812V19.0144C15.5981 19.1883 15.5509 19.3588 15.4617 19.508C15.3724 19.6571 15.2442 19.7791 15.091 19.8611C14.9377 19.943 14.7651 19.9819 14.5915 19.9735C14.4179 19.965 14.2499 19.9096 14.1053 19.8132L13.1981 19.2084V10.888C13.198 10.335 13.0614 9.79037 12.8003 9.30271C12.5392 8.81504 12.1618 8.39937 11.7014 8.0926L7.91812 5.56972V4.61452C7.91806 4.44072 7.96517 4.27017 8.05444 4.12105C8.14371 3.97192 8.27179 3.84983 8.425 3.7678ZM13.2509 1.8958L18.5827 5.45068C18.8458 5.62596 19.0615 5.86348 19.2107 6.14215C19.3599 6.42082 19.4381 6.73202 19.4381 7.04812V17.0944C19.4381 17.2683 19.3909 17.4388 19.3017 17.588C19.2124 17.7371 19.084...
            fill="white"
          />
        </svg>
      ),
      title: "Commercial Property",
      description:
        "Functional design structures the commercial property to serve its intended real estate functions.",
    },
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.76954 5.09625C7.38362 5.76441 7.38362 6.66105 7.38362 8.45625V11.3621C7.79642 11.3362 8.26106 11.3362 8.76122 11.3362H15.606C16.1052 11.3362 16.5708 11.3362 16.9836 11.3621V8.45625C16.9836 6.66105 16.9836 5.76441 16.5977 5.09625C16.345 4.65847 15.9814 4.29493 15.5436 4.04217C14.8755 3.65625 13.9788 3.65625 12.1836 3.65625C10.3884 3.65625 9.49178 3.65625 8.82362 4.04217C8.38585 4.29493 8.02231 4.65847 7.76954 5.09625ZM6.66362 16.1276C6.1817 16.1084 5.88986 16.0431 5.69018 15.8252C5.40506 15.5141 5.4425 15.0821 5.51738 14.2172C5.57018 13.5932 5.69114 13.1727 5.9657 12.8588C6.45722 12.2962 7.2473 12.2962 8.82842 12.2962H15.5388C17.12 12.2962 17.91 12.2962 18.4016 12.8588C18.6761 13.1717 18.7971 13.5922 18.8508 14.2172C18.9248 15.0812 18.9622 15.5141 18.6771 15.8252C18.4774 16.0431 18.1856 16.1084 17.7036 16.1276V20.9362C17.7036 21.1271 17.6278 21.3103 17.4927 21.4453C17.3578 21.5804 17.1746 21.6562 16.9836 21.6562C16.7927 21.6562 16.6095 21.5804 16.4745 21.4453C16.3395 21.3103 16.2636 21.1271 16.2636 20.9362V16.1362H8.10362V20.9362C8.10362 21.1271 8.02778 21.3103 7.89274 21.4453C7.75772 21.5804 7.57459 21.6562 7.38362 21.6562C7.19267 21.6562 7.00954 21.5804 6.87451 21.4453C6.73948 21.3103 6.66362 21.1271 6.66362 20.9362V16.1276Z"
            fill="white"
          />
        </svg>
      ),
      title: "Industrial Property",
      description:
        "Functional design configures the industrial property to support its operational real estate purposes.",
    },
  ];

  return (
    <section className="w-full bg-white px-4 md:px-8 lg:px-12 py-12 md:py-16 lg:py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-instrument text-xl lg:text-3xl text-black mb-8 lg:mb-12 font-normal tracking-tight">
          OUR SERVICES
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card border border-[#C3D5F1] rounded-2xl p-6 lg:p-8 cursor-pointer transition-all duration-300"
              style={{
                backgroundColor: "#ffffff",
              }}
              onMouseEnter={(e) => {
                const card = e.currentTarget;
                card.style.backgroundColor = "#1E9CE8";
                card.style.borderColor = "#1E9CE8";
                card.style.boxShadow = "0 10px 30px rgba(30, 156, 232, 0.2)";

                // Change text colors
                const title = card.querySelector("h3");
                if (title) title.style.color = "#ffffff";

                const description = card.querySelector("p");
                if (description) description.style.color = "#ffffff";

                const linkDiv = card.querySelector(".learn-more-link");
                if (linkDiv) {
                  linkDiv.style.color = "#ffffff";
                  const paths = linkDiv.querySelectorAll("path");
                  paths.forEach((path) => {
                    path.setAttribute("stroke", "#ffffff");
                  });
                }

                const iconBg = card.querySelector(".icon-bg");
                if (iconBg) {
                  iconBg.style.backgroundColor = "#ffffff";
                  const svgs = iconBg.querySelectorAll("path");
                  svgs.forEach((svg) => {
                    svg.setAttribute("fill", "#1E9CE8");
                  });
                }
              }}
              onMouseLeave={(e) => {
                const card = e.currentTarget;
                card.style.backgroundColor = "#ffffff";
                card.style.borderColor = "#C3D5F1";
                card.style.boxShadow = "none";

                // Reset text colors
                const title = card.querySelector("h3");
                if (title) title.style.color = "#131313";

                const description = card.querySelector("p");
                if (description) description.style.color = "#5D5D5D";

                const linkDiv = card.querySelector(".learn-more-link");
                if (linkDiv) {
                  linkDiv.style.color = "#131313";
                  const paths = linkDiv.querySelectorAll("path");
                  paths.forEach((path) => {
                    path.setAttribute("stroke", "#131313");
                  });
                }

                const iconBg = card.querySelector(".icon-bg");
                if (iconBg) {
                  iconBg.style.backgroundColor = "#071839";
                  const svgs = iconBg.querySelectorAll("path");
                  svgs.forEach((svg) => {
                    svg.setAttribute("fill", "white");
                  });
                }
              }}
            >
              <div className="icon-bg w-16 h-16 bg-[#071839] rounded-full flex items-center justify-center mb-6 lg:mb-8 transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="font-instrument text-[27px] lg:text-2xl leading-8 lg:leading-9 mb-4 lg:mb-6 font-normal text-[#131313] transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-base lg:text-lg leading-7 mb-6 lg:mb-8 text-[#5D5D5D] transition-colors duration-300">
                {service.description}
              </p>
              <div className="learn-more-link flex items-center gap-3 text-[#131313] transition-colors duration-300">
                <span className="text-base lg:text-lg">Learn more</span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.83325 5.83203H14.1666V14.1654"
                    stroke="#131313"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-colors duration-300"
                  />
                  <path
                    d="M5.83325 14.1654L14.1666 5.83203"
                    stroke="#131313"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-colors duration-300"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-8">
          <p className="text-[#5D5D5D] text-base lg:text-lg leading-7 max-w-2xl">
            Whether you're looking for your dream home, selling a property, or
            seeking investment opportunities, our expert team is here to assist
            you every step of the way.
          </p>
          <button className="px-6 md:px-8 py-3 md:py-4 bg-[#131313] text-white text-base lg:text-lg font-medium rounded-full hover:bg-black transition-colors flex-shrink-0">
            View all
          </button>
        </div>
      </div>
    </section>
  );
}