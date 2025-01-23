import React from "react";

interface TabNavProps {
  tabs: { id: string; title: string; description: string }[];
  activeTab: string;
  onTabChange: (id: string) => void;
}

const TabNav: React.FC<TabNavProps> = ({ tabs, activeTab, onTabChange }) => {
  return (
    <nav
      className="max-w-6xl mx-auto flex flex-col sm:flex-row gap-y-px sm:gap-y-0 sm:gap-x-4"
      aria-label="Tabs"
      role="tablist">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          type="button"
          className={`hs-tab-active:bg-gray-100 w-full flex flex-col text-start hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-700 p-3 md:p-5 rounded-xl ${
            activeTab === tab.id
              ? "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
              : "text-gray-800 dark:text-gray-400"
          }`}
          onClick={() => onTabChange(tab.id)}
          aria-selected={activeTab === tab.id}
          role="tab">
          <span className="mt-5">
            <span className="block font-semibold text-gray-800 dark:text-gray-200">
              {tab.title}
            </span>
            <span className="hidden lg:block mt-2 text-gray-800 dark:text-gray-400">
              {tab.description}
            </span>
          </span>
        </button>
      ))}
    </nav>
  );
};

export default TabNav;
