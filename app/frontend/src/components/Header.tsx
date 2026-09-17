import React from 'react';
import styles from '../styles/Header.module.css';

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>EduSphere Core</div>
      <nav className={styles.nav}>
        <a href="#courses" className={styles.link}>Курсы</a>
        <a href="#submissions" className={styles.link}>Отправки</a>
        <a href="#stats" className={styles.link}>Статистика</a>
      </nav>
    </header>
  );
};