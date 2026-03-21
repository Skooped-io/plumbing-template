import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X, Droplets } from "lucide-react";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Specials", to: "/specials" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="bg-surface shadow-sm relative z-40">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center transition-transform group-hover:scale-105 group-active:scale-95">
            <Droplets className="h-6 w-6 text-primary-foreground" />
          </div>
          <div className="leading-tight">
            <span className="block font-heading text-lg font-bold text-secondary">AquaFlow</span>
            <span className="block text-xs text-muted-foreground font-body">Plumbing Co.</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`font-body text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === link.to ? "text-primary" : "text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <a href="tel:+15551234567" className="flex items-center gap-2 font-heading font-bold text-secondary text-lg">
            <Phone className="h-5 w-5 text-primary" />
            (555) 123-4567
          </a>
          <Link
            to="/contact"
            className="bg-primary text-primary-foreground font-body font-semibold px-5 py-2.5 rounded-lg transition-all hover:shadow-lg hover:shadow-primary/25 active:scale-[0.97]"
          >
            Schedule Service
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 rounded-lg hover:bg-background transition-colors active:scale-95"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-border bg-surface animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={`font-body font-medium py-2 px-3 rounded-lg transition-colors ${
                  location.pathname === link.to ? "bg-primary/10 text-primary" : "text-foreground hover:bg-background"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:+15551234567"
              className="flex items-center gap-2 font-heading font-bold text-secondary text-lg py-2 px-3"
            >
              <Phone className="h-5 w-5 text-primary" />
              (555) 123-4567
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
