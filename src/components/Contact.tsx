import { Mail, MapPin, Linkedin, Github, Send, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full mb-4 animate-fade-in">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              Let's Connect
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-muted-foreground">
            Let's discuss your next project
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-slide-in-left">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <p className="text-muted-foreground mb-8">
                Feel free to reach out for collaborations, opportunities, or
                just a friendly chat about technology.
              </p>
            </div>

            <div className="space-y-4">
              <div className="group bg-gradient-to-br from-card via-card to-card/50 p-5 rounded-2xl card-shadow backdrop-blur-sm border border-border/50 hover-scale">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Email</h4>
                    <a
                      href="mailto:patelmeghavi.05@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      patelmeghavi.05@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/*<div className="group bg-gradient-to-br from-card via-card to-card/50 p-5 rounded-2xl card-shadow backdrop-blur-sm border border-border/50 hover-scale">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Location</h4>
                    <p className="text-muted-foreground text-sm">
                      Toronto, ON, Canada
                    </p>
                  </div>
                </div>
              </div>*/}

              <div className="group bg-gradient-to-br from-card via-card to-card/50 p-5 rounded-2xl card-shadow backdrop-blur-sm border border-border/50 hover-scale">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Linkedin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">LinkedIn</h4>
                    <a
                      href="https://linkedin.com/in/meghavi-patel-05"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors text-sm break-all"
                    >
                      linkedin.com/in/meghavi-patel-05
                    </a>
                  </div>
                </div>
              </div>

              <div className="group bg-gradient-to-br from-card via-card to-card/50 p-5 rounded-2xl card-shadow backdrop-blur-sm border border-border/50 hover-scale">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Github className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">GitHub</h4>
                    <a
                      href="https://meghavi-patel.github.io"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors text-sm break-all"
                    >
                      meghavi-patel.github.io
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-in-right">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl blur-xl" />
              <form
                onSubmit={handleSubmit}
                className="relative bg-gradient-to-br from-card via-card to-card/50 p-8 rounded-3xl card-shadow backdrop-blur-sm border border-border/50 space-y-6"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold mb-2"
                  >
                    Your Name
                  </label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    required
                    className="bg-background/50 backdrop-blur-sm border-border/50"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold mb-2"
                  >
                    Your Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    required
                    className="bg-background/50 backdrop-blur-sm border-border/50"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold mb-2"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project..."
                    rows={5}
                    required
                    className="bg-background/50 backdrop-blur-sm border-border/50"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/50 transition-all"
                  size="lg"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
