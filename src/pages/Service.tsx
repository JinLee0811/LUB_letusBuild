// Service.tsx
import React from "react";
import Testimonials from "../components/Testimonial/TestimonialSection";

const serviceSteps = [
  {
    step: 1,
    title: "Schedule a Call",
    description:
      "Contact us via email or text to schedule a Zoom meeting. We’ll discuss your preferred website style and, if needed, arrange a consultation with a designer. Additionally, we’ll review required features, server and database needs, and finalize your requirements.",
  },
  {
    step: 2,
    title: "Finalizing Requirements",
    description:
      "Within the agreed timeline, we’ll provide a demo version of the website. We’ll gather your feedback and iterate as needed to deliver a polished product.",
  },
  {
    step: 3,
    title: "Get a Quote",
    description:
      "After delivery, we offer continuous management and updates. Any additional requests can be handled via email for seamless updates.",
  },
  {
    step: 4,
    title: "Feedback and Refinement",
    description:
      "We actively gather feedback during and after the demo stage to refine the final product to meet your expectations and preferences.",
  },
  {
    step: 5,
    title: "Continuous Support",
    description:
      "Post-launch, we provide maintenance and implement updates or changes as per your requests, ensuring the website remains up-to-date and functional.",
  },
];

const Service: React.FC = () => {
  return (
    <>
      <section className="m-5">
        {/* Container */}
        <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
          {/* Title */}
          <h2 className="text-3xl font-bold md:text-5xl">How We Work?</h2>
          <p className="mb-8 mt-4 max-w-lg text-sm text-gray-500 sm:text-base md:mb-12 lg:mb-16">
            We work closely with you to deliver a website tailored to your needs. From understanding
            your vision to providing a polished and functional product, our streamlined workflow
            ensures fast, accurate, and stunning results.
          </p>
          {/* Content */}
          <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:gap-6">
            {serviceSteps.map((step) => (
              <div
                key={step.step}
                className="grid gap-4 rounded-md border border-solid border-gray-300 p-8 md:p-10">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
                  <p className="text-black text-sm font-bold sm:text-xl">{step.step}</p>
                </div>
                <p className="text-xl font-semibold">{step.title}</p>
                <p className="text-sm text-gray-500">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Testimonials />
    </>
  );
};

export default Service;
