//home page testimonial section

import { useState } from "react";
import { testimonials } from "./testmonialData";

export default function Testimonial() {
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll((prevState) => !prevState);
  };

  return (
    <section className="block bg-white dark:bg-gray-900">
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        {/* Heading */}
        <h2 className="mx-auto mb-8 max-w-3xl text-center text-3xl font-bold text-gray-900 dark:text-gray-200 md:mb-12 md:text-5xl lg:mb-16">
          What our clients are saying
        </h2>
        {/* Contents */}
        <div className="mb-5 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:mb-8">
          {(showAll ? testimonials : testimonials.slice(0, 3)).map((testimonial, index) => (
            <div
              key={index}
              className="grid grid-cols-1 gap-6 rounded-md border border-solid border-gray-300 bg-white dark:bg-gray-800 dark:border-gray-600 p-8 md:p-10">
              <div className="flex">
                {[...Array(testimonial.stars)].map((_, starIndex) => (
                  <img
                    key={starIndex}
                    src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a947e84e6cf91_Vector.svg"
                    alt="star"
                    className="mr-1 inline-block w-3.5 flex-none"
                  />
                ))}
              </div>
              <div className="text-gray-500 dark:text-gray-400">“{testimonial.feedback}”</div>
              <div className="flex flex-row items-start">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="mr-4 inline-block h-16 w-16 object-cover rounded-full"
                />
                <div className="flex flex-col items-start">
                  <h6 className="text-base font-bold text-gray-900 dark:text-gray-200">
                    {testimonial.name}
                  </h6>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Toggle Button */}
        <div className="flex flex-col">
          <button
            onClick={toggleShowAll}
            className="mx-auto font-bold text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg px-3">
            {showAll ? "Show less reviews..." : "Check all reviews..."}
          </button>
        </div>
      </div>
    </section>
  );
}
