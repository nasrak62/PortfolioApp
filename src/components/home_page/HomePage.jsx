import React, { useRef, useEffect } from 'react';
import init from 'Threejs/Earth/setup';
import { clearAnimation } from 'utils/canvas_utils/animation';
import { StyledHomePage, classes } from './HomePage.styles';

const PLANETS = ['earth', 'sun', 'moon'];

const HomePage = () => {
  const canvasRef = useRef(null);
  const index = Math.round(Math.random() * (PLANETS.length - 1));
  const planet = PLANETS[index];

  useEffect(() => {
    if (canvasRef?.current && planet) {
      const settingsObject = { animationId: null };
      init(canvasRef?.current, settingsObject, planet);

      return () => clearAnimation(settingsObject?.animationId);
    }
  }, [canvasRef?.current]);

  // return <div ref={canvasRef}></div>;
  return (
    <StyledHomePage className={classes.container}>
      <canvas ref={canvasRef} className={classes.canvas}></canvas>
    </StyledHomePage>
  );
};

export default HomePage;
