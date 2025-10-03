import { ExternalLink, Github, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { link } from "fs";

const Portfolio = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Multi-role food delivery system with User, Admin, Driver, and Merchant portals. Features include authentication, shopping cart, order tracking, and real-time updates.",
      tech: ["Java", "Spring Boot", "Angular", "MySQL", "REST API"],
      image:
        "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
      link: "https://github.com/Meghavi-Patel/CraveableCreationsApp",
    },
    {
      title: "Banking Management System",
      description:
        "Comprehensive banking application with account management, transaction processing, loan management, and customer support features.",
      tech: ["Java", "Spring Boot", "React", "PostgreSQL", "OAuth2"],
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
      link: "https://github.com/Meghavi-Patel/bank_management_system",
    },
    {
      title: "Enterprise Application Suite",
      description:
        "Full-stack enterprise solution with microservices architecture, featuring role-based access control, automated testing, and CI/CD pipeline integration.",
      tech: ["Java", "Spring Boot", "Angular", "MongoDB", "Docker"],
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      link: "https://github.com/Meghavi-Patel/react-website",
    },
  ];

  return (
    <section
      id="portfolio"
      className="py-20 bg-gradient-to-b from-background to-secondary/30 relative overflow-hidden"
    >
      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full mb-4 animate-fade-in">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">My Work</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground">Some of my recent work</p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative bg-gradient-to-br from-card via-card to-card/50 rounded-3xl overflow-hidden card-shadow hover-scale backdrop-blur-sm border border-border/50">
                <div className="relative overflow-hidden h-56">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                  <div className="absolute top-4 right-4 flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-br from-primary to-accent animate-pulse" />
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-gradient transition-all">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gradient-to-br from-primary/10 to-accent/10 text-primary text-xs font-semibold rounded-full border border-primary/20 backdrop-blur-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Button
                      onClick={() => window.open(project.link, "_blank")}
                      size="sm"
                      variant="outline"
                      className="flex-1 backdrop-blur-sm hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    {/*<Button size="sm" className="flex-1 bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/50">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>*/}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
