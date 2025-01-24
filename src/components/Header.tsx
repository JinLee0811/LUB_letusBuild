import { useState, useEffect } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router-dom";

const navigation = [
  { name: "About Us", href: "/" },
  { name: "Our Services", href: "/Services" },
  { name: "Our Samples", href: "/samples" },
  { name: "Contact Us", href: "/contact" },
];

const Header = () => {
  const { pathname } = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const getLinkClasses = (href: string) =>
    pathname === href
      ? "text-blue-600 dark:text-blue-400 font-bold"
      : "text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-300";

  return (
    <header className="absolute inset-x-0 top-0 z-50 bg-white dark:bg-gray-900">
      <nav className="flex items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              alt=""
              src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
              className="h-8 w-auto"
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-white">
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`text-sm font-semibold ${getLinkClasses(item.href)}`}>
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center gap-4">
          <Link to="/faq" className={`text-sm font-semibold ${getLinkClasses("/faq")}`}>
            FAQ
          </Link>
          <div
            onClick={() => setDarkMode(!darkMode)}
            className={`relative w-16 h-8 flex items-center cursor-pointer rounded-full p-1 ${
              darkMode ? "bg-indigo-600" : "bg-gray-300"
            } transition-colors duration-300`}>
            <div
              className={`absolute w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                darkMode ? "translate-x-0" : "translate-x-8"
              } flex items-center justify-center text-lg`}>
              {darkMode ? "☾" : "☼"}
            </div>
          </div>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden bg-white dark:bg-gray-900">
        <div className="fixed inset-0 z-50 bg-gray-900 bg-opacity-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 bg-white dark:bg-gray-900">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              />
            </Link>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-white">
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10 dark:divide-gray-700">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold ${getLinkClasses(
                      item.href
                    )}`}
                    onClick={() => setMobileMenuOpen(false)}>
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <Link
                  to="/faq"
                  className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold ${getLinkClasses("/faq")}`}
                  onClick={() => setMobileMenuOpen(false)}>
                  FAQ
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};

export default Header;
