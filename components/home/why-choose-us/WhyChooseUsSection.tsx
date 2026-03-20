import { clsx } from "clsx";
import { Bone, Check, MessageSquareQuote, ShieldCheck } from "lucide-react";

import shared from "@/styles/shared.module.css";

import styles from "./styles.module.css";

const benefits = [
  "Reliable arrival windows and consistent routes",
  "Tools sanitized between every property visit",
  "Gates secured after each cleanup",
  "Friendly, dog-comfortable technicians",
  "Simple quote-first booking process",
  "Satisfaction guarantee on every visit",
  "Text or email notifications when service is complete",
  "Locally owned, family-style customer care",
];

export const WhyChooseUsSection = () => {
  return (
    <section className="section">
      <div className={clsx("container", styles.splitPanel)}>
        <div className={styles.panelCopy} data-reveal>
          <span className={shared.eyebrow}>Why Choose Us</span>
          <h2>Premium service details homeowners actually notice.</h2>
          <div className={styles.benefitsGrid}>
            {benefits.map((benefit) => (
              <div key={benefit} className={styles.benefitItem}>
                <ShieldCheck size={18} />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.panelCard} data-reveal>
          <div className={styles.panelStat}>
            <Bone size={20} />
            <div>
              <strong>Fresh, safe, dog-ready yards</strong>
              <p>
                Careful process, premium communication, and consistent routes.
              </p>
            </div>
          </div>
          <div className={styles.panelStat}>
            <Check size={20} />
            <div>
              <strong>Simple quote-first booking</strong>
              <p>
                Start with a free quote, then we confirm the best service plan
                for your yard.
              </p>
            </div>
          </div>
          <div className={styles.panelStat}>
            <MessageSquareQuote size={20} />
            <div>
              <strong>Customer-first communication</strong>
              <p>
                Fast responses, clean notifications, and no chasing down
                updates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
