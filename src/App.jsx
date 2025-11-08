import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import WhyMe from "./components/WhyMe";
import Services from "./components/Services";
import CounsellingHelps from "./components/CounsellingHelps";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import BackToTop from "./components/BacktoTop";

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <WhyMe />
      <Services />
      <CounsellingHelps />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
