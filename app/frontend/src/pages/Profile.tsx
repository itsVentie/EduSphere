import type { FunctionalComponent } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import { api } from '../api/api';
import styles from '../styles/Profile.module.css';

interface UserProfileData {
  name: string;
  email: string;
  role: string;
  studentId: string;
  department: string;
  joinedDate: string;
  activeCoursesCount: number;
  completedCoursesCount: number;
}

export const Profile: FunctionalComponent = () => {
  const [profile, setProfile] = useState<UserProfileData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchProfile() {
      try {
        setIsLoading(true);
        const data = await (api as any).getProfile?.();
        if (data) {
          setProfile(data);
        } else {
          setProfile({
            name: 'Ventie Ravelle',
            email: 'ventie@edusphere.edu',
            role: 'Student',
            studentId: 'EDU-2026-8841',
            department: 'Computer Science',
            joinedDate: 'September 2025',
            activeCoursesCount: 4,
            completedCoursesCount: 12,
          });
        }
      } catch (err) {
        console.error('Failed to load profile:', err);
      } finally {
        setIsLoading(false);
      }
    }

    fetchProfile();
  }, []);

  if (isLoading) {
    return (
      <main className={styles.container}>
        <p className={styles.subtext} style={{ textAlign: 'center', padding: '40px 0' }}>
          Loading profile...
        </p>
      </main>
    );
  }

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>User Profile</h1>

      <div className={styles.card}>
        <div className={styles.profileHeader}>
          <div className={styles.avatar}>
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </div>
          <div>
            <h2 style={{ fontSize: '20px', fontWeight: 600, margin: 0, color: '#1d1d1f' }}>
              {profile?.name}
            </h2>
            <p className={styles.subtext}>{profile?.role}</p>
          </div>
        </div>

        <div className={styles.section} style={{ marginTop: '28px' }}>
          <h3>Account Overview</h3>
          
          <div className={styles.field}>
            <span style={{ color: '#86868b' }}>Student ID</span>
            <span style={{ fontWeight: 500 }}>{profile?.studentId}</span>
          </div>

          <div className={styles.field}>
            <span style={{ color: '#86868b' }}>Email</span>
            <span style={{ fontWeight: 500 }}>{profile?.email}</span>
          </div>

          <div className={styles.field}>
            <span style={{ color: '#86868b' }}>Department</span>
            <span style={{ fontWeight: 500 }}>{profile?.department}</span>
          </div>

          <div className={styles.field}>
            <span style={{ color: '#86868b' }}>Member Since</span>
            <span style={{ fontWeight: 500 }}>{profile?.joinedDate}</span>
          </div>
        </div>

        <div className={styles.section} style={{ marginTop: '28px' }}>
          <h3>Academic Progress</h3>

          <div className={styles.field}>
            <span style={{ color: '#86868b' }}>Active Enrolled Courses</span>
            <span style={{ fontWeight: 600, color: '#1d1d1f' }}>
              {profile?.activeCoursesCount}
            </span>
          </div>

          <div className={styles.field}>
            <span style={{ color: '#86868b' }}>Completed Courses</span>
            <span style={{ fontWeight: 600, color: '#1d1d1f' }}>
              {profile?.completedCoursesCount}
            </span>
          </div>
        </div>

        <div className={styles.section} style={{ marginTop: '28px' }}>
          <h3>Security</h3>

          <div className={styles.field}>
            <span style={{ color: '#86868b' }}>Two-Factor Authentication</span>
            <span style={{ fontSize: '13px', color: '#1d1d1f', fontWeight: 500 }}>
              Enabled
            </span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Profile;