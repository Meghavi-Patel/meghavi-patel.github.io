import { Globe, Palette, Server, Sparkles } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Full Stack Development",
      description: "End-to-end web applications with scalable backend architecture and intuitive frontend interfaces using modern technologies like Spring Boot, React, and Angular.",
      features: ["Custom Web Applications", "RESTful API Development", "Database Design & Optimization", "Responsive UI/UX Implementation"],
    },
    {
      icon: Server,
      title: "Backend Architecture",
      description: "Robust and scalable backend solutions with microservices architecture, implementing security best practices and optimized database queries.",
      features: ["Microservices Design", "Spring Boot Applications", "Database Management", "Security Implementation"],
    },
    {
      icon: Palette,
      title: "Ads & Poster Design",
      description: "Creative digital designs tailored for businesses, including promotional materials, social media graphics, and marketing collateral.",
      features: ["Social Media Graphics", "Marketing Materials", "Brand Promotion", "Digital Advertisements"],
    },
  ];

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full mb-4 animate-fade-in">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">What I Offer</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Services</span>
          </h2>
          <p className="text-muted-foreground">
            What I can do for you
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative bg-gradient-to-br from-card via-card to-card/50 p-8 rounded-3xl card-shadow hover-scale backdrop-blur-sm border border-border/50 h-full flex flex-col">
                <div className="relative w-20 h-20 rounded-3xl bg-gradient-to-br from-primary via-accent to-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-3xl animate-pulse opacity-50" />
                  <service.icon className="w-10 h-10 text-white relative z-10" />
                </div>
                
                <h3 className="text-2xl font-bold mb-3 group-hover:text-gradient transition-all">{service.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
                  {service.description}
                </p>
                
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-foreground/80 group/item">
                      <span className="w-2 h-2 rounded-full bg-gradient-to-br from-primary to-accent group-hover/item:scale-150 transition-transform" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
