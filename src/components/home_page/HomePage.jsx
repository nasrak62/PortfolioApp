import React, { useRef, useEffect } from 'react';
import { init } from 'Threejs/setup';
// import THREE from '../../Threejs/three';
// import { createCanvas } from 'utils/canvas';

// import { StyledHomePage, classes } from './HomePage.styles';
// import BasicWorldDemo from 'Threejs/basic_world';

const HomePage = () => {
  // const [renderer, setRenderer] = useState(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    init(canvasRef?.current);
  }, [canvasRef?.current]);

  return <div ref={canvasRef}></div>;
};

export default HomePage;
