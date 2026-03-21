import EmergencyBanner from "@/components/EmergencyBanner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import ScrollReveal from "@/components/ScrollReveal";
import { Tag, Percent, Users, Snowflake } from "lucide-react";

const specials = [
  { icon: Tag, title: "$50 Off Water Heater Installation", desc: "Save on tank or tankless water heater installation. Mention this offer when scheduling.", expires: "Valid through March 2026" },
  { icon: Percent, title: "Free Drain Camera Inspection", desc: "Get a complimentary camera inspection with any drain cleaning service. See exactly what's going on.", expires: "Ongoing" },
  { icon: Snowflake, title: "Winter Pipe Protection Package", desc: "Pipe insulation and freeze prevention check for just $149. Protect your home before the cold hits.", expires: "Seasonal offer" },
  { icon: Users, title: "Military & Senior Discount", desc: "10% off all services for active military, veterans, and seniors 65+. Thank you for your service.", expires: "Always available" },
];

const Specials = () => (
  <>
    <EmergencyBanner />
    <Navbar />

    <section className="bg-secondary py-16 md:py-20">
      <div className="container mx-auto px-4">
        <h1 className="font-heading text-3xl md:text-5xl font-extrabold text-secondary-foreground animate-fade-up">Current Specials</h1>
        <p className="mt-4 text-secondary-foreground/80 font-body max-w-xl animate-fade-up" style={{ animationDelay: "100ms" }}>
          Take advantage of our current promotions and save on quality plumbing services.
        </p>
      </div>
    </section>

    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {specials.map(({ icon: Icon, title, desc, expires }, i) => (
            <ScrollReveal key={title} delay={i * 80}>
              <div className="bg-surface rounded-lg border-2 border-primary/20 p-6 md:p-8 h-full flex flex-col">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-2">{title}</h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed flex-1">{desc}</p>
                <span className="mt-4 inline-block text-xs font-body font-medium text-primary bg-primary/10 rounded-full px-3 py-1 w-fit">
                  {expires}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    <CTASection />
    <Footer />
  </>
);

export default Specials;
