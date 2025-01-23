import React from "react";
import ContactForm from "../components/ContactForm";
import { testimonials, Testimonial } from "../components/Testimonial/testmonialData";

const ContactPage: React.FC = () => {
  const handleFormSubmit = (formData: { name: string; email: string; brief: string }) => {
    console.log("Form submitted:", formData);
    // Handle form submission logic (e.g., send to API)
  };

  // Fetch a random testimonial
  const randomTestimonial: Testimonial =
    testimonials[Math.floor(Math.random() * testimonials.length)];

  return (
    <section>
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        {/* Component */}
        <div className="grid items-center gap-8 sm:gap-20 lg:grid-cols-2">
          <div className="max-w-3xl">
            {/* Title */}
            <h2 className="mb-2 text-3xl font-bold md:text-5xl">
              Contact us to schedule your free consultation!
            </h2>
            <p className="my-4 max-w-lg pb-4 text-sm text-gray-500 sm:text-base md:mb-6 lg:mb-8">
              Let us help you bring your vision to life with a customized website. Share your ideas
              and needs with us, and we’ll create a tailored solution to match your expectations
              perfectly.
            </p>
            {/* Testimonial */}
            <div className="mb-8 p-6 border border-gray-300 rounded-lg shadow-md bg-gray-50 dark:bg-gray-800">
              <div className="mb-4 flex items-center text-orange-500">
                {Array.from({ length: randomTestimonial.stars }).map((_, index) => (
                  <svg
                    key={index}
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor">
                    <path d="M12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72 3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41-1.89-4.46c-.34-.81-1.5-.81-1.84 0l-1.89 4.46-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z" />
                  </svg>
                ))}
              </div>
              <p className="mb-4 text-sm text-gray-500 dark:text-gray-300">
                “{randomTestimonial.feedback}”
              </p>
              <div className="flex items-center">
                <img
                  src={randomTestimonial.image}
                  alt={randomTestimonial.name}
                  className="mr-4 h-16 w-16 rounded-full object-cover"
                />
                <div className="flex flex-col">
                  <h6 className="text-base font-bold text-gray-900 dark:text-white">
                    {randomTestimonial.name}
                  </h6>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {randomTestimonial.role}
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Contact Form Section */}
          <div className="mx-auto max-w-xl bg-gray-100 dark:bg-gray-800 p-8 text-center rounded-lg">
            <h3 className="my-5 text-2xl text-black dark:text-white font-bold md:text-3xl">
              Share Your Website Idea
            </h3>
            <p className="mx-auto mb-6 mt-4 max-w-lg text-sm text-gray-500 dark:text-gray-300 lg:mb-8">
              Fill out the form below with your email and a brief description of the website you
              have in mind. We’ll get back to you shortly!
            </p>
            <ContactForm onSubmit={handleFormSubmit} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
