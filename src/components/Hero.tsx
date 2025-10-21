import { useEffect, useRef, useState } from "react";
import { Button } from "../components/ui/button";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile devices by screen width
    const checkMobile = () => window.innerWidth < 768;
    setIsMobile(checkMobile());
    window.addEventListener("resize", () => setIsMobile(checkMobile()));

    // Cleanup listener
    return () => window.removeEventListener("resize", () => setIsMobile(checkMobile()));
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      if (isMobile) {
        video.pause();
      } else {
        video.play().catch(() => {});
      }
    }
  }, [isMobile]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-black text-white"
    >
      {/* --- Background Layer --- */}
      <div className="absolute inset-0">
        {!isMobile ? (
          <video
            ref={videoRef}
            muted
            autoPlay
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0 brightness-[1.25] contrast-[1.15] saturate-[1.25] scale-105"
          >
            <source src="/assets/hero-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img
            src="/assets/hero-bg.jpg"
            alt="Hero Background"
            className="absolute inset-0 w-full h-full object-cover brightness-[1.1] contrast-[1.1] saturate-[1.15] scale-105"
          />
        )}

        {/* --- Overlays for readability --- */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-black/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/50" />
      </div>

      {/* --- Text Content --- */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl animate-fade-in-slow space-y-6">
          <h1 className="font-bold leading-tight">
            <span className="block text-2xl sm:text-3xl md:text-4xl text-red-600 mb-2 tracking-wide animate-glow-pulse">
              Snigdha Srivatsava
            </span>
            <span className="block text-gray-200 text-2xl sm:text-3xl mb-1 italic">
              Now Streaming:
            </span>
            <span className="block text-gradient text-5xl sm:text-6xl md:text-7xl drop-shadow-[0_2px_8px_rgba(255,0,0,0.5)]">
              The Code Chronicles
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-2xl leading-relaxed">
            Turning caffeine, code, and curiosity into scalable intelligence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button
              size="lg"
              onClick={() => {
              const section = document.getElementById("projects");
              if (section) {
               section.scrollIntoView({ behavior: "smooth" });
              }
              }}
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
