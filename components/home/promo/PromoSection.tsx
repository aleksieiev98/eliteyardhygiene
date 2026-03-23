import { clsx } from "clsx";
import Link from "next/link";

import shared from "@/styles/shared.module.css";

import styles from "./styles.module.css";

export const PromoSection = () => {
  return (
    <section className={`section ${styles.promoSection}`}>
      <div className="container">
        <div className={styles.promoCard} data-reveal>
          <div className={styles.promoCopy}>
            <span className={shared.eyebrow}>Launch Promotion</span>
            <h2>
              We’re officially going live, and our first customers get 20% off.
            </h2>
            <p>
              To celebrate launching Elite Yard Hygiene for the first time,
              we’re giving early customers a <strong>20% discount</strong> on
              their first service. It’s the easiest time to lock in a cleaner
              yard and try us out with less risk.
            </p>
          </div>
          <div className={styles.promoActions}>
            <div className={styles.promoBadge}>
              <strong>-20%</strong>
              <span>for first customers</span>
            </div>
            <Link
              href="#quote"
              className={clsx(shared.button, shared.buttonPrimary)}
            >
              Claim the Launch Offer
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
