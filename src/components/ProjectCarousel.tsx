import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A modern, scalable e-commerce solution with real-time inventory management",
    image: project1,
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    github: "#",
    live: "#",
  },
  {
    id: 2,
    title: "Analytics Dashboard",
    description: "Real-time data visualization dashboard for business intelligence",
    image: project2,
    tags: ["Next.js", "D3.js", "Redis", "GraphQL"],
    github: "#",
    live: "#",
  },
  {
    id: 3,
    title: "Social Media App",
    description: "Feature-rich social platform with real-time messaging and feeds",
    image: project3,
    tags: ["React Native", "Firebase", "WebSockets"],
    github: "#",
    live: "#",
  },
];

const ProjectCarousel = () => {
  return (
    <section id="projects" className="py-16 sm:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Explore my latest work showcasing modern web technologies and innovative solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className="group bg-card border-border overflow-hidden card-hover cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 sm:h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href={project.github}
                    className="p-3 bg-background/80 rounded-full hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={project.live}
                    className="p-3 bg-background/80 rounded-full hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectCarousel;
