import Image from "next/image";
import { PictureInPicture2 } from "lucide-react";

import shared from "@/styles/shared.module.css";

import styles from "./styles.module.css";

const carouselPhotos = [
  {
    src: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=1200&q=80",
    alt: "Dog relaxing in a freshly cleaned yard",
    label: "Fresh yard, happy dog",
  },
  {
    src: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=1200&q=80",
    alt: "Bright green backyard after cleanup",
    label: "Weekend-ready backyard",
  },
  {
    src: "https://images.unsplash.com/photo-1516934024742-b461fba47600?auto=format&fit=crop&w=1200&q=80",
    alt: "Homeowner enjoying time outside with dog",
    label: "Peace of mind outside",
  },
  {
    src: "https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&w=1200&q=80",
    alt: "Dog running across a clean lawn",
    label: "Ready for zoomies",
  },
];

export const PhotoCarouselSection = () => {
  return (
    <section className={`section ${styles.carouselSection}`}>
      <div className="container">
        <div className={styles.sectionHeading} data-reveal>
          <span className={shared.eyebrow}>Photo Highlights</span>
          <h2>A clean yard should look this inviting all week long.</h2>
          <p>
            Scroll through a few moments that capture the feeling customers are
            really buying: a yard that looks polished, smells fresher, and feels
            easy to enjoy again.
          </p>
        </div>
        <div className={styles.photoCarousel} data-reveal>
          {carouselPhotos.map((photo) => (
            <article key={photo.label} className={styles.photoSlide}>
              <div className={styles.photoSlideImage}>
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 768px) 82vw, 32vw"
                  className={styles.imageCover}
                />
              </div>
              <div className={styles.photoSlideCopy}>
                <PictureInPicture2 size={18} />
                <span>{photo.label}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
