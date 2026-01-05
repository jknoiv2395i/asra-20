import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQSection() {
  const faqs = [
    {
      question: "Who are the best property consultants in Nagpur?",
      answer:
        "MPHD Group is recognized as one of the leading property consultants in Nagpur, offering comprehensive real estate services including residential, commercial, and industrial property solutions.",
    },
    {
      question:
        "What services does MPHD Group offer as a real estate agency in Nagpur?",
      answer:
        "MPHD Group offers a wide range of services including property buying and selling, rental services, legal support, property valuation, and investment consulting.",
    },
    {
      question:
        "How can I rent a flat or commercial space through MPHD Group's rental services in Nagpur?",
      answer:
        "You can contact MPHD Group directly through their office or website to explore available rental properties. Their team will assist you in finding the perfect flat or commercial space based on your requirements.",
    },
    {
      question: "Does MPHD Group provide legal help for property in India?",
      answer:
        "Yes, MPHD Group provides comprehensive legal support for property transactions, ensuring all documentation and compliance requirements are properly handled.",
    },
    {
      question:
        "Can MPHD Group help with land acquisition for infrastructure or industrial projects?",
      answer:
        "Yes, MPHD Group specializes in land acquisition services for infrastructure and industrial projects, working with experienced professionals to facilitate smooth transactions.",
    },
  ];

  return (
    <section className="w-full bg-white py-16 px-6 md:px-20 lg:px-80">
      <div className="max-w-[1216px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left Content */}
        <div>
          <h2 className="font-instrument text-[48px] md:text-[60px] leading-[48px] md:leading-[60px] text-black mb-6 tracking-tight">
            Frequently asked questions
          </h2>
          <p className="text-[#4B5563] text-[17px] leading-7">
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
                <AccordionTrigger className="text-left font-instrument text-[22px] md:text-[27px] font-medium leading-8 text-[#1F2937] hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[#4B5563] text-base leading-7 pt-4">
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
