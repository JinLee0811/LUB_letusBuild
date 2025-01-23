import Hero from "../components/Hero";
import CompanyExample from "../components/CompanyExample";
import SampleArea from "../components/SampleArea";
import TeamSection from "../components/TeamSection/TeamSection";
import SampleSection from "../components/SampleSection/SampleSection";
import Testimonial from "../components/Testimonial/Testimonial";

const Home = () => {
  return (
    <>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-200 p-8 text-center">
        <Hero />
        <CompanyExample />
        <SampleArea />
        <SampleSection />
        <Testimonial />
        <TeamSection />
      </div>
    </>
  );
};

export default Home;
