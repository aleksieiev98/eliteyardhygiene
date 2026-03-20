import { clsx } from "clsx";
import Link from "next/link";
import { Facebook, Instagram, Music2, Star } from "lucide-react";

import styles from "./styles.module.css";

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
          <a href="tel:5555550145">(555) 555-0145</a>
          <a href="mailto:hello@eliteyardhygiene.com">hello@eliteyardhygiene.com</a>
          <p>Mon-Fri 8am-6pm</p>
        </div>
        <div>
          <h4>Service Area</h4>
          <p>Brookhaven, Cedar Park, Willow Creek, Maple Heights, and nearby neighborhoods.</p>
        </div>
        <div>
          <h4>Follow</h4>
          <div className={styles.socials}>
            <a href="https://facebook.com" aria-label="Facebook">
              <Facebook size={18} />
            </a>
            <a href="https://instagram.com" aria-label="Instagram">
              <Instagram size={18} />
            </a>
            <a href="https://tiktok.com" aria-label="TikTok">
              <Music2 size={18} />
            </a>
            <a href="https://business.google.com" aria-label="Google Business Profile">
              <Star size={18} />
            </a>
          </div>
        </div>
      </div>
      <div className={clsx("container", styles.footerBottom)}>
        <p>© 2026 Elite Yard Hygiene. All rights reserved.</p>
        <div className={styles.footerLinks}>
          <Link href="/">Privacy Policy</Link>
          <Link href="/">Terms</Link>
        </div>
      </div>
    </footer>
  );
};
