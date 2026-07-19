import React from "react";
import { Link } from "react-router-dom";
import styles from "./PricingPlans.module.css";

const plans = [
  {
    id: "p1",
    name: "Basic",
    price: 0,
    period: "free",
    tagline: "Try a course before you commit.",
    features: [
      "Access to 1 self-paced course",
      "Community forum access",
      "Course completion badge",
    ],
    highlight: false,
  },
  {
    id: "p2",
    name: "Standard",
    price: 29,
    period: "/month",
    tagline: "For learners building a full skill track.",
    features: [
      "Unlimited self-paced courses",
      "Monthly live workshops",
      "Verified certificate",
      "Priority support",
    ],
    highlight: true,
  },
  {
    id: "p3",
    name: "Pro",
    price: 59,
    period: "/month",
    tagline: "For learners who want mentorship and jobs.",
    features: [
      "Everything in Standard",
      "1:1 mentor matching",
      "Live cohort classes",
      "Career & interview prep",
    ],
    highlight: false,
  },
];

function PricingPlans() {
  return (
    <div className={styles.grid}>
      {plans.map((plan) => (
        <div
          key={plan.id}
          className={`${styles.card} ${plan.highlight ? styles.highlight : ""}`}
        >
          {plan.highlight && <span className={styles.badge}>Most popular</span>}
          <h3 className={styles.name}>{plan.name}</h3>
          <p className={styles.tagline}>{plan.tagline}</p>
          <div className={styles.price}>
            <span className={styles.amount}>
              {plan.price === 0 ? "Free" : `$${plan.price}`}
            </span>
            {plan.price !== 0 && <span className={styles.period}>{plan.period}</span>}
          </div>
          <ul className={styles.features}>
            {plan.features.map((f) => (
              <li key={f}>
                <span aria-hidden="true">✓</span> {f}
              </li>
            ))}
          </ul>
          <Link
            to="/contact"
            className={plan.highlight ? "btn btn-primary" : "btn btn-secondary"}
            style={{ width: "100%" }}
          >
            Choose {plan.name}
          </Link>
        </div>
      ))}
    </div>
  );
}

export default PricingPlans;
