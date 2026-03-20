import { clsx } from "clsx";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Star } from "lucide-react";

import shared from "@/styles/shared.module.css";

import styles from "./styles.module.css";

const trustPills = [
  "Locally Trusted",
  "Reliable Weekly Service",
  "Pet-Friendly",
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
                Trusted by local dog owners
              </span>
              <span>Launch offer: first customers save 25%</span>
              <span>Text alerts after every visit</span>
            </div>
          </div>
        </div>

        <div className={styles.heroVisual} data-reveal>
          <div className={styles.heroBadge}>Locally trusted yard cleanup</div>
          <div className={styles.heroCard}>
            <div className={styles.heroImageWrap}>
              <Image
                src="https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=1200&q=80"
                alt="Happy dog in a clean backyard"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className={styles.heroImage}
              />
            </div>
            <div className={styles.heroCardFooter}>
              <div>
                <strong>Fresh yard feeling</strong>
                <p>Reliable scooping, deodorizing, and secure gate checks.</p>
              </div>
              <div className={styles.miniStat}>
                <span>650+</span>
                <small>local customers served</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
