import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Droplets } from "lucide-react";

const Footer = () => (
  <footer className="bg-secondary text-secondary-foreground">
    <div className="container mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="h-9 w-9 rounded-lg bg-primary flex items-center justify-center">
              <Droplets className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="font-heading text-lg font-bold">AquaFlow</span>
          </div>
          <p className="text-secondary-foreground/70 font-body text-sm leading-relaxed">
            Licensed and insured plumbing professionals serving the greater metro area since 2008.
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
            <span>Drain Cleaning</span>
            <span>Water Heater Repair</span>
            <span>Leak Detection</span>
            <span>Pipe Repair</span>
            <span>Emergency Plumbing</span>
          </div>
        </div>

        <div>
          <h4 className="font-heading font-bold mb-4">Contact</h4>
          <div className="flex flex-col gap-3 text-sm font-body">
            <a href="tel:+15551234567" className="flex items-center gap-2 text-secondary-foreground/70 hover:text-secondary-foreground transition-colors">
              <Phone className="h-4 w-4 shrink-0" /> (555) 123-4567
            </a>
            <a href="mailto:info@aquaflow.com" className="flex items-center gap-2 text-secondary-foreground/70 hover:text-secondary-foreground transition-colors">
              <Mail className="h-4 w-4 shrink-0" /> info@aquaflow.com
            </a>
            <div className="flex items-center gap-2 text-secondary-foreground/70">
              <MapPin className="h-4 w-4 shrink-0" /> 123 Main St, Metro City
            </div>
            <div className="flex items-center gap-2 text-secondary-foreground/70">
              <Clock className="h-4 w-4 shrink-0" /> 24/7 Emergency Service
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="border-t border-secondary-foreground/10">
      <div className="container mx-auto px-4 py-5 text-center text-secondary-foreground/50 font-body text-xs">
        © {new Date().getFullYear()} AquaFlow Plumbing Co. All rights reserved. Licensed & Insured.
      </div>
    </div>
  </footer>
);

export default Footer;
