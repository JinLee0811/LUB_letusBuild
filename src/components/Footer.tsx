import React from "react";
import { Link } from "react-router-dom";

const footerLinks = [
  {
    label: "Product",
    links: [
      { label: "Pricing", href: "/pricing" },
      { label: "Changelog", href: "/changelog" },
      { label: "Docs", href: "/docs" },
    ],
  },
  {
    label: "Company",
    links: [
      { label: "About us", href: "/" },
      { label: "Service", href: "/service" },
      { label: "Sample", href: "/sample", note: "look our work" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

const socialLinks = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className="fill-current">
        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
      </svg>
    ),
    href: "https://twitter.com",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className="fill-current">
        <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"></path>
      </svg>
    ),
    href: "https://google.com",
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="mt-auto bg-gray-900 w-full">
      <div className="mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 lg:pt-20 mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          <div className="col-span-full lg:col-span-1">
            <Link
              to="/"
              className="flex-none text-xl font-semibold text-white focus:outline-none focus:opacity-80"
              aria-label="Brand">
              Let Us Build
            </Link>
          </div>
          {footerLinks.map((section) => (
            <div className="col-span-1" key={section.label}>
              <h4 className="font-semibold text-gray-100">{section.label}</h4>
              <div className="mt-3 grid space-y-3">
                {section.links.map((link) => (
                  <p key={link.href}>
                    <Link
                      to={link.href}
                      className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 focus:outline-none focus:text-gray-200">
                      {link.label}
                    </Link>
                    {link.note && (
                      <span className="inline-block ms-1 text-xs bg-blue-700 text-white py-1 px-2 rounded-lg">
                        {link.note}
                      </span>
                    )}
                  </p>
                ))}
              </div>
            </div>
          ))}
          <div className="col-span-2">
            <h4 className="font-semibold text-gray-100">Stay up to date</h4>
            <form>
              <div className="mt-4 flex flex-col items-center gap-2 sm:flex-row sm:gap-3 bg-white rounded-lg p-2">
                <div className="w-full">
                  <label htmlFor="hero-input" className="sr-only">
                    Subscribe
                  </label>
                  <input
                    type="email"
                    id="hero-input"
                    name="hero-input"
                    className="py-3 px-4 block w-full border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                    placeholder="Enter your email"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto whitespace-nowrap p-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                  Subscribe
                </button>
              </div>
              <p className="mt-3 text-sm text-gray-400">
                New UI kits or big discounts. Never spam.
              </p>
            </form>
          </div>
        </div>
        <div className="mt-5 sm:mt-12 grid gap-y-2 sm:gap-y-0 sm:flex sm:justify-between sm:items-center">
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-400">© {new Date().getFullYear()} Preline Labs.</p>
          </div>
          <div>
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-white/10 focus:outline-none focus:bg-white/10 disabled:opacity-50 disabled:pointer-events-none">
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
