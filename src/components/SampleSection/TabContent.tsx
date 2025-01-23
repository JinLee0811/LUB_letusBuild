import React from "react";

interface TabContentProps {
  contents: { id: string; image: string; alt: string }[];
  activeTab: string;
}

const TabContent: React.FC<TabContentProps> = ({ contents, activeTab }) => {
  const activeContent = contents.find((content) => content.id === activeTab);

  return (
    <div className="mt-12 md:mt-16">
      {activeContent && (
        <div className="max-w-[1140px] lg:pb-32 relative">
          <div
            className="relative w-full rounded-lg overflow-hidden bg-gray-200 dark:bg-gray-700"
            style={{ aspectRatio: "16/9" }}>
            <img
              src={activeContent.image}
              alt={activeContent.alt}
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default TabContent;
