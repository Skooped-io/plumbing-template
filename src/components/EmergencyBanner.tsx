import { Phone } from "lucide-react";
import { seoConfig } from "@/lib/config";

const EmergencyBanner = () => (
  <div className="sticky top-0 z-50 bg-accent px-4 py-2.5">
    <div className="container mx-auto flex items-center justify-center gap-3 text-sm font-body font-medium text-accent-foreground">
      <span className="text-lg">🚨</span>
      <span>Emergency? Call Now:</span>
      <a
        href={seoConfig.phoneHref}
        className="inline-flex items-center gap-1.5 font-bold underline underline-offset-2 transition-opacity hover:opacity-80 active:scale-[0.97]"
      >
        <Phone className="h-3.5 w-3.5" />
        {seoConfig.phone}
      </a>
      <span className="hidden sm:inline">— Available 24/7</span>
    </div>
  </div>
);

export default EmergencyBanner;
