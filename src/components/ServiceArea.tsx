import { MapPin } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { seoConfig } from "@/lib/config";

const ServiceArea = () => (
  <section className="py-20 md:py-28 bg-surface">
    <div className="container mx-auto px-4">
      <ScrollReveal>
        <div className="md:flex md:items-start md:gap-12">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">Service Area</h2>
            <p className="text-muted-foreground font-body mb-6">
              We proudly serve the {seoConfig.serviceArea.toLowerCase()} and surrounding communities. Not sure if we cover your neighborhood? Give us a call.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {seoConfig.serviceAreaCities.map(city => (
                <div key={city} className="flex items-center gap-1.5 text-foreground font-body text-sm">
                  <MapPin className="h-3.5 w-3.5 text-primary shrink-0" />
                  {city}
                </div>
              ))}
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="rounded-lg bg-primary/5 border border-primary/20 h-64 md:h-80 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-primary/40 mx-auto mb-2" />
                <p className="text-muted-foreground font-body text-sm">Map placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default ServiceArea;
