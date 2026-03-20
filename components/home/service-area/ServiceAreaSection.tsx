import { clsx } from "clsx";
import Link from "next/link";

import shared from "@/styles/shared.module.css";

import styles from "./styles.module.css";

const areas = [
  "Buffalo Grove",
  "Wheeling",
  "Palatine",
  "Arlington Heights",
  "Mount Prospect",
  "Des Plaines",
  "Schaumburg",
  "Elk Grove Village",
  "Hoffman Estates",
];

const mapEmbedUrl =
  "https://www.openstreetmap.org/export/embed.html?bbox=-88.2136%2C41.9317%2C-87.8396%2C42.2211&layer=mapnik";

export const ServiceAreaSection = () => {
  return (
    <section className="section">
      <div className={clsx("container", styles.splitPanel)}>
        <div className={styles.panelCopy} data-reveal>
          <span className={shared.eyebrow}>Service Area</span>
          <h2>
            Serving Chicago&apos;s northwest suburbs with reliable weekly
            routes.
          </h2>
          <p>
            Elite Yard Hygiene proudly serves homeowners across Buffalo Grove,
            Wheeling, Palatine, Arlington Heights, Mount Prospect, Des Plaines,
            Schaumburg, Elk Grove Village, Hoffman Estates, and nearby parts of
            the northwest suburbs. If you are close to our route, send a quote
            request and we may still be able to help.
          </p>
          <div className={styles.areaTags}>
            {areas.map((area) => (
              <span key={area}>{area}</span>
            ))}
          </div>
        </div>
        <div className={styles.mapCard} data-reveal>
          <div className={styles.mapFrameWrap}>
            <iframe
              title="Elite Yard Hygiene service area map"
              src={mapEmbedUrl}
              className={styles.mapFrame}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className={styles.mapFooter}>
            <strong>Coverage focused on the northwest suburbs</strong>
            <Link
              href="https://www.openstreetmap.org/?mlat=42.08&mlon=-88.03#map=10/42.08/-88.03"
              target="_blank"
              rel="noreferrer"
            >
              View larger map
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
