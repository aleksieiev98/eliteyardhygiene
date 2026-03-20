import { clsx } from "clsx";
import { MapPinned } from "lucide-react";

import shared from "@/styles/shared.module.css";

import styles from "./styles.module.css";

const areas = [
  "Brookhaven",
  "Cedar Park",
  "Willow Creek",
  "Maple Heights",
  "Oak Ridge",
  "Riverstone",
];

export const ServiceAreaSection = () => {
  return (
    <section className="section">
      <div className={clsx("container", styles.splitPanel)}>
        <div className={styles.panelCopy} data-reveal>
          <span className={shared.eyebrow}>Service Area</span>
          <h2>Local coverage built for neighborhood-level trust.</h2>
          <p>
            Elite Yard Hygiene proudly serves homeowners across Brookhaven,
            Cedar Park, Willow Creek, Maple Heights, Oak Ridge, Riverstone, and
            nearby communities. If you are just outside our core route, send a
            quote request and we may still be able to help.
          </p>
          <div className={styles.areaTags}>
            {areas.map((area) => (
              <span key={area}>{area}</span>
            ))}
          </div>
        </div>
        <div className={styles.mapCard} data-reveal>
          <div className={styles.mapPlaceholder}>
            <MapPinned size={28} />
            <strong>Coverage map placeholder</strong>
            <p>
              Swap this panel for an embedded Google Map when the business
              listing is ready.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
