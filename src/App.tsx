import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Service";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SamplePage from "./pages/Samples";
import ContactPage from "./pages/ContactPage";
import FaqPage from "./pages/FaqPage";

import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-white dark:bg-gray-900  dark:text-gray-200 p-8">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/samples" element={<SamplePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/faq" element={<FaqPage />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
