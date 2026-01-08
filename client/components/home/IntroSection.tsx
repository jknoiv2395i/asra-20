export default function IntroSection() {
  return (
    <section className="w-full bg-white py-16 md:py-24 px-6">
      <div
        style={{
          maxWidth: "811px",
          display: "flex",
          flexDirection: "column",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            width: "836px",
            margin: "0 auto 32px",
            fontFamily: '"Instrument Sans", Inter, system-ui, sans-serif',
            fontSize: "54px",
            lineHeight: "54px",
            letterSpacing: "-1.35px",
          }}
          className="text-black tracking-tight"
        >
          Experience innovative spaces where real estate meets your vision and
          turns it into reality.
        </h2>
        <p
          style={{
            color: "rgb(93, 93, 93)",
            fontSize: "17px",
            fontWeight: "400",
            letterSpacing: "0.425px",
            lineHeight: "28px",
          }}
        >
          We craft inspiring spaces that blend cutting-edge design with enduring
          functionality, turning your vision into reality.
        </p>
      </div>
    </section>
  );
}
