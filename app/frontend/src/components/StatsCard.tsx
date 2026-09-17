import type { FunctionalComponent } from 'preact';
import styles from '../styles/StatsCard.module.css';

interface StatsCardProps {
  title: string;
  value: string | number;
  description: string;
}

export const StatsCard: FunctionalComponent<StatsCardProps> = ({
  title,
  value,
  description,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.title}>{title}</div>
      <div className={styles.value}>{value}</div>
      <div className={styles.description}>{description}</div>
    </div>
  );
};