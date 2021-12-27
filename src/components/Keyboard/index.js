import React, { useState } from 'react';

import styles from './index.module.css';

const firstRow = '`1234567890-=',
  secondRow = 'QWERTYUIOP[]\\',
  thirdRow = "ASDFGHJKL;'",
  fourthRow = 'ZXCVBNM,./';

const chars = [...firstRow, ...secondRow, ...thirdRow, ...fourthRow];

const Keyboard = () => {
  const getRandomKey = () => chars[Math.floor(Math.random() * chars.length)];

  const [jigglingKey, setJigglingKey] = useState(getRandomKey);

  const keyPress = (e) => {
    if (jigglingKey === e.key.toUpperCase()) {
      setJigglingKey(getRandomKey());
    }
  };

  const getKey = (char) => {
    const isJiggling = jigglingKey === char;

    return (
      <div key={char} className={isJiggling ? styles.keyJiggling : styles.key}>
        {char}
      </div>
    );
  };

  const getRow = (row) => row.split('').map((char) => getKey(char));

  return (
    <div className={styles.root} tabIndex="0" onKeyDown={keyPress}>
      <div className={styles.keyboard}>
        <div className={styles.row}>
          {getRow(firstRow)}
          <div className={styles.keyTab}>DEL</div>
        </div>
        <div className={styles.row}>
          <div className={styles.keyTab}>TAB</div>
          {getRow(secondRow)}
        </div>
        <div className={styles.row}>
          <div className={styles.keyCaps}>CAPS</div>
          {getRow(thirdRow)}
          <div className={styles.keyCaps}>ENTER</div>
        </div>
        <div className={styles.row}>
          <div className={styles.keyShift}>SHIFT</div>
          {getRow(fourthRow)}
          <div className={styles.keyShift}>SHIFT</div>
        </div>
      </div>
    </div>
  );
};

export default Keyboard;
