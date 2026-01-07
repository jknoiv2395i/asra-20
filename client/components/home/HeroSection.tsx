export default function HeroSection() {
  return (
    <section
      className="relative w-full h-[915px] overflow-hidden"
      style={{
        backgroundColor: "rgb(30, 156, 232)",
        backgroundImage:
          "url(https://cdn.builder.io/api/v1/image/assets%2Fea71525dd8ea470bb0c07f096721fbd7%2Fba9b3a6a9ab8449fb7f893e61d97ff35)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      {/* Gradient Overlay */}
      <div
        style={{
          backgroundImage: "linear-gradient(to top, rgb(255, 255, 255), rgba(0, 0, 0, 0))",
          bottom: "0px",
          fontWeight: "400",
          height: "240px",
          left: "0px",
          position: "absolute",
          width: "100%",
        }}
      />

      {/* Content - Top level wrapper (empty, no flex properties) */}
      <div>
        {/* Two Column Flex Container */}
        <div
          style={{
            gap: "20px",
            display: "flex",
            "@media (max-width: 991px)": {
              flexDirection: "column",
              alignItems: "stretch",
              gap: "0px",
            },
          }}
        >
          {/* Left Column - Text Content and CTA */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              lineHeight: "normal",
              width: "50%",
              marginLeft: "0px",
              "@media (max-width: 991px)": {
                width: "100%",
                marginLeft: 0,
              },
            }}
          >
            {/* Inner content wrapper */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                fontWeight: "400",
                marginTop: "84px",
                paddingLeft: "41px",
              }}
            >
              {/* Content column with text and button */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  fontWeight: "400",
                  width: "50%",
                }}
              >
                {/* Main Heading */}
                <div
                  style={{
                    color: "rgb(255, 255, 255)",
                    width: "676px",
                    margin: "98px 0 24px -1px",
                    font: '400 72px/72px "Instrument Sans", Inter, system-ui, sans-serif',
                  }}
                >
                  Your gateway to prestige properties
                </div>

                {/* Subheading */}
                <div
                  style={{
                    color: "rgba(255, 255, 255, 0.9)",
                    fontSize: "19px",
                    fontWeight: "400",
                    lineHeight: "28px",
                    width: "426px",
                    margin: "-2px 0 8px -1px",
                  }}
                >
                  Bring your architectural projects to life with a template
                  that puts your work front and center.
                </div>

                {/* CTA Button */}
                <button
                  style={{
                    display: "flex",
                    alignItems: "center",
                    backgroundColor: "rgb(255, 255, 255)",
                    borderRadius: "9999px",
                    boxShadow:
                      "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px",
                    fontWeight: "400",
                    gap: "8px",
                    height: "50px",
                    transitionDuration: "0.15s",
                    transitionTimingFunction:
                      "cubic-bezier(0.4, 0, 0.2, 1)",
                    width: "179.2px",
                    borderColor: "rgba(0, 0, 0, 0)",
                    margin: "-4px auto 0 0",
                    padding: "16px 32px",
                  }}
                >
                  <div
                    style={{
                      color: "rgb(17, 24, 39)",
                      fontSize: "15px",
                      fontWeight: "500",
                      lineHeight: "22.5px",
                      overflowWrap: "anywhere",
                      wordWrap: "anywhere",
                    }}
                  >
                    Get started
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      backgroundColor: "rgb(17, 24, 39)",
                      borderRadius: "9999px",
                      fontWeight: "400",
                      height: "24px",
                      justifyContent: "center",
                      overflowWrap: "anywhere",
                      width: "24px",
                      wordWrap: "anywhere",
                    }}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{
                        display: "block",
                        fill: "none",
                        fontWeight: "400",
                        height: "14px",
                        overflowClipMargin: "content-box",
                        overflowWrap: "anywhere",
                        overflowX: "hidden",
                        overflowY: "hidden",
                        width: "14px",
                        wordWrap: "anywhere",
                      }}
                    >
                      <path
                        d="M2.625 7H11.375M11.375 7L7 2.625M11.375 7L7 11.375"
                        stroke="white"
                        strokeWidth="1.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        style={{
                          display: "inline",
                          d: 'path("M 2.625 7 H 11.375 M 11.375 7 L 7 2.625 M 11.375 7 L 7 11.375")',
                          fill: "none",
                          fontWeight: "400",
                          overflowWrap: "anywhere",
                          stroke: "rgb(255, 255, 255)",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: "1.75px",
                          transformOrigin: "0px 0px",
                          wordWrap: "anywhere",
                        }}
                      />
                    </svg>
                  </div>
                </button>
              </div>

              {/* Right inner column placeholder */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  fontWeight: "400",
                  marginLeft: "20px",
                  width: "50%",
                }}
              >
                <div
                  style={{
                    fontWeight: "400",
                    height: "919px",
                    maxWidth: "631px",
                    textAlign: "center",
                    margin: "-5px auto 0",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Right Column - Centered content wrapper */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              lineHeight: "normal",
              width: "50%",
              marginLeft: "20px",
              "@media (max-width: 991px)": {
                width: "100%",
                marginLeft: 0,
              },
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                fontWeight: "400",
                height: "100%",
                justifyContent: "center",
                position: "relative",
                zIndex: 10,
                padding: "128px 24px 0",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
