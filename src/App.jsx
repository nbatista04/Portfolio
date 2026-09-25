// src/App.jsx

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import portfolioData from "./data/portfolioData";

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar datos={portfolioData} />
      <ScrollToTop />
      <Hero datos={portfolioData} />
      <About datos={portfolioData} />
      <Experience datos={portfolioData} />
      <Projects datos={portfolioData} />
      <Contact datos={portfolioData} />
      <Footer datos={portfolioData} />
    </div>
  );
}
export default App;
