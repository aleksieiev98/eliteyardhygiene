import { clsx } from "clsx";
import { Check } from "lucide-react";
import Link from "next/link";

import shared from "@/styles/shared.module.css";

import styles from "./styles.module.css";

const pricing = [
  {
    title: "One-Time Cleanup",
    price: "$79",
    note: "starting",
    description: "Deep cleanup for overgrown yards or event prep.",
    features: [
      "Full walkthrough and pickup",
      "Bagged disposal included",
      "Perfect for resets",
    ],
  },
  {
    title: "Weekly Service",
    price: "$65",
    note: "per week",
    description: "The easy way to keep your yard fresh all season long.",
    features: [
      "Scheduled weekly visit",
      "Pet-safe deodorizing",
      "Dog spot lawn treatment",
      "Visit notifications",
      "Most popular recurring plan",
    ],
    featured: true,
  },
  {
    title: "Twice Weekly",
    price: "$98",
    note: "per week",
    description: "Built for multi-dog homes and high-use backyards.",
    features: [
      "Two scheduled visits each week",
      "Pet-safe deodorizing",
      "Dog spot lawn treatment",
      "Visit notifications",
      "Cleaner yard between visits",
      "Best for busy households and multiple dogs",
    ],
  },
];

export const PricingSection = () => {
  return (
    <section className="section" id="pricing">
      <div className="container">
        <div className={styles.sectionHeading} data-reveal>
          <span className={shared.eyebrow}>Pricing</span>
          <h2>Clear starting prices with no guesswork.</h2>
          <p>
            Final pricing depends on yard size, number of dogs, and service
            frequency, but these packages give a clear starting point.
          </p>
        </div>
        <div className={styles.pricingGrid}>
          {pricing.map((tier) => (
            <article
              key={tier.title}
              className={clsx(
                styles.pricingCard,
                tier.featured && styles.featured
              )}
              data-reveal
            >
              {tier.featured ? (
                <span className={styles.pricingBadge}>Most Popular</span>
              ) : null}
              <div className={styles.pricingCardTop}>
                <h3>{tier.title}</h3>
                <div className={styles.priceLine}>
                  <strong>{tier.price}</strong>
                  <span>{tier.note}</span>
                </div>
              </div>
              <p>{tier.description}</p>
              <ul>
                {tier.features.map((feature) => (
                  <li key={feature}>
                    <Check size={16} />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href="#quote"
                className={clsx(
                  shared.button,
                  shared.buttonPrimary,
                  shared.buttonFull,
                  styles.pricingButton
                )}
              >
                Get a Free Quote
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
