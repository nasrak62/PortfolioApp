import React, { useEffect, useRef } from 'react';
import { classes, StyledRacingCar } from './RacingCar.style';
import { useWindowSize } from 'hooks/window';
import { handleCanvas } from './canvas';
import { clearAnimation } from 'utils/canvas_utils/animation';

const RacingCar = () => {
  const carCanvasRef = useRef(null);
  const networkCanvasRef = useRef(null);
  const windowSize = useWindowSize();

  useEffect(() => {
    if (carCanvasRef?.current && networkCanvasRef?.current) {
      const settingsObject = { animationId: null };

      carCanvasRef.current.height = windowSize.height;
      carCanvasRef.current.width = windowSize.width * 0.4;

      networkCanvasRef.current.height = windowSize.height;
      networkCanvasRef.current.width = windowSize.width * 0.5;

      handleCanvas(
        carCanvasRef?.current,
        networkCanvasRef?.current,
        settingsObject,
      );

      return () => clearAnimation(settingsObject?.animationId);
    }
  }, [carCanvasRef.current, networkCanvasRef.current]);

  return (
    <StyledRacingCar className={classes.container}>
      <canvas ref={carCanvasRef} className={classes.carCanvas}></canvas>
      <canvas ref={networkCanvasRef} className={classes.networkCanvas}></canvas>
    </StyledRacingCar>
  );
};

export default RacingCar;
