export default function HeroSection() {
  return (
    <section
      className="hero-section"
      style={{
        position: "relative",
        width: "100%",
        height: "911px",
        backgroundColor: "#1E9CE8",
        backgroundImage:
          "url(https://api.builder.io/api/v1/image/assets/TEMP/ec4dbbbabe37a36b8cd44006f5f5207c0c897340?width=3840)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        overflow: "hidden",
      }}
    >
      {/* Gradient Overlay */}
      <div
        className="gradient-overlay"
        style={{
          position: "absolute",
          left: 0,
          top: "675px",
          width: "100%",
          height: "240px",
          background:
            "linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, #FFF 100%)",
        }}
      />

      {/* Centered Content Container */}
      <div
        className="hero-content-wrapper"
        style={{
          position: "absolute",
          left: "50%",
          top: "62px",
          transform: "translateX(-50%)",
          width: "100%",
          maxWidth: "631px",
          padding: "0 24px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Main Heading */}
        <h1
          className="hero-heading"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "657px",
            alignSelf: "center",
            color: "#FFF",
            textAlign: "center",
            fontFamily: "'Instrument Sans', Inter, system-ui, sans-serif",
            fontSize: "72px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "72px",
            margin: "0 0 24px 0",
          }}
        >
          Your gateway to prestige properties
        </h1>

        {/* Subheading */}
        <p
          className="hero-subheading"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "100%",
            maxWidth: "480px",
            color: "rgba(255, 255, 255, 0.90)",
            textAlign: "center",
            fontFamily: "Inter, system-ui, sans-serif",
            fontSize: "18.6px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "28px",
            margin: "0 0 32px 0",
          }}
        >
          Bring your architectural projects to life with a template that puts
          your work front and center.
        </p>

        {/* CTA Button */}
        <button
          className="hero-cta-button"
          style={{
            display: "flex",
            padding: "8px 16px",
            justifyContent: "center",
            alignItems: "center",
            gap: "7.8px",
            borderRadius: "9999px",
            background: "#FFF",
            boxShadow:
              "0 10px 15px -3px rgba(0, 0, 0, 0.10), 0 4px 6px -4px rgba(0, 0, 0, 0.10)",
            border: "none",
            cursor: "pointer",
            transition: "all 0.15s cubic-bezier(0.4, 0, 0.2, 1)",
            height: "40px",
            minWidth: "145px",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.boxShadow =
              "0 20px 25px -5px rgba(0, 0, 0, 0.15), 0 8px 10px -6px rgba(0, 0, 0, 0.15)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow =
              "0 10px 15px -3px rgba(0, 0, 0, 0.10), 0 4px 6px -4px rgba(0, 0, 0, 0.10)";
          }}
        >
          <span
            style={{
              color: "#111827",
              textAlign: "center",
              fontFamily: "Inter, system-ui, sans-serif",
              fontSize: "14.9px",
              fontStyle: "normal",
              fontWeight: 500,
              lineHeight: "24px",
            }}
          >
            Get started
          </span>
          <div
            style={{
              display: "flex",
              width: "24px",
              height: "24px",
              padding: "5px",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "9999px",
              background: "#111827",
            }}
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
          </div>
        </button>
      </div>

      {/* Responsive Styles */}
      <style jsx>{`
        @media (max-width: 991px) {
          .hero-section {
            height: auto;
            min-height: 600px;
          }

          .gradient-overlay {
            top: auto;
            bottom: 0;
          }

          .hero-content-wrapper {
            top: 80px;
            padding: 0 24px;
          }

          .hero-heading {
            font-size: 48px !important;
            line-height: 52px !important;
            margin-bottom: 16px;
          }

          .hero-subheading {
            font-size: 16px !important;
            line-height: 24px !important;
            margin-bottom: 24px;
          }
        }

        @media (max-width: 640px) {
          .hero-section {
            min-height: 500px;
          }

          .hero-content-wrapper {
            top: 60px;
            padding: 0 16px;
          }

          .hero-heading {
            font-size: 36px !important;
            line-height: 40px !important;
          }

          .hero-subheading {
            font-size: 15px !important;
            line-height: 22px !important;
          }

          .hero-cta-button {
            min-width: 130px;
            font-size: 14px !important;
          }
        }
      `}</style>
    </section>
  );
}
