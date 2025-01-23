import React from "react";

interface FAQ {
  question: string;
  answer?: string;
  link?: string;
  iconType: "plus" | "minus";
}

const faqs: FAQ[] = [
  {
    question: "How this theme is different from others in market?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna",
    iconType: "plus",
  },
  {
    question: "Is it possible to get a discount?",
    link: "#",
    iconType: "plus",
  },
  {
    question: "How do I use this?",
    link: "#",
    iconType: "plus",
  },
  {
    question: "What other themes do you have?",
    link: "#",
    iconType: "plus",
  },
  {
    question: "How can I contribute to Devjoy?",
    link: "#",
    iconType: "plus",
  },
  {
    question: "What is your policy on distribution of Devjoy assets?",
    link: "#",
    iconType: "plus",
  },
];

const FAQSection: React.FC = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        {/* Header */}
        <div className="mx-auto flex max-w-xl flex-col items-center justify-center px-6 text-center lg:max-w-3xl lg:px-10">
          <h2 className="mx-auto text-center font-bold text-black dark:text-white text-3xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="font-inter mt-4 max-w-xl px-5 text-center text-base font-light text-gray-500 dark:text-gray-300 lg:max-w-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet
            luctus venenatis, lectus magna fringilla urna
          </p>
        </div>
        {/* FAQs */}
        <div className="mt-10 flex flex-col justify-between lg:flex-row lg:flex-wrap">
          {faqs.map((faq, index) => (
            <div key={index} className="mx-4 flex max-w-3xl flex-col lg:shrink lg:grow lg:basis-96">
              {/* FAQ Block */}
              <div className="relative my-3 w-full rounded-md border border-gray-300 dark:border-gray-700 px-12 py-8 bg-white dark:bg-gray-800">
                <h2 className="font-bold text-black dark:text-white text-xl">{faq.question}</h2>
                {faq.answer && (
                  <p className="font-inter mt-4 text-base font-light text-gray-500 dark:text-gray-300">
                    {faq.answer}
                  </p>
                )}
                <a href={faq.link || "#"} className="absolute right-5 top-9">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <circle
                      cx="12"
                      cy="12"
                      r="12"
                      fill="white"
                      className="dark:fill-gray-800"></circle>
                    <path
                      d="M7.05078 12H16.9508"
                      stroke="black"
                      className="dark:stroke-white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"></path>
                    {faq.iconType === "minus" && (
                      <path
                        d="M12 7.05005V16.95"
                        stroke="black"
                        className="dark:stroke-white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"></path>
                    )}
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
        <p className="font-inter mx-auto mt-12 text-center text-base text-gray-500 dark:text-gray-300">
          Can’t find the answer you’re looking for? Reach out to our{" "}
          <a href="#" className="text-black dark:text-white font-bold">
            customer support team.
          </a>
        </p>
      </div>
    </section>
  );
};

export default FAQSection;
