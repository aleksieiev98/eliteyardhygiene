import { clsx } from "clsx";
import { Mail, Phone } from "lucide-react";

import { QuoteForm } from "@/components/quote-form";
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
        <div className={styles.formShell} data-reveal>
          <QuoteForm />
        </div>
      </div>
    </section>
  );
};
