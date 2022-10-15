import React, { useState } from 'react';
import Answers from './Answers';
import { StyledCategoriesGame, classes } from './CategoriesGame.style';
import CategoriesSlider from './CategoriesSlider';
import InitGame from './InitGame';

const CategoriesGame = () => {
  const [currentLetter, setCurrentLetter] = useState(null);

  if (currentLetter === null) {
    return (
      <StyledCategoriesGame className={classes.container}>
        <InitGame
          classes={classes}
          setCurrentLetter={setCurrentLetter}></InitGame>
      </StyledCategoriesGame>
    );
  }

  return (
    <StyledCategoriesGame className={classes.container}>
      <InitGame></InitGame>
      <h1>Current Letter: {currentLetter}</h1>
      <CategoriesSlider></CategoriesSlider>
      <Answers></Answers>
    </StyledCategoriesGame>
  );
};

export default CategoriesGame;
