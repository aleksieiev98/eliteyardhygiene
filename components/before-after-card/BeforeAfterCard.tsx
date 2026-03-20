"use client";

import Image from "next/image";
import { useRef, useState } from "react";

import styles from "./styles.module.css";

type BeforeAfterCardProps = {
  before: string;
  after: string;
  title: string;
  description: string;
};

const clamp = (value: number, min: number, max: number) => {
  return Math.min(Math.max(value, min), max);
};

export const BeforeAfterCard = ({
  before,
  after,
  title,
  description,
}: BeforeAfterCardProps) => {
  const [position, setPosition] = useState(52);
  const visualRef = useRef<HTMLDivElement | null>(null);

  const updatePosition = (clientX: number) => {
    const bounds = visualRef.current?.getBoundingClientRect();

    if (!bounds || bounds.width === 0) {
      return;
    }

    const nextPosition = ((clientX - bounds.left) / bounds.width) * 100;
    setPosition(clamp(nextPosition, 0, 100));
  };

  const handlePointerDown = (event: React.PointerEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.currentTarget.setPointerCapture(event.pointerId);
    updatePosition(event.clientX);
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLButtonElement>) => {
    if (!event.currentTarget.hasPointerCapture(event.pointerId)) {
      return;
    }

    updatePosition(event.clientX);
  };

  const handlePointerUp = (event: React.PointerEvent<HTMLButtonElement>) => {
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      setPosition((currentPosition) => clamp(currentPosition - 5, 0, 100));
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      setPosition((currentPosition) => clamp(currentPosition + 5, 0, 100));
    }
  };

  return (
    <article className={styles.comparisonCard} data-reveal>
      <div ref={visualRef} className={styles.comparisonVisual}>
        <Image
          src={before}
          alt={`${title} before cleanup`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className={styles.comparisonImage}
        />
        <div
          className={styles.comparisonAfter}
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <Image
            src={after}
            alt={`${title} after cleanup`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className={styles.comparisonImage}
          />
        </div>
        <div className={styles.comparisonBadges}>
          <span>Before</span>
          <span>After</span>
        </div>
        <button
          type="button"
          className={styles.comparisonDivider}
          style={{ left: `${position}%` }}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          onKeyDown={handleKeyDown}
          aria-label={`Drag to compare before and after images for ${title}`}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(position)}
          aria-valuetext={`${Math.round(position)} percent after image visible`}
          role="slider"
        >
          <span className={styles.comparisonHandle}>
            <span className={styles.handleArrows} aria-hidden="true">
              <span />
              <span />
            </span>
          </span>
        </button>
      </div>
      <div className={styles.comparisonCopy}>
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <p className={styles.comparisonHint}>Drag the divider to compare.</p>
      </div>
    </article>
  );
};
