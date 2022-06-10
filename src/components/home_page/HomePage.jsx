import React, { useRef, useEffect } from "react";
import { createCanvas } from "utils/canvas";

import { StyledHomePage, classes } from "./HomePage.styles";

const HomePage = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (canvasRef?.current) {
      const animationId = createCanvas(canvasRef?.current);

      return () => window.cancelAnimationFrame(animationId);
    }
  }, []);

  return (
    <StyledHomePage className={classes.container}>
      <canvas ref={canvasRef}></canvas>
      {/* <div className={classes.titleContainer}>
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={variants}
          className={classes.title}
        >
          Home Page
        </motion.h1>
      </div> */}
    </StyledHomePage>
  );
};

export default HomePage;
