export default function TestimonialsSection() {
  const testimonials = [
    {
      text: "Choosing MPHD Group Real Estates was the best decision I made for my property needs in Nagpur. Their comprehensive services, including real estate consulting and legal support, simplified the complex process. I commend their professionalism and would recommend them without hesitation.",
      name: "Ashish Francis",
      role: "Business Owner",
      avatar:
        "https://api.builder.io/api/v1/image/assets/TEMP/e712ba1143c3cc4c9975370b692ef552547a4710?width=80",
    },
    {
      text: "The fully furnished 3 BHK in Kamal Chowk is perfect for my family. Amol made the transition easy and stress-free. Thanks Amol sir",
      name: "Devendra Pandharkar",
      role: "Software Engineer",
      avatar:
        "https://api.builder.io/api/v1/image/assets/TEMP/9a4f23260f560598daa941dfe6d07724045e970b?width=80",
    },
    {
      text: "Working with MPHD Group has been a wonderful experience. Their attention to detail and customer service is exceptional.",
      name: "Shailesh Shende",
      role: "Real Estate Consultant",
      avatar:
        "https://api.builder.io/api/v1/image/assets/TEMP/14adce6b0a461ffa324a134f2741062c7cb6b979?width=80",
    },
    {
      text: "Excellent work with proper co-ordination, helpful regards the communication must view. Best services & very good co operative nature.",
      name: "golu chute",
      role: "Marketing Manager",
      avatar:
        "https://api.builder.io/api/v1/image/assets/TEMP/5ad1368ab179fbbf05be0d8e1d4555d07145fed4?width=80",
    },
    {
      text: "and everyone is helpful. Staff is so cooperative...nice experience",
      name: "Aai Graphics",
      role: "HR Director",
      avatar:
        "https://api.builder.io/api/v1/image/assets/TEMP/f3bca221cc2ab7d404f4aff1fd737c23a38703de?width=80",
    },
    {
      text: "Ankit invested significant time and effort into our deal, which is highly appreciable. I'm personally very thankful for his valuable contributions. Perhaps we could recognize his efforts appropriately.",
      name: "Sidharth Mendhe",
      role: "Property Investor",
      avatar:
        "https://api.builder.io/api/v1/image/assets/TEMP/e9080d0280b9edf73b62c27bea675993edc516af?width=80",
    },
  ];

  return (
    <section className="w-full bg-white py-20 px-6">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-normal text-[33px] text-[#020817] mb-2 tracking-tight">
            WHAT OUR CLIENT SAY
          </h2>
          <div className="flex justify-center mb-4">
            <svg
              width="340"
              height="20"
              viewBox="0 0 341 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.0389 10C70.0392 3.33332 120.04 3.33332 170.04 10C220.04 16.6667 270.04 16.6667 320.041 10"
                stroke="#020817"
                strokeWidth="2"
                strokeDasharray="1 1"
              />
            </svg>
          </div>
          <p className="text-[#020817] text-[15px] opacity-75">
            See what our customers have to say about us.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white border border-[#E2E8F0] rounded-3xl p-10 shadow-sm hover:shadow-md transition-shadow"
            >
              <p className="text-[#020817] text-base leading-6 mb-8">
                {testimonial.text}
              </p>
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="text-[#020817] text-[15px] font-medium leading-5">
                    {testimonial.name}
                  </p>
                  <p className="text-[#020817] text-[15px] leading-5">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
