import shared from "@/styles/shared.module.css";

import styles from "./styles.module.css";

const processSteps = [
  {
    title: "Choose your service",
    text: "Tell us about your yard, your dogs, and whether you want recurring or one-time cleanup.",
  },
  {
    title: "We clean and sanitize",
    text: "Our team scoops thoroughly, secures the area, and sanitizes tools between every property.",
  },
  {
    title: "Enjoy a fresh, clean yard",
    text: "You get visit notifications, easy online billing, and a yard that feels good to step into.",
  },
];

export const ProcessSection = () => {
  return (
    <section className="section muted-section">
      <div className="container">
        <div className={styles.sectionHeading} data-reveal>
          <span className={shared.eyebrow}>How It Works</span>
          <h2>Simple, sanitary, and easy to trust.</h2>
        </div>
        <div className={styles.stepsGrid}>
          {processSteps.map((step, index) => (
            <article key={step.title} className={styles.stepCard} data-reveal>
              <span className={styles.stepIndex}>0{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
