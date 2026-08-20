import { Trophy } from "lucide-react";
const Achievements = () => {
  return (
    <section id="achievements" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full mb-4 animate-fade-in">
            <Trophy className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              Achievements
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Achievements</span>
          </h2>
          <p className="text-muted-foreground">
            A showcase of my proudest accomplishments
          </p>
        </div>
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="relative animate-fade-in group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative bg-gradient-to-br from-card via-card to-card/50 p-6 md:p-8 rounded-2xl card-shadow hover-scale backdrop-blur-sm border border-border/50">
              <div className="space-y-3">
                <div className="flex items-start gap-3 group/item">
                  <span className="w-2 h-2 rounded-full bg-gradient-to-br from-primary to-accent group-hover/item:scale-150 transition-transform mt-2" />
                  <div>
                    <h4 className="font-bold text-lg">
                      Paper published on "An Automated University Gate Pass
                      Monitoring System Using Deep Learning
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Published in: International Conference on Communication,
                      Control, and Information Sciences (ICCISc-2021)
                    </p>
                    <p className="text-sm text-foreground/80 mt-2">
                      Designed an automated gate pass system using real-time
                      face recognition for campus security. The system verifies
                      students by matching live video input with stored images,
                      logs entries in an e-register, and sends notifications to
                      the student. A graphical user interface (GUI) enables easy
                      monitoring of all activities.
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

export default Achievements;
