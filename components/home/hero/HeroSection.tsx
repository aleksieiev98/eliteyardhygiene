import { clsx } from "clsx";
import { ArrowRight, BadgeCheck, Mail, Phone, Star } from "lucide-react";
import Link from "next/link";

import shared from "@/styles/shared.module.css";

import { HeroImageRotator } from "./HeroImageRotator";
import styles from "./styles.module.css";

const trustPills = ["Licensed", "Reliable Weekly Service", "Pet-Friendly"];
const phoneHref = "tel:2246009367";
const emailHref = "mailto:eliteyardhygiene@gmail.com";

const heroImages = [
  {
    src: "/assets/tools.png",
    alt: "Professional pet waste removal tools including pooper scooper, deodorizer, and secure gate check for reliable yard cleanup service",
  },
  {
    src: "/assets/thumbs_up.png",
    alt: "Happy dog giving a thumbs up in a clean yard after pet waste removal service",
  },
  {
    src: "/assets/dog_yard.png",
    alt: "Happy dog enjoying a clean yard after pet waste removal service",
  },
  {
    src: "/assets/professional.png",
    alt: "Professional yard cleanup technician performing pet waste removal service",
  },
  {
    src: "/assets/german-longhaired-pointer.jpg",
    alt: "German Longhaired Pointer dog sitting in a clean yard after pet waste removal service",
  },
  {
    src: "/assets/rzierik-dog.jpg",
    alt: "Dog sitting in a clean yard after pet waste removal service, photo by Rzierik on Unsplash",
  },
];

export const HeroSection = () => {
  return (
    <section className={styles.heroSection} id="top">
      <div className={clsx("container", styles.heroGrid)}>
        <div className={styles.heroCopy} data-reveal>
          <span className={shared.eyebrow}>Local Yard Cleanup Service</span>
          <h1>Dog Waste Removal Service</h1>
          <p className={styles.heroText}>
            Elite Yard Hygiene provides weekly and one-time dog waste removal
            for busy homeowners who want a consistently poop-free yard without
            the hassle of scooping.
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
          <div className={styles.contactRow}>
            <a href={phoneHref} className={styles.contactLink}>
              <Phone size={16} />
              (224) 600-9367
            </a>
            <a href={emailHref} className={styles.contactLink}>
              <Mail size={16} />
              eliteyardhygiene@gmail.com
            </a>
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
