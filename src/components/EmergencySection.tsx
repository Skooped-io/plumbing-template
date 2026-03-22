import { Phone, Clock } from "lucide-react";
import vanImage from "@/assets/service-van.jpg";
import ScrollReveal from "./ScrollReveal";
import { seoConfig, getImage } from "@/lib/config";

const EmergencySection = () => (
  <section className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <ScrollReveal>
        <div className="rounded-xl overflow-hidden border-2 border-accent/30 bg-surface shadow-lg md:flex">
          <div className="md:w-1/2">
            <img
              src={getImage(null, 'service_van', vanImage)}
              alt={`${seoConfig.businessName} service van`}
              className="h-64 md:h-full w-full object-cover"
            />
          </div>
          <div className="p-8 md:p-12 md:w-1/2 flex flex-col justify-center">
            <span className="inline-flex items-center gap-1.5 text-accent font-body font-semibold text-sm mb-3">
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              EMERGENCY SERVICE
            </span>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
              {seoConfig.industry} Emergency?
              <br />
              We're On Our Way.
            </h2>
            <div className="flex items-center gap-2 mt-4 text-muted-foreground font-body">
              <Clock className="h-5 w-5 text-primary" />
              <span>Average response time: <strong className="text-foreground">{seoConfig.emergencyResponseTime}</strong></span>
            </div>
            <a
              href={seoConfig.phoneHref}
              className="mt-6 inline-flex items-center gap-2 bg-accent text-accent-foreground font-body font-semibold px-7 py-3.5 rounded-lg shadow-lg shadow-accent/20 transition-all hover:shadow-xl active:scale-[0.97] w-fit animate-pulse-ring"
            >
              <Phone className="h-5 w-5" />
              Call {seoConfig.phone}
            </a>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default EmergencySection;
