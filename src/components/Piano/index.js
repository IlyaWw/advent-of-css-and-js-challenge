import React, { useEffect, useRef } from 'react';
import { ReactComponent as PianoImage } from './images/piano.svg';

import styles from './index.module.css';
import key1 from './audio/key-1.mp3';
import key2 from './audio/key-2.mp3';
import key3 from './audio/key-3.mp3';
import key4 from './audio/key-4.mp3';
import key5 from './audio/key-5.mp3';
import key6 from './audio/key-6.mp3';
import key7 from './audio/key-7.mp3';
import key8 from './audio/key-8.mp3';
import key9 from './audio/key-9.mp3';
import key10 from './audio/key-10.mp3';
import key11 from './audio/key-11.mp3';
import key12 from './audio/key-12.mp3';
import key13 from './audio/key-13.mp3';
import key14 from './audio/key-14.mp3';
import key15 from './audio/key-15.mp3';
import key16 from './audio/key-16.mp3';
import key17 from './audio/key-17.mp3';
import key18 from './audio/key-18.mp3';
import key19 from './audio/key-19.mp3';
import key20 from './audio/key-20.mp3';
import key21 from './audio/key-21.mp3';
import key22 from './audio/key-22.mp3';
import key23 from './audio/key-23.mp3';

const audioFiles = [
  key1,
  key2,
  key3,
  key4,
  key5,
  key6,
  key7,
  key8,
  key9,
  key10,
  key11,
  key12,
  key13,
  key14,
  key15,
  key16,
  key17,
  key18,
  key19,
  key20,
  key21,
  key22,
  key23,
];

const Piano = () => {
  const pianoRef = useRef(null);

  useEffect(() => {
    pianoRef.current.childNodes.forEach((node, idx) => {
      node.audioFile = new Audio(audioFiles[idx]);
    });
  }, []);

  const handleClick = (e) => {
    e.target.audioFile.play();
  };

  return (
    <div className={styles.root}>
      <PianoImage
        ref={pianoRef}
        className={styles.piano}
        onClick={handleClick}
      />
    </div>
  );
};

export default Piano;
