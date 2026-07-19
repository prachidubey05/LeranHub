import React, { useState, useEffect } from "react";
import styles from "./Testimonial.module.css";

function Testimonial({ testimonials }) {
  const [active, setActive] = useState(0);

  // Auto-advance every 6 seconds; pauses re-render churn is fine for a prototype.
  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const current = testimonials[active];

  const goTo = (index) => setActive(index);
  const goPrev = () =>
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  const goNext = () => setActive((prev) => (prev + 1) % testimonials.length);

  return (
    <div className={styles.wrap}>
      <div className={styles.card}>
        <p className={styles.quote}>&ldquo;{current.quote}&rdquo;</p>
        <div className={styles.person}>
          <img src={current.avatar} alt={current.name} className={styles.avatar} />
          <div>
            <div className={styles.name}>{current.name}</div>
            <div className={styles.role}>{current.role}</div>
          </div>
        </div>
      </div>

      <div className={styles.controls}>
        <button
          className={styles.arrow}
          onClick={goPrev}
          aria-label="Previous testimonial"
        >
          ←
        </button>
        <div className={styles.dots}>
          {testimonials.map((t, index) => (
            <button
              key={t.id}
              className={`${styles.dot} ${index === active ? styles.dotActive : ""}`}
              onClick={() => goTo(index)}
              aria-label={`Show testimonial from ${t.name}`}
            />
          ))}
        </div>
        <button className={styles.arrow} onClick={goNext} aria-label="Next testimonial">
          →
        </button>
      </div>
    </div>
  );
}

export default Testimonial;
