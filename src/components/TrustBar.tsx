import { ShieldCheck, Clock, DollarSign, ThumbsUp } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { seoConfig } from "@/lib/config";

const icons = [ShieldCheck, Clock, DollarSign, ThumbsUp];

const TrustBar = () => (
  <section className="bg-primary py-5">
    <div className="container mx-auto px-4">
      <ScrollReveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {seoConfig.trustBarItems.map((label, i) => {
            const Icon = icons[i] || ShieldCheck;
            return (
              <div key={label} className="flex items-center justify-center gap-2 text-primary-foreground font-body text-sm font-medium">
                <Icon className="h-5 w-5 shrink-0" />
                <span>{label}</span>
              </div>
            );
          })}
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default TrustBar;
