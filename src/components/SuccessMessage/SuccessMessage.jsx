import React from "react";
import styles from "./SuccessMessage.module.css";

function SuccessMessage({ name, onReset }) {
  return (
    <div className={styles.wrap} role="status">
      <div className={styles.icon} aria-hidden="true">✓</div>
      <h3 className={styles.title}>Thanks{name ? `, ${name}` : ""} — you're on the list!</h3>
      <p className={styles.text}>
        Our enrolment team will reach out within one business day to confirm
        your preferred start date and course category.
      </p>
      <button className="btn btn-secondary" onClick={onReset}>
        Submit another response
      </button>
    </div>
  );
}

export default SuccessMessage;
