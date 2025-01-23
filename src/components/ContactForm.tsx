import React from "react";

type ContactFormProps = {
  onSubmit: (formData: { name: string; email: string; brief: string }) => void;
};

const ContactForm: React.FC<ContactFormProps> = ({ onSubmit }) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      brief: formData.get("brief") as string,
    };
    onSubmit(data);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto mb-4 max-w-sm text-left"
      name="wf-form-password"
      method="get">
      <div>
        <label htmlFor="name" className="mb-1 font-medium">
          Your Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="mb-4 block h-9 w-full rounded-md border border-solid border-black px-3 py-6 pl-4 text-sm text-black"
        />
      </div>
      <div className="mb-2">
        <label htmlFor="email" className="mb-1 font-medium">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="mb-4 block h-9 w-full rounded-md border border-solid border-black px-3 py-6 pl-4 text-sm text-black"
        />
      </div>
      <div className="mb-5 md:mb-6 lg:mb-8">
        <label htmlFor="brief" className="mb-1 font-medium">
          Project Brief
        </label>
        <textarea
          id="brief"
          name="brief"
          placeholder="Describe your project: What kind of website do you want? What features are important?"
          maxLength={5000}
          required
          className="mb-2.5 block h-auto min-h-32 w-full rounded-md border border-solid border-black p-3 text-sm text-black"></textarea>
      </div>
      <input
        type="submit"
        value="Get free quote"
        className="inline-block w-full cursor-pointer rounded-md bg-black px-6 py-3 text-center font-semibold text-white"
      />
    </form>
  );
};

export default ContactForm;
