import type { FunctionalComponent } from 'preact';
import type { Course } from '../types';
import styles from '../styles/CourseCard.module.css';

interface CourseCardProps {
  course: Course;
}

export const CourseCard: FunctionalComponent<CourseCardProps> = ({ course }) => {
  return (
    <div className={styles.card}>
      <div>
        <span className={styles.badge}>{course.code}</span>
        <h3 className={styles.title}>{course.title}</h3>
        <p className={styles.description}>{course.description}</p>
      </div>

      <div className={styles.footer}>
        <div>
          Instructor: <span className={styles.instructor}>{course.instructor}</span>
        </div>
        <button type="button" className={styles.btnLearnMore}>
          Learn More
        </button>
      </div>
    </div>
  );
};