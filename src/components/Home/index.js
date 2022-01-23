import React from 'react';
import { Link } from 'react-router-dom';

import {
  POMODORO_URL,
  ECOMMERCE_URL,
  PIANO_URL,
  KEYBOARD_URL,
  PODCAST_URL,
} from 'routesConfig';
import day1 from './images/day-1.svg';
import day2 from './images/day-2.svg';
import day3 from './images/day-3.svg';
import day4 from './images/day-4.svg';
import day5 from './images/day-5.svg';
import day6 from './images/day-6.svg';
import day7 from './images/day-7.svg';
import day8 from './images/day-8.svg';
import day9 from './images/day-9.svg';
import day1011 from './images/day-10-11.svg';
import day12 from './images/day-12.svg';
import day1317 from './images/day-13-17.svg';
import day14 from './images/day-14.svg';
import day15 from './images/day-15.svg';
import day16 from './images/day-16.svg';
import day18 from './images/day-18.svg';
import day19 from './images/day-19.svg';
import day2324 from './images/day-23-24.svg';
import day20 from './images/day-20.svg';
import day21 from './images/day-21.svg';
import day22 from './images/day-22.svg';
import styles from './index.module.css';

const Home = () => {
  return (
    <div className={styles.root}>
      <Link to={POMODORO_URL}>
        <img src={day1} alt="Day 1" />
      </Link>
      <Link to={ECOMMERCE_URL}>
        <img src={day2} alt="Day 2" />
      </Link>
      <Link to={PIANO_URL}>
        <img src={day3} alt="Day 3" />
      </Link>
      <Link to={KEYBOARD_URL}>
        <img src={day4} alt="Day 4" />
      </Link>
      <Link to={PODCAST_URL}>
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
      <Link to="/">
        <img src={day9} alt="Day 9" />
      </Link>
      <Link to="/" className={styles.doubleWide}>
        <img src={day1011} alt="Days 10 and 11" />
      </Link>
      <Link to="/">
        <img src={day12} alt="Day 12" />
      </Link>
      <Link to="/" className={styles.doubleTall}>
        <img src={day1317} alt="Days 13 and 17" />
      </Link>
      <Link to="/">
        <img src={day14} alt="Day 14" />
      </Link>
      <Link to="/">
        <img src={day15} alt="Day 15" />
      </Link>
      <Link to="/">
        <img src={day16} alt="Day 16" />
      </Link>
      <Link to="/">
        <img src={day18} alt="Day 18" />
      </Link>
      <Link to="/">
        <img src={day19} alt="Day 19" />
      </Link>
      <Link to="/" className={styles.doubleTall}>
        <img src={day2324} alt="Days 23 and 24" />
      </Link>
      <Link to="/">
        <img src={day20} alt="Day 20" />
      </Link>
      <Link to="/">
        <img src={day21} alt="Day 21" />
      </Link>
      <Link to="/">
        <img src={day22} alt="Day 22" />
      </Link>
    </div>
  );
};

export default Home;
