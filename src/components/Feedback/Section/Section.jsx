import React from 'react';
import styles from './Section.module.css';

export const Section = ({ title, children }) => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.title}>{title}</div>
      {children}
    </section>
  );
};
