import Layout from "@/components/Layout";
import { motion } from "motion/react";
import {
  AnimatedSection,
  StaggerContainer,
  AnimatedItem,
} from "@/components/animations/AnimatedSection";
import { useContent } from "@/hooks/useContent";

export default function ContactUs() {
  const { content } = useContent();
  return (
    <Layout>
      <style>{`
        .contact-hero-bg {
          background: url('/contact-hero-bg.png') center center / cover no-repeat;
          position: relative;
        }
        .contact-gold-text {
          background: linear-gradient(135deg, #0E0840, #2a1a6e);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .contact-accent-line {
          background: linear-gradient(90deg, #c9a96e, #e8d5a3, #c9a96e);
        }
        .contact-card {
          background: #ffffff;
          border: 1px solid #e5e7eb;
          box-shadow: 0 1px 3px rgba(0,0,0,0.06);
          transition: all 0.3s ease;
        }
        .contact-card:hover {
          border-color: rgba(201,169,110,0.4);
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.08);
        }
        .contact-input {
          background: #f9fafb;
          border: 1px solid #e5e7eb;
          color: #1a1a1a;
          transition: all 0.3s ease;
        }
        .contact-input:focus {
          border-color: #c9a96e;
          background: #ffffff;
          outline: none;
          box-shadow: 0 0 0 3px rgba(201,169,110,0.12);
        }
        .contact-input::placeholder {
          color: #9ca3af;
        }
        .contact-submit-btn {
          background: linear-gradient(135deg, #0E0840, #1a1060);
          color: white;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .contact-submit-btn:hover {
          background: linear-gradient(135deg, #1a1060, #2a1a6e);
          transform: translateY(-2px);
          box-shadow: 0 12px 40px rgba(14,8,64,0.25);
        }
        @keyframes contact-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .contact-float { animation: contact-float 6s ease-in-out infinite; }
        .contact-float-delay { animation: contact-float 6s ease-in-out 2s infinite; }
      `}</style>

      {/* Hero Section */}
      <section className="contact-hero-bg relative w-full overflow-hidden pt-32 md:pt-40 pb-16 md:pb-20">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-[0.06] contact-float"
            style={{
              background: "radial-gradient(circle, rgba(14,8,64,0.4) 0%, rgba(201,169,110,0.2) 40%, transparent 70%)",
            }}
          />
          <div
            className="absolute -bottom-48 -left-24 w-80 h-80 rounded-full opacity-[0.05] contact-float-delay"
            style={{
              background: "radial-gradient(circle, rgba(201,169,110,0.4) 0%, rgba(14,8,64,0.15) 40%, transparent 70%)",
            }}
          />
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="relative z-10 max-w-6xl lg:max-w-7xl mx-auto px-6 md:px-8 lg:px-12 xl:px-16">
          {/* Header */}
          <AnimatedSection>
          <div className="text-center mb-12 md:mb-16">
            <div className="contact-accent-line h-[2px] w-16 rounded-full mx-auto mb-6" />
            <p
              className="text-sm md:text-base tracking-[0.25em] uppercase font-medium mb-4"
              style={{ color: "#c9a96e" }}
            >
              Get In Touch
            </p>
            <h1 className="font-instrument text-4xl md:text-6xl lg:text-[64px] font-normal leading-tight tracking-[-0.02em] text-[#0E0840] mb-4">
              Contact <span className="contact-gold-text font-semibold">Us</span>
            </h1>
            <p className="text-[#4b5563] text-base md:text-lg leading-relaxed max-w-lg mx-auto">
              Have a question or ready to start your real estate journey? We'd love to hear from you.
            </p>
          </div>
          </AnimatedSection>

          {/* Main Grid: Form + Contact Info */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-12">
            {/* Contact Form - Takes 3 cols */}
            <AnimatedSection className="lg:col-span-3">
              <div className="contact-card rounded-2xl p-6 md:p-8">
                <h2 className="font-instrument text-[#0E0840] text-xl md:text-2xl font-medium mb-6">
                  Send us a message
                </h2>
                <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[#6b7280] text-xs uppercase tracking-wider mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        className="contact-input w-full px-4 py-3 rounded-xl text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-[#6b7280] text-xs uppercase tracking-wider mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="john@example.com"
                        className="contact-input w-full px-4 py-3 rounded-xl text-sm"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[#6b7280] text-xs uppercase tracking-wider mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        className="contact-input w-full px-4 py-3 rounded-xl text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-[#6b7280] text-xs uppercase tracking-wider mb-2">
                        Subject
                      </label>
                      <select className="contact-input w-full px-4 py-3 rounded-xl text-sm appearance-none cursor-pointer">
                        <option value="">Select a topic</option>
                        <option value="buy">Buy Property</option>
                        <option value="sell">Sell Property</option>
                        <option value="rent">Rent Property</option>
                        <option value="consultation">Free Consultation</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-[#6b7280] text-xs uppercase tracking-wider mb-2">
                      Message
                    </label>
                    <textarea
                      rows={5}
                      placeholder="Tell us about your property goals..."
                      className="contact-input w-full px-4 py-3 rounded-xl text-sm resize-none"
                    />
                  </div>
                  <motion.button
                    type="submit"
                    className="contact-submit-btn w-full md:w-auto md:self-start px-8 py-3.5 rounded-full font-semibold text-base inline-flex items-center justify-center gap-3"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <span>Send Message</span>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="22" y1="2" x2="11" y2="13" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                  </motion.button>
                </form>
              </div>
            </AnimatedSection>

            {/* Contact Info Cards - Takes 2 cols */}
            <StaggerContainer className="lg:col-span-2 flex flex-col gap-5" staggerDelay={0.12}>
              {/* Office Address */}
              <AnimatedItem>
              <div className="contact-card rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div
                    className="flex items-center justify-center w-11 h-11 rounded-xl flex-shrink-0"
                    style={{ background: "rgba(14,8,64,0.06)" }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0E0840" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-[#0E0840] font-medium text-sm mb-1.5">Office Address</h3>
                    <p className="text-[#6b7280] text-sm leading-relaxed">
                      {content?.contact.address || "Super Corridor, Palakhedi, Indore, Madhya Pradesh 453112, India"}
                    </p>
                  </div>
                </div>
              </div>
              </AnimatedItem>

              {/* Phone Numbers */}
              <AnimatedItem>
              <div className="contact-card rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div
                    className="flex items-center justify-center w-11 h-11 rounded-xl flex-shrink-0"
                    style={{ background: "rgba(14,8,64,0.06)" }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0E0840" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-[#0E0840] font-medium text-sm mb-1.5">Phone Numbers</h3>
                    <p className="text-[#6b7280] text-sm leading-relaxed">
                      Primary: {content?.contact.phone || "+91 78983 84899"}
                    </p>
                  </div>
                </div>
              </div>
              </AnimatedItem>

              {/* Email */}
              <AnimatedItem>
              <div className="contact-card rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div
                    className="flex items-center justify-center w-11 h-11 rounded-xl flex-shrink-0"
                    style={{ background: "rgba(14,8,64,0.06)" }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0E0840" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-[#0E0840] font-medium text-sm mb-1.5">Email</h3>
                    <p className="text-[#6b7280] text-sm leading-relaxed">
                      {content?.contact.email || "info@asrarealestate.com"}
                    </p>
                  </div>
                </div>
              </div>
              </AnimatedItem>

              {/* Business Hours */}
              <AnimatedItem>
              <div className="contact-card rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div
                    className="flex items-center justify-center w-11 h-11 rounded-xl flex-shrink-0"
                    style={{ background: "rgba(14,8,64,0.06)" }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0E0840" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-[#0E0840] font-medium text-sm mb-1.5">Business Hours</h3>
                    <p className="text-[#6b7280] text-sm leading-relaxed">
                      Mon – Sat: 10:00 AM – 7:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
              </AnimatedItem>
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full bg-[#f9fafb]">
        <AnimatedSection>
        <div className="max-w-6xl lg:max-w-7xl mx-auto px-6 md:px-8 lg:px-12 xl:px-16 py-10 md:py-12">
          <h2 className="font-instrument text-[#0E0840] text-xl md:text-2xl font-medium mb-6 text-center">
            Find Us on the Map
          </h2>
          <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm" style={{ height: "400px" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14720.5!2d75.8200!3d22.7650!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd0c2e8b3b5d%3A0x2b2b3e5c8e8f8f8f!2sSuper%20Corridor%2C%20Palakhedi%2C%20Indore%2C%20Madhya%20Pradesh%20453112!5e0!3m2!1sen!2sin!4v1711234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Asra Real Estate - Indore Office"
            />
          </div>
        </div>
        </AnimatedSection>
      </section>
    </Layout>
  );
}
