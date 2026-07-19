import React, { useState } from "react";
import styles from "./FAQAccordion.module.css";

function FAQAccordion({ faqs }) {
  const [openId, setOpenId] = useState(faqs[0]?.id ?? null);

  const toggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className={styles.list}>
      {faqs.map((faq) => {
        const isOpen = openId === faq.id;
        return (
          <div className={styles.item} key={faq.id}>
            <button
              className={styles.question}
              onClick={() => toggle(faq.id)}
              aria-expanded={isOpen}
            >
              <span>{faq.question}</span>
              <span className={`${styles.icon} ${isOpen ? styles.iconOpen : ""}`}>
                +
              </span>
            </button>
            {isOpen && <p className={styles.answer}>{faq.answer}</p>}
          </div>
        );
      })}
    </div>
  );
}

export default FAQAccordion;
