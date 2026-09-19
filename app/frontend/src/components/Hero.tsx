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
  imageUrl = 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=80',
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