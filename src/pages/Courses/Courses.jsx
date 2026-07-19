import React, { useState, useEffect } from "react";
import CourseCard from "../../components/CourseCard/CourseCard";
import PricingPlans from "../../components/PricingPlans/PricingPlans";
import Testimonial from "../../components/Testimonial/Testimonial";
import FAQAccordion from "../../components/FAQAccordion/FAQAccordion";
import Section from "../../components/Section/Section";
import coursesData from "../../data/courses";
import testimonials from "../../data/testimonials";
import faqs from "../../data/faqs";
import styles from "./Courses.module.css";

const categories = ["All", "Web Dev", "Data Science", "Design", "Marketing"];

function Courses() {
  // Courses are held in state (rather than rendered straight from the
  // imported array) so the page can filter dynamically without mutating
  // the source data module.
  const [allCourses] = useState(coursesData);
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleCourses, setVisibleCourses] = useState(coursesData);

  useEffect(() => {
    if (activeCategory === "All") {
      setVisibleCourses(allCourses);
    } else {
      setVisibleCourses(allCourses.filter((c) => c.category === activeCategory));
    }
  }, [activeCategory, allCourses]);

  return (
    <>
      <section className="section-tight">
        <div className="container">
          <Section
            eyebrow="Course Catalogue"
            title="Find the track that fits where you're headed"
            description="Every course blends live instruction, self-paced modules and a mentor-reviewed capstone project."
          />

          <div className={styles.filters}>
            {categories.map((cat) => (
              <button
                key={cat}
                className={`${styles.filterBtn} ${
                  activeCategory === cat ? styles.filterActive : ""
                }`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className={styles.courseGrid}>
            {visibleCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      <section className={`section ${styles.pricingSection}`}>
        <div className="container">
          <Section
            eyebrow="Pricing"
            title="Plans for every stage of learning"
            description="Start free, or go Pro when you're ready for mentorship and live cohorts."
          />
          <PricingPlans />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Section
            eyebrow="Learner Stories"
            title="What learners say after finishing a track"
          />
          <Testimonial testimonials={testimonials} />
        </div>
      </section>

      <section className={`section ${styles.faqSection}`}>
        <div className="container">
          <Section eyebrow="FAQ" title="Common questions before you enrol" />
          <FAQAccordion faqs={faqs} />
        </div>
      </section>
    </>
  );
}

export default Courses;
