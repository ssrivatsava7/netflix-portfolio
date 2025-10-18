import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Award, Briefcase, GraduationCap } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Briefcase, label: "Years Experience", value: "5+" },
    { icon: Award, label: "Projects Completed", value: "50+" },
    { icon: GraduationCap, label: "Certifications", value: "10+" },
  ];

  return (
    <section id="about" className="py-16 sm:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="animate-slide-in-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                I'm a passionate Full Stack Developer with expertise in building
                modern web applications using cutting-edge technologies. My journey
                in software development has been driven by a love for creating
                elegant solutions to complex problems.
              </p>
              <p className="text-lg leading-relaxed">
                With a strong foundation in both frontend and backend development,
                I specialize in React, Node.js, and cloud technologies. I'm
                committed to writing clean, maintainable code and delivering
                exceptional user experiences.
              </p>
              <p className="text-lg leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies,
                contributing to open source, or sharing knowledge through blog
                posts and community events.
              </p>
            </div>
            <Button
              size="lg"
              className="mt-8 bg-primary hover:bg-primary/90 gap-2"
            >
              <Download size={20} />
              Download Resume
            </Button>
          </div>

          {/* Right Column - Stats Cards */}
          <div className="animate-slide-in-right">
            <div className="grid grid-cols-1 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <Card
                    key={stat.label}
                    className="bg-card border-border hover-scale"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center gap-6">
                        <div className="p-4 bg-primary/10 rounded-lg">
                          <Icon className="text-primary" size={32} />
                        </div>
                        <div>
                          <div className="text-3xl font-bold text-primary mb-1">
                            {stat.value}
                          </div>
                          <div className="text-muted-foreground">
                            {stat.label}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Additional Info Card */}
            <Card className="mt-6 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Currently Available</h3>
                <p className="text-muted-foreground mb-4">
                  I'm open to new opportunities and exciting projects. Let's
                  build something amazing together!
                </p>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  Get In Touch
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
