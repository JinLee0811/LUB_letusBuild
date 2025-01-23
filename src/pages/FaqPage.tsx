import React, { useState } from "react";
import { Link } from "react-router-dom";

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "How does your service stand out from the competition?",
    answer:
      "We specialize in creating customized websites tailored to your specific needs, delivering high-quality results efficiently and affordably.",
  },
  {
    question: "What is the average turnaround time for a project?",
    answer:
      "Most projects are completed within 2-4 weeks, depending on the complexity and requirements.",
  },
  {
    question: "Can I get a discount if I bundle multiple services?",
    answer: "Yes, we offer discounts for bundled services. Contact us for a personalized quote.",
  },
  {
    question: "Do you provide ongoing maintenance for websites?",
    answer:
      "Absolutely! We offer maintenance packages to keep your website updated and running smoothly.",
  },
  {
    question: "What is your refund policy?",
    answer:
      "We strive for customer satisfaction. Refunds are handled on a case-by-case basis for unmet expectations.",
  },
];

const FAQSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto w-full max-w-7xl px-6 py-16 md:px-10 md:py-20">
        {/* Header */}
        <div className="mx-auto flex max-w-xl flex-col items-center justify-center px-6 text-center lg:max-w-3xl lg:px-10">
          <h2 className="mx-auto text-center font-bold text-black dark:text-white text-3xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="font-inter mt-4 max-w-xl px-5 text-center text-base font-light text-gray-500 dark:text-gray-300 lg:max-w-lg">
            Have questions about our services? Here are some of the most common ones we get from our
            clients.
          </p>
        </div>
        {/* FAQs */}
        <div className="mt-10 flex flex-col justify-between lg:flex-row lg:flex-wrap">
          {faqs.map((faq, index) => (
            <div key={index} className="mx-4 flex max-w-3xl flex-col lg:shrink lg:grow lg:basis-96">
              {/* FAQ Block */}
              <div className="relative my-3 w-full rounded-md border border-gray-300 dark:border-gray-700 px-7 py-9 bg-white dark:bg-gray-800">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleFAQ(index)}>
                  <h2 className="font-bold text-black dark:text-white text-lg">{faq.question}</h2>
                  <button
                    className="text-xl font-bold text-black dark:text-white focus:outline-none"
                    aria-label={activeIndex === index ? "Collapse" : "Expand"}>
                    {activeIndex === index ? "-" : "+"}
                  </button>
                </div>
                {activeIndex === index && (
                  <p className="font-inter mt-4 text-base font-light text-gray-500 dark:text-gray-300">
                    {faq.answer}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
        <p className="font-inter mx-auto mt-12 text-center text-base text-gray-500 dark:text-gray-300">
          Can’t find the answer you’re looking for? Reach out to our{" "}
          <Link to="/contact" className="text-black dark:text-white font-bold">
            customer support team.
          </Link>
        </p>
      </div>
    </section>
  );
};

export default FAQSection;
