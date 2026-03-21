import { ShieldCheck, Clock, DollarSign, ThumbsUp } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const items = [
  { icon: ShieldCheck, label: "Licensed & Insured" },
  { icon: Clock, label: "24/7 Emergency Service" },
  { icon: DollarSign, label: "Upfront Pricing" },
  { icon: ThumbsUp, label: "100% Satisfaction Guarantee" },
];

const TrustBar = () => (
  <section className="bg-primary py-5">
    <div className="container mx-auto px-4">
      <ScrollReveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {items.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center justify-center gap-2 text-primary-foreground font-body text-sm font-medium">
              <Icon className="h-5 w-5 shrink-0" />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default TrustBar;
