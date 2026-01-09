export default function LogoCarousel() {
  return (
    <>
      <style>{`
        @media (max-width: 640px) {
          .logo-carousel-section {
            color: #0e0840;
            background-color: #0e0840;
          }
        }
      `}</style>
      <LogoCarouselContent />
    </>
  );
}

function LogoCarouselContent() {
  return (
    <section className="logo-carousel-section w-full h-auto bg-white flex items-center justify-center py-8 md:py-16 overflow-hidden">
      <div className="w-full flex items-center justify-center overflow-hidden px-4" />
    </section>
  );
}
