import React, { useState } from "react";

type ContactFormProps = {
  onSubmit: (formData: { name: string; email: string; phone: string; brief: string }) => void;
  isSubmitting: boolean;
};

const ContactForm: React.FC<ContactFormProps> = ({ onSubmit, isSubmitting }) => {
  const [selectedCountryCode, setSelectedCountryCode] = useState("+61"); // 기본 국가 코드 설정

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: `${selectedCountryCode}${formData.get("phone")}` as string, // 인코딩 적용
      brief: formData.get("brief") as string, // 인코딩 적용
    };

    onSubmit(data);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto mb-4 max-w-md text-left bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md"
      name="wf-form-password"
      method="get">
      <div>
        <label htmlFor="name" className="mb-1 font-medium text-gray-900 dark:text-gray-200">
          Your Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="mb-4 block h-9 w-full rounded-md border border-solid border-black dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-6 pl-4 text-sm text-black dark:text-white"
        />
      </div>
      <div className="mb-2">
        <label htmlFor="email" className="mb-1 font-medium text-gray-900 dark:text-gray-200">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="mb-4 block h-9 w-full rounded-md border border-solid border-black dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-6 pl-4 text-sm text-black dark:text-white"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="phone" className="mb-1 font-medium text-gray-900 dark:text-gray-200">
          Phone Number
        </label>
        <div className="flex items-center">
          <select
            value={selectedCountryCode}
            onChange={(e) => setSelectedCountryCode(e.target.value)}
            className="h-9 w-22 rounded-md border border-solid border-black dark:border-gray-700 bg-white dark:bg-gray-800 px-3 text-sm text-black dark:text-white">
            <option value="+61">+61 (Australia)</option>
            <option value="+82">+82 (South Korea)</option>
          </select>
          <input
            type="text"
            id="phone"
            name="phone"
            required
            placeholder="12345678"
            className="ml-2 flex-1 h-9 rounded-md border border-solid border-black dark:border-gray-700 bg-white dark:bg-gray-800 px-3 text-sm text-black dark:text-white"
          />
        </div>
      </div>
      <div className="mb-5 md:mb-6 lg:mb-8">
        <label htmlFor="brief" className="mb-1 font-medium text-gray-900 dark:text-gray-200">
          Project Brief
        </label>
        <textarea
          id="brief"
          name="brief"
          placeholder="Describe your project: What kind of website do you want? What features are important?"
          maxLength={5000}
          required
          className="mb-2.5 block h-auto min-h-32 w-full rounded-md border border-solid border-black dark:border-gray-700 bg-white dark:bg-gray-800 p-3 text-sm text-black dark:text-white"></textarea>
      </div>
      <input
        type="submit"
        disabled={isSubmitting}
        value={isSubmitting ? "Submitting..." : "Submit"}
        className="inline-block w-full cursor-pointer rounded-md bg-black dark:bg-gray-700 px-6 py-3 text-center font-semibold text-white hover:bg-gray-800 dark:hover:bg-gray-600 disabled:opacity-50"
      />
    </form>
  );
};

export default ContactForm;
