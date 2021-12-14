import React, { useState, useEffect, useRef } from 'react';
import format from 'date-fns/format';

import { ReactComponent as ReactLogo } from './images/gear.svg';
import styles from './index.module.css';

const INITIAL_MAX_TIME = 1000 * 60 * 15; // 15 minutes
const INITIAL_PROGRESS_RING_STYLE = { backgroundColor: `var(--green)` };

const getFormattedTime = (ms) => format(ms, 'mm:ss');

const getMsTime = (formattedTime) => {
  const time = formattedTime.split(':');
  return 1000 * 60 * time[0] + 1000 * time[1];
};

const Pomodoro = () => {
  const [maxTime, setMaxTime] = useState(INITIAL_MAX_TIME);
  const [inputTime, setInputTime] = useState(getFormattedTime(maxTime));
  const [isValidTime, setIsValidTime] = useState(true);
  const [isRun, setIsRun] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [progressRingStyle, setProgressRingStyle] = useState(
    INITIAL_PROGRESS_RING_STYLE
  );
  const timerIdRef = useRef(0);
  const timeInputRef = useRef(null);

  const startEditing = () => {
    timeInputRef.current.focus();
    setIsRun(false);
    setIsEdit(true);
  };

  const handleStartStop = () => {
    if (isRun) {
      setIsRun(false);
    } else {
      setMaxTime(getMsTime(inputTime));
      setProgressRingStyle(INITIAL_PROGRESS_RING_STYLE);
      setIsEdit(false);
      setIsRun(true);
    }
  };

  const handleTimeInput = (e) => {
    const inputString = e.target.value;
    const isValid = !!inputString.match(/[0-5][0-9]:[0-5][0-9]/);

    setInputTime(inputString);
    setIsValidTime(isValid);
  };

  useEffect(() => {
    if (!isRun) clearTimeout(timerIdRef.current);
    else {
      if (getMsTime(inputTime) === 0) {
        setIsRun(false);
        alert('Timer goes off');
      } else {
        const timerId = setTimeout(() => {
          const newTime = getMsTime(inputTime) - 1000;
          const progress = (newTime / maxTime) * 360;

          setProgressRingStyle(
            progress === 0
              ? { backgroundColor: 'var(--red)' }
              : {
                  backgroundImage: `conic-gradient(from 180deg, var(--green) ${progress}deg, black ${progress}deg)`,
                }
          );
          setInputTime(getFormattedTime(newTime));
        }, 1000);
        timerIdRef.current = timerId;
      }
    }
  }, [isRun, inputTime, maxTime]);

  return (
    <div className={styles.root}>
      <div className={styles.progressRing} style={progressRingStyle}>
        <div className={styles.clock}>
          <input
            ref={timeInputRef}
            className={styles.timeInput}
            value={inputTime}
            onChange={handleTimeInput}
            readOnly={!isEdit}
          />
          <div className={styles.buttonWrapper}>
            <button
              disabled={!isValidTime}
              className={styles.startStopButton}
              onClick={handleStartStop}
            >
              {isRun ? 'STOP' : 'START'}
            </button>
          </div>
          <div className={styles.iconButtonWrapper}>
            <button className={styles.iconButton} onClick={startEditing}>
              <ReactLogo />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pomodoro;
