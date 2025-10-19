import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-black text-white"
    >
      {/* --- Background Layer --- */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Hero Background"
          className="w-full h-full object-cover brightness-[0.45] scale-105 animate-slow-zoom"
        />
        {/* Cinematic gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/50 to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/70" />
      </div>

      {/* --- Text Content --- */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl animate-fade-in-slow space-y-6">
          <h1 className="font-bold leading-tight">
            <span className="block text-2xl sm:text-3xl md:text-4xl text-red-600 mb-2 tracking-wide animate-glow-pulse">
              Snigdha Srivatsava
            </span>
            <span className="block text-gray-300 text-2xl sm:text-3xl mb-1 italic">
              Now Streaming:
            </span>
            <span className="block text-gradient text-5xl sm:text-6xl md:text-7xl">
              The Code Chronicles
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-400 max-w-2xl leading-relaxed">
            Turning caffeine, code, and curiosity into scalable intelligence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white font-semibold text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 
              shadow-[0_0_30px_rgba(255,0,0,0.4)] hover:shadow-[0_0_50px_rgba(255,0,0,0.7)] transition-shadow duration-300"
            >
              ▶ Play My Work
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-2 border-red-600/60 text-white hover:bg-red-600/10 font-semibold text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 transition-all duration-300"
            >
              ℹ More About Me
            </Button>
          </div>
        </div>
      </div>

      {/* --- Scroll Indicator --- */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-red-600" />
      </div>
    </section>
  );
};

export default Hero;
