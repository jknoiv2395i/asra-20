import { AnimatedSection } from "@/components/animations/AnimatedSection";

export function IntroHeading() {
  return (
    <>
      <style>{`
        @media (max-width: 640px) {
          .intro-heading-section {
            margin-top: -5px !important;
            background-color: #0e0840 !important;
          }
        }
      `}</style>
      <div
        className="intro-heading-section"
        style={{
          backgroundColor: "#0E0840",
          color: "rgb(0, 0, 0)",
          letterSpacing: "-0.5px",
          textAlign: "center",
          width: "100%",
          margin: "0 auto",
          padding: "27px 0 0",
          font: '400 23px/29px "Instrument Sans", Inter, system-ui, sans-serif',
        }}
      >
        <p>
          <br />
        </p>
      </div>
    </>
  );
}

export default function IntroSection() {
  return (
    <>
      <style>{`
        @media (max-width: 640px) {
          .intro-paragraph-div {
            text-align: center !important;
          }
        }
      `}</style>
      <AnimatedSection delay={0.1}>
        <div
          className="intro-paragraph-div"
          style={{
            color: "rgb(93, 93, 93)",
            fontSize: "15px",
            fontWeight: "400",
            letterSpacing: "0.2px",
            lineHeight: "23px",
            paddingLeft: "15px",
            textAlign: "center",
            margin: "0 auto",
          }}
        >
          We craft inspiring spaces that blend cutting-edge design with enduring
          functionality, turning your vision into reality.
        </div>
      </AnimatedSection>
    </>
  );
}
