import React from "react";
import { Link } from "react-router-dom";
import styles from "./Hero.module.css";

const rail = [
  { id: "r1", label: "Enrol", detail: "Pick a track" },
  { id: "r2", label: "Learn", detail: "Live + self-paced" },
  { id: "r3", label: "Build", detail: "Real projects" },
  { id: "r4", label: "Certify", detail: "Job-ready proof" },
];

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          <span className="eyebrow">Live cohorts open now</span>
          <h1 className={styles.headline}>
            Learn skills that move <em>you</em> forward.
          </h1>
          <p className={styles.sub}>
            Ascend pairs live instruction with real mentors and projects, so
            you leave with proof of skill — not just a certificate.
          </p>
          <div className={styles.actions}>
            <Link to="/courses" className="btn btn-primary">
              Explore Courses
            </Link>
            <Link to="/about" className={styles.secondaryLink}>
              How Ascend works →
            </Link>
          </div>
        </div>

        <div className={styles.railWrap} aria-label="Learner journey">
          <div className={styles.rail}>
            {rail.map((step, index) => (
              <div className={styles.railStep} key={step.id}>
                <div className={styles.railDot}>{index + 1}</div>
                <div>
                  <div className={styles.railLabel}>{step.label}</div>
                  <div className={styles.railDetail}>{step.detail}</div>
                </div>
              </div>
            ))}
            <div className={styles.railLine} aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
