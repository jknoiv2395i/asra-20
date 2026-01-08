"use client";
import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import { motion } from "motion/react";

const testimonials = [
  {
    text: "Choosing MPHD Group Real Estates was the best decision I made for my property needs in Nagpur. Their comprehensive services, including real estate consulting and legal support, simplified the complex process. I commend their professionalism and would recommend them without hesitation.",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/e712ba1143c3cc4c9975370b692ef552547a4710?width=80",
    name: "Ashish Francis",
    role: "Business Owner",
  },
  {
    text: "The fully furnished 3 BHK in Kamal Chowk is perfect for my family. Amol made the transition easy and stress-free. Thanks Amol sir",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/9a4f23260f560598daa941dfe6d07724045e970b?width=80",
    name: "Devendra Pandharkar",
    role: "Software Engineer",
  },
  {
    text: "Working with MPHD Group has been a wonderful experience. Their attention to detail and customer service is exceptional.",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/14adce6b0a461ffa324a134f2741062c7cb6b979?width=80",
    name: "Shailesh Shende",
    role: "Real Estate Consultant",
  },
  {
    text: "Excellent work with proper co-ordination, helpful regards the communication must view. Best services & very good co operative nature.",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/5ad1368ab179fbbf05be0d8e1d4555d07145fed4?width=80",
    name: "golu chute",
    role: "Marketing Manager",
  },
  {
    text: "and everyone is helpful. Staff is so cooperative...nice experience",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/f3bca221cc2ab7d404f4aff1fd737c23a38703de?width=80",
    name: "Aai Graphics",
    role: "HR Director",
  },
  {
    text: "Ankit invested significant time and effort into our deal, which is highly appreciable. I'm personally very thankful for his valuable contributions. Perhaps we could recognize his efforts appropriately.",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/e9080d0280b9edf73b62c27bea675993edc516af?width=80",
    name: "Sidharth Mendhe",
    role: "Property Investor",
  },
];

const firstColumn = testimonials.slice(0, 2);
const secondColumn = testimonials.slice(2, 4);
const thirdColumn = testimonials.slice(4, 6);

export default function TestimonialsSection() {
  return (
    <section className="bg-white relative py-20 px-6">
      <div className="container z-10 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.1,
            ease: [0.16, 1, 0.3, 1],
          }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto mb-16"
        >
          <h2
            className="tracking-tighter mt-5 text-center text-[#020817]"
            style={{
              font: '48px/48px "Istok Web", sans-serif',
            }}
          >
            What our users say
          </h2>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={19}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={17}
          />
        </div>
      </div>
    </section>
  );
}
