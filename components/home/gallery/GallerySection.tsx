import { clsx } from "clsx";
import Link from "next/link";

import { BeforeAfterCard } from "@/components/before-after-card";
import shared from "@/styles/shared.module.css";

import styles from "./styles.module.css";

const comparisonCards = [
  {
    before:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    after:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1200&q=80",
    title: "Weekend reset for a family backyard",
    description:
      "One-time cleanup plus deodorizing to get this yard party-ready in a single visit.",
  },
  {
    before:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80",
    after:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    title: "Multi-dog yard on a weekly plan",
    description:
      "Consistent recurring service keeps high-traffic grass areas cleaner, fresher, and easier to enjoy.",
  },
  {
    before:
      "https://images.unsplash.com/photo-1473773508845-188df298d2d1?auto=format&fit=crop&w=1200&q=80",
    after:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1200&q=80",
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
