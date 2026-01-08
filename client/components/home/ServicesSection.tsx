export default function ServicesSection() {
  const serviceIcon = (
    <svg
      width="24"
      height="24"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.80305 5.97479L11.357 9.67779C11.631 9.86038 11.8557 10.1078 12.0112 10.3981C12.1666 10.6883 12.248 11.0125 12.248 11.3417V21.8067C12.248 21.9878 12.1989 22.1654 12.1059 22.3208C12.0129 22.4761 11.8794 22.6032 11.7198 22.6886C11.5601 22.774 11.3803 22.8145 11.1995 22.8057C11.0187 22.7969 10.8436 22.7392 10.693 22.6387L5.13905 18.9367C4.86489 18.7541 4.64011 18.5065 4.48467 18.216C4.32923 17.9256 4.24795 17.6012 4.24805 17.2717V6.80679C4.24803 6.62575 4.29715 6.4481 4.39018 6.29278C4.48321 6.13747 4.61666 6.01033 4.77629 5.92492C4.93592 5.83951 5.11574 5.79904 5.29657 5.80782C5.4774 5.81661 5.65245 5.87432 5.80305 5.97479ZM8.77605 3.92479C8.93572 3.83936 9.11559 3.79888 9.29647 3.80769C9.47735 3.81649 9.65244 3.87425 9.80305 3.97479L15.357 7.67779C15.631 7.86038 15.8557 8.10779 16.0112 8.39807C16.1666 8.68835 16.248 9.01252 16.248 9.34179V19.8067C16.248 19.9878 16.1989 20.1654 16.1059 20.3208C16.0129 20.4761 15.8794 20.6032 15.7198 20.6886C15.5601 20.774 15.3803 20.8145 15.1995 20.8057C15.0187 20.7969 14.8436 20.7392 14.693 20.6387L13.748 20.0087V11.3417C13.7479 10.7656 13.6056 10.1983 13.3336 9.69032C13.0617 9.18233 12.6685 8.74934 12.189 8.42979L8.24805 5.80179V4.80679C8.24798 4.62575 8.29706 4.44809 8.39005 4.29276C8.48303 4.13742 8.61645 4.01024 8.77605 3.92479ZM13.803 1.97479L19.357 5.67779C19.631 5.86038 19.8557 6.10779 20.0112 6.39807C20.1666 6.68835 20.248 7.01252 20.248 7.34179V17.8067C20.248 17.9878 20.1989 18.1654 20.1059 18.3208C20.0129 18.4761 19.8794 18.6032 19.7198 18.6886C19.5601 18.774 19.3803 18.8145 19.1995 18.8057C19.0187 18.7969 18.8436 18.7392 18.693 18.6387L17.748 18.0087V9.34179C17.7479 8.76558 17.6056 8.19831 17.3336 7.69032C17.0617 7.18233 16.6685 6.74934 16.189 6.42979L12.248 3.80179V2.80679C12.248 2.62575 12.2971 2.4481 12.3901 2.29278C12.4832 2.13747 12.6166 2.01033 12.7762 1.92492C12.9359 1.83951 13.1157 1.79903 13.2965 1.80782C13.4774 1.81661 13.6524 1.87431 13.803 1.97479Z"
        fill="currentColor"
      />
    </svg>
  );

  const services = [
    {
      icon: serviceIcon,
      title: "Residential Property",
      description:
        "Functional design organizes the residential property to meet its use objectives.",
    },
    {
      icon: serviceIcon,
      title: "Commercial Property",
      description:
        "Functional design structures the commercial property to serve its intended real estate functions.",
    },
    {
      icon: serviceIcon,
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
