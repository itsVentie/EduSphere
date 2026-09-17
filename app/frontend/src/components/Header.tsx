import type { FunctionalComponent } from 'preact';
import styles from '../styles/Header.module.css';

export const Header: FunctionalComponent = () => {
  return (
    <>
      <div className={styles.topBar}>
        <div className={styles.topBarContainer}>
          <a href="#map" className={styles.topLink}>Map</a>
          <a href="#contacts" className={styles.topLink}>Contacts</a>
          <a href="#vacancies" className={styles.topLink}>Vacancies</a>
          <a href="#store" className={styles.topLink}>Store</a>
        </div>
      </div>

      <header className={styles.mainHeader}>
        <div className={styles.headerContainer}>
          <div className={styles.brand}>
            <a href="/" className={styles.logoLink}>
              <img src="/favicon.svg" alt="EduSphere Logo" width="36" height="36" />
            </a>
          </div>

          <nav className={styles.nav}>
            <a href="#overview" className={`${styles.navLink} ${styles.navLinkActive}`}>
              Overview
            </a>
            <a href="#courses" className={styles.navLink}>
              Courses
            </a>
            <a href="#submissions" className={styles.navLink}>
              Submissions
            </a>
            <a href="#settings" className={styles.navLink}>
              Settings
            </a>
          </nav>
        </div>
      </header>
    </>
  );
};