import React, { useState } from "react";
import Section from "../../components/Section/Section";
import SuccessMessage from "../../components/SuccessMessage/SuccessMessage";
import styles from "./Contact.module.css";

const initialFormState = {
  fullName: "",
  email: "",
  phone: "",
  startDate: "",
  category: "",
  mode: "",
  interests: [],
  message: "",
};

const interestOptions = [
  "JavaScript",
  "Python",
  "UI/UX Design",
  "SEO & Content",
  "Cloud & DevOps",
  "Data Visualisation",
];

function Contact() {
  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckbox = (topic) => {
    setFormData((prev) => {
      const alreadySelected = prev.interests.includes(topic);
      return {
        ...prev,
        interests: alreadySelected
          ? prev.interests.filter((i) => i !== topic)
          : [...prev.interests, topic],
      };
    });
  };

  const validate = (data) => {
    const newErrors = {};

    if (!data.fullName.trim()) {
      newErrors.fullName = "Full name is required.";
    } else if (data.fullName.trim().length < 3) {
      newErrors.fullName = "Full name must be at least 3 characters.";
    }

    if (!data.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
      newErrors.email = "Enter a valid email address.";
    }

    if (!data.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^\d{10}$/.test(data.phone.replace(/\D/g, ""))) {
      newErrors.phone = "Enter a valid 10-digit phone number.";
    }

    if (!data.startDate) {
      newErrors.startDate = "Please choose a preferred start date.";
    } else if (new Date(data.startDate) < new Date(new Date().toDateString())) {
      newErrors.startDate = "Start date can't be in the past.";
    }

    if (!data.category) {
      newErrors.category = "Please select a course category.";
    }

    if (!data.mode) {
      newErrors.mode = "Please select a preferred mode.";
    }

    if (data.interests.length === 0) {
      newErrors.interests = "Select at least one topic you're interested in.";
    }

    if (!data.message.trim()) {
      newErrors.message = "Tell us a little about your goals.";
    } else if (data.message.trim().length < 10) {
      newErrors.message = "Message should be at least 10 characters.";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Prototype only: no request is sent. Show the success state instead.
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setFormData(initialFormState);
    setErrors({});
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <section className="section">
        <div className="container">
          <SuccessMessage name={formData.fullName.split(" ")[0]} onReset={handleReset} />
        </div>
      </section>
    );
  }

  return (
    <section className="section">
      <div className={`container ${styles.wrap}`}>
        <Section
          align="left"
          eyebrow="Enrol"
          title="Tell us where you want to go"
          description="Fill this out and our team will match you with the right cohort and start date."
        />

        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <div className={styles.row}>
            <div className={styles.field}>
              <label htmlFor="fullName">Full Name</label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Jordan Lee"
              />
              {errors.fullName && <span className={styles.error}>{errors.fullName}</span>}
            </div>

            <div className={styles.field}>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="text"
                value={formData.email}
                onChange={handleChange}
                placeholder="jordan@email.com"
              />
              {errors.email && <span className={styles.error}>{errors.email}</span>}
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.field}>
              <label htmlFor="phone">Phone Number</label>
              <input
                id="phone"
                name="phone"
                type="text"
                value={formData.phone}
                onChange={handleChange}
                placeholder="9876543210"
              />
              {errors.phone && <span className={styles.error}>{errors.phone}</span>}
            </div>

            <div className={styles.field}>
              <label htmlFor="startDate">Preferred Start Date</label>
              <input
                id="startDate"
                name="startDate"
                type="date"
                value={formData.startDate}
                onChange={handleChange}
              />
              {errors.startDate && <span className={styles.error}>{errors.startDate}</span>}
            </div>
          </div>

          <div className={styles.field}>
            <label htmlFor="category">Course Category</label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
            >
              <option value="">Select a category</option>
              <option value="Web Dev">Web Development</option>
              <option value="Data Science">Data Science</option>
              <option value="Design">Design</option>
              <option value="Marketing">Marketing</option>
            </select>
            {errors.category && <span className={styles.error}>{errors.category}</span>}
          </div>

          <div className={styles.field}>
            <span className={styles.groupLabel}>Preferred Mode</span>
            <div className={styles.radioGroup}>
              {["Online", "Offline", "Hybrid"].map((mode) => (
                <label className={styles.radioOption} key={mode}>
                  <input
                    type="radio"
                    name="mode"
                    value={mode}
                    checked={formData.mode === mode}
                    onChange={handleChange}
                  />
                  {mode}
                </label>
              ))}
            </div>
            {errors.mode && <span className={styles.error}>{errors.mode}</span>}
          </div>

          <div className={styles.field}>
            <span className={styles.groupLabel}>Topics You're Interested In</span>
            <div className={styles.checkGroup}>
              {interestOptions.map((topic) => (
                <label className={styles.checkOption} key={topic}>
                  <input
                    type="checkbox"
                    checked={formData.interests.includes(topic)}
                    onChange={() => handleCheckbox(topic)}
                  />
                  {topic}
                </label>
              ))}
            </div>
            {errors.interests && <span className={styles.error}>{errors.interests}</span>}
          </div>

          <div className={styles.field}>
            <label htmlFor="message">Message / Query</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your background and what you'd like to achieve..."
            />
            {errors.message && <span className={styles.error}>{errors.message}</span>}
          </div>

          <div className={styles.actions}>
            <button type="submit" className="btn btn-primary">
              Submit Enrolment
            </button>
            <button type="button" className="btn btn-secondary" onClick={handleReset}>
              Reset
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
