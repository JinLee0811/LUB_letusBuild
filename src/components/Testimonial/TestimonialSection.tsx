// Testimonials.tsx
import React from "react";
import { testimonials } from "./testmonialData";

const Testimonials: React.FC = () => {
  return (
    <section className="relative bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-20">
        {/* Heading Text */}
        <h2 className="mx-auto mb-6 w-full max-w-3xl text-center text-3xl font-semibold text-gray-900 dark:text-white md:mb-12 md:text-5xl">
          What Our Clients Are Saying
        </h2>
        {/* Testimonial Wall */}
        <div className="mb-8 gap-5 py-4 [column-count:1] md:mb-12 md:[column-count:2] lg:mb-16 lg:[column-count:3]">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="mb-6 gap-6 overflow-hidden rounded-2xl border border-solid border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 p-8">
              <div className="mb-4 flex flex-row">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="mr-4 inline-block h-16 w-16 object-cover rounded-full"
                />
                <div className="flex flex-col">
                  <h6 className="text-base font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </h6>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                </div>
              </div>
              <p className="mb-4 text-sm text-gray-500 dark:text-gray-300">
                {testimonial.feedback}
              </p>
              <div className="flex">
                {Array.from({ length: testimonial.stars }).map((_, starIndex) => (
                  <img
                    key={starIndex}
                    src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63904f663019b0ce62f8d5ba_Vector.svg"
                    alt="star"
                    className="mr-1.5 inline-block w-4 flex-none"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
