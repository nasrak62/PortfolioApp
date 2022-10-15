import React, { useCallback, useState } from 'react';

const InitGame = ({ classes, setCurrentLetter }) => {
  const ALPHABET = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];

  const [displayLetter, setDisplayLetter] = useState('A');

  const randomIndex = useCallback((listLength) => {
    return Math.round(Math.random() * listLength);
  });

  const chooseAnimation = useCallback(() => {
    const listLength = ALPHABET.length;
    let index = randomIndex(listLength);

    setDisplayLetter(ALPHABET[index]);

    let time = 100;

    for (let i = 0; i <= 100; i++) {
      setTimeout(() => {
        index = randomIndex(listLength);

        setDisplayLetter(ALPHABET[index]);

        i === 100 && setCurrentLetter(displayLetter);
      }, time + i * 10);
    }
  }, [randomIndex]);

  return (
    <div className={classes.initContainer}>
      <div className={classes.letterContainer}>
        <h1 className={classes.currentLetter}>{displayLetter}</h1>
      </div>
      <div className={classes.initButtonContainer}>
        <button className={classes.initGameButton} onClick={chooseAnimation}>
          Choose A Letter
        </button>
        <button className={classes.changeCategories}>Change Categories</button>
      </div>
    </div>
  );
};

export default InitGame;
