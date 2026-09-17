import type { FunctionalComponent } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { StatsCard } from './components/StatsCard';
import { CourseCard } from './components/CourseCard';
import { api } from './api/api';
import type { Course, SystemStats } from './types';
import styles from './styles/App.module.css';

const defaultStats: SystemStats = {
  active_students: 1280,
  total_courses: 24,
  submissions: 412,
  storage_used_gb: 84.5,
};

const defaultCourses: Course[] = [
  {
    id: '1',
    code: 'CS-101',
    title: 'Introduction to Computer Science',
    instructor: 'Dr. A. Smirnov',
    description:
      'Foundations of algorithms, data structures, and core programming concepts.',
  },
  {
    id: '2',
    code: 'SEC-302',
    title: 'Operating System Security',
    instructor: 'E. Volkova',
    description:
      'Vulnerability analysis, process isolation, and access control mechanisms.',
  },
];

export const App: FunctionalComponent = () => {
  const [stats, setStats] = useState<SystemStats>(defaultStats);
  const [courses, setCourses] = useState<Course[]>(defaultCourses);

  useEffect(() => {
    async function loadData() {
      try {
        const [statsData, coursesData] = await Promise.all([
          api.getStats(),
          api.getCourses(),
        ]);
        setStats(statsData);
        setCourses(coursesData);
      } catch (err) {
        console.warn('Backend unavailable, rendering fallback state:', err);
      }
    }

    loadData();
  }, []);

  return (
    <div className={styles.layout}>
      <Header />
      <Hero
        title="Professional Development Courses"
        subtitle="Study in English. Build real projects. Become part of a powerful tech community."
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
    </div>
  );
};

export default App;