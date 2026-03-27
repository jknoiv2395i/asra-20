import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AnimatedSection } from "@/components/animations/AnimatedSection";

export default function FAQSection() {
  const faqs = [
    {
      question:
        "What areas does Asra Real Estate specialize in?",
      answer:
        "We specialize in real estate consulting across Indore's hottest growth corridors — Indore-Ujjain Road and Super Corridor. These areas are experiencing rapid development with excellent appreciation potential for residential, commercial, and industrial properties.",
    },
    {
      question: "What types of properties does Asra handle?",
      answer:
        "We cover a wide range: residential plots, modern apartments, commercial spaces, industrial land, and large land parcels for developers. Whether you're buying, selling, or renting, we provide end-to-end support.",
    },
    {
      question:
        "Do you offer free consultations?",
      answer:
        "Yes! We offer free consultations and market analysis for every client. Our team provides data-driven insights into Indore's real estate market to help you make informed investment decisions.",
    },
    {
      question:
        "Is Asra Real Estate based in Indore?",
      answer:
        "We are based in Bhopal with a sharp focus on Indore's real estate market. Our deep local knowledge of Indore-Ujjain Road and Super Corridor areas ensures you get access to the best deals and exclusive opportunities.",
    },
    {
      question:
        "What support do first-time buyers get from Asra?",
      answer:
        "First-time buyers get comprehensive guidance including site visits, market analysis, financing assistance, legal documentation support, and end-to-end paperwork handling. We support in both Hindi and English for a hassle-free experience.",
    },
  ];

  return (
    <section className="w-full bg-white px-4 md:px-8 py-8 md:py-10 lg:py-12">
      <div className="max-w-6xl lg:max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
        {/* Left Content */}
        <AnimatedSection>
        <div>
          <h2 className="font-instrument text-5xl md:text-6xl leading-[60px] md:leading-[72px] text-black mb-6 font-normal tracking-tight">
            Frequently asked questions
          </h2>
          <p className="text-[#4B5563] text-base md:text-lg leading-relaxed">
            To help you make informed decisions, we've compiled answers to some
            of the most commonly asked questions.
          </p>
        </div>
        </AnimatedSection>

        {/* Right FAQ Accordion */}
        <AnimatedSection delay={0.15}>
        <div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-t-2 border-b border-[#C3D5F1] py-4"
              >
                <AccordionTrigger className="text-left font-instrument text-xl md:text-2xl lg:text-[27px] font-normal leading-8 text-[#1F2937] hover:no-underline tracking-[-0.018em]">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[#4B5563] text-base md:text-lg leading-relaxed pt-4 pr-4 md:pr-8">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
