import { clsx } from "clsx";
import {
  BadgeCheck,
  Droplets,
  ShieldCheck,
  Sparkles,
  SprayCan,
  Text,
} from "lucide-react";

import shared from "@/styles/shared.module.css";

import styles from "./styles.module.css";

const visitItems = [
  {
    icon: BadgeCheck,
    title: "Full yard walkthrough",
    copy: "We check the entire service area instead of just the obvious spots.",
  },
  {
    icon: Sparkles,
    title: "Pet waste removed and bagged",
    copy: "Cleanup is thorough, consistent, and handled with sanitary disposal.",
  },
  {
    icon: SprayCan,
    title: "Pet-safe deodorizing",
    copy: "A finishing treatment helps the yard smell fresher after service.",
  },
  {
    icon: Droplets,
    title: "Dog spot lawn treatment",
    copy: "High-traffic potty areas get extra attention to help the yard recover.",
  },
  {
    icon: ShieldCheck,
    title: "Tools sanitized between visits",
    copy: "Equipment is cleaned between properties to keep the process more sanitary.",
  },
  {
    icon: Text,
    title: "Visit confirmation after service",
    copy: "You know when the yard is done without needing to check for yourself.",
  },
];

export const IncludedVisitSection = () => {
  return (
    <section className="section muted-section">
      <div className={clsx("container", styles.splitPanel)}>
        <div className={styles.panelCopy} data-reveal>
          <span className={shared.eyebrow}>What&apos;s Included</span>
          <h2>What every visit actually includes.</h2>
          <p className={styles.intro}>
            This is the part homeowners want to know before they book: what we
            do, how we do it, and what makes the service feel worth paying for.
          </p>
          <div className={styles.itemsGrid}>
            {visitItems.map(({ icon: Icon, title, copy }) => (
              <article key={title} className={styles.itemCard}>
                <div className={styles.itemIcon}>
                  <Icon size={18} />
                </div>
                <div>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className={styles.panelCard} data-reveal>
          <div className={styles.cardEyebrow}>Service standard</div>
          <h3>The small details are what make the yard feel truly handled.</h3>
          <p>
            Elite Yard Hygiene is designed to feel dependable from start to
            finish: thorough cleanup, careful communication, pet-safe finishing,
            and a yard that feels easier to step back into.
          </p>
          <div className={styles.cardList}>
            <div className={styles.cardListItem}>
              <strong>Before we leave</strong>
              <span>Gate checked, service area cleared, and yard left tidy.</span>
            </div>
            <div className={styles.cardListItem}>
              <strong>After each visit</strong>
              <span>You get a clear service update without chasing us down.</span>
            </div>
            <div className={styles.cardListItem}>
              <strong>On recurring plans</strong>
              <span>
                The yard stays easier to use week after week instead of building
                back up.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
