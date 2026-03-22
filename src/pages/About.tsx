import EmergencyBanner from "@/components/EmergencyBanner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import ScrollReveal from "@/components/ScrollReveal";
import SEOHead from "@/components/SEOHead";
import { ShieldCheck, Users, Wrench, Heart } from "lucide-react";
import { seoConfig } from "@/lib/config";

const valueIcons = [ShieldCheck, Users, Wrench, Heart];

const About = () => (
  <>
    <SEOHead page="about" />
    <EmergencyBanner />
    <Navbar />

    {/* Page header */}
    <section className="bg-secondary py-16 md:py-20">
      <div className="container mx-auto px-4">
        <h1 className="font-heading text-3xl md:text-5xl font-extrabold text-secondary-foreground animate-fade-up">About {seoConfig.businessNameShort}</h1>
        <p className="mt-4 text-secondary-foreground/80 font-body max-w-xl animate-fade-up" style={{ animationDelay: "100ms" }}>
          {seoConfig.aboutSubtitle}
        </p>
      </div>
    </section>

    {/* Story */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
              {seoConfig.about.split("\n\n").map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* Values */}
    <section className="py-20 bg-surface">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground text-center mb-12">What We Stand For</h2>
        </ScrollReveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {seoConfig.values.map((value, i) => {
            const Icon = valueIcons[i] || ShieldCheck;
            return (
              <ScrollReveal key={value.title} delay={i * 80}>
                <div className="text-center p-6">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-foreground mb-2">{value.title}</h3>
                  <p className="text-muted-foreground font-body text-sm">{value.desc}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>

    {/* Certifications */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 text-center">
        <ScrollReveal>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">Certifications & Licenses</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {seoConfig.certifications.map(cert => (
              <div key={cert} className="bg-surface border border-border/50 rounded-lg px-5 py-3 font-body text-sm text-foreground">
                {cert}
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>

    <CTASection />
    <Footer />
  </>
);

export default About;
