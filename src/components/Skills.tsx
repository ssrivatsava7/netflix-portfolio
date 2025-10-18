import { Card, CardContent } from "@/components/ui/card";
import { Code, Database, Globe, Smartphone, Cloud, Zap } from "lucide-react";

const skills = [
  {
    icon: Code,
    title: "Frontend Development",
    description: "React, Next.js, TypeScript, Tailwind CSS",
  },
  {
    icon: Database,
    title: "Backend & Databases",
    description: "Node.js, PostgreSQL, Redis, MongoDB",
  },
  {
    icon: Globe,
    title: "Web Technologies",
    description: "REST APIs, GraphQL, WebSockets, OAuth",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "React Native, Progressive Web Apps",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "Docker, CI/CD, AWS, Vercel, Railway",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimization, Caching, SEO, Analytics",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 sm:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <Card
                key={skill.title}
                className="bg-card border-border hover-scale cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Icon className="text-primary" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold mb-2">{skill.title}</h3>
                      <p className="text-muted-foreground text-sm">
                        {skill.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
