import React from "react";
import TeamCard from "../../components/TeamCard/TeamCard";
import Section from "../../components/Section/Section";
import team from "../../data/team";
import styles from "./About.module.css";

const timeline = [
  {
    id: "y1",
    year: "2019",
    title: "Ascend starts as weekend workshops",
    detail: "Three founders teach web development out of a co-working space to 40 learners.",
  },
  {
    id: "y2",
    year: "2021",
    title: "First live cohort platform launches",
    detail: "Ascend moves online with live classes, recorded lectures and peer projects.",
  },
  {
    id: "y3",
    year: "2023",
    title: "Mentor network reaches 40+ practitioners",
    detail: "Every learner gets matched with an industry mentor for project feedback.",
  },
  {
    id: "y4",
    year: "2026",
    title: "2,400+ learners placed in new roles",
    detail: "Ascend expands into Data Science, Design and Marketing tracks.",
  },
];

function About() {
  return (
    <>
      <section className="section-tight">
        <div className="container">
          <Section
            eyebrow="Our Mission"
            title="Skill training that ends in a job, not just a certificate"
            description="Ascend exists to close the gap between finishing a course and being ready for the work itself. We build every track backwards from what hiring teams actually expect on day one."
          />
        </div>
      </section>

      <section className={`section ${styles.timelineSection}`}>
        <div className="container">
          <Section eyebrow="Our Story" title="How Ascend got here" />
          <div className={styles.timeline}>
            {timeline.map((item) => (
              <div className={styles.timelineItem} key={item.id}>
                <div className={styles.timelineYear}>{item.year}</div>
                <div className={styles.timelineBody}>
                  <h3 className={styles.timelineTitle}>{item.title}</h3>
                  <p className={styles.timelineDetail}>{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Section
            eyebrow="Our Team"
            title="The people behind the curriculum"
            description="A small team of teachers, engineers and mentors building Ascend full-time."
          />
          <div className={styles.teamGrid}>
            {team.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
