import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl animate-fade-in-slow">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6">
            Full Stack Developer &{" "}
            <span className="text-gradient">Creative Technologist</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
            Building exceptional digital experiences with modern technologies.
            Specializing in scalable web applications and innovative solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 animate-glow-pulse"
            >
              View My Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary/50 text-foreground hover:bg-primary/10 font-semibold text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6"
            >
              Download Resume
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-primary" />
      </div>
    </section>
  );
};

export default Hero;
