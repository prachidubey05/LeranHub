import React from "react";
import styles from "./Section.module.css";

function Section({ eyebrow, title, description, align = "center", children }) {
  return (
    <div className={`${styles.head} ${align === "left" ? styles.left : ""}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      {title && <h2 className={styles.title}>{title}</h2>}
      {description && <p className={styles.desc}>{description}</p>}
      {children}
    </div>
  );
}

export default Section;
