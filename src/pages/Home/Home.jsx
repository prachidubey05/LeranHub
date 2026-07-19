import React from "react";
import { Link } from "react-router-dom";
import Hero from "../../components/Hero/Hero";
import FeatureCard from "../../components/FeatureCard/FeatureCard";
import Section from "../../components/Section/Section";
import features from "../../data/features";
import styles from "./Home.module.css";

const benefits = [
  {
    id: "b1",
    stat: "94%",
    label: "Completion rate",
    detail: "Structured pacing and mentor check-ins keep learners on track.",
  },
  {
    id: "b2",
    stat: "2,400+",
    label: "Learners placed",
    detail: "Graduates hired across web development, data and design roles.",
  },
  {
    id: "b3",
    stat: "40+",
    label: "Industry mentors",
    detail: "Practitioners from active engineering, design and growth teams.",
  },
];

function Home() {
  return (
    <>
      <Hero />

      <section className="section">
        <div className="container">
          <Section
            eyebrow="Why Ascend"
            title="Everything you need to actually finish a course"
            description="Most online courses go unfinished. Ascend is built around the four things that keep learners going."
          />
          <div className={styles.featureGrid}>
            {features.map((feature) => (
              <FeatureCard
                key={feature.id}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>

      <section className={`section ${styles.benefits}`}>
        <div className="container">
          <Section
            eyebrow="Outcomes"
            title="Learning that shows up on your resume"
            description="Numbers from the last four cohorts across all tracks."
          />
          <div className={styles.benefitGrid}>
            {benefits.map((b) => (
              <div className={styles.benefitCard} key={b.id}>
                <div className={styles.benefitStat}>{b.stat}</div>
                <div className={styles.benefitLabel}>{b.label}</div>
                <p className={styles.benefitDetail}>{b.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`section-tight ${styles.ctaSection}`}>
        <div className={`container ${styles.ctaInner}`}>
          <div>
            <h2 className={styles.ctaTitle}>Ready to start your next chapter?</h2>
            <p className={styles.ctaSub}>
              Browse live cohorts starting this month across four in-demand tracks.
            </p>
          </div>
          <Link to="/courses" className="btn btn-primary">
            Explore Courses
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;
