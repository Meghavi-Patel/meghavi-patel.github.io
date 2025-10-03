import { GraduationCap, Code2, Trophy, Sparkles } from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-background to-secondary/30 relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full mb-4 animate-fade-in">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Get to know me
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-muted-foreground">
              Passionate about creating innovative solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6 animate-slide-in-left">
              <div className="relative">
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-primary to-accent rounded-full" />
                <p className="text-lg leading-relaxed text-foreground/90 pl-6">
                  I'm a Full Stack Java Developer with{" "}
                  <strong className="text-primary">6+ years</strong> of
                  experience building enterprise-grade applications. My
                  expertise spans across Core Java, J2EE, Spring Boot,
                  Hibernate, React, Angular, and full-cycle application
                  development.
                </p>
              </div>

              <div className="relative">
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-accent to-primary rounded-full" />
                <p className="text-lg leading-relaxed text-foreground/90 pl-6">
                  I specialize in creating{" "}
                  <strong className="text-primary">scalable</strong>,{" "}
                  <strong className="text-primary">secure</strong>, and{" "}
                  <strong className="text-primary">user-focused</strong>{" "}
                  applications that solve real-world problems. From designing
                  robust backend architectures to crafting intuitive user
                  interfaces, I bring technical excellence and creative
                  problem-solving to every project.
                </p>
              </div>
            </div>

            <div className="space-y-4 animate-slide-in-right">
              <div className="bg-gradient-to-br from-card to-card/50 p-6 rounded-xl card-shadow hover-scale backdrop-blur-sm border border-border/50 group">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Code2 className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-2xl mb-1 text-gradient">
                      6+ Years
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Professional Development Experience
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-card to-card/50 p-6 rounded-xl card-shadow hover-scale backdrop-blur-sm border border-border/50 group">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Trophy className="w-7 h-7 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-2xl mb-1 text-gradient">
                      20+ Projects
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Successfully Delivered Applications
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Education */}
          <div
            className="relative animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl blur-xl" />
            <div className="relative bg-gradient-to-br from-card via-card to-card/50 p-8 rounded-2xl card-shadow backdrop-blur-sm border border-border/50">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <GraduationCap className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Education</h3>
                  <p className="text-muted-foreground">Academic Background</p>
                </div>
              </div>

              <div className="relative border-l-2 border-gradient-to-b from-primary to-accent pl-8 space-y-6">
                <div className="relative group">
                  <div className="absolute -left-[33px] top-2 w-5 h-5 rounded-full bg-gradient-to-br from-primary to-accent ring-4 ring-background group-hover:scale-125 transition-transform" />
                  <div className="space-y-2">
                    <h4 className="font-bold text-xl">
                      M.Tech in Computer Science and Engineering
                    </h4>
                    <p className="text-primary font-semibold text-lg">
                      Amrita Vishwa Vidyapeetham
                    </p>
                    <p className="text-sm text-muted-foreground flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-accent" />
                      Bengaluru, India
                    </p>
                  </div>
                </div>
                <div className="relative group">
                  <div className="absolute -left-[33px] top-2 w-5 h-5 rounded-full bg-gradient-to-br from-primary to-accent ring-4 ring-background group-hover:scale-125 transition-transform" />
                  <div className="space-y-2">
                    <h4 className="font-bold text-xl">
                      B.E. in Computer Science and Engineering
                    </h4>
                    <p className="text-primary font-semibold text-lg">
                      Gujarat Technological University
                    </p>
                    <p className="text-sm text-muted-foreground flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-accent" />
                      Ahmedabad, India
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
