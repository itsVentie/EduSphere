import type { FunctionalComponent } from 'preact';
import styles from '../styles/Header.module.css';

export const Header: FunctionalComponent = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>EduSphere Core</div>
      <nav className={styles.nav}>
        <a href="#courses" className={styles.link}>Courses</a>
        <a href="#submissions" className={styles.link}>Submissions</a>
        <a href="#stats" className={styles.link}>Stats</a>
      </nav>
    </header>
  );
};