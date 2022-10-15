import { styled } from 'material-ui';
import { classObj } from 'utils/styles/breakpoints';

const prefix = 'HomePage';

export const classes = classObj(prefix, 'container', 'canvas');

export const StyledHomePage = styled('div')(() => ({
  [`&.${classes.container}`]: {
    background: 'darkgray',
    height: '100%',
    width: '100%',
    textAlign: 'center',
  },

  [`& .${classes.canvas}`]: {},
}));
