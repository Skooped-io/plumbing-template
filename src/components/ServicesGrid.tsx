import { Waves, Flame, Search, Wrench, GitBranch, CircleDot, Droplets, Fuel } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "./ScrollReveal";

const services = [
  { icon: Waves, title: "Drain Cleaning" },
  { icon: Flame, title: "Water Heater Repair" },
  { icon: Search, title: "Leak Detection" },
  { icon: Wrench, title: "Pipe Repair" },
  { icon: GitBranch, title: "Sewer Line" },
  { icon: CircleDot, title: "Toilet Repair" },
  { icon: Droplets, title: "Faucet Installation" },
  { icon: Fuel, title: "Gas Line" },
];

const ServicesGrid = () => (
  <section className="py-20 md:py-28 bg-background">
    <div className="container mx-auto px-4">
      <ScrollReveal>
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Our Services</h2>
          <p className="mt-3 text-muted-foreground font-body max-w-lg mx-auto">
            From routine maintenance to emergency repairs, we handle it all with expertise and care.
          </p>
        </div>
      </ScrollReveal>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {services.map(({ icon: Icon, title }, i) => (
          <ScrollReveal key={title} delay={i * 70}>
            <Link
              to="/services"
              className="group flex flex-col items-center gap-4 rounded-lg bg-surface p-6 md:p-8 shadow-sm hover:shadow-md transition-all active:scale-[0.97] border border-border/50"
            >
              <div className="h-14 w-14 rounded-lg bg-primary/10 flex items-center justify-center transition-colors group-hover:bg-primary/20">
                <Icon className="h-7 w-7 text-primary" />
              </div>
              <span className="font-heading text-sm md:text-base font-semibold text-foreground text-center">{title}</span>
            </Link>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesGrid;
