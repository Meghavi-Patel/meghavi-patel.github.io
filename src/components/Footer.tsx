import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary/30 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 Meghavi Patel. All rights reserved.
          </p>
          
          <p className="text-sm text-muted-foreground flex items-center gap-2">
            Built with <Heart className="w-4 h-4 text-primary fill-primary" /> and passion
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
