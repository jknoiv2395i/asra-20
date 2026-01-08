import { motion } from "motion/react";
import { useState } from "react";

export default function HeroSection() {
  const [isHoveringButton, setIsHoveringButton] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const headlineVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut",
        delay: 0.1,
      },
    },
  };

  const backgroundVariants = {
    hidden: { opacity: 0, scale: 1.05 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 2,
        ease: "easeOut",
        delay: 0.5,
      },
    },
  };

  return (
    <motion.section
      className="hero-section relative w-full min-h-screen md:h-screen bg-[#1E9CE8] overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={backgroundVariants}
      style={{
        backgroundImage:
          "url(https://api.builder.io/api/v1/image/assets/TEMP/ec4dbbbabe37a36b8cd44006f5f5207c0c897340?width=3840)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      {/* Gradient Overlay */}
      <div
        className="gradient-overlay absolute left-0 bottom-0 w-full h-60 md:h-80 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, #FFF 100%)",
        }}
      />

      {/* Centered Content Container */}
      <motion.div
        className="hero-content-wrapper absolute left-1/2 top-24 sm:top-12 md:top-16 -translate-x-1/2 w-full max-w-2xl px-4 md:px-6 flex flex-col items-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        style={{
          "@media (max-width: 640px)": {
            top: "94px",
            width: "99%",
          },
        }}
      >
        {/* Main Heading */}
        <motion.h1
          className="hero-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white text-center font-instrument font-normal leading-tight mb-4 sm:mb-6"
          variants={headlineVariants}
          style={{
            fontFamily: "'Instrument Sans', Inter, system-ui, sans-serif",
            width: "100%",
            "@media (max-width: 640px)": {
              textAlign: "center",
            },
          }}
        >
          <p>Your gateway to </p>
          <p>prestige properties</p>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="hero-subheading text-sm sm:text-lg md:text-xl text-white/90 text-center max-w-xs sm:max-w-md md:max-w-lg mb-6 sm:mb-8 leading-relaxed"
          variants={itemVariants}
          style={{
            fontFamily: "Inter, system-ui, sans-serif",
          }}
        >
          Bring your architectural projects to life with a template that puts
          your work front and center.
        </motion.p>

        {/* CTA Button */}
        <motion.button
          className="hero-cta-button flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-white rounded-full text-gray-900 text-sm sm:text-base font-medium hover:bg-gray-50 transition-colors"
          variants={itemVariants}
          whileHover={{
            background: "#f9fafb",
            transition: { duration: 0.2 },
          }}
          onMouseEnter={() => setIsHoveringButton(true)}
          onMouseLeave={() => setIsHoveringButton(false)}
        >
          <span
            style={{
              fontFamily: "Inter, system-ui, sans-serif",
            }}
          >
            Get started
          </span>
          <motion.div
            className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-900"
            animate={isHoveringButton ? { scale: 1.05 } : { scale: 1 }}
            transition={{ duration: 0.2 }}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.625 7H11.375M11.375 7L7 2.625M11.375 7L7 11.375"
                stroke="white"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
        </motion.button>
      </motion.div>
    </motion.section>
  );
}
