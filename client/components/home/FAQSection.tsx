import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQSection() {
  const faqs = [
    {
      question:
        "What makes Asra real estate different in the real estate industry?",
      answer:
        "Asra real estate brings innovative thinking and cutting-edge technology to real estate services. We combine professional expertise with personalized service, ensuring every client receives tailored solutions for their unique property needs.",
    },
    {
      question: "What types of properties does Asra real estate specialize in?",
      answer:
        "We specialize in residential, commercial, industrial, and agricultural properties. Whether you're looking to buy, sell, rent, or invest, our diverse portfolio and expert team can guide you through every type of real estate transaction.",
    },
    {
      question:
        "How does Asra real estate ensure transparency in property transactions?",
      answer:
        "Transparency is at the core of our operations. We provide detailed property reports, clear documentation, legal verification, and regular communication throughout the transaction process to ensure our clients make informed decisions.",
    },
    {
      question:
        "What support does Asra real estate provide for first-time property buyers?",
      answer:
        "For first-time buyers, we offer comprehensive guidance including market analysis, financing assistance, legal documentation support, and property inspection services. Our team walks you through each step of the buying process.",
    },
    {
      question:
        "Does Asra real estate offer investment consultation for real estate?",
      answer:
        "Yes, Asra real estate provides professional investment consulting to help clients identify promising property investments with strong appreciation potential. We analyze market trends and provide data-driven recommendations for your real estate portfolio.",
    },
  ];

  return (
    <section className="w-full bg-white px-4 md:px-8 py-16 md:py-24 lg:py-32">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
        {/* Left Content */}
        <div>
          <h2 className="font-instrument text-5xl md:text-6xl leading-[60px] md:leading-[72px] text-black mb-6 font-normal tracking-tight">
            Frequently asked questions
          </h2>
          <p className="text-[#4B5563] text-base md:text-lg leading-relaxed">
            To help you make informed decisions, we've compiled answers to some
            of the most commonly asked questions.
          </p>
        </div>

        {/* Right FAQ Accordion */}
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
      </div>
    </section>
  );
}
