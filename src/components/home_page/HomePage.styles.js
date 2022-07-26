import styled from 'styled-components';
import { motion } from 'framer-motion';

const prefix = 'HomePage';

export const classes = {
  container: `${prefix}-container`,
  titleContainer: `${prefix}-titleContainer`,
  title: `${prefix}-title`,
};

export const StyledHomePage = styled(motion.div)({
  [`&.${classes.container}`]: {
    backgroundImage: `linear-gradient(#001e32,#802047)`,
    width: '100%',
    height: '96%',
  },

  [`& .${classes.titleContainer}`]: {
    width: '100%',
    textAlign: 'center',
  },

  [`& .${classes.title}`]: {
    color: 'white',
  },
});
