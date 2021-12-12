import React from 'react';
import { Link } from 'react-router-dom';

import day1 from './images/day-1.svg';
import day2 from './images/day-2.svg';
import day3 from './images/day-3.svg';
import day4 from './images/day-4.svg';
import day5 from './images/day-5.svg';
import day6 from './images/day-6.svg';
import day7 from './images/day-7.svg';
import day8 from './images/day-8.svg';
import styles from './index.module.css';

const Home = () => {
  return (
    <div className={styles.root}>
      <Link to="/pomodoro">
        <img src={day1} alt="Day 1" />
      </Link>
      <Link to="/">
        <img src={day2} alt="Day 2" />
      </Link>
      <Link to="/">
        <img src={day3} alt="Day 3" />
      </Link>
      <Link to="/">
        <img src={day4} alt="Day 4" />
      </Link>
      <Link to="/">
        <img src={day5} alt="Day 5" />
      </Link>
      <Link to="/">
        <img src={day6} alt="Day 6" />
      </Link>
      <Link to="/">
        <img src={day7} alt="Day 7" />
      </Link>
      <Link to="/">
        <img src={day8} alt="Day 8" />
      </Link>
    </div>
  );
};

export default Home;
