import { useState, useEffect } from "react";
import Hero from "../components/Hero";
import CompanyExample from "../components/CompanyExample";
import SampleArea from "../components/SampleArea";
import TeamSection from "../components/TeamSection/TeamSection";
import SampleSection from "../components/SampleSection/SampleSection";
import Testimonial from "../components/Testimonial/Testimonial";

const Home = () => {
  const [showButton, setShowButton] = useState(false);

  // 스크롤 상태 확인
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 상단으로 이동
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-200 p-8 text-center">
        <Hero />
        <CompanyExample />
        <SampleArea />
        <SampleSection />
        <Testimonial />
        <TeamSection />

        {/* 상단으로 이동 버튼 */}
        {showButton && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-[6rem] right-4 z-50 rounded-full bg-indigo-600 p-4 text-white shadow-lg hover:bg-indigo-700 transition duration-300"
            aria-label="Scroll to top">
            ↑
          </button>
        )}
      </div>
    </>
  );
};

export default Home;
