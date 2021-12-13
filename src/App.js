import React, { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Outlet,
  Routes,
  Route,
  Link,
} from 'react-router-dom';

import { routes } from './routesConfig';
import Loading from 'components/common/Loading';
import styles from './App.module.css';

const Home = lazy(() => import('components/Home'));
const Page404 = lazy(() => import('components/Page404'));

const App = () => {
  return (
    <>
      <Router>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Layout />}>
              {routes.map((page) => (
                <Route
                  key={page.path}
                  path={page.path}
                  element={<page.element />}
                />
              ))}
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
