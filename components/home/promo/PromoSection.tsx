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
              We’re officially going live, and new customers get their first
              week free.
            </h2>
            <p>
              To celebrate launching Elite Yard Hygiene for the first time,
              we’re giving early customers a <strong>first week free</strong>
              on recurring service. It’s the easiest way to try us out with
              less risk and see the difference right away.
            </p>
          </div>
          <div className={styles.promoActions}>
            <div className={styles.promoBadge}>
              <strong>Week 1 Free</strong>
              <span>for new recurring customers</span>
            </div>
            <Link
              href="#quote"
              className={clsx(shared.button, shared.buttonPrimary)}
            >
              Claim First Week Free
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
