import { clsx } from "clsx";
import { Mail, Phone } from "lucide-react";

import shared from "@/styles/shared.module.css";

import styles from "./styles.module.css";

export const FinalCtaSection = () => {
  return (
    <section className="section" id="quote">
      <div className={clsx("container", styles.finalCtaGrid)}>
        <div className={styles.panelCopy} data-reveal>
          <span className={shared.eyebrow}>Take Back Your Yard</span>
          <h2>
            Get your free quote today and let your backyard feel good again.
          </h2>
          <p>
            Whether you need a weekly route or a one-time cleanup, we make it
            simple to start. Reach out today and we will recommend the best plan
            for your yard size, pets, and schedule.
          </p>
          <div className={styles.contactList}>
            <a href="tel:2246009367">
              <Phone size={18} />
              (224) 600-9367
            </a>
            <a href="mailto:eliteyardhygiene@gmail.com">
              <Mail size={18} />
              eliteyardhygiene@gmail.com
            </a>
          </div>
        </div>
        <div className={styles.contactShell} data-reveal>
          <div>
            <span className={styles.contactEyebrow}>Direct contact</span>
            <h3>Call or email us to get started.</h3>
          </div>
          <div className={styles.contactActions}>
            <a
              href="tel:2246009367"
              className={clsx(
                shared.button,
                shared.buttonPrimary,
                shared.buttonFull
              )}
            >
              <Phone size={18} />
              Call Now
            </a>
            <a
              href="mailto:eliteyardhygiene@gmail.com?subject=Free%20Quote%20Request"
              className={clsx(
                shared.button,
                shared.buttonSecondary,
                shared.buttonFull
              )}
            >
              <Mail size={18} />
              Email for a Quote
            </a>
          </div>
          <div className={styles.contactDetails}>
            <span>(224) 600-9367</span>
            <span>eliteyardhygiene@gmail.com</span>
          </div>
        </div>
      </div>
    </section>
  );
};
