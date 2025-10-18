import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProjectCarousel from "@/components/ProjectCarousel";
import Skills from "@/components/Skills";
import Blog from "@/components/Blog";
import About from "@/components/About";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ProjectCarousel />
      <Skills />
      <Blog />
      <About />
      <Footer />
    </div>
  );
};

export default Index;
