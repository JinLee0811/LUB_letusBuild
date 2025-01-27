import React from "react";
import logo from "../../public/LUB_Logo.png"; // 로고 이미지 경로를 실제 경로로 교체하세요.
import { Link } from "react-router-dom";

const footerData = {
  // description:
  //   "This is my information. If you have any questions or need assistance, feel free to reach out to me.",
  links: [
    { label: "About Us", href: "/" },
    { label: "Our Services", href: "/services" },
    { label: "Our Samples", href: "/samples" },
    { label: "Contact Us", href: "/contact" },
    { label: "FAQ", href: "/faq" },
  ],
  socialLinks: [
    {
      label: "Instagram",
      href: "https://www.instagram.com/jin.lee811/?locale=pt_PT&hl=es", // Instagram 프로필 URL로 변경
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="currentColor"
          viewBox="0 0 24 24">
          <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/jin-lee-72b653272/", // LinkedIn 프로필 URL로 변경
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="currentColor"
          viewBox="0 0 24 24">
          <path d="M22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.2.79 24 1.77 24h20.46c.98 0 1.77-.79 1.77-1.73V1.73C24 .77 23.21 0 22.23 0zM7.09 20.45H3.56V9.03h3.53v11.42zM5.32 7.76c-1.13 0-2.05-.93-2.05-2.06s.92-2.06 2.05-2.06c1.13 0 2.05.93 2.05 2.06s-.92 2.06-2.05 2.06zM20.45 20.45h-3.53v-5.55c0-1.32-.03-3.03-1.85-3.03-1.85 0-2.13 1.44-2.13 2.93v5.65h-3.53V9.03h3.39v1.56h.05c.47-.89 1.62-1.82 3.34-1.82 3.57 0 4.23 2.35 4.23 5.41v6.27z" />
        </svg>
      ),
    },
    {
      label: "GitHub",
      href: "https://github.com/JinLee0811", // GitHub 프로필 URL로 변경
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="currentColor"
          viewBox="0 0 24 24">
          <path
            fillRule="evenodd"
            d="M12 2C6.48 2 2 6.48 2 12c0 4.41 2.86 8.16 6.84 9.5.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.64-1.34-2.22-.25-4.55-1.11-4.55-4.95 0-1.09.39-1.99 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.03a9.48 9.48 0 015 0c1.91-1.3 2.75-1.03 2.75-1.03.55 1.38.2 2.4.1 2.65.64.69 1.03 1.59 1.03 2.68 0 3.85-2.34 4.69-4.56 4.94.36.31.68.92.68 1.86v2.74c0 .27.18.58.68.48A10.02 10.02 0 0022 12c0-5.52-4.48-10-10-10z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
  contact: {
    email: "jinlee811811@gmail.com", // 이메일 주소 변경
    phone: "+61 0435 233 222", // 연락처 변경
  },
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto flex flex-col items-center justify-center text-center">
        {/* Logo */}
        <div>
          <img src={logo} alt="Logo" className="h-20 w-auto" />
        </div>

        {/* Description
        <p className="text-gray-500 leading-relaxed max-w-md mx-auto">{footerData.description}</p> */}

        {/* Links */}
        <ul className="flex justify-center gap-6">
          {footerData.links.map((link, index) => (
            <li key={index}>
              <Link
                to={link.href}
                className="text-gray-700 transition hover:text-gray-900 text-sm font-medium">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Contact */}
        <div className="flex flex-row items-center gap-4 mt-4">
          <a
            href={`mailto:${footerData.contact.email}`}
            className="text-gray-700 hover:text-gray-900 transition text-sm">
            📧 {footerData.contact.email}
          </a>
          <p className="text-gray-700 text-sm">{footerData.contact.phone}</p>
        </div>

        {/* Social Media Links */}
        <div className="flex gap-6 mt-8">
          {footerData.socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              className="text-gray-700 hover:text-gray-900 transition"
              aria-label={social.label}>
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
