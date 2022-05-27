import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { createCanvas } from "utils/canvas";

import { StyledHomePage, classes } from "./HomePage.styles";

const HomePage = () => {
  const canvasRef = useRef(null);

  const variants = {
    hidden: { opacity: 0, scale: 1 },
    visible: { opacity: 1, scale: 1.1, drag: "x" },
  };

  console.log(canvasRef);

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
