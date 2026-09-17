import type { FunctionalComponent } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import { Header } from './components/Header';
import { StatsCard } from './components/StatsCard';
import { CourseCard } from './components/CourseCard';
import { api } from './api/api';
import type { Course, SystemStats } from './types';

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
    description: 'Foundations of algorithms, data structures, and core programming concepts.',
  },
  {
    id: '2',
    code: 'SEC-302',
    title: 'Operating System Security',
    instructor: 'E. Volkova',
    description: 'Vulnerability analysis, process isolation, and access control mechanisms.',
  },
];

export const App: FunctionalComponent = () => {
  const [stats, setStats] = useState<SystemStats>(defaultStats);
  const [courses, setCourses] = useState<Course[]>(defaultCourses);
  const [loading, setLoading] = useState<boolean>(true);

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
        console.warn('Backend unavailable, using initial state:', err);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      <Header />
      <main className="p-8 max-w-7xl mx-auto space-y-8">
        <section>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-slate-200">System Overview</h2>
            {loading && <span className="text-xs text-sky-400 font-mono">Syncing with server...</span>}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <StatsCard title="Active Students" value={stats.active_students} description="Last 30 days" />
            <StatsCard title="Total Courses" value={stats.total_courses} description="Active this semester" />
            <StatsCard title="Submissions" value={stats.submissions} description="Pending review" />
            <StatsCard title="Storage Used" value={`${stats.storage_used_gb} GB`} description="Out of 500 GB" />
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4 text-slate-200">Available Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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