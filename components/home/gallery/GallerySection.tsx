import { clsx } from "clsx";
import Link from "next/link";

import { BeforeAfterCard } from "@/components/before-after-card";
import shared from "@/styles/shared.module.css";

import styles from "./styles.module.css";

const comparisonCards = [
  {
    before: "/assets/one-time-yard-cleanup.png",
    after: "/assets/clean-yard-service.jpg",
    title: "Weekend reset for a family backyard",
    description:
      "One-time cleanup plus deodorizing to get this yard party-ready in a single visit.",
  },
  {
    before: "/assets/dog-waste-pickup-grass.jpg",
    after: "/assets/weekly-pet-waste-removal.jpg",
    title: "Multi-dog yard on a weekly plan",
    description:
      "Consistent recurring service keeps high-traffic grass areas cleaner, fresher, and easier to enjoy.",
  },
  {
    before: "/assets/fall-pet-waste-cleanup.png",
    after: "/assets/clean-backyard-lawn.jpg",
    title: "Seasonal cleanup before spring",
    description:
      "A full-property scoop and refresh to make the yard feel clean and welcoming again.",
  },
];

export const GallerySection = () => {
  return (
    <section className={`section ${styles.gallerySection}`} id="gallery">
      <div className="container">
        <div className={styles.sectionHeading} data-reveal>
          <span className={shared.eyebrow}>Before & After</span>
          <h2>The transformation is the point.</h2>
          <p>
            See how fast a messy, avoided yard turns into a clean outdoor space
            your family actually wants to use again.
          </p>
        </div>
        <div className={styles.comparisonGrid}>
          {comparisonCards.map((card) => (
            <BeforeAfterCard key={card.title} {...card} />
          ))}
        </div>
        <div className={styles.sectionCta} data-reveal>
          <Link
            href="#quote"
            className={clsx(shared.button, shared.buttonPrimary)}
          >
            Get Your Yard Looking Like This
          </Link>
        </div>
      </div>
    </section>
  );
};
