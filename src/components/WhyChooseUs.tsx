import { DollarSign, Award, CalendarCheck, Shield } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { seoConfig } from "@/lib/config";

const icons = [DollarSign, Award, CalendarCheck, Shield];

const WhyChooseUs = () => (
  <section className="py-20 md:py-28 bg-surface">
    <div className="container mx-auto px-4">
      <ScrollReveal>
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Why Choose {seoConfig.businessNameShort}</h2>
          <p className="mt-3 text-muted-foreground font-body max-w-lg mx-auto">
            Trusted by thousands of homeowners for honest, quality {seoConfig.industry.toLowerCase()} work.
          </p>
        </div>
      </ScrollReveal>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {seoConfig.whyChooseUs.map((feature, i) => {
          const Icon = icons[i] || Shield;
          return (
            <ScrollReveal key={feature.title} delay={i * 80}>
              <div className="rounded-lg bg-background p-6 border border-border/50 h-full">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">{feature.desc}</p>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
