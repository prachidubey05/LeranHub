import React from "react";
import styles from "./CourseCard.module.css";

function CourseCard({ course }) {
  const { title, instructor, duration, price, category, level, image } = course;

  return (
    <article className={styles.card}>
      <div className={styles.imageWrap}>
        <img src={image} alt={`${title} course thumbnail`} loading="lazy" />
        <span className={styles.category}>{category}</span>
      </div>
      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.meta}>
          {instructor} · {level}
        </p>
        <div className={styles.footer}>
          <span className={styles.duration}>{duration}</span>
          <span className={styles.price}>${price}</span>
        </div>
      </div>
    </article>
  );
}

export default CourseCard;
