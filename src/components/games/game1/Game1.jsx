import React, { useRef, useEffect } from 'react';
import { init } from 'Threejs/setup';

const Game1 = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const runId = { value: null };

    init(canvasRef?.current, runId);

    return () => cancelAnimationFrame(runId.value);
  }, [canvasRef?.current]);

  return <div ref={canvasRef}></div>;
};

export default Game1;
