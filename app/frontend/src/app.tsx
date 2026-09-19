import type { FunctionalComponent } from 'preact';
import { LocationProvider, Router, Route } from 'preact-iso';
import { Header } from './components/Header';
import { Main } from './pages/Main';
import { Profile } from './pages/Profile';
import { Settings } from './pages/Settings';
import { Courses } from './pages/Courses'
import { Submissions } from './pages/Submissions';
import styles from './styles/App.module.css';

export const App: FunctionalComponent = () => {
  return (
    <LocationProvider>
      <div className={styles.layout}>
        <Header />
        <Router>
          <Route path="/" component={Main} />
          <Route path="/profile" component={Profile} />
          <Route path="/courses" component={Courses} />
          <Route path="/settings" component={Settings} />
          <Route path="/submissions" component={Submissions} />
        </Router>
      </div>
    </LocationProvider>
  );
};

export default App;