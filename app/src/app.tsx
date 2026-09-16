import { useState } from 'preact/hooks';
import { LocationProvider, Router, Route } from 'preact-iso';
import styles from './styles/app.module.css';

type Role = 'student' | 'faculty' | 'admin';

function Home() {
  return (
    <div class={styles.container}>
      <h1>EduSphere Overview</h1>
      <p>Single Page Application demonstrator for academic workflows.</p>
    </div>
  );
}

function Dashboard({ role }: { role: Role }) {
  return (
    <div class={styles.container}>
      <h1>Dashboard</h1>
      <div class={styles.card}>
        <h3>Active Workspace: {role.toUpperCase()}</h3>
        {role === 'student' && <p>• Assignments & Syllabi (S3 / PostgreSQL)</p>}
        {role === 'faculty' && <p>• Course Rosters & Submissions Audit</p>}
        {role === 'admin' && <p>• Access Control & System Telemetry</p>}
      </div>
    </div>
  );
}

export function App() {
  const [role, setRole] = useState<Role>('student');

  return (
    <LocationProvider>
      <div class={styles.layout}>
        <header class={styles.header}>
          <span class={styles.logo}>EduSphere</span>
          <nav class={styles.nav}>
            <a href="/">Home</a>
            <a href="/dashboard">Dashboard</a>
            <select
              class={styles.roleSelect}
              value={role}
              onChange={(e) => setRole((e.target as HTMLSelectElement).value as Role)}
            >
              <option value="student">Role: Student</option>
              <option value="faculty">Role: Faculty</option>
              <option value="admin">Role: Admin</option>
            </select>
          </nav>
        </header>

        <main>
          <Router>
            <Route path="/" component={Home} />
            <Route path="/dashboard" component={() => <Dashboard role={role} />} />
          </Router>
        </main>
      </div>
    </LocationProvider>
  );
}