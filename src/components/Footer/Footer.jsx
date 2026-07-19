import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

const socials = [
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Instagram", href: "https://instagram.com" },
  { label: "YouTube", href: "https://youtube.com" },
  { label: "X", href: "https://x.com" },
];

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div>
          <Link to="/" className={styles.logo}>
            <span className={styles.logoMark} aria-hidden="true" />
            Ascend
          </Link>
          <p className={styles.tagline}>
            Job-ready skills in web development, data science, design and
            marketing — taught live, mentored personally.
          </p>
        </div>

        <div>
          <h4 className={styles.heading}>Explore</h4>
          <ul className={styles.list}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/courses">Courses</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className={styles.heading}>Contact</h4>
          <ul className={styles.list}>
            <li>hello@ascendlearn.com</li>
            <li>+91 98765 43210</li>
            <li>Bengaluru, India</li>
          </ul>
        </div>

        <div>
          <h4 className={styles.heading}>Follow</h4>
          <ul className={styles.list}>
            {socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noreferrer">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className="container">
          © {year} Ascend Learning Pvt. Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
