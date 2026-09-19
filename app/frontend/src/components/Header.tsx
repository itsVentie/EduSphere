import type { FunctionalComponent } from 'preact';
import { useLocation } from 'preact-iso';
import styles from '../styles/Header.module.css';

export const Header: FunctionalComponent = () => {
  const { url } = useLocation();

  const isActive = (targetPath: string) => (url === targetPath ? styles.navLinkActive : '');

  return (
    <>
      <div className={styles.topBar}>
        <div className={styles.topBarContainer}>
          <a href="/map" className={styles.topLink}>Map</a>
          <a href="/contacts" className={styles.topLink}>Contacts</a>
          <a href="/vacancies" className={styles.topLink}>Vacancies</a>
          <a href="/store" className={styles.topLink}>Store</a>
        </div>
      </div>

      <header className={styles.mainHeader}>
        <div className={styles.headerContainer}>
          <div className={styles.brand}>
            <a href="/" className={styles.logoLink}>
              <img src="/fueki.svg" alt="EduSphere Logo" width="48" height="48" />
            </a>
          </div>

          <nav className={styles.nav}>
            <a href="/" className={`${styles.navLink} ${isActive('/')}`}>
              Overview
            </a>
            <a href="/courses" className={`${styles.navLink} ${isActive('/courses')}`}>
              Courses
            </a>
            <a href="/submissions" className={`${styles.navLink} ${isActive('/submissions')}`}>
              Submissions
            </a>
            <a href="/settings" className={`${styles.navLink} ${isActive('/settings')}`}>
              Settings
            </a>
          </nav>

          <div className={styles.profileContainer}>
            <a
              href="/profile"
              className={`${styles.profileLink} ${url === '/profile' ? styles.profileLinkActive : ''}`}
              aria-label="Profile"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </a>
          </div>
        </div>
      </header>
    </>
  );
};