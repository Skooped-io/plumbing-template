import { useParams, Link } from "react-router-dom";
import EmergencyBanner from "@/components/EmergencyBanner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import ScrollReveal from "@/components/ScrollReveal";
import { useEffect } from "react";
import { Waves, Flame, Search, Wrench, GitBranch, CircleDot, Droplets, Fuel, ArrowRight, ArrowLeft, Phone, MapPin, Clock, ChevronRight } from "lucide-react";
import { seoConfig } from "@/lib/config";

const iconMap: Record<string, any> = { Waves, Flame, Search, Wrench, GitBranch, CircleDot, Droplets, Fuel };

// Generate realistic placeholder content based on service name and industry
function getServiceContent(service: typeof seoConfig.services[0]) {
  const city = seoConfig.address.city;
  const business = seoConfig.businessName;
  const industry = seoConfig.industry.toLowerCase();

  const contentMap: Record<string, { paragraphs: string[]; process: string[] }> = {
    "emergency-plumbing": {
      paragraphs: [
        `When a plumbing emergency strikes, every minute counts. ${business} provides rapid-response emergency ${industry} services to homes and businesses across ${city} and the surrounding area. Our technicians are on call 24/7, with an average response time of just ${seoConfig.emergencyResponseTime}.`,
        `From burst pipes flooding your basement to sewage backups threatening your family's health, we've seen it all and fixed it all. Our emergency team arrives with fully stocked trucks so we can diagnose and resolve most emergencies in a single visit — no waiting for parts, no return trips.`,
        `We understand that emergencies don't wait for business hours. That's why we never charge extra for nights, weekends, or holidays. You get the same honest pricing at 2 AM that you'd get at 2 PM.`,
      ],
      process: [
        "24/7 phone support with a real person — no answering machines",
        "Rapid dispatch with GPS-tracked arrival",
        "Immediate water shutoff and damage mitigation",
        "Full diagnostic and transparent repair estimate",
        "Complete repair with quality parts and materials",
        "Post-repair inspection and cleanup",
      ],
    },
    "drain-sewer": {
      paragraphs: [
        `Clogged drains and sewer line issues are more than an inconvenience — left untreated, they can cause serious damage to your ${city} home's foundation and plumbing system. ${business} offers comprehensive drain cleaning and sewer repair services using the latest technology.`,
        `Our team uses high-definition camera inspections to pinpoint the exact location and cause of blockages before we begin any work. This means no guesswork, no unnecessary digging, and no surprise charges. For sewer line repairs, we specialize in trenchless methods that restore your pipes without tearing up your yard.`,
        `Whether it's a simple kitchen drain clog or a major sewer line collapse, we have the equipment and expertise to get your drains flowing freely again. All drain services come with our satisfaction guarantee.`,
      ],
      process: [
        "Video camera inspection of drain and sewer lines",
        "Hydro-jetting for stubborn blockages",
        "Trenchless sewer repair and replacement",
        "Root intrusion removal and prevention",
        "Drain line descaling and maintenance",
        "Complete system flush and flow verification",
      ],
    },
    "water-heater": {
      paragraphs: [
        `Nothing ruins your morning like a cold shower. ${business} provides expert water heater repair, replacement, and installation services throughout ${city}. Whether you have a traditional tank unit or a modern tankless system, our licensed technicians can diagnose and fix the problem fast.`,
        `We work with all major brands and can help you choose the right water heater for your household's needs and budget. If your unit is beyond repair, we offer same-day installation on most models so you're never without hot water for long.`,
        `Regular water heater maintenance can extend the life of your unit by years and improve energy efficiency. Ask about our annual maintenance plans that include flushing, anode rod inspection, and safety checks.`,
      ],
      process: [
        "Diagnostic testing of heating elements and thermostats",
        "Anode rod inspection and replacement",
        "Tank flushing and sediment removal",
        "Pressure relief valve testing",
        "New unit sizing consultation and installation",
        "Energy efficiency evaluation and recommendations",
      ],
    },
  };

  // Default content for services not explicitly mapped
  const defaultContent = {
    paragraphs: [
      `${business} delivers professional ${service.title.toLowerCase()} services to residential and commercial customers across ${city} and the greater ${seoConfig.serviceArea}. With over ${new Date().getFullYear() - parseInt(seoConfig.yearEstablished)} years of experience, our licensed technicians have the skills and knowledge to handle any job, big or small.`,
      `We believe in doing the job right the first time. That means thorough diagnostics, transparent pricing, and quality workmanship backed by our satisfaction guarantee. Every technician on our team is licensed, insured, and committed to treating your property with respect.`,
      `Don't let ${industry} problems disrupt your daily life. Whether you need routine maintenance or a complex repair, ${business} is the name ${city} trusts. Call us today for a free estimate and see why thousands of homeowners choose us year after year.`,
    ],
    process: [
      "Thorough inspection and problem diagnosis",
      "Clear explanation of findings and repair options",
      "Upfront pricing with no hidden fees",
      "Professional repair using quality materials",
      "System testing and performance verification",
      "Cleanup and final walkthrough with homeowner",
    ],
  };

  return contentMap[service.slug] || defaultContent;
}

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = seoConfig.services.find(s => s.slug === slug);

  useEffect(() => {
    if (service) {
      document.title = `${service.title} in ${seoConfig.address.city}, ${seoConfig.address.state} | ${seoConfig.businessName}`;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute("content", `Professional ${service.title.toLowerCase()} services in ${seoConfig.address.city}, ${seoConfig.address.state}. ${service.desc} Call ${seoConfig.phone} for fast, reliable service.`);
      }

      // Schema.org Service markup
      let script = document.getElementById("schema-service-jsonld") as HTMLScriptElement | null;
      if (!script) {
        script = document.createElement("script");
        script.id = "schema-service-jsonld";
        script.type = "application/ld+json";
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": service.title,
        "description": service.desc,
        "provider": {
          "@type": "LocalBusiness",
          "name": seoConfig.businessName,
          "telephone": seoConfig.phone,
          "address": {
            "@type": "PostalAddress",
            "streetAddress": seoConfig.address.street,
            "addressLocality": seoConfig.address.city,
            "addressRegion": seoConfig.address.state,
            "postalCode": seoConfig.address.zip,
          },
        },
        "areaServed": seoConfig.serviceArea,
      });

      return () => {
        const el = document.getElementById("schema-service-jsonld");
        if (el) el.remove();
      };
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
  const content = getServiceContent(service);
  const relatedServices = seoConfig.services.filter(s => s.slug !== slug).slice(0, 4);

  return (
    <>
      <EmergencyBanner />
      <Navbar />

      {/* Hero Banner */}
      <section className="bg-secondary py-16 md:py-20">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-1.5 text-sm font-body text-secondary-foreground/60">
              <li><Link to="/" className="hover:text-secondary-foreground transition-colors">Home</Link></li>
              <li><ChevronRight className="h-3.5 w-3.5" /></li>
              <li><Link to="/services" className="hover:text-secondary-foreground transition-colors">Services</Link></li>
              <li><ChevronRight className="h-3.5 w-3.5" /></li>
              <li className="text-secondary-foreground font-medium">{service.title}</li>
            </ol>
          </nav>
          <div className="flex items-center gap-4">
            <div className="h-14 w-14 rounded-lg bg-primary/20 flex items-center justify-center">
              <Icon className="h-7 w-7 text-primary-foreground" />
            </div>
            <h1 className="font-heading text-3xl md:text-5xl font-extrabold text-secondary-foreground animate-fade-up">
              {service.title}
            </h1>
          </div>
          <p className="mt-4 text-secondary-foreground/80 font-body max-w-2xl animate-fade-up" style={{ animationDelay: "100ms" }}>
            Professional {service.title.toLowerCase()} services in {seoConfig.address.city}, {seoConfig.address.state}. Licensed, insured, and guaranteed.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-10 lg:gap-14">
            {/* Content Column */}
            <div className="lg:col-span-2 space-y-10">
              {/* Description */}
              <ScrollReveal>
                <div className="space-y-5">
                  {content.paragraphs.map((p, i) => (
                    <p key={i} className="text-muted-foreground font-body leading-relaxed text-[1.05rem]">
                      {p}
                    </p>
                  ))}
                </div>
              </ScrollReveal>

              {/* Signs Section */}
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

              {/* What's Included */}
              <ScrollReveal delay={120}>
                <div className="bg-surface rounded-lg border border-border/50 p-6 md:p-8">
                  <h2 className="font-heading text-xl font-bold text-foreground mb-4">Our Process</h2>
                  <ol className="space-y-3">
                    {content.process.map((step, i) => (
                      <li key={i} className="flex items-start gap-3 font-body text-sm text-foreground">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-heading text-xs font-bold">
                          {i + 1}
                        </span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>
              </ScrollReveal>

              {/* CTA */}
              <ScrollReveal delay={160}>
                <div className="bg-primary/5 rounded-lg p-6 md:p-8 text-center">
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-2">Get a Free Estimate</h2>
                  <p className="text-muted-foreground font-body mb-6">Ready to schedule? We're here to help.</p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <a
                      href={seoConfig.phoneHref}
                      className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-body font-semibold px-7 py-3.5 rounded-lg shadow-lg shadow-accent/25 transition-all hover:shadow-xl active:scale-[0.97]"
                    >
                      <Phone className="h-4 w-4" />
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

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* NAP Card */}
              <ScrollReveal delay={60}>
                <div className="bg-surface rounded-lg border border-border/50 p-6 sticky top-24">
                  <h3 className="font-heading text-lg font-bold text-foreground mb-4">{seoConfig.businessName}</h3>
                  <div className="space-y-3 text-sm font-body">
                    <div className="flex items-start gap-2.5 text-muted-foreground">
                      <Phone className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                      <a href={seoConfig.phoneHref} className="hover:text-primary transition-colors font-medium">{seoConfig.phone}</a>
                    </div>
                    <div className="flex items-start gap-2.5 text-muted-foreground">
                      <MapPin className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                      <span>{seoConfig.address.full}</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-muted-foreground">
                      <Clock className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                      <div>
                        <p>{seoConfig.hours.weekday}</p>
                        <p>{seoConfig.hours.saturday}</p>
                        <p className="text-primary font-medium">{seoConfig.hours.emergency}</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-border/50">
                    <p className="text-xs text-muted-foreground font-body">
                      Serving {seoConfig.serviceArea} · License #{seoConfig.licenseNumber}
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              {/* Related Services */}
              <ScrollReveal delay={120}>
                <div className="bg-surface rounded-lg border border-border/50 p-6">
                  <h3 className="font-heading text-lg font-bold text-foreground mb-4">Related Services</h3>
                  <ul className="space-y-2">
                    {relatedServices.map(rs => {
                      const RSIcon = iconMap[rs.icon] || Wrench;
                      return (
                        <li key={rs.slug}>
                          <Link
                            to={`/services/${rs.slug}`}
                            className="flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-body text-foreground hover:bg-primary/5 transition-colors group"
                          >
                            <RSIcon className="h-4 w-4 text-primary shrink-0" />
                            <span className="group-hover:text-primary transition-colors">{rs.title}</span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                  <Link
                    to="/services"
                    className="mt-4 inline-flex items-center gap-1.5 text-primary font-body text-sm font-medium hover:underline"
                  >
                    View all services
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </ScrollReveal>
            </aside>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </>
  );
};

export default ServiceDetail;
