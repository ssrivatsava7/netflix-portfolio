import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    id: 1,
    title: "Building Scalable Microservices with Node.js",
    excerpt: "Learn how to architect and deploy production-ready microservices using modern Node.js patterns and best practices.",
    date: "Dec 15, 2024",
    readTime: "8 min read",
    category: "Backend",
  },
  {
    id: 2,
    title: "Advanced React Patterns for Large Applications",
    excerpt: "Discover essential design patterns and techniques for managing complex state and component hierarchies in React.",
    date: "Dec 10, 2024",
    readTime: "12 min read",
    category: "Frontend",
  },
  {
    id: 3,
    title: "Optimizing Database Performance at Scale",
    excerpt: "Deep dive into indexing strategies, query optimization, and caching techniques for high-traffic applications.",
    date: "Dec 5, 2024",
    readTime: "10 min read",
    category: "Database",
  },
];

const Blog = () => {
  return (
    <section id="blog" className="py-16 sm:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Latest <span className="text-gradient">Articles</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Thoughts, tutorials, and insights on web development and technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {blogPosts.map((post, index) => (
            <Card
              key={post.id}
              className="bg-card border-border hover-scale cursor-pointer group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="mb-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">
                    {post.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar size={14} />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={14} />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  className="w-full justify-between group-hover:bg-primary/10 group-hover:text-primary transition-colors"
                >
                  Read More
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
