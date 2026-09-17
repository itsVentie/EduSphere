import type { FunctionalComponent } from 'preact';
import styles from '../styles/Hero.module.css';

interface HeroProps {
  title: string;
  subtitle: string;
}

export const Hero: FunctionalComponent<HeroProps> = ({ title, subtitle }) => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContainer}>
        <h1 className={styles.heroTitle}>{title}</h1>
        <p className={styles.heroSubtitle}>{subtitle}</p>
      </div>
    </section>
  );
};