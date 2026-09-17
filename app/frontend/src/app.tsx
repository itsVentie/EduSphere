import type { FunctionalComponent } from 'preact';
import { Header } from './components/Header';
import { StatsCard } from './components/StatsCard';
import { CourseCard } from './components/CourseCard';
import type { Course, SystemStats } from './types';

const mockStats: SystemStats = {
  active_students: 1280,
  total_courses: 24,
  submissions: 412,
  storage_used_gb: 84.5,
};

const mockCourses: Course[] = [
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
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      <Header />
      <main className="p-8 max-w-7xl mx-auto space-y-8">
        <section>
          <h2 className="text-xl font-bold mb-4 text-slate-200">System Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <StatsCard title="Active Students" value={mockStats.active_students} description="Last 30 days" />
            <StatsCard title="Total Courses" value={mockStats.total_courses} description="Active this semester" />
            <StatsCard title="Submissions" value={mockStats.submissions} description="Pending review" />
            <StatsCard title="Storage Used" value={`${mockStats.storage_used_gb} GB`} description="Out of 500 GB" />
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4 text-slate-200">Available Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {mockCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;