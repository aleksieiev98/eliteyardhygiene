import type { Metadata } from "next";

import styles from "../styles.module.css";

export const metadata: Metadata = {
  title: "Privacy Policy | Elite Yard Hygiene",
  description:
    "Read how Elite Yard Hygiene collects, uses, and protects customer information through this website and quote request form.",
};

const updatedOn = "March 20, 2026";

export default function PrivacyPolicyPage() {
  return (
    <main className={styles.page}>
      <div className="container">
        <article className={styles.card} data-reveal>
          <span className={styles.eyebrow}>Privacy Policy</span>
          <h1 className={styles.title}>Your information stays handled with care.</h1>
          <p className={styles.intro}>
            Elite Yard Hygiene collects only the information we need to respond
            to quote requests, schedule service, and communicate with customers.
            We do not sell personal information.
          </p>
          <p className={styles.meta}>Last updated: {updatedOn}</p>

          <div className={styles.content}>
            <section>
              <h2>What we collect</h2>
              <p>
                When you contact us through this site, we may collect your name,
                email address, phone number, requested service, and any yard or
                scheduling details you share with us.
              </p>
            </section>

            <section>
              <h2>How we use it</h2>
              <ul>
                <li>To respond to quote requests and service questions</li>
                <li>To schedule visits and confirm service details</li>
                <li>To send service-related updates by phone, text, or email</li>
                <li>To improve how our website and quote process work</li>
              </ul>
            </section>

            <section>
              <h2>How your information is shared</h2>
              <p>
                We only share information with service providers needed to run
                the website and communicate with you, such as email delivery,
                website hosting, and our content platform. We do not sell or
                rent your personal information.
              </p>
            </section>

            <section>
              <h2>Cookies and analytics</h2>
              <p>
                Our site may use basic website technologies that help pages load,
                remember preferences, and measure general site activity. These
                tools are used to improve the site experience, not to profile you
                for resale.
              </p>
            </section>

            <section>
              <h2>Data retention</h2>
              <p>
                We keep contact and service request information only as long as
                needed to respond, provide service, maintain records, or meet
                legal and business requirements.
              </p>
            </section>

            <section>
              <h2>Your choices</h2>
              <p>
                You can contact us any time to ask what information we have,
                request corrections, or ask that we delete information that we
                are not required to keep.
              </p>
            </section>

            <section>
              <h2>Contact us</h2>
              <p>
                If you have privacy questions, contact Elite Yard Hygiene at
                (224) 600-9367 or eliteyardhygiene@gmail.com.
              </p>
            </section>
          </div>
        </article>
      </div>
    </main>
  );
}
