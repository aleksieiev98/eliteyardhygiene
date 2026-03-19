"use client";

import Image from "next/image";
import { useId, useState } from "react";

type BeforeAfterCardProps = {
  before: string;
  after: string;
  title: string;
  description: string;
};

export function BeforeAfterCard({
  before,
  after,
  title,
  description,
}: BeforeAfterCardProps) {
  const [position, setPosition] = useState(52);
  const sliderId = useId();

  return (
    <article className="comparison-card" data-reveal>
      <div className="comparison-visual">
        <Image
          src={before}
          alt={`${title} before cleanup`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="comparison-image"
        />
        <div
          className="comparison-after"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <Image
            src={after}
            alt={`${title} after cleanup`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="comparison-image"
          />
        </div>
        <div className="comparison-line" style={{ left: `${position}%` }}>
          <span className="comparison-handle" />
        </div>
        <div className="comparison-badges">
          <span>Before</span>
          <span>After</span>
        </div>
      </div>
      <div className="comparison-copy">
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <label htmlFor={sliderId} className="comparison-label">
          Drag to compare
        </label>
        <input
          id={sliderId}
          type="range"
          min="0"
          max="100"
          value={position}
          onChange={(event) => setPosition(Number(event.target.value))}
          className="comparison-slider"
          aria-label={`Compare before and after images for ${title}`}
        />
      </div>
    </article>
  );
}
