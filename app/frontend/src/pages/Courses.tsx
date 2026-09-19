import type { FunctionalComponent } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import { CourseCard } from '../components/CourseCard';
import { api } from '../api/api';
import type { Course } from '../types';
import styles from '../styles/Page.module.css';
import appStyles from '../styles/App.module.css';

export const Courses: FunctionalComponent = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadCourses() {
      try {
        setIsLoading(true);
        const data = await api.getCourses();
        setCourses(data);
      } catch (err) {
        setError('Failed to load courses from backend');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }

    loadCourses();
  }, []);

  if (isLoading) {
    return <div className={appStyles.loading}>Loading courses...</div>;
  }

  if (error) {
    return <div className={appStyles.error}>{error}</div>;
  }

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Available Courses</h1>

      {courses.length === 0 ? (
        <div className={styles.card}>
          <p className={styles.subtext}>No courses available at the moment.</p>
        </div>
      ) : (
        <div className={appStyles.gridCourses}>
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      )}
    </main>
  );
};
