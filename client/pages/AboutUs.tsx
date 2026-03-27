import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { motion } from "motion/react";
import {
  AnimatedSection,
  StaggerContainer,
  AnimatedItem,
} from "@/components/animations/AnimatedSection";

const stats = [
  { number: "100+", label: "Successful Transactions" },
  { number: "50+", label: "Developer & Bank Networks" },
  { number: "5+", label: "Prime Locations Served" },
  { number: "100%", label: "Verified, Hassle-Free Deals" },
];

const values = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    title: "Verified Listings & Best Prices",
    description: "Every property is verified before listing. Access genuine deals with the best market prices across Super Corridor, MR-5, Chhota Bangarda, Bypass & Ring Road.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <line x1="9" x2="9.01" y1="9" y2="9" />
        <line x1="15" x2="15.01" y1="9" y2="9" />
      </svg>
    ),
    title: "Prime Locations, Rapid Appreciation",
    description: "Super Corridor (IT epicenter), Indore-Ujjain Road (MR-5), Chhota Bangarda, Indore Bypass & Ring Road — high rental yields and strong appreciation.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
    title: "Full Services: Buy, Sell, Rent, Invest",
    description: "Residential plots & apartments, commercial shops & offices, industrial land, large parcels & townships — with site visits, legal support, and free consultations.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 3h12l4 6-10 13L2 9Z" />
        <path d="M11 3 8 9l4 13 4-13-3-6" />
        <path d="M2 9h20" />
      </svg>
    ),
    title: "Personalized Guidance in Hindi & English",
    description: "100+ successful transactions. Strong networks with developers, banks, and IT hubs (TCS, Infosys). Bilingual support for confident decisions.",
  },
];


const milestones = [
  { year: "Founded", event: "ASRA Real Estate Consulting Services launched with deep roots in Bhopal and a sharp focus on Indore's booming real estate market." },
  { year: "5 Locations", event: "Expanded to serve Super Corridor, Indore-Ujjain Road (MR-5), Chhota Bangarda, Indore Bypass, and Ring Road — Indore's hottest corridors." },
  { year: "100+", event: "Crossed 100+ successful transactions spanning residential plots, apartments, commercial spaces, industrial land, and townships." },
  { year: "50+ Partners", event: "Built strong networks with 50+ developers, banks, and IT hubs (TCS, Infosys) for seamless client service and maximum ROI." },
  { year: "Today", event: "Indore's go-to experts for high-growth real estate — free consultations, verified deals, bilingual support, and end-to-end legal guidance." },
];

export default function AboutUs() {
  return (
    <Layout>
      <style>{`
        .about-accent-line {
          background: linear-gradient(90deg, #c9a96e, #e8d5a3, #c9a96e);
        }
        .about-gold-text {
          background: linear-gradient(135deg, #0E0840, #2a1a6e);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .about-card {
          background: #ffffff;
          border: 1px solid #e5e7eb;
          box-shadow: 0 1px 3px rgba(0,0,0,0.06);
          transition: all 0.3s ease;
        }
        .about-card:hover {
          border-color: rgba(201,169,110,0.4);
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.08);
        }
        @keyframes about-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .about-float { animation: about-float 6s ease-in-out infinite; }
        .about-float-delay { animation: about-float 6s ease-in-out 2s infinite; }
      `}</style>

      {/* Hero Section */}
      <section className="relative w-full overflow-hidden pt-32 md:pt-40 pb-16 md:pb-24">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://lh3.googleusercontent.com/aida/ADBb0uiqyLIgL7o64R3N3BVboqfLQL-V7KCKIwrpmdNvNi4k0QXnpexqgPyrfpDHESCvwVeSlML6VrwW4nb0x9XGCGjrAvypytsOZdET5lOOxoyzkbs8XkQP1VZeBH6zvmF6neys5FgpXwTZUhvTyOmCkHGncnJbjDzJSY9MwRs-36oxqOJ86W6u04DKbpCCbmX2BTaz7_7V0o4kqJ9V2_ABLe8-_z_RS3Zqdsn5em92fBfPn26lBEvtuy2sx-c"
            alt=""
            className="w-full h-full object-cover"
          />
          {/* Gradient overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/85 via-white/80 to-white" />
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-[0.06] about-float"
            style={{
              background: "radial-gradient(circle, rgba(14,8,64,0.4) 0%, rgba(201,169,110,0.2) 40%, transparent 70%)",
            }}
          />
          <div
            className="absolute -bottom-48 -left-24 w-80 h-80 rounded-full opacity-[0.05] about-float-delay"
            style={{
              background: "radial-gradient(circle, rgba(201,169,110,0.4) 0%, rgba(14,8,64,0.15) 40%, transparent 70%)",
            }}
          />
        </div>

        <div className="relative z-10 max-w-6xl lg:max-w-7xl mx-auto px-6 md:px-8 lg:px-12 xl:px-16">
          <AnimatedSection>
            <div className="text-center mb-12">
              <div className="about-accent-line h-[2px] w-16 rounded-full mx-auto mb-6" />
              <p
                className="text-sm md:text-base tracking-[0.25em] uppercase font-medium mb-4"
                style={{ color: "#c9a96e" }}
              >
                Who We Are
              </p>
              <h1 className="font-instrument text-4xl md:text-6xl lg:text-[64px] font-normal leading-tight tracking-[-0.02em] text-[#0E0840] mb-4">
                About <span className="about-gold-text font-semibold">ASRA</span>
              </h1>
              <p className="text-[#4b5563] text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                Indore's go-to experts for high-growth real estate. From residential plots to commercial spaces and industrial land — we deliver verified deals, free consultations, and maximum ROI.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="w-full bg-white px-6 md:px-8 lg:px-12 py-16 md:py-24">
        <div className="max-w-6xl lg:max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <AnimatedSection>
              <div>
                <p
                  className="text-sm tracking-[0.25em] uppercase font-medium mb-4"
                  style={{ color: "#c9a96e" }}
                >
                  Our Story
                </p>
                <h2 className="font-instrument text-3xl md:text-4xl lg:text-5xl font-normal text-[#0E0840] leading-tight mb-6">
                  Building <span className="about-gold-text font-semibold">dreams</span>,{" "}
                  one property at a time
                </h2>
                <div className="space-y-4 text-[#4b5563] text-base leading-relaxed">
                  <p>
                    Since our founding, Asra has built dreams through ethical, hassle-free service. Based in Indore with deep roots in Bhopal, we are led by seasoned consultants who prioritize transparency and client success in Indore's dynamic real estate market.
                  </p>
                  <p>
                    We specialize in buying, selling, renting, and investing across hotspots like Super Corridor, Indore-Ujjain Road (MR-5), Chhota Bangarda, Indore Bypass, and Ring Road. From residential plots and apartments to commercial spaces, industrial land, and large parcels for developers — we deliver verified deals, free consultations, and maximum ROI.
                  </p>
                  <p>
                    Indore is India's fastest-growing city with IT hubs (TCS, Infosys), metro connectivity, excellent highway access, and booming infrastructure — making it the perfect destination for smart real estate investment.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl shadow-black/10">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/93f9f38075eab9840ba7cf8f13a676f64d35dfcf?width=976"
                    alt="Asra Real Estate Consulting Services team"
                    className="w-full h-[400px] md:h-[480px] object-cover"
                  />
                </div>
                {/* Floating accent card */}
                <motion.div
                  className="absolute -bottom-6 -left-4 md:-left-6 bg-[#0E0840] text-white rounded-2xl p-5 md:p-6 shadow-xl"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <p className="font-instrument text-3xl md:text-4xl font-semibold">100+</p>
                  <p className="text-white/70 text-sm mt-1">Successful<br />Transactions</p>
                </motion.div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="w-full bg-white py-12 md:py-16 border-y border-gray-100">
        <div className="max-w-6xl lg:max-w-7xl mx-auto px-6 md:px-8 lg:px-12 xl:px-16">
          <AnimatedSection>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-instrument text-3xl md:text-4xl font-semibold text-[#0E0840] mb-1">
                    {stat.number}
                  </p>
                  <p className="text-[#6b7280] text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="w-full bg-[#0E0840] px-6 md:px-8 lg:px-12 py-16 md:py-24 relative overflow-hidden">
        {/* Background pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
        {/* Gradient orbs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-[0.07]"
          style={{ background: "radial-gradient(circle, #c9a96e, transparent 70%)" }}
        />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-[0.05]"
          style={{ background: "radial-gradient(circle, #6366f1, transparent 70%)" }}
        />

        <div className="max-w-6xl lg:max-w-7xl mx-auto relative z-10">
          <AnimatedSection>
            <div className="text-center mb-12 md:mb-16">
              <div className="h-[2px] w-16 rounded-full mx-auto mb-6" style={{ background: "linear-gradient(90deg, #c9a96e, #e8d5a3, #c9a96e)" }} />
              <p
                className="text-sm tracking-[0.25em] uppercase font-medium mb-4"
                style={{ color: "#c9a96e" }}
              >
                What Drives Us
              </p>
              <h2 className="font-instrument text-3xl md:text-4xl lg:text-5xl font-normal text-white leading-tight mb-4">
                Our Core <span className="font-semibold" style={{ color: "#c9a96e" }}>Values</span>
              </h2>
              <p className="text-white/50 text-base md:text-lg leading-relaxed max-w-lg mx-auto">
                The principles that guide everything we do — from the first handshake to the final signature.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {values.map((value, index) => {
              // Each card enters from a different direction
              const directions = [
                { x: -40, y: -30 },  // top-left
                { x: 40, y: -30 },   // top-right
                { x: -40, y: 30 },   // bottom-left
                { x: 40, y: 30 },    // bottom-right
              ];
              const dir = directions[index] || directions[0];

              return (
                <motion.div
                  key={value.title}
                  className="relative rounded-2xl p-6 md:p-8 h-full overflow-hidden group cursor-default"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    backdropFilter: "blur(12px)",
                  }}
                  initial={{ opacity: 0, x: dir.x, y: dir.y, scale: 0.92 }}
                  whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.12, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-60px" }}
                  whileHover={{
                    y: -6,
                    borderColor: "rgba(201,169,110,0.35)",
                    background: "rgba(255,255,255,0.08)",
                  }}
                >
                  {/* Animated shimmer line across top */}
                  <motion.div
                    className="absolute top-0 left-0 h-[2px] rounded-full"
                    style={{ background: "linear-gradient(90deg, transparent, #c9a96e, transparent)" }}
                    initial={{ width: "0%", left: "0%" }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 0.8, delay: index * 0.12 + 0.4, ease: "easeOut" }}
                    viewport={{ once: true }}
                  />

                  {/* Corner glow on hover */}
                  <div
                    className="absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: "radial-gradient(circle, rgba(201,169,110,0.15), transparent 70%)" }}
                  />

                  <div className="flex items-start gap-5 relative z-10">
                    {/* Number + Icon with hover rotation */}
                    <div className="flex-shrink-0">
                      <div className="relative">
                        <motion.div
                          className="flex items-center justify-center w-14 h-14 rounded-2xl text-white"
                          style={{
                            background: "linear-gradient(135deg, rgba(201,169,110,0.2), rgba(14,8,64,0.6))",
                            border: "1px solid rgba(201,169,110,0.2)",
                          }}
                          whileHover={{ rotate: 8, scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 300, damping: 15 }}
                        >
                          {value.icon}
                        </motion.div>
                        {/* Pulsing number badge */}
                        <motion.span
                          className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold"
                          style={{ background: "#c9a96e", color: "#0E0840" }}
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{ duration: 0.3, delay: index * 0.12 + 0.3, type: "spring", stiffness: 400 }}
                          viewport={{ once: true }}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </motion.span>
                      </div>
                    </div>

                    {/* Text with staggered fade */}
                    <div>
                      <motion.h3
                        className="font-instrument text-white text-lg md:text-xl font-medium mb-2"
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.12 + 0.25 }}
                        viewport={{ once: true }}
                      >
                        {value.title}
                      </motion.h3>
                      <motion.p
                        className="text-white/50 text-sm md:text-base leading-relaxed group-hover:text-white/70 transition-colors duration-300"
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.12 + 0.35 }}
                        viewport={{ once: true }}
                      >
                        {value.description}
                      </motion.p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Journey / Timeline Section */}
      <section className="w-full bg-[#f9fafb] px-6 md:px-8 lg:px-12 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-12 md:mb-16">
              <div className="about-accent-line h-[2px] w-16 rounded-full mx-auto mb-6" />
              <p
                className="text-sm tracking-[0.25em] uppercase font-medium mb-4"
                style={{ color: "#c9a96e" }}
              >
                Our Journey
              </p>
              <h2 className="font-instrument text-3xl md:text-4xl lg:text-5xl font-normal text-[#0E0840] leading-tight mb-4">
                Key <span className="about-gold-text font-semibold">Milestones</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="relative">
            {/* Animated Timeline line */}
            <motion.div
              className="absolute left-[22px] md:left-1/2 top-0 w-[2px] md:-translate-x-[1px] origin-top"
              style={{ background: "linear-gradient(to bottom, #c9a96e, rgba(14,8,64,0.2), #c9a96e)" }}
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            />

            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                className={`relative flex items-start gap-6 md:gap-0 mb-12 last:mb-0 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
                viewport={{ once: true, margin: "-50px" }}
              >
                {/* Animated Dot with pulse */}
                <motion.div
                  className="absolute left-[14px] md:left-1/2 md:-translate-x-1/2 top-1 z-10"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.15 + 0.2, type: "spring", stiffness: 300 }}
                  viewport={{ once: true }}
                >
                  <div className="relative">
                    <div className="w-[18px] h-[18px] rounded-full bg-[#0E0840] border-[3px] border-white shadow-md" />
                    <motion.div
                      className="absolute inset-[-4px] rounded-full border-2 border-[#c9a96e]/40"
                      initial={{ scale: 1, opacity: 0.6 }}
                      animate={{ scale: [1, 1.6, 1], opacity: [0.6, 0, 0.6] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                    />
                  </div>
                </motion.div>

                {/* Content Card */}
                <div className={`ml-12 md:ml-0 md:w-[calc(50%-32px)] ${
                  index % 2 === 0 ? "md:pr-0 md:text-right" : "md:pl-0 md:text-left"
                }`}>
                  <motion.div
                    className="about-card rounded-xl p-5"
                    whileHover={{ y: -3, boxShadow: "0 8px 25px rgba(0,0,0,0.1)" }}
                    transition={{ duration: 0.25 }}
                  >
                    <span
                      className="inline-block text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full mb-3"
                      style={{ background: "rgba(201,169,110,0.12)", color: "#c9a96e" }}
                    >
                      {milestone.year}
                    </span>
                    <p className="text-[#4b5563] text-sm leading-relaxed">
                      {milestone.event}
                    </p>
                  </motion.div>
                </div>

                {/* Spacer for the other side */}
                <div className="hidden md:block md:w-[calc(50%-32px)]" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="w-full bg-gradient-to-b from-white to-[#f0f4ff] px-6 md:px-8 lg:px-12 py-16 md:py-20">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <p
              className="text-sm tracking-[0.25em] uppercase font-medium mb-4"
              style={{ color: "#c9a96e" }}
            >
              Ready to Get Started?
            </p>
            <h2 className="font-instrument text-3xl md:text-4xl lg:text-5xl font-normal text-[#0E0840] leading-tight mb-6">
              Let's find your <span className="about-gold-text font-semibold">perfect property</span> together
            </h2>
            <p className="text-[#6b7280] text-base md:text-lg leading-relaxed mb-8 max-w-xl mx-auto">
              Ready to secure your next deal? Call us at <strong>+91 78983 84899</strong> or visit us in Indore. Let's turn opportunities into reality!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <motion.button
                  className="inline-flex items-center gap-3 bg-[#0E0840] text-white px-8 py-4 rounded-full font-semibold text-base hover:bg-[#1a1060] transition-colors"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <span>Contact Us Today</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                  </svg>
                </motion.button>
              </Link>
              <Link to="/properties">
                <motion.button
                  className="inline-flex items-center gap-3 bg-white text-[#0E0840] px-8 py-4 rounded-full font-semibold text-base border border-gray-200 hover:border-[#0E0840]/30 transition-colors"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <span>Browse Properties</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0E0840" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                  </svg>
                </motion.button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
