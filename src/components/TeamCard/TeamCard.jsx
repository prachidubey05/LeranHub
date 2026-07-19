import React from "react";
import styles from "./TeamCard.module.css";

function TeamCard({ member }) {
  const { name, role, bio, photo } = member;

  return (
    <div className={styles.card}>
      <img src={photo} alt={name} className={styles.photo} loading="lazy" />
      <h3 className={styles.name}>{name}</h3>
      <span className={styles.role}>{role}</span>
      <p className={styles.bio}>{bio}</p>
    </div>
  );
}

export default TeamCard;
