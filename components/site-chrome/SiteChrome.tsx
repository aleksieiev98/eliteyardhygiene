import { clsx } from "clsx";
import { ClipboardList, Dog, Phone } from "lucide-react";
import Link from "next/link";

import shared from "@/styles/shared.module.css";

import styles from "./styles.module.css";

const phoneHref = "tel:2246009367";

export const SiteChrome = () => {
  return (
    <>
      <header className={styles.siteHeader}>
        <div className={clsx("container", styles.headerInner)}>
          <Link href="/" className={styles.brand}>
            <span className={styles.brandMark}>
              <Dog size={24} />
            </span>
            <span>
              Elite Yard Hygiene
              <small className={styles.brandSmall}>
                Premium pet waste removal
              </small>
            </span>
          </Link>
          <nav className={styles.desktopNav} aria-label="Primary">
            <Link href="/#services" className={styles.desktopNavLink}>
              Services
            </Link>
            <Link href="/#pricing" className={styles.desktopNavLink}>
              Pricing
            </Link>
            <Link href="/#gallery" className={styles.desktopNavLink}>
              Before & After
            </Link>
            <Link href="/#faq" className={styles.desktopNavLink}>
              FAQ
            </Link>
            <Link href="/blog" className={styles.desktopNavLink}>
              Blog
            </Link>
            <a
              href={phoneHref}
              className={clsx(
                shared.button,
                shared.buttonSecondary,
                styles.headerAction
              )}
            >
              <Phone size={16} />
              Call
            </a>
            <Link
              href="/#quote"
              className={clsx(
                shared.button,
                shared.buttonPrimary,
                styles.headerAction
              )}
            >
              <ClipboardList size={16} />
              Get a Free Quote
            </Link>
          </nav>
        </div>
      </header>

      <nav className={styles.floatingNav} aria-label="Quick navigation">
        <Link href="/#top" className={styles.floatingNavLink}>
          Home
        </Link>
        <Link href="/#gallery" className={styles.floatingNavLink}>
          Gallery
        </Link>
        <Link href="/#pricing" className={styles.floatingNavLink}>
          Pricing
        </Link>
        <Link href="/blog" className={styles.floatingNavLink}>
          Blog
        </Link>
        <a
          href={phoneHref}
          className={clsx(styles.floatingNavLink, styles.floatingNavSecondary)}
        >
          Call
        </a>
        <Link
          href="/#quote"
          className={clsx(styles.floatingNavLink, styles.floatingNavCta)}
        >
          Free Quote
        </Link>
      </nav>
    </>
  );
};
