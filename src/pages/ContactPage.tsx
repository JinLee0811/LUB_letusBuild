import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ContactForm from "../components/ContactForm";
import { testimonials, Testimonial } from "../components/Testimonial/testmonialData";
import Modal from "../components/Modal";

const ContactPage: React.FC = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false); // 로딩 상태 추가
  const [modalContent, setModalContent] = useState<{
    title: string;
    message: string;
    isError: boolean;
  }>({
    title: "",
    message: "",
    isError: false,
  });

  const handleFormSubmit = async (formData: {
    name: string;
    email: string;
    phone: string;
    brief: string;
  }) => {
    setIsSubmitting(true); // 로딩 시작
    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxrfQLz4K4zWiFu-ZVlFEBljt3uQ8eNR-H533QWpk8wgcjZTz0ZBhz-iNioJZmZLE_8Kg/exec",
        {
          method: "POST",
          body: JSON.stringify(formData),
        }
      );
      const data = await response.json();
      console.log(data);

      // 성공 시 모달 내용 설정
      setModalContent({
        title: "Your message has been sent!",
        message: "Thank you for reaching out. We will contact you shortly.",
        isError: false,
      });
      setIsModalOpen(true); // 모달 열기
    } catch (error) {
      console.error("Submission error:", error);

      // 에러 시 모달 내용 설정
      setModalContent({
        title: "Submission Failed",
        message:
          "There is an issue with the server. Please email us directly at jinlee811811@gmail.com, and we will respond promptly.",
        isError: true,
      });
      setIsModalOpen(true); // 모달 열기
    } finally {
      setIsSubmitting(false); // 로딩 종료
    }
  };

  const randomTestimonial: Testimonial =
    testimonials[Math.floor(Math.random() * testimonials.length)];

  const handleModalClose = () => {
    setIsModalOpen(false); // 모달 닫기
    if (!modalContent.isError) {
      navigate("/"); // 성공 시 홈으로 이동
    }
  };

  return (
    <section>
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        <div className="grid items-center gap-8 sm:gap-20 lg:grid-cols-2">
          <div className="max-w-3xl">
            <h2 className="mb-2 text-3xl font-bold md:text-5xl">
              Contact us to schedule your free consultation!
            </h2>
            <p className="my-4 max-w-lg pb-4 text-sm text-gray-500 sm:text-base md:mb-6 lg:mb-8">
              Let us help you bring your vision to life with a customized website. Share your ideas
              and needs with us, and we’ll create a tailored solution to match your expectations
              perfectly.
            </p>
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
          <div className="mx-auto max-w-xl bg-gray-100 dark:bg-gray-800 p-8 text-center rounded-lg">
            <h3 className="my-5 text-2xl text-black dark:text-white font-bold md:text-3xl">
              Share Your Website Idea
            </h3>
            <p className="mx-auto mb-6 mt-4 max-w-lg text-sm text-gray-500 dark:text-gray-300 lg:mb-8">
              Fill out the form below with your email and a brief description of the website you
              have in mind. We’ll get back to you shortly!
            </p>
            <ContactForm
              onSubmit={handleFormSubmit}
              isSubmitting={isSubmitting} // 로딩 상태 전달
            />
          </div>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={handleModalClose}>
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
          {modalContent.title}
        </h3>
        <p className="text-gray-500 dark:text-gray-400 mb-4">
          {modalContent.isError ? (
            <>
              There is an issue with the server. Please email us directly at{" "}
              <a
                href="mailto:jinlee811811@gmail.com"
                className="font-bold text-blue-600 underline hover:text-blue-800">
                jinlee811811@gmail.com
              </a>
              , and we will respond promptly.
            </>
          ) : (
            modalContent.message
          )}
        </p>
        <button
          onClick={handleModalClose}
          className="py-2 px-4 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200">
          OK
        </button>
      </Modal>
    </section>
  );
};

export default ContactPage;
