import React from "react";

export default function LogoCarousel() {
  return (
    <>
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .logo-scroll-container {
          animation: scroll 30s linear infinite;
        }
        
        .logo-scroll-container:hover {
          animation-play-state: paused;
        }
        
        @media (max-width: 640px) {
          .logo-carousel-section {
            background-color: #ffffff;
          }
        }
      `}</style>
      <LogoCarouselContent />
    </>
  );
}

type LogoItem =
  | { name: string; type: "svg"; content: React.ReactNode }
  | { name: string; type: "image"; src: string };

function LogoCarouselContent() {
  const logos: LogoItem[] = [
    {
      name: "Client 1",
      type: "image",
      src: "/clients/logo1.png",
    },
    {
      name: "Subham",
      type: "image",
      src: "/clients/subham-logo.png",
    },
    {
      name: "Client 2",
      type: "image",
      src: "/clients/logo2.png",
    },
    {
      name: "BCM Group",
      type: "image",
      src: "/clients/logo-bcm-group.webp",
    },
    {
      name: "Client Dark",
      type: "image",
      src: "/clients/logo-dark.png",
    },
    {
      name: "GPL",
      type: "image",
      src: "/clients/GPL_Logo.jpg",
    },
  ];

  // Duplicate the logos array for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="logo-carousel-section w-full bg-white overflow-hidden py-6 md:py-8">
      <div className="relative flex items-center">
        {/* Scrolling container */}
        <div className="flex logo-scroll-container">
          {duplicatedLogos.map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className="flex items-center justify-center flex-shrink-0"
              style={{
                width: "188.636px",
                height: "82.764px",
                borderRight: "0.943px solid rgba(0, 0, 0, 0.1)",
              }}
            >
              {logo.type === "svg" ? (
                <div className="flex items-center justify-center w-full h-full px-2">
                  {logo.content}
                </div>
              ) : (
                <div className="flex items-center justify-center w-full h-full px-2">
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="max-w-full max-h-full object-contain"
                    style={{ width: "189px", height: "75px" }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
