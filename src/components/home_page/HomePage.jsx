import React, { useRef, useEffect } from 'react';
import init from 'Threejs/Earth/setup';

const HomePage = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    init(canvasRef?.current);
  }, [canvasRef?.current]);

  return <div ref={canvasRef}></div>;
};

export default HomePage;
