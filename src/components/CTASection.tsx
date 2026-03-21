import { Phone, CalendarDays } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "./ScrollReveal";

const CTASection = () => (
  <section className="py-20 md:py-28 bg-dark-section">
    <div className="container mx-auto px-4 text-center">
      <ScrollReveal>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark-section-foreground max-w-xl mx-auto text-balance">
          Don't let a small leak become a big problem.
        </h2>
        <p className="mt-4 text-dark-section-foreground/70 font-body max-w-md mx-auto">
          Our licensed plumbers are standing by. Call now or schedule at your convenience.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="tel:+15551234567"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-body font-semibold px-7 py-3.5 rounded-lg shadow-lg shadow-accent/25 transition-all hover:shadow-xl active:scale-[0.97]"
          >
            <Phone className="h-5 w-5" />
            (555) 123-4567
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
