import React, { useState } from 'react';

import styles from './index.module.css';

const MIN = 0.0;
const MAX = 100.0;

const Slider = () => {
  const [price, setPrice] = useState((MAX + MIN) / 2);

  const handleSlider = (e) => {
    setPrice(e.target.value);
  };

  return (
    <div className={styles.root}>
      <div className={styles.card}>
        <label className={styles.label}>
          <sup>$</sup>
          {price}
        </label>
        <input
          className={styles.input}
          type="range"
          min={MIN}
          max={MAX}
          step={0.01}
          value={price}
          onInput={handleSlider}
          style={{
            background: `linear-gradient(90deg, var(--pink) 0 ${price}%, var(--gray) ${price}% 100%)`,
          }}
        />
        <button className={styles.button}>BUY NOW</button>
      </div>
    </div>
  );
};

export default Slider;
