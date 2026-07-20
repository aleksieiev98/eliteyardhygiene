import { clsx } from "clsx";
import { Facebook, Instagram, MapPinned, Music2 } from "lucide-react";
import Link from "next/link";

import styles from "./styles.module.css";

const socialHref =
  "https://www.facebook.com/people/Elite-Yard-Hygiene-LLC/61588401130622";

export const SiteFooter = () => {
  return (
    <footer className={styles.siteFooter}>
      <div className={clsx("container", styles.footerGrid)}>
        <div>
          <h3>Elite Yard Hygiene</h3>
          <p>
            Premium pet waste removal for homeowners who want a cleaner yard and
            more peace of mind.
          </p>
        </div>
        <div>
          <h4>Contact</h4>
          <a href="tel:2246009367">(224) 600-9367</a>
          <a href="mailto:eliteyardhygiene@gmail.com">
            eliteyardhygiene@gmail.com
          </a>
          <p>Mon-Fri 8am-6pm</p>
        </div>
        <div>
          <h4>Service Area</h4>
          <p>
            Buffalo Grove, Wheeling, Palatine, Arlington Heights, Mount
            Prospect, Des Plaines, Schaumburg, Elk Grove Village, Hoffman
            Estates, Lake Zurich, Vernon Hills, and Long Grove.
          </p>
        </div>
        <div>
          <h4>Follow</h4>
          <div className={styles.socials}>
            <a
              href={socialHref}
              aria-label="Facebook"
              target="_blank"
              rel="noreferrer"
            >
              <Facebook size={18} />
            </a>
            <a
              href={socialHref}
              aria-label="Instagram"
              target="_blank"
              rel="noreferrer"
            >
              <Instagram size={18} />
            </a>
            <a
              href={socialHref}
              aria-label="TikTok"
              target="_blank"
              rel="noreferrer"
            >
              <Music2 size={18} />
            </a>
            <a
              href={socialHref}
              aria-label="Google Business Profile"
              target="_blank"
              rel="noreferrer"
            >
              <MapPinned size={18} />
            </a>
          </div>
        </div>
      </div>
      <div className={clsx("container", styles.disclaimerRow)}>
        <p>
          Images on this website are for illustrative purposes only and do not
          represent actual before-and-after customer results.
        </p>
      </div>
      <div className={clsx("container", styles.footerBottom)}>
        <p>© 2026 Elite Yard Hygiene. All rights reserved.</p>
        <div className={styles.footerLinks}>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms">Terms</Link>
        </div>
      </div>
    </footer>
  );
};
