import type { FunctionalComponent } from 'preact';
import styles from '../styles/Hero.module.css';

interface HeroProps {
  title: string;
  subtitle: string;
  imageUrl?: string;
  imageAlt?: string;
}

export const Hero: FunctionalComponent<HeroProps> = ({
  title,
  subtitle,
  imageUrl = '/hero-banner.jpg',
  imageAlt = 'Hero Banner',
}) => {
  return (
    <section className={styles.hero}>
      <img
        src={imageUrl}
        alt={imageAlt}
        className={styles.backgroundImage}
        loading="eager"
      />
      <div className={styles.overlay} />
      <div className={styles.contentContainer}>
        <h1 className={styles.heroTitle}>{title}</h1>
        <p className={styles.heroSubtitle}>{subtitle}</p>
      </div>
    </section>
  );
};