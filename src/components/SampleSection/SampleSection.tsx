import React, { useState } from "react";
import TabNav from "./TabNav";
import TabContent from "./TabContent";
import sample1 from "../../assets/sample1.jpg";
import sample2 from "../../assets/sample2.jpg";
import sample3 from "../../assets/sample3.jpg";

const SampleSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const tabs = [
    {
      id: "tab1",
      title: "Simple Cafe Website",
      description: "Create a business, whether you’ve got a fresh idea.",
    },
    {
      id: "tab2",
      title: "Shopify Store",
      description: "Use automation to scale campaigns profitably.",
    },
    {
      id: "tab3",
      title: "Build your company site",
      description: "One tool for your company to share knowledge.",
    },
  ];

  const contents = [
    { id: "tab1", image: sample1, alt: "All-in-one workspace" },
    {
      id: "tab2",
      image: sample2,
      alt: "Automation on a whole new level",
    },
    {
      id: "tab3",
      image: sample3,
      alt: "Solving problems for every team",
    },
  ];

  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto bg-white dark:bg-gray-900">
      <h2 className="text-3xl mb-7 font-semibold text-gray-900 dark:text-white">
        Look around our sample websites
      </h2>
      <TabNav tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
      <TabContent contents={contents} activeTab={activeTab} />
    </div>
  );
};

export default SampleSection;
