import EmergencyBanner from "@/components/EmergencyBanner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import ScrollReveal from "@/components/ScrollReveal";
import { ShieldCheck, Users, Wrench, Heart } from "lucide-react";

const About = () => (
  <>
    <EmergencyBanner />
    <Navbar />

    {/* Page header */}
    <section className="bg-secondary py-16 md:py-20">
      <div className="container mx-auto px-4">
        <h1 className="font-heading text-3xl md:text-5xl font-extrabold text-secondary-foreground animate-fade-up">About AquaFlow</h1>
        <p className="mt-4 text-secondary-foreground/80 font-body max-w-xl animate-fade-up" style={{ animationDelay: "100ms" }}>
          Family-owned and operated since 2008. We've built our reputation one happy customer at a time.
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
              <p>
                AquaFlow Plumbing started with a single van and a commitment to doing plumbing the right way. Founder and master plumber Mike Torres spent 15 years working for larger companies before deciding homeowners deserved better — honest pricing, clean work, and plumbers who actually show up on time.
              </p>
              <p>
                Today our team of 12 licensed plumbers serves thousands of homes and businesses across the metro area. We've grown, but our values haven't changed: treat every home like it's our own, price every job fairly, and guarantee every repair.
              </p>
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
          {[
            { icon: ShieldCheck, title: "Integrity", desc: "Upfront pricing with no hidden fees. Ever." },
            { icon: Users, title: "Family Values", desc: "We treat your home the way we'd treat ours." },
            { icon: Wrench, title: "Craftsmanship", desc: "Licensed masters who take pride in quality work." },
            { icon: Heart, title: "Community", desc: "Proud supporters of local schools and charities." },
          ].map(({ icon: Icon, title, desc }, i) => (
            <ScrollReveal key={title} delay={i * 80}>
              <div className="text-center p-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-foreground mb-2">{title}</h3>
                <p className="text-muted-foreground font-body text-sm">{desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Certifications */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 text-center">
        <ScrollReveal>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">Certifications & Licenses</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {["Master Plumber License #MP-2847", "State Contractor License #SC-19472", "EPA Lead-Safe Certified", "BBB A+ Rated"].map(cert => (
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
