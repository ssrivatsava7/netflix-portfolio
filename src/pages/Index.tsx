import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProjectCarousel from "../components/ProjectCarousel";
import Skills from "../components/Skills";
import About from "../components/About";
import Footer from "../components/Footer";
import Experience from "../components/Experience";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ProjectCarousel />
      <Skills />
      <Experience />
      <About />
      <Footer />
    </div>
  );
};

export default Index;
