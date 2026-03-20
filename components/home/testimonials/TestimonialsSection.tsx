import { Star } from "lucide-react";

import shared from "@/styles/shared.module.css";

import styles from "./styles.module.css";

const testimonials = [
  {
    name: "Melissa R.",
    area: "Buffalo Grove",
    quote:
      "The yard looks immaculate every single week. They lock the gate, text when they're done, and make the whole thing effortless.",
  },
  {
    name: "James T.",
    area: "Arlington Heights",
    quote:
      "We have three dogs and two kids, so this service is a lifesaver. Elite Yard Hygiene is reliable, polite, and incredibly thorough.",
  },
  {
    name: "Ariana P.",
    area: "Schaumburg",
    quote:
      "Booked a one-time cleanup before hosting friends and it completely changed the yard. It felt like a premium local service from start to finish.",
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="section muted-section">
      <div className="container">
        <div className={styles.sectionHeading} data-reveal>
          <span className={shared.eyebrow}>Testimonials</span>
          <h2>Trusted by busy local dog owners.</h2>
        </div>
        <div className={styles.testimonialsGrid}>
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className={styles.testimonialCard}
              data-reveal
            >
              <div className={styles.stars}>
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} size={16} fill="currentColor" />
                ))}
              </div>
              <p>&ldquo;{testimonial.quote}&rdquo;</p>
              <strong>{testimonial.name}</strong>
              <span>{testimonial.area}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
