import { Phone, CalendarDays } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-plumber.jpg";

const Hero = () => (
  <section className="relative overflow-hidden bg-secondary">
    <div className="absolute inset-0">
      <img src={heroImage} alt="Professional plumber at work" className="h-full w-full object-cover opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/95 to-secondary/70" />
    </div>
    <div className="container relative mx-auto px-4 py-20 md:py-28 lg:py-36">
      <div className="max-w-2xl">
        <h1
          className="font-heading text-4xl font-extrabold leading-[1.08] tracking-tight text-secondary-foreground md:text-5xl lg:text-6xl text-balance animate-fade-up"
        >
          Fast. Reliable.
          <br />
          Plumbing Done Right.
        </h1>
        <p
          className="mt-5 max-w-lg text-lg text-secondary-foreground/80 font-body animate-fade-up"
          style={{ animationDelay: "100ms" }}
        >
          Licensed plumbers serving the greater metro area. Emergency service available 24/7 — we're always ready when you need us.
        </p>
        <a
          href="tel:+15551234567"
          className="mt-4 inline-flex items-center gap-2 font-heading text-2xl font-bold text-primary-foreground animate-fade-up"
          style={{ animationDelay: "150ms" }}
        >
          <Phone className="h-6 w-6" />
          (555) 123-4567
        </a>
        <div
          className="mt-8 flex flex-wrap gap-4 animate-fade-up"
          style={{ animationDelay: "200ms" }}
        >
          <a
            href="tel:+15551234567"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-body font-semibold px-7 py-3.5 rounded-lg shadow-lg shadow-accent/25 transition-all hover:shadow-xl hover:shadow-accent/30 active:scale-[0.97] animate-pulse-ring"
          >
            <Phone className="h-5 w-5" />
            Call Now
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-body font-semibold px-7 py-3.5 rounded-lg shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/30 active:scale-[0.97]"
          >
            <CalendarDays className="h-5 w-5" />
            Schedule Service
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
