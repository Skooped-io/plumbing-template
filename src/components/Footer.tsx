import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Droplets } from "lucide-react";
import { seoConfig } from "@/lib/config";

const Footer = () => (
  <footer className="bg-secondary text-secondary-foreground">
    <div className="container mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="h-9 w-9 rounded-lg bg-primary flex items-center justify-center">
              <Droplets className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="font-heading text-lg font-bold">{seoConfig.businessNameShort}</span>
          </div>
          <p className="text-secondary-foreground/70 font-body text-sm leading-relaxed">
            Licensed and insured {seoConfig.industry.toLowerCase()} professionals serving the {seoConfig.serviceArea.toLowerCase()} since {seoConfig.yearEstablished}.
          </p>
        </div>

        <div>
          <h4 className="font-heading font-bold mb-4">Quick Links</h4>
          <div className="flex flex-col gap-2">
            {["Home", "About", "Services", "Specials", "Contact"].map(link => (
              <Link
                key={link}
                to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                className="text-secondary-foreground/70 hover:text-secondary-foreground transition-colors font-body text-sm"
              >
                {link}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-heading font-bold mb-4">Services</h4>
          <div className="flex flex-col gap-2 text-secondary-foreground/70 font-body text-sm">
            {seoConfig.services.slice(0, 5).map(s => (
              <span key={s.shortTitle}>{s.shortTitle}</span>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-heading font-bold mb-4">Contact</h4>
          <div className="flex flex-col gap-3 text-sm font-body">
            <a href={seoConfig.phoneHref} className="flex items-center gap-2 text-secondary-foreground/70 hover:text-secondary-foreground transition-colors">
              <Phone className="h-4 w-4 shrink-0" /> {seoConfig.phone}
            </a>
            <a href={`mailto:${seoConfig.email}`} className="flex items-center gap-2 text-secondary-foreground/70 hover:text-secondary-foreground transition-colors">
              <Mail className="h-4 w-4 shrink-0" /> {seoConfig.email}
            </a>
            <div className="flex items-center gap-2 text-secondary-foreground/70">
              <MapPin className="h-4 w-4 shrink-0" /> {seoConfig.address.full}
            </div>
            <div className="flex items-center gap-2 text-secondary-foreground/70">
              <Clock className="h-4 w-4 shrink-0" /> {seoConfig.hours.emergency}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="border-t border-secondary-foreground/10">
      <div className="container mx-auto px-4 py-5 text-center text-secondary-foreground/50 font-body text-xs">
        © {new Date().getFullYear()} {seoConfig.businessName} All rights reserved. Licensed & Insured.
      </div>
    </div>
  </footer>
);

export default Footer;
