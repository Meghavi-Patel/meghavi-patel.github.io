import { Briefcase, Calendar, MapPin, Sparkles } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Full Stack Java Developer",
      company: "Independent Projects / Freelance",
      location: "Markham, ON",
      period: "Apr 2024 – Present",
      achievements: [
        "Developed 5+ full-stack applications using Java, Spring Boot, React, and Angular",
        "Designed and implemented 20+ RESTful APIs with comprehensive validation and documentation",
        "Optimized MySQL database queries reducing response time by 30%",
        "Automated CI/CD pipelines with Jenkins, decreasing deployment time by 40%",
      ],
    },
    {
      title: "Java Developer",
      company: "WeeTechSolution Pvt. Ltd.",
      location: "Surat, India",
      period: "Sep 2021 – Mar 2024",
      achievements: [
        "Built enterprise-grade applications serving 10,000+ active users",
        "Implemented role-based security with OAuth2 and JWT authentication",
        "Improved application performance by 25% through code optimization",
        "Collaborated with cross-functional teams in Agile/Scrum environment",
      ],
    },
    {
      title: "Web Developer Intern",
      company: "Stellantis",
      location: "Chennai, India",
      period: "Aug 2020 – May 2021",
      achievements: [
        "Developed RESTful APIs for automotive software applications",
        "Reduced bug count by 15% through rigorous testing and code reviews",
        "Participated in Agile workflows and sprint planning",
        "Contributed to microservices architecture design",
      ],
    },
    {
      title: "Web Developer",
      company: "Daydreamsoft Infotech LLP",
      location: "Surat, India",
      period: "Jan 2018 – May 2019",
      achievements: [
        "Created 8+ responsive websites with modern UI/UX design",
        "Enhanced user experience resulting in 20% increase in engagement",
        "Performed cross-browser testing ensuring 99% compatibility",
        "Collaborated with designers to implement pixel-perfect interfaces",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full mb-4 animate-fade-in">
            <Briefcase className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              Professional Journey
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-muted-foreground">
            My professional journey and achievements
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-8 relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary" />

          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Timeline Dot */}
              <div className="hidden md:block absolute left-[29px] top-8 w-4 h-4 rounded-full bg-gradient-to-br from-primary to-accent ring-4 ring-background group-hover:scale-150 transition-transform z-10" />

              <div className="md:ml-16 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-gradient-to-br from-card via-card to-card/50 p-6 md:p-8 rounded-2xl card-shadow hover-scale backdrop-blur-sm border border-border/50">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2 group-hover:text-gradient transition-all">
                        {exp.title}
                      </h3>
                      <p className="text-primary font-semibold text-lg mb-1">
                        {exp.company}
                      </p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 bg-gradient-to-br from-primary/10 to-accent/10 backdrop-blur-sm px-4 py-2.5 rounded-xl border border-primary/20">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span className="text-sm font-semibold text-primary">
                        {exp.period}
                      </span>
                    </div>
                  </div>
                  {/*<div className="space-y-3">
                    {exp.achievements.map((achievement, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 group/item"
                      >
                        <div className="w-2 h-2 rounded-full bg-gradient-to-br from-primary to-accent mt-2 flex-shrink-0 group-hover/item:scale-150 transition-transform" />
                        <span className="text-foreground/80 leading-relaxed">
                          {achievement}
                        </span>
                      </div>
                    ))}
                  </div>*/}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
