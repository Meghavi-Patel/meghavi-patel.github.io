import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Sparkles,
  Code2,
  Database,
  Server,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/meghavi-profile.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-16 relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5"
    >
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-20" />

      {/* Floating Geometric Shapes */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-tr from-accent/20 to-primary/20 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      {/* Floating Icons */}
      <div className="absolute top-32 left-[15%] w-16 h-16 bg-primary/10 rounded-2xl backdrop-blur-sm flex items-center justify-center animate-float border border-primary/20">
        <Code2 className="w-8 h-8 text-primary" />
      </div>
      <div
        className="absolute top-48 right-[20%] w-14 h-14 bg-accent/10 rounded-2xl backdrop-blur-sm flex items-center justify-center animate-float border border-accent/20"
        style={{ animationDelay: "0.5s" }}
      >
        <Database className="w-7 h-7 text-accent" />
      </div>
      <div
        className="absolute bottom-32 right-[15%] w-12 h-12 bg-primary/10 rounded-2xl backdrop-blur-sm flex items-center justify-center animate-float border border-primary/20"
        style={{ animationDelay: "1s" }}
      >
        <Server className="w-6 h-6 text-primary" />
      </div>

      {/* Decorative Lines */}
      <div className="absolute top-1/4 left-0 w-64 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute bottom-1/4 right-0 w-96 h-px bg-gradient-to-l from-transparent via-accent/50 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-slide-in-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full">
              <Sparkles className="w-4 h-4 text-primary" />
              <p className="text-sm font-medium text-primary">
                Hello there, nice to meet you
              </p>
            </div>

            <div className="space-y-2">
              <h1 className="text-6xl md:text-8xl font-bold leading-none tracking-tight">
                I am
              </h1>
              <h1 className="text-6xl md:text-8xl font-bold leading-none tracking-tight">
                <span className="relative inline-block">
                  <span className="text-gradient">Meghavi</span>
                  <svg
                    className="absolute -bottom-2 left-0 w-full"
                    height="12"
                    viewBox="0 0 200 12"
                    fill="none"
                  >
                    <path
                      d="M2 10C60 2 140 2 198 10"
                      stroke="hsl(var(--primary))"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h1>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-12 h-px bg-gradient-to-r from-primary to-transparent" />
                <h2 className="text-2xl md:text-3xl font-semibold text-foreground/90">
                  Full Stack Java Developer
                </h2>
              </div>
            </div>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
              Crafting end-to-end web applications with a focus on{" "}
              <span className="text-primary font-semibold">performance</span>,{" "}
              <span className="text-primary font-semibold">security</span>, and{" "}
              <span className="text-primary font-semibold">
                user experience
              </span>
              . Passionate about transforming ideas into innovative digital
              solutions that deliver real value.
            </p>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap gap-2">
              {["Java", "Spring Boot", "React", "Angular"].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 bg-secondary/80 backdrop-blur-sm text-sm font-medium rounded-full border border-border/50"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Button
                size="lg"
                className="group elegant-shadow bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/50 transition-all duration-300"
              >
                <a href="#portfolio" className="flex items-center gap-2">
                  View My Work
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="backdrop-blur-sm hover-scale"
              >
                <a href="#contact">Let's Talk</a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 pt-4">
              <a
                href="https://github.com/meghavi-patel.github.io"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-secondary/80 backdrop-blur-sm border border-border/50 flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 hover-scale group"
              >
                <Github className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </a>
              <a
                href="https://linkedin.com/in/meghavi-patel-05"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-secondary/80 backdrop-blur-sm border border-border/50 flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 hover-scale group"
              >
                <Linkedin className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </a>
              <a
                href="mailto:patelmeghavi.05@gmail.com"
                className="w-12 h-12 rounded-xl bg-secondary/80 backdrop-blur-sm border border-border/50 flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 hover-scale group"
              >
                <Mail className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center md:justify-end animate-slide-in-right">
            <div className="relative">
              {/* Gradient Orb Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-primary rounded-full blur-3xl opacity-30 animate-pulse" />

              {/* Rotating Border */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-accent to-primary p-1 animate-spin-slow">
                <div className="w-full h-full rounded-full bg-background" />
              </div>

              {/* Profile Image Container */}
              <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden elegant-shadow ring-2 ring-primary/20">
                {/* Glassmorphism Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent z-10" />
                <img
                  src={profileImage}
                  alt="Meghavi Patel"
                  className="w-full object-cover"
                  style={{
                    imageRendering: "-webkit-optimize-contrast",
                    backfaceVisibility: "hidden",
                    transform: "translateZ(0)",
                    objectPosition: "center center",
                  }}
                  loading="eager"
                />
              </div>

              {/* Floating Stats Badge */}
              <div
                className="absolute -bottom-4 -right-4 bg-card/90 backdrop-blur-md p-4 rounded-2xl card-shadow border border-border/50 animate-fade-in"
                style={{ animationDelay: "0.5s" }}
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-gradient">6+</div>
                  <div className="text-xs text-muted-foreground">Years Exp</div>
                </div>
              </div>

              {/* Floating Stats Badge 2 */}
              <div
                className="absolute -top-4 -left-4 bg-card/90 backdrop-blur-md p-4 rounded-2xl card-shadow border border-border/50 animate-fade-in"
                style={{ animationDelay: "0.7s" }}
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-gradient">20+</div>
                  <div className="text-xs text-muted-foreground">Projects</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modern Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-muted-foreground uppercase tracking-wider">
          Scroll
        </span>
        <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
