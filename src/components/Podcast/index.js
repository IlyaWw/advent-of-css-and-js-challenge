import React, { useState } from 'react';

import episodes from './episodes';
import cover from './images/podcast-cover.png';
import styles from './index.module.css';

const SHIFT_KEYCODE = 16;

const Podcast = () => {
  const [isShiftPressed, setIsShiftPressed] = useState(false);
  const [lastCheckedId, setLastCheckedId] = useState(1);
  const [episodesState, setEpisodesState] = useState(
    episodes.reduce((acc, cur) => {
      cur.checked = false;
      acc[cur.id] = cur;
      return acc;
    }, {})
  );

  const handleCheckboxClick = (e) => {
    const {
      target: { id, checked },
    } = e;

    if (isShiftPressed) {
      const newEpisodes = {};
      const asc = Number(lastCheckedId) < Number(id);

      for (
        let i = Number(lastCheckedId);
        asc ? i <= Number(id) : i >= Number(id);
        asc ? i++ : i--
      ) {
        newEpisodes[i] = {
          ...episodesState[i],
          checked: episodesState[lastCheckedId].checked,
        };
      }

      setEpisodesState({
        ...episodesState,
        ...newEpisodes,
      });
    } else {
      setLastCheckedId(id);
      setEpisodesState({
        ...episodesState,
        [id]: { ...episodesState[id], checked },
      });
    }
  };

  const handleKeyDown = (e) => {
    const { keyCode } = e;
    if (keyCode === SHIFT_KEYCODE) {
      setIsShiftPressed(true);
    }
  };

  const handleKeyUp = (e) => {
    const { keyCode } = e;
    if (keyCode === SHIFT_KEYCODE) {
      setIsShiftPressed(false);
    }
  };

  return (
    <div
      className={styles.root}
      onKeyDown={handleKeyDown}
      onKeyUp={handleKeyUp}
    >
      <div className={styles.card}>
        <img className={styles.cardImage} src={cover} alt="Podcast cover" />
        <div className={styles.cardContent}>
          <p className={styles.cardTitle}>
            Listen to all the compressed.fm episodes
          </p>
          <ul>
            {Object.keys(episodesState).map((id) => (
              <li key={id}>
                <input
                  id={id}
                  type="checkbox"
                  onChange={handleCheckboxClick}
                  checked={episodesState[id].checked}
                />
                <label htmlFor={id} className={styles.styledCheckbox}>
                  {`${id} || ${episodesState[id].name}`}
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Podcast;
