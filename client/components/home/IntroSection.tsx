export default function IntroSection() {
  return (
    <section className="intro-section w-full bg-white py-16 md:py-24 lg:py-32 px-4 md:px-8">
      <style>{`
        @media (max-width: 640px) {
          .intro-section {
            padding-top: 69px !important;
          }
          .intro-heading {
            font-size: 23px !important;
            width: 358px !important;
          }
          .intro-paragraph {
            padding-left: 15px !important;
            margin: 0 auto !important;
          }
        }
      `}</style>
      <div className="max-w-3xl mx-auto flex flex-col text-center">
        <h2
          className="intro-heading text-[25px] sm:text-2xl md:text-4xl lg:text-5xl xl:text-[54px] text-black font-instrument font-normal leading-tight tracking-[-0.5px] sm:tracking-[-1.6px] mb-4 sm:mb-6 mx-auto"
          style={{
            width: "395px",
            margin: "0 auto -3px",
          }}
        >
          Experience innovative spaces where real estate meets your vision and
          turns it into reality.
        </h2>
        <p
          className="text-[15px] sm:text-base md:text-lg text-[#5D5D5D] font-normal tracking-[0.2px] sm:tracking-[0.36px] leading-[23px] sm:leading-relaxed mt-2 sm:mt-0"
          style={{
            marginTop: "8px",
          }}
        >
          We craft inspiring spaces that blend cutting-edge design with enduring
          functionality, turning your vision into reality.
        </p>
      </div>
    </section>
  );
}
