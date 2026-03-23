import Image from "next/image";
import { PictureInPicture2 } from "lucide-react";

import shared from "@/styles/shared.module.css";

import styles from "./styles.module.css";

const carouselPhotos = [
  {
    src: "/assets/fresh_yard_happy_dog.png",
    alt: "Dog relaxing in a freshly cleaned yard",
    label: "Fresh yard, happy dog",
  },
  {
    src: "/assets/clean-backyard-lawn.png",
    alt: "Bright green backyard after cleanup",
    label: "Weekend-ready backyard",
  },
  {
    src: "/assets/yard-cleanup-technician.png",
    alt: "Technician cleaning a residential yard",
    label: "Handled by a pro",
  },
  {
    src: "/assets/dog-yard-cleanup.png",
    alt: "Clean lawn after pet waste removal service",
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
