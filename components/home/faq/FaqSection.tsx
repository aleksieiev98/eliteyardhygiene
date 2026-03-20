import { clsx } from "clsx";

import shared from "@/styles/shared.module.css";

import styles from "./styles.module.css";

const faqs = [
  {
    question: "How often should my yard be cleaned?",
    answer:
      "Most homes do best with weekly service. Yards with multiple dogs or smaller play areas often benefit from twice-weekly visits.",
  },
  {
    question: "Do I need to be home during service?",
    answer:
      "No. As long as we have access to your gate, we can complete the visit and send a text or email confirmation when we're done.",
  },
  {
    question: "What happens if it rains?",
    answer:
      "We work in light rain whenever conditions are safe. If weather prevents a quality cleanup, we reschedule the visit promptly.",
  },
  {
    question: "Do you clean with dogs in the yard?",
    answer:
      "No. For safety and a smoother cleanup, pets should be kept inside while we service the yard.",
  },
  {
    question: "How do billing and scheduling work?",
    answer:
      "We start with a free quote, confirm your route day, and keep your service cadence consistent with visit notifications after each cleanup.",
  },
  {
    question: "Do you offer one-time cleanups?",
    answer:
      "Yes. One-time cleanups are popular before events, after travel, during seasonal transitions, or when restarting yard service.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We serve homeowners in Buffalo Grove, Wheeling, Palatine, Arlington Heights, Mount Prospect, Des Plaines, Schaumburg, Elk Grove Village, Hoffman Estates, and nearby northwest suburbs.",
  },
  {
    question: "Do you disinfect tools between visits?",
    answer:
      "Yes. We sanitize tools and footwear between properties to help protect your pets and keep our process clean and responsible.",
  },
];

export const FaqSection = () => {
  return (
    <section className={`section ${styles.faqSection}`} id="faq">
      <div className={clsx("container", styles.splitPanel)}>
        <div className={styles.panelCopy} data-reveal>
          <span className={shared.eyebrow}>FAQ</span>
          <h2>Questions homeowners ask before getting started.</h2>
          <p>
            Clear answers help customers feel confident fast, especially when
            they are comparing local service providers.
          </p>
        </div>
        <div className={styles.faqList}>
          {faqs.map((faq) => (
            <details key={faq.question} className={styles.faqItem} data-reveal>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};
