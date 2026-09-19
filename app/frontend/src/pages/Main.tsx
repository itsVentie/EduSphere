import type { FunctionalComponent } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import { Hero } from '../components/Hero';
import { StatsCard } from '../components/StatsCard';
import { CourseCard } from '../components/CourseCard';
import { api } from '../api/api';
import type { Course, SystemStats } from '../types';
import styles from '../styles/App.module.css';

export const Main: FunctionalComponent = () => {
  const [stats, setStats] = useState<SystemStats | null>(null);
  const [courses, setCourses] = useState<Course[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadData() {
      try {
        setIsLoading(true);
        const [statsData, coursesData] = await Promise.all([
          api.getStats(),
          api.getCourses(),
        ]);
        setStats(statsData);
        setCourses(coursesData);
      } catch (err) {
        setError('Failed to fetch data from backend');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }

    loadData();
  }, []);

  if (isLoading) {
    return <div className={styles.loading}>Loading dashboard...</div>;
  }

  if (error || !stats) {
    return <div className={styles.error}>{error || 'Data missing'}</div>;
  }

  return (
    <>
      <Hero
  title="Professional Development Courses"
  subtitle="Study in English. Build real projects. Become part of a powerful tech community."
  imageUrl="https://images.unsplash.com/photo-1758685734622-3e0a002b2f53?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTgzfHxlZHVjYXRpb258ZW58MHx8MHx8fDA%3D"
/>

      <main className={styles.main}>
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>System Overview</h2>
          </div>
          <div className={styles.gridStats}>
            <StatsCard
              title="Active Students"
              value={stats.active_students}
              description="Last 30 days"
            />
            <StatsCard
              title="Total Courses"
              value={stats.total_courses}
              description="Active this semester"
            />
            <StatsCard
              title="Submissions"
              value={stats.submissions}
              description="Pending review"
            />
            <StatsCard
              title="Storage Used"
              value={`${stats.storage_used_gb} GB`}
              description="Out of 500 GB"
            />
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Available Courses</h2>
          </div>
          <div className={styles.gridCourses}>
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
};