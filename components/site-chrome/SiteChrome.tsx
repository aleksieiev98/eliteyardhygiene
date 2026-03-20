import { clsx } from "clsx";
import Link from "next/link";

import shared from "@/styles/shared.module.css";

import styles from "./styles.module.css";

export const SiteChrome = () => {
  return (
    <>
      <header className={styles.siteHeader}>
        <div className={clsx("container", styles.headerInner)}>
          <Link href="/" className={styles.brand}>
            <span className={styles.brandMark}>EY</span>
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
            <Link
              href="/#quote"
              className={clsx(
                shared.button,
                shared.buttonPrimary,
                styles.headerCta
              )}
            >
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
        <Link
          href="/#quote"
          className={clsx(styles.floatingNavLink, styles.floatingNavCta)}
        >
          Free Quote
        </Link>
        <Link href="/blog" className={styles.floatingNavLink}>
          Blog
        </Link>
      </nav>
    </>
  );
};
