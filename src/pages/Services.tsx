import EmergencyBanner from "@/components/EmergencyBanner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import ScrollReveal from "@/components/ScrollReveal";
import SEOHead from "@/components/SEOHead";
import { Waves, Flame, Search, Wrench, GitBranch, CircleDot, Droplets, Fuel, ArrowRight } from "lucide-react";
import { seoConfig } from "@/lib/config";

const iconMap: Record<string, any> = { Waves, Flame, Search, Wrench, GitBranch, CircleDot, Droplets, Fuel };

const Services = () => (
  <>
    <SEOHead page="services" />
    <EmergencyBanner />
    <Navbar />

    <section className="bg-secondary py-16 md:py-20">
      <div className="container mx-auto px-4">
        <h1 className="font-heading text-3xl md:text-5xl font-extrabold text-secondary-foreground animate-fade-up">Our Services</h1>
        <p className="mt-4 text-secondary-foreground/80 font-body max-w-xl animate-fade-up" style={{ animationDelay: "100ms" }}>
          Comprehensive {seoConfig.industry.toLowerCase()} solutions for homes and businesses. Every job backed by our satisfaction guarantee.
        </p>
      </div>
    </section>

    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 space-y-8">
        {seoConfig.services.map((service, i) => {
          const Icon = iconMap[service.icon] || Wrench;
          return (
            <ScrollReveal key={service.title} delay={i * 60}>
              <div id={service.slug} className="bg-surface rounded-lg border border-border/50 shadow-sm p-6 md:p-8 md:flex md:gap-8">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <h2 className="font-heading text-xl md:text-2xl font-bold text-foreground">{service.title}</h2>
                  </div>
                  <p className="text-muted-foreground font-body leading-relaxed">{service.desc}</p>
                </div>
                <div className="mt-4 md:mt-0 md:w-64 shrink-0">
                  <h4 className="font-heading text-sm font-bold text-foreground mb-2">Signs you need this service:</h4>
                  <ul className="space-y-1">
                    {service.signs.map(s => (
                      <li key={s} className="text-muted-foreground font-body text-sm flex items-start gap-1.5">
                        <ArrowRight className="h-3.5 w-3.5 text-primary mt-0.5 shrink-0" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </section>

    <CTASection />
    <Footer />
  </>
);

export default Services;
