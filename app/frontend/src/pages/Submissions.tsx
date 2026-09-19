import type { FunctionalComponent } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import { SubmissionsTable } from '../components/SubmissionTable';
import { api } from '../api/api';
import type { Submission } from '../types';
import styles from '../styles/Page.module.css';
import appStyles from '../styles/App.module.css';

export const Submissions: FunctionalComponent = () => {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadSubmissions() {
      try {
        setIsLoading(true);
        const data = await api.getSubmissions();
        setSubmissions(data);
      } catch (err) {
        setError('Failed to fetch submissions queue');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }

    loadSubmissions();
  }, []);

  if (isLoading) {
    return (
      <main className={styles.container}>
        <div className={appStyles.loading}>Loading submissions queue...</div>
      </main>
    );
  }

  if (error) {
    return (
      <main className={styles.container}>
        <div className={appStyles.error}>{error}</div>
      </main>
    );
  }

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Submissions Queue</h1>

      <div className={styles.card}>
        {submissions.length === 0 ? (
          <p className={styles.subtext}>No active submission queues at the moment.</p>
        ) : (
          <SubmissionsTable submissions={submissions} />
        )}
      </div>
    </main>
  );
};

export default Submissions;