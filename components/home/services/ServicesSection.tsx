import Link from "next/link";
import {
  CalendarClock,
  Dog,
  Fence,
  Sparkles,
  SprayCan,
  TimerReset,
  Trees,
  type LucideIcon,
} from "lucide-react";

import shared from "@/styles/shared.module.css";

import styles from "./styles.module.css";

type ServiceItem = {
  icon: LucideIcon;
  title: string;
  copy: string;
};

const services: ServiceItem[] = [
  {
    icon: CalendarClock,
    title: "Weekly pet waste removal",
    copy: "Our most popular plan for homeowners who want a consistently fresh yard with zero hassle.",
  },
  {
    icon: TimerReset,
    title: "Twice-weekly service",
    copy: "Ideal for multiple dogs, active families, and anyone who wants the cleanest possible outdoor space.",
  },
  {
    icon: Sparkles,
    title: "One-time cleanup",
    copy: "A fast reset before parties, move-ins, listings, holidays, or after a busy stretch.",
  },
  {
    icon: SprayCan,
    title: "Yard deodorizing",
    copy: "Pet-safe finishing treatment that helps your yard smell as clean as it looks.",
  },
  {
    icon: Dog,
    title: "Multi-dog yard service",
    copy: "Flexible pricing and service plans built for households with heavier yard traffic.",
  },
  {
    icon: Trees,
    title: "Spring and seasonal cleanup",
    copy: "A thorough fresh-start service to get your yard ready for outdoor season.",
  },
  {
    icon: Fence,
    title: "Commercial pet areas",
    copy: "Reliable cleanup for HOAs, apartment communities, and dog relief stations.",
  },
];

export const ServicesSection = () => {
  return (
    <section className="section" id="services">
      <div className="container">
        <div className={styles.sectionHeading} data-reveal>
          <span className={shared.eyebrow}>Services</span>
          <h2>Flexible cleanup plans for real homes and real schedules.</h2>
          <p>
            Whether you want a simple weekly route or a one-time yard reset, we
            make it easy to choose the right level of help.
          </p>
        </div>
        <div className={styles.servicesGrid}>
          {services.map(({ icon: Icon, title, copy }) => (
            <article key={title} className={styles.serviceCard} data-reveal>
              <div className={styles.iconWrap}>
                <Icon size={24} />
              </div>
              <h3>{title}</h3>
              <p>{copy}</p>
              <Link href="#quote" className={shared.inlineLink}>
                Request this service
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
