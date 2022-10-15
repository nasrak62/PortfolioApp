import { styled } from 'material-ui';
import { classObj } from 'utils/styles/breakpoints';

const prefix = 'Foods';

export const classes = classObj(
  prefix,
  'container',
  'titleContainer',
  'optionsContainer',
  'link',
  'button',
);

export const StyledFoods = styled('div')(({ theme }) => ({
  [`&.${classes.container}`]: {
    width: '100%',
    height: '100%',
    color: '#ffffff',
    backgroundColor: 'rgba(0,2,34)',
    display: 'flex',
    flexDirection: 'column',

    [`${theme.breakpoints.down('xl')}`]: {
      marginBottom: '4%',
      paddingBottom: '4%',
    },
  },

  [`& .${classes.titleContainer}`]: {
    marginTop: '4%',
    display: 'flex',
    justifyContent: 'center',
    [`${theme.breakpoints.down('xl')}`]: {},
  },

  [`& .${classes.optionsContainer}`]: {
    margin: '4% 0%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    color: '#ffffff',

    [`${theme.breakpoints.down('xl')}`]: {},
  },

  [`& .${classes.link}`]: {
    textDecoration: 'none',

    [`${theme.breakpoints.down('xl')}`]: {},
  },

  [`& .${classes.button}`]: {
    [`${theme.breakpoints.down('xl')}`]: {
      width: '80%',
      minWidth: 200,
      margin: 'auto',
    },
  },
}));
