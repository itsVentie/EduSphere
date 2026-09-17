import type { FunctionalComponent } from 'preact';
import type { Submission } from '../types';
import styles from '../styles/SubmissionsTable.module.css';

interface SubmissionsTableProps {
  submissions: Submission[];
}

export const SubmissionsTable: FunctionalComponent<SubmissionsTableProps> = ({
  submissions,
}) => {
  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Student</th>
            <th>Assignment</th>
            <th>Submitted At</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {submissions.map((sub) => (
            <tr key={sub.id}>
              <td className={styles.studentName}>{sub.student_name}</td>
              <td className={styles.assignmentTitle}>{sub.assignment_title}</td>
              <td className={styles.date}>{sub.submitted_at}</td>
              <td>
                <span
                  className={`${styles.badge} ${
                    sub.status === 'GRADED'
                      ? styles.statusGraded
                      : sub.status === 'REJECTED'
                      ? styles.statusFailed
                      : styles.statusPending
                  }`}
                >
                  {sub.status}
                </span>
              </td>
              <td>
                <button type="button" className={styles.btnAction}>
                  Review
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};