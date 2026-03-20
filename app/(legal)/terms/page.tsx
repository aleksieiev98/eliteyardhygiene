import type { Metadata } from "next";

import styles from "../styles.module.css";

export const metadata: Metadata = {
  title: "Terms | Elite Yard Hygiene",
  description:
    "Review the basic service and website terms for Elite Yard Hygiene, including quotes, scheduling, and communication expectations.",
};

const updatedOn = "March 20, 2026";

export default function TermsPage() {
  return (
    <main className={styles.page}>
      <div className="container">
        <article className={styles.card} data-reveal>
          <span className={styles.eyebrow}>Terms</span>
          <h1 className={styles.title}>Simple terms for using our site and booking service.</h1>
          <p className={styles.intro}>
            These terms explain how Elite Yard Hygiene handles quote requests,
            scheduling, and use of this website. By using the site or booking
            service, you agree to these terms.
          </p>
          <p className={styles.meta}>Last updated: {updatedOn}</p>

          <div className={styles.content}>
            <section>
              <h2>Website use</h2>
              <p>
                You agree to use this site only for lawful purposes and to
                provide accurate contact and service information when requesting
                a quote.
              </p>
            </section>

            <section>
              <h2>Quotes and pricing</h2>
              <p>
                Pricing shown on the site is general guidance. Final pricing may
                vary based on yard size, number of dogs, service frequency,
                access conditions, and the amount of cleanup required.
              </p>
            </section>

            <section>
              <h2>Scheduling and access</h2>
              <p>
                Service timing may change due to weather, route conditions,
                holidays, or safety concerns. Customers are responsible for
                providing safe access to the yard and keeping pets out of the
                service area during cleanup.
              </p>
            </section>

            <section>
              <h2>Service expectations</h2>
              <p>
                We aim to provide reliable, professional service and secure gates
                after each visit. If there is an issue with service, please let
                us know promptly so we can make it right.
              </p>
            </section>

            <section>
              <h2>Payments and cancellations</h2>
              <p>
                Payment terms, billing timing, and cancellation details may be
                shared during booking or onboarding. Promotional offers are
                subject to change and may be limited to qualifying customers or
                service plans.
              </p>
            </section>

            <section>
              <h2>Content and availability</h2>
              <p>
                We try to keep website content accurate and current, but we do
                not guarantee that every page, price example, or service detail
                is complete or available at all times.
              </p>
            </section>

            <section>
              <h2>Contact us</h2>
              <p>
                Questions about these terms can be sent to Elite Yard Hygiene at
                (224) 600-9367 or eliteyardhygiene@gmail.com.
              </p>
            </section>
          </div>
        </article>
      </div>
    </main>
  );
}
