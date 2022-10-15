import { styled } from 'material-ui';
import { classObj } from 'utils/styles/breakpoints';

const prefix = 'RacingCar';

export const classes = classObj(
  prefix,
  'container',
  'carCanvas',
  'networkCanvas',
);

export const StyledRacingCar = styled('div')(() => ({
  [`&.${classes.container}`]: {
    background: 'darkgray',
    height: '100%',
    width: '100%',
    textAlign: 'center',
  },

  [`& .${classes.carCanvas}`]: {
    background: 'lightgray',
  },

  [`& .${classes.networkCanvas}`]: {
    background: 'black',
  },
}));
