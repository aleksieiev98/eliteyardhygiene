import { clsx } from "clsx";
import { Check } from "lucide-react";
import Link from "next/link";

import shared from "@/styles/shared.module.css";

import styles from "./styles.module.css";

const pricing = [
  {
    title: "Weekly Service",
    price: "$25",
    note: "starting per visit",
    description: "A simple weekly plan that keeps your yard clean without the hassle.",
    features: [
      "One scheduled visit each week",
      "Pet-safe deodorizing",
      "Dog spot lawn treatment",
      "Visit notifications",
      "Great fit for most homes",
    ],
  },
  {
    title: "Twice Weekly",
    price: "$20",
    note: "starting per visit",
    description: "Our most popular option for cleaner yards and better consistency all week.",
    features: [
      "Two scheduled visits each week",
      "Pet-safe deodorizing",
      "Dog spot lawn treatment",
      "Visit notifications",
      "Cleaner yard between visits",
      "Most popular recurring plan",
    ],
    featured: true,
  },
  {
    title: "3+ Weekly Visits",
    price: "$17",
    note: "per visit",
    description: "Best value for the busiest yards that need the most frequent upkeep.",
    features: [
      "Three or more visits each week",
      "Pet-safe deodorizing",
      "Dog spot lawn treatment",
      "Visit notifications",
      "Best for high-use yards",
      "Lowest per-visit rate",
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
            Final pricing depends on yard size and service frequency, but these
            packages give a clear starting point.
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
