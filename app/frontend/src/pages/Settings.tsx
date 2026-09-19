import type { FunctionalComponent } from 'preact';
import { useState } from 'preact/hooks';
import styles from '../styles/Page.module.css';

export const Settings: FunctionalComponent = () => {
  const [profile, setProfile] = useState({
    fullName: 'Ventie Ravelle',
    email: 'ventie@edusphere.edu',
    department: 'Computer Science',
  });

  const [preferences, setPreferences] = useState({
    darkMode: false,
    emailNotifications: true,
    weeklyDigest: false,
    autoSaveDrafts: true,
  });

  const [isSaved, setIsSaved] = useState(false);

  const handleProfileChange = (e: Event) => {
    const target = e.target as HTMLInputElement | HTMLSelectElement;
    setProfile({ ...profile, [target.name]: target.value });
  };

  const handleCheckboxChange = (e: Event) => {
    const target = e.target as HTMLInputElement;
    setPreferences({ ...preferences, [target.name]: target.checked });
  };

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Account Settings</h1>

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.card}>
          <section className={styles.section}>
            <h3>Profile Information</h3>
            <div className={styles.fieldGroup}>
              <label className={styles.label}>
                <span>Full Name</span>
                <input
                  type="text"
                  name="fullName"
                  value={profile.fullName}
                  onInput={handleProfileChange}
                  className={styles.input}
                />
              </label>

              <label className={styles.label}>
                <span>Email Address</span>
                <input
                  type="email"
                  name="email"
                  value={profile.email}
                  onInput={handleProfileChange}
                  className={styles.input}
                />
              </label>

              <label className={styles.label}>
                <span>Department</span>
                <select
                  name="department"
                  value={profile.department}
                  onChange={handleProfileChange}
                  className={styles.select}
                >
                  <option value="Computer Science">Computer Science</option>
                  <option value="Mathematics">Mathematics</option>
                  <option value="Physics">Physics</option>
                  <option value="Engineering">Engineering</option>
                </select>
              </label>
            </div>
          </section>

          <hr className={styles.divider} />

          <section className={styles.section}>
            <h3>System Preferences</h3>
            <div className={styles.checkboxGroup}>
              <label className={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  name="darkMode"
                  checked={preferences.darkMode}
                  onChange={handleCheckboxChange}
                />
                <div>
                  <strong>Dark Mode</strong>
                  <p className={styles.hint}>Switch to dark color theme across the dashboard</p>
                </div>
              </label>

              <label className={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  name="autoSaveDrafts"
                  checked={preferences.autoSaveDrafts}
                  onChange={handleCheckboxChange}
                />
                <div>
                  <strong>Auto-save Assignment Drafts</strong>
                  <p className={styles.hint}>Automatically save inline submission edits every 30 seconds</p>
                </div>
              </label>
            </div>
          </section>

          <hr className={styles.divider} />

          <section className={styles.section}>
            <h3>Notification Preferences</h3>
            <div className={styles.checkboxGroup}>
              <label className={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  name="emailNotifications"
                  checked={preferences.emailNotifications}
                  onChange={handleCheckboxChange}
                />
                <div>
                  <strong>Submission Alerts</strong>
                  <p className={styles.hint}>Receive immediate email when student uploads an assignment</p>
                </div>
              </label>

              <label className={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  name="weeklyDigest"
                  checked={preferences.weeklyDigest}
                  onChange={handleCheckboxChange}
                />
                <div>
                  <strong>Weekly Activity Digest</strong>
                  <p className={styles.hint}>Receive a summary report of pending grades every Monday</p>
                </div>
              </label>
            </div>
          </section>

          <div className={styles.actions}>
            <button type="submit" className={styles.btnPrimary}>
              Save Changes
            </button>
            {isSaved && <span className={styles.saveSuccess}>Settings saved successfully!</span>}
          </div>
        </div>
      </form>
    </main>
  );
};

export default Settings;