import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  AnimatedSection,
  StaggerContainer,
  AnimatedItem,
} from "@/components/animations/AnimatedSection";

export default function ServicesSection() {
  const services = [
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.80305 5.97479L11.357 9.67779C11.631 9.86038 11.8557 10.1078 12.0112 10.3981C12.1666 10.6883 12.248 11.0125 12.248 11.3417V21.8067C12.248 21.9878 12.1989 22.1654 12.1059 22.3208C12.0129 22.4761 11.8794 22.6032 11.7198 22.6886C11.5601 22.774 11.3803 22.8145 11.1995 22.8057C11.0187 22.7969 10.8436 22.7392 10.693 22.6387L5.13905 18.9367C4.86489 18.7541 4.64011 18.5065 4.48467 18.216C4.32923 17.9256 4.24795 17.6012 4.24805 17.2717V6.80679C4.24803 6.62575 4.29715 6.4481 4.39018 6.29278C4.48321 6.13747 4.61666 6.01033 4.77629 5.92492C4.93592 5.83951 5.11574 5.79904 5.29657 5.80782C5.4774 5.81661 5.65245 5.87432 5.80305 5.97479ZM8.77605 3.92479C8.93572 3.83936 9.11559 3.79888 9.29647 3.80769C9.47735 3.81649 9.65244 3.87425 9.80305 3.97479L15.357 7.67779C15.631 7.86038 15.8557 8.10779 16.0112 8.39807C16.1666 8.68835 16.248 9.01252 16.248 9.34179V19.8067C16.248 19.9878 16.1989 20.1654 16.1059 20.3208C16.0129 20.4761 15.8794 20.6032 15.7198 20.6886C15.5601 20.774 15.3803 20.8145 15.1995 20.8057C15.0187 20.7969 14.8436 20.7392 14.693 20.6387L13.748 20.0087V11.3417C13.7479 10.7656 13.6056 10.1983 13.3336 9.69032C13.0617 9.18233 12.6685 8.74934 12.189 8.42979L8.24805 5.80179V4.80679C8.24798 4.62575 8.29706 4.44809 8.39005 4.29276C8.48303 4.13742 8.61645 4.01024 8.77605 3.92479ZM13.803 1.97479L19.357 5.67779C19.631 5.86038 19.8557 6.10779 20.0112 6.39807C20.1666 6.68835 20.248 7.01252 20.248 7.34179V17.8067C20.248 17.9878 20.1989 18.1654 20.1059 18.3208C20.0129 18.4761 19.8794 18.6032 19.7198 18.6886C19.5601 18.774 19.3803 18.8145 19.1995 18.8057C19.0187 18.7969 18.8436 18.7392 18.693 18.6387L17.748 18.0087V9.34179C17.7479 8.76558 17.6056 8.19831 17.3336 7.69032C17.0617 7.18233 16.6685 6.74934 16.189 6.42979L12.248 3.80179V2.80679C12.248 2.62575 12.2971 2.4481 12.3901 2.29278C12.4832 2.13747 12.6166 2.01033 12.7762 1.92492C12.9359 1.83951 13.1157 1.79903 13.2965 1.80782C13.4774 1.81661 13.6524 1.87431 13.803 1.97479Z"
            fill="white"
          />
        </svg>
      ),
      title: "Residential Plots & Apartments",
      description:
        "Family homes, rental apartments, or premium villas (800–2000 sqft) in high-demand areas like Super Corridor and MR-5.",
      link: "/properties",
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
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"
            fill="white"
          />
        </svg>
      ),
      title: "Investment Consulting",
      description:
        "Expert advice on high-ROI opportunities near IT hubs (TCS, Infosys). Strong networks with developers and banks for maximum returns.",
      link: "/contact",
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
      title: "Commercial & Industrial",
      description:
        "Shops, offices, factories, and warehouses with excellent connectivity along Ujjain Road, Indore Bypass, and Ring Road.",
      link: "/properties",
    },
  ];

  return (
    <section className="w-full bg-white px-4 md:px-8 lg:px-12 xl:px-16 py-8 md:py-10 lg:py-14">
      <div className="max-w-6xl lg:max-w-7xl mx-auto">
        <AnimatedSection>
          <h2 className="font-instrument text-xl lg:text-3xl text-black mb-8 lg:mb-12 font-normal tracking-tight">
            OUR SERVICES
          </h2>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:mb-16">
          {services.map((service, index) => (
            <AnimatedItem key={index}>
              <Link to={service.link}>
              <motion.div
                className="service-card border border-[#C3D5F1] rounded-2xl p-6 lg:p-8 cursor-pointer transition-all duration-300"
                whileHover={{
                  y: -8,
                  boxShadow: "0 12px 30px rgba(14, 8, 64, 0.15)",
                }}
                style={{
                  backgroundColor: "#ffffff",
                }}
                onMouseEnter={(e) => {
                  const card = e.currentTarget;
                  card.style.backgroundColor = "#0E0840";
                  card.style.borderColor = "#0E0840";

                  const title = card.querySelector("h3");
                  if (title) title.style.color = "#ffffff";

                  const description = card.querySelector("p");
                  if (description) description.style.color = "#ffffff";

                  const linkDiv = card.querySelector(".learn-more-link");
                  if (linkDiv) {
                    (linkDiv as HTMLElement).style.color = "#ffffff";
                    const paths = linkDiv.querySelectorAll("path");
                    paths.forEach((path) => {
                      path.setAttribute("stroke", "#ffffff");
                    });
                  }

                  const iconBg = card.querySelector(".icon-bg");
                  if (iconBg) {
                    (iconBg as HTMLElement).style.backgroundColor = "#ffffff";
                    const svgs = iconBg.querySelectorAll("path");
                    svgs.forEach((svg) => {
                      svg.setAttribute("fill", "#0E0840");
                    });
                  }
                }}
                onMouseLeave={(e) => {
                  const card = e.currentTarget;
                  card.style.backgroundColor = "#ffffff";
                  card.style.borderColor = "#C3D5F1";

                  const title = card.querySelector("h3");
                  if (title) title.style.color = "#131313";

                  const description = card.querySelector("p");
                  if (description) description.style.color = "#5D5D5D";

                  const linkDiv = card.querySelector(".learn-more-link");
                  if (linkDiv) {
                    (linkDiv as HTMLElement).style.color = "#131313";
                    const paths = linkDiv.querySelectorAll("path");
                    paths.forEach((path) => {
                      path.setAttribute("stroke", "#131313");
                    });
                  }

                  const iconBg = card.querySelector(".icon-bg");
                  if (iconBg) {
                    (iconBg as HTMLElement).style.backgroundColor = "#071839";
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
              </motion.div>
              </Link>
            </AnimatedItem>
          ))}
        </StaggerContainer>

        <AnimatedSection delay={0.2}>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-8">
            <p className="text-[#5D5D5D] text-base lg:text-lg leading-7 max-w-2xl">
              Whether you're buying, selling, or renting — residential plots,
              commercial spaces, apartments, or industrial land — our expert team
              delivers personalized guidance to maximize your investment.
            </p>
            <Link to="/properties">
              <motion.button
                className="px-6 md:px-8 py-3 md:py-4 bg-[#131313] text-white text-base lg:text-lg font-medium rounded-full hover:bg-black transition-colors flex-shrink-0"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                View all
              </motion.button>
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
