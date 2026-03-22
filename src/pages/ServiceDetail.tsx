import { useParams, Link } from "react-router-dom";
import EmergencyBanner from "@/components/EmergencyBanner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import ScrollReveal from "@/components/ScrollReveal";
import { useEffect } from "react";
import { Waves, Flame, Search, Wrench, GitBranch, CircleDot, Droplets, Fuel, ArrowRight, ArrowLeft } from "lucide-react";
import { seoConfig } from "@/lib/config";

const iconMap: Record<string, any> = { Waves, Flame, Search, Wrench, GitBranch, CircleDot, Droplets, Fuel };

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = seoConfig.services.find(s => s.slug === slug);

  useEffect(() => {
    if (service) {
      document.title = `${service.title} in ${seoConfig.address.city}, ${seoConfig.address.state} | ${seoConfig.businessName}`;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute("content", `${service.desc} Call ${seoConfig.phone} for ${service.title.toLowerCase()} in ${seoConfig.address.city}.`);
      }
    }
  }, [service]);

  if (!service) {
    return (
      <>
        <EmergencyBanner />
        <Navbar />
        <div className="py-32 text-center">
          <h1 className="font-heading text-3xl font-bold text-foreground mb-4">Service Not Found</h1>
          <Link to="/services" className="text-primary underline font-body">View all services</Link>
        </div>
        <Footer />
      </>
    );
  }

  const Icon = iconMap[service.icon] || Wrench;

  return (
    <>
      <EmergencyBanner />
      <Navbar />

      <section className="bg-secondary py-16 md:py-20">
        <div className="container mx-auto px-4">
          <Link to="/services" className="inline-flex items-center gap-1.5 text-secondary-foreground/70 font-body text-sm mb-4 hover:text-secondary-foreground transition-colors">
            <ArrowLeft className="h-4 w-4" />
            All Services
          </Link>
          <div className="flex items-center gap-4">
            <div className="h-14 w-14 rounded-lg bg-primary/20 flex items-center justify-center">
              <Icon className="h-7 w-7 text-primary-foreground" />
            </div>
            <h1 className="font-heading text-3xl md:text-5xl font-extrabold text-secondary-foreground animate-fade-up">
              {service.title}
            </h1>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <p className="text-lg text-muted-foreground font-body leading-relaxed mb-10">
                {service.desc}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={80}>
              <div className="bg-surface rounded-lg border border-border/50 p-6 md:p-8">
                <h2 className="font-heading text-xl font-bold text-foreground mb-4">Signs You Need This Service</h2>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {service.signs.map(sign => (
                    <li key={sign} className="flex items-start gap-2 text-foreground font-body text-sm">
                      <ArrowRight className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                      {sign}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={160}>
              <div className="mt-10 text-center">
                <p className="text-muted-foreground font-body mb-4">Ready to schedule? We're here to help.</p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a
                    href={seoConfig.phoneHref}
                    className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-body font-semibold px-7 py-3.5 rounded-lg shadow-lg shadow-accent/25 transition-all hover:shadow-xl active:scale-[0.97]"
                  >
                    Call {seoConfig.phone}
                  </a>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-body font-semibold px-7 py-3.5 rounded-lg shadow-lg shadow-primary/25 transition-all hover:shadow-xl active:scale-[0.97]"
                  >
                    Schedule Service
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </>
  );
};

export default ServiceDetail;
