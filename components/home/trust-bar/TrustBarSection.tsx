import { clsx } from "clsx";

import styles from "./styles.module.css";

const stats = [
  { value: "4.9/5", label: "Average rating" },
  { value: "650+", label: "Happy customers" },
  { value: "9,400+", label: "Cleanups completed" },
  { value: "Licensed & Insured", label: "Protected service" },
];

export const TrustBarSection = () => {
  return (
    <section className={styles.trustBar}>
      <div className={clsx("container", styles.trustBarInner)} data-reveal>
        {stats.map((stat) => (
          <div key={stat.label} className={styles.statCard}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
        <div className={styles.reviewLogos}>
          <span>Google</span>
          <span>Facebook</span>
          <span>Yelp</span>
        </div>
      </div>
    </section>
  );
};
