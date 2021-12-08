import React, { useState, useEffect, useRef } from 'react';
import format from 'date-fns/format';

import { ReactComponent as ReactLogo } from 'images/gear.svg';
import styles from './App.module.css';

const INITIAL_MAX_TIME = 1000 * 60 * 15; // 15 minutes
const INITIAL_PROGRESS_RING_STYLE = { backgroundColor: `var(--green)` };
const getFormattedTime = (ms) => format(ms, 'mm:ss');

const getMsTime = (formattedTime) => {
  const time = formattedTime.split(':');
  return 1000 * 60 * time[0] + 1000 * time[1];
};

const App = () => {
  const [maxTime, setMaxTime] = useState(INITIAL_MAX_TIME);
  const [currentTime, setCurrentTime] = useState(maxTime);
  const [inputTime, setInputTime] = useState(getFormattedTime(maxTime));
  const [isValidTime, setIsValidTime] = useState(true);
  const [isRun, setIsRun] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [progressRingStyle, setProgressRingStyle] = useState(
    INITIAL_PROGRESS_RING_STYLE
  );
  const timerIdRef = useRef(0);

  const startEditing = () => {
    setIsRun(false);
    setIsEdit(true);
  };

  const handleTimeInput = (e) => {
    const inputString = e.target.value;
    const isValid = !!inputString.match(/[0-5][0-9]:[0-5][0-9]/);

    setInputTime(inputString);
    setIsValidTime(isValid);
  };

  const handleEditCommit = () => {
    const newTime = getMsTime(inputTime);
    setMaxTime(newTime);
    setCurrentTime(newTime);
    setProgressRingStyle(INITIAL_PROGRESS_RING_STYLE);
    setIsEdit(false);
  };

  const handleEditCancel = () => {
    setIsEdit(false);
    setInputTime(getFormattedTime(maxTime));
  };

  useEffect(() => {
    if (!isRun) clearTimeout(timerIdRef.current);
    else {
      if (currentTime === 0) {
        setIsRun(false);
        alert('Timer goes off');
      } else {
        const timerId = setTimeout(() => {
          const newTime = currentTime - 1000;
          const progress = (newTime / maxTime) * 360;

          setProgressRingStyle(
            progress === 0
              ? { backgroundColor: 'var(--red)' }
              : {
                  backgroundImage: `conic-gradient(from 180deg, var(--green) ${progress}deg, black ${progress}deg)`,
                }
          );
          setCurrentTime(newTime);
        }, 1000);
        timerIdRef.current = timerId;
      }
    }
  }, [isRun, currentTime, maxTime]);

  return (
    <div className={styles.root}>
      <div className={styles.progressRing} style={progressRingStyle}>
        <div className={styles.clock}>
          {isEdit ? (
            <input
              className={styles.timeInput}
              value={inputTime}
              onChange={handleTimeInput}
            />
          ) : (
            <div className={styles.time}>{getFormattedTime(currentTime)}</div>
          )}
          <div className={styles.buttonWrapper}>
            <button
              disabled={isEdit}
              className={styles.startStopButton}
              onClick={() => setIsRun(!isRun)}
            >
              {isRun ? 'STOP' : 'START'}
            </button>
          </div>
          <div className={styles.iconButtonWrapper}>
            {isEdit ? (
              <>
                <button
                  disabled={!isValidTime}
                  className={styles.iconButtonCommit}
                  onClick={handleEditCommit}
                >
                  ✔
                </button>
                <button
                  className={styles.iconButtonCancel}
                  onClick={handleEditCancel}
                >
                  ✘
                </button>
              </>
            ) : (
              <button className={styles.iconButton} onClick={startEditing}>
                <ReactLogo />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
