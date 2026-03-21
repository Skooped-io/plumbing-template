import { useState } from "react";
import EmergencyBanner from "@/components/EmergencyBanner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { Phone, Mail, MapPin, Clock, AlertTriangle } from "lucide-react";

const services = [
  "Drain Cleaning", "Water Heater Repair", "Leak Detection", "Pipe Repair",
  "Sewer Line", "Toilet Repair", "Faucet Installation", "Gas Line", "Other",
];

const Contact = () => {
  const [isEmergency, setIsEmergency] = useState(false);

  return (
    <>
      <EmergencyBanner />
      <Navbar />

      <section className="bg-secondary py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="font-heading text-3xl md:text-5xl font-extrabold text-secondary-foreground animate-fade-up">
            Schedule Service
          </h1>
          <p className="mt-4 text-secondary-foreground/80 font-body max-w-xl animate-fade-up" style={{ animationDelay: "100ms" }}>
            Fill out the form below and we'll get back to you within the hour during business hours.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="md:flex md:gap-12 max-w-5xl mx-auto">
            {/* Form */}
            <ScrollReveal className="flex-1 mb-10 md:mb-0">
              <div className={`bg-surface rounded-lg border shadow-sm p-6 md:p-8 transition-colors ${isEmergency ? "border-accent/50 shadow-accent/10" : "border-border/50"}`}>
                {isEmergency && (
                  <div className="bg-accent/10 border border-accent/30 rounded-lg p-4 mb-6 flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <p className="font-heading font-bold text-foreground text-sm">Plumbing Emergency?</p>
                      <p className="text-muted-foreground font-body text-sm mt-1">
                        For the fastest response, call us directly at{" "}
                        <a href="tel:+15551234567" className="text-accent font-bold underline">(555) 123-4567</a>
                      </p>
                    </div>
                  </div>
                )}

                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-body text-sm font-medium text-foreground mb-1.5">Name *</label>
                      <input type="text" required className="w-full rounded-lg border border-input bg-background px-4 py-2.5 font-body text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                    </div>
                    <div>
                      <label className="block font-body text-sm font-medium text-foreground mb-1.5">Phone *</label>
                      <input type="tel" required className="w-full rounded-lg border border-input bg-background px-4 py-2.5 font-body text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                    </div>
                  </div>
                  <div>
                    <label className="block font-body text-sm font-medium text-foreground mb-1.5">Email</label>
                    <input type="email" className="w-full rounded-lg border border-input bg-background px-4 py-2.5 font-body text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                  </div>
                  <div>
                    <label className="block font-body text-sm font-medium text-foreground mb-1.5">Service Address *</label>
                    <input type="text" required className="w-full rounded-lg border border-input bg-background px-4 py-2.5 font-body text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                  </div>
                  <div>
                    <label className="block font-body text-sm font-medium text-foreground mb-1.5">Service Needed</label>
                    <select className="w-full rounded-lg border border-input bg-background px-4 py-2.5 font-body text-sm focus:outline-none focus:ring-2 focus:ring-ring">
                      <option value="">Select a service...</option>
                      {services.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                  <div className="flex items-center gap-3">
                    <label className="font-body text-sm font-medium text-foreground">Emergency?</label>
                    <button
                      type="button"
                      onClick={() => setIsEmergency(!isEmergency)}
                      className={`relative h-7 w-12 rounded-full transition-colors ${isEmergency ? "bg-accent" : "bg-border"}`}
                    >
                      <span className={`absolute top-0.5 left-0.5 h-6 w-6 rounded-full bg-surface shadow transition-transform ${isEmergency ? "translate-x-5" : ""}`} />
                    </button>
                  </div>
                  <div>
                    <label className="block font-body text-sm font-medium text-foreground mb-1.5">Preferred Date</label>
                    <input type="date" className="w-full rounded-lg border border-input bg-background px-4 py-2.5 font-body text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                  </div>
                  <div>
                    <label className="block font-body text-sm font-medium text-foreground mb-1.5">Description</label>
                    <textarea rows={4} className="w-full rounded-lg border border-input bg-background px-4 py-2.5 font-body text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none" />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground font-body font-semibold py-3 rounded-lg shadow-lg shadow-primary/20 transition-all hover:shadow-xl active:scale-[0.98]"
                  >
                    Request Service
                  </button>
                </form>
              </div>
            </ScrollReveal>

            {/* Sidebar */}
            <ScrollReveal className="md:w-80 shrink-0" delay={100}>
              <div className="space-y-6">
                <div className="bg-surface rounded-lg border border-border/50 p-6">
                  <a href="tel:+15551234567" className="flex items-center gap-3 font-heading text-2xl font-bold text-secondary mb-4">
                    <Phone className="h-7 w-7 text-primary" />
                    (555) 123-4567
                  </a>
                  <p className="text-muted-foreground font-body text-sm">Available 24/7 for emergencies. Regular scheduling Mon–Sat.</p>
                </div>

                <div className="bg-surface rounded-lg border border-border/50 p-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-heading font-bold text-foreground text-sm">Office Hours</h4>
                      <p className="text-muted-foreground font-body text-sm">Mon–Fri: 7am – 6pm</p>
                      <p className="text-muted-foreground font-body text-sm">Sat: 8am – 4pm</p>
                      <p className="text-muted-foreground font-body text-sm">24/7 Emergency Service</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-heading font-bold text-foreground text-sm">Email</h4>
                      <a href="mailto:info@aquaflow.com" className="text-primary font-body text-sm hover:underline">info@aquaflow.com</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-heading font-bold text-foreground text-sm">Location</h4>
                      <p className="text-muted-foreground font-body text-sm">123 Main St, Metro City</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact;
