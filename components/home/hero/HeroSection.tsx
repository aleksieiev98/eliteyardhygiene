import { clsx } from "clsx";
import { ArrowRight, BadgeCheck, Star } from "lucide-react";
import Link from "next/link";

import shared from "@/styles/shared.module.css";

import { HeroImageRotator } from "./HeroImageRotator";
import styles from "./styles.module.css";

const trustPills = ["Licensed", "Reliable Weekly Service", "Pet-Friendly"];

const heroImages = [
  {
    src: "/assets/happy-dog-closeup.jpg",
    alt: "Happy dog in a clean backyard",
  },
  {
    src: "/assets/clean-yard-service.jpg",
    alt: "Freshly cleaned yard ready to enjoy",
  },
  {
    src: "/assets/weekly-pet-waste-removal.jpg",
    alt: "Weekly pet waste removal service in a backyard",
  },
];

export const HeroSection = () => {
  return (
    <section className={styles.heroSection} id="top">
      <div className={clsx("container", styles.heroGrid)}>
        <div className={styles.heroCopy} data-reveal>
          <span className={shared.eyebrow}>Local Yard Cleanup Service</span>
          <h1>
            A cleaner yard, a happier dog, and one less thing on your list.
          </h1>
          <p className={styles.heroText}>
            Elite Yard Hygiene delivers recurring and one-time pet waste removal
            for busy homeowners who want a yard that feels fresh, safe, and
            ready to enjoy.
          </p>
          <div className={styles.ctaRow}>
            <Link
              href="#quote"
              className={clsx(shared.button, shared.buttonPrimary)}
            >
              Get a Free Quote
            </Link>
            <Link
              href="#pricing"
              className={clsx(shared.button, shared.buttonSecondary)}
            >
              View Pricing
              <ArrowRight size={16} />
            </Link>
          </div>
          <div className={styles.heroProofStack}>
            <div className={styles.pillRow}>
              {trustPills.map((pill) => (
                <span key={pill} className={styles.trustPill}>
                  <BadgeCheck size={16} />
                  {pill}
                </span>
              ))}
            </div>
            <div className={styles.microProof}>
              <span>
                <Star size={16} fill="currentColor" />
                Trusted by nearby dog owners
              </span>
              <span>Text alerts after every visit</span>
            </div>
          </div>
        </div>

        <div className={styles.heroVisual} data-reveal>
          <div className={styles.heroBadge}>Licensed local yard cleanup</div>
          <div className={styles.heroCard}>
            <HeroImageRotator images={heroImages} />
            <div className={styles.heroCardFooter}>
              <div>
                <strong>Fresh yard feeling</strong>
                <p>Reliable scooping, deodorizing, and secure gate checks.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
