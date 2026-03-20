"use client";

import { clsx } from "clsx";
import Image from "next/image";
import { useEffect, useState } from "react";

import styles from "./styles.module.css";

type HeroImageRotatorProps = {
  images: {
    src: string;
    alt: string;
  }[];
};

export const HeroImageRotator = ({ images }: HeroImageRotatorProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) {
      return undefined;
    }

    const interval = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % images.length);
    }, 5200);

    return () => window.clearInterval(interval);
  }, [images.length]);

  return (
    <div className={styles.heroImageWrap}>
      {images.map((image, index) => (
        <div
          key={image.src}
          className={clsx(
            styles.heroImageLayer,
            index === activeIndex && styles.heroImageLayerActive
          )}
          aria-hidden={index !== activeIndex}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            loading="eager"
            fetchPriority={index === 0 ? "high" : "auto"}
            sizes="(max-width: 768px) 100vw, 50vw"
            className={clsx(
              styles.heroImage,
              index === activeIndex && styles.heroImageActive
            )}
          />
        </div>
      ))}
    </div>
  );
};
