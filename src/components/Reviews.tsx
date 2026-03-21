import { Star } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const reviews = [
  { name: "Maria Gonzalez", rating: 5, text: "They fixed our burst pipe at midnight. Professional, fast, and the price was exactly what they quoted. Can't recommend enough.", date: "2 weeks ago" },
  { name: "Robert Chen", rating: 5, text: "Called for a water heater replacement. They came same day, explained all our options, and had it running by evening. Excellent work.", date: "1 month ago" },
  { name: "Linda Patterson", rating: 5, text: "After 3 other plumbers couldn't find our leak, AquaFlow diagnosed it in under an hour. Honest and highly skilled team.", date: "3 weeks ago" },
  { name: "James Okwu", rating: 5, text: "Best plumbing experience we've had. On time, clean work area, fair pricing. They've earned a customer for life.", date: "1 month ago" },
];

const Reviews = () => (
  <section className="py-20 md:py-28 bg-background">
    <div className="container mx-auto px-4">
      <ScrollReveal>
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">What Our Customers Say</h2>
          <div className="flex items-center justify-center gap-2 mt-3">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-muted-foreground font-body text-sm">4.9 average from 200+ reviews</span>
          </div>
        </div>
      </ScrollReveal>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {reviews.map((r, i) => (
          <ScrollReveal key={r.name} delay={i * 80}>
            <div className="rounded-lg bg-surface p-6 shadow-sm border border-border/50 h-full flex flex-col">
              <div className="flex gap-0.5 mb-3">
                {[...Array(r.rating)].map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-foreground font-body text-sm leading-relaxed flex-1">"{r.text}"</p>
              <div className="mt-4 pt-4 border-t border-border/50 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center font-heading text-xs font-bold text-primary">
                    {r.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <span className="font-body text-sm font-medium text-foreground">{r.name}</span>
                </div>
                <span className="text-xs text-muted-foreground">{r.date}</span>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default Reviews;
