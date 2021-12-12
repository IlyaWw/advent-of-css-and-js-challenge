import React, { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Outlet,
  Routes,
  Route,
  Link,
} from 'react-router-dom';

import Loading from 'components/common/Loading';
import styles from './App.module.css';

const Home = lazy(() => import('components/Home'));
const Pomodoro = lazy(() => import('components/Pomodoro'));
const Page404 = lazy(() => import('components/Page404'));

const App = () => {
  return (
    <>
      <Router>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Layout />}>
              <Route path="pomodoro" element={<Pomodoro />} />
              <Route path="*" element={<Page404 />} />
            </Route>
          </Routes>
        </Suspense>
      </Router>
    </>
  );
};

const Layout = () => {
  return (
    <div>
      <Link to="/" className={styles.root}>
        &#10094; <span />
      </Link>
      <Outlet />
    </div>
  );
};

export default App;
