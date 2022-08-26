import React from 'react';
import { Link } from 'react-router-dom';
import ByCondition from './ByCondition';
import { motion } from 'framer-motion';

const MotionLink = ({ text, url, onClick = null, variants, classes }) => {
  return (
    <ByCondition
      condition={onClick}
      ifFalse={
        <Link className={classes.link} to={url}>
          <motion.p
            whileHover="hover"
            variants={variants}
            transition={{ duration: 0.5 }}
          >
            {text}
          </motion.p>
        </Link>
      }
      ifTrue={
        <Link className={classes.link} to={url} onClick={onClick}>
          <motion.p
            whileHover="hover"
            variants={variants}
            transition={{ duration: 0.5 }}
          >
            {text}
          </motion.p>
        </Link>
      }
    />
  );
};

export default MotionLink;
