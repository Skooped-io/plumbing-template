import { Phone, CalendarDays } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "./ScrollReveal";
import { seoConfig } from "@/lib/config";

const CTASection = () => (
  <section className="py-20 md:py-28 bg-dark-section">
    <div className="container mx-auto px-4 text-center">
      <ScrollReveal>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark-section-foreground max-w-xl mx-auto text-balance">
          {seoConfig.cta.headline}
        </h2>
        <p className="mt-4 text-dark-section-foreground/70 font-body max-w-md mx-auto">
          {seoConfig.cta.subtext}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href={seoConfig.phoneHref}
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-body font-semibold px-7 py-3.5 rounded-lg shadow-lg shadow-accent/25 transition-all hover:shadow-xl active:scale-[0.97]"
          >
            <Phone className="h-5 w-5" />
            {seoConfig.phone}
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-body font-semibold px-7 py-3.5 rounded-lg shadow-lg shadow-primary/25 transition-all hover:shadow-xl active:scale-[0.97]"
          >
            <CalendarDays className="h-5 w-5" />
            Schedule Service
          </Link>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default CTASection;
