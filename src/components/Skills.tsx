import {
  Code,
  Database,
  Cloud,
  Settings,
  Shield,
  Layers,
  Sparkles,
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Languages & Frameworks",
      skills: [
        "Java",
        "JavaScript",
        "Spring Boot",
        "Hibernate",
        "React",
        "Angular",
        "Node.js",
        "TypeScript",
      ],
    },
    {
      icon: Database,
      title: "Databases",
      skills: ["MySQL", "PostgreSQL", "MongoDB", "Redis"],
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      skills: ["AWS", "Google Cloud", "Docker", "Jenkins", "Git", "CI/CD"],
    },
    {
      icon: Settings,
      title: "Tools & Testing",
      skills: ["Maven", "JUnit", "SonarQube", "JIRA", "Postman", "Swagger"],
    },
    {
      icon: Shield,
      title: "Security",
      skills: ["OAuth2", "JWT", "Spring Security", "Role-Based Access Control"],
    },
    {
      icon: Layers,
      title: "Architecture & Concepts",
      skills: [
        "Microservices",
        "MVC",
        "REST APIs",
        "Agile/Scrum",
        "Design Patterns",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-b from-secondary/30 to-background relative overflow-hidden"
    >
      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full mb-4 animate-fade-in">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Tech Stack</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-muted-foreground">
            My technology stack and expertise
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="relative animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative bg-gradient-to-br from-card via-card to-card/50 p-6 rounded-2xl card-shadow hover-scale backdrop-blur-sm border border-border/50">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <category.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg group-hover:text-gradient transition-all">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 bg-gradient-to-br from-secondary/70 to-secondary/50 backdrop-blur-sm text-sm font-medium rounded-full hover:bg-gradient-to-br hover:from-primary hover:to-accent hover:text-white transition-all cursor-default border border-border/30 hover:border-transparent hover:scale-105 hover:shadow-lg"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
