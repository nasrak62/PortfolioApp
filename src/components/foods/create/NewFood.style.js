import { styled } from 'material-ui';
import { classObj } from 'utils/styles/breakpoints';

const prefix = 'NewFood';

export const classes = classObj(
  prefix,
  'container',
  'inputsContainer',
  'titleContainer',
  'fieldInputsContainer',
  'fieldInputContainer',
  'buttonsContainer',
  'backButton',
  'link',
  'label',
  'scrapeButton',
  'scrapeContainer',
);

export const StyledNewFood = styled('div')(({ theme }) => ({
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

  [`& .${classes.inputsContainer}`]: {
    marginTop: '4%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    [`${theme.breakpoints.down('xl')}`]: {},
  },

  [`& .${classes.titleContainer}`]: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    [`${theme.breakpoints.down('xl')}`]: {},
  },

  [`& .${classes.fieldInputsContainer}`]: {
    marginTop: '3%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    [`${theme.breakpoints.down('xl')}`]: {},
  },

  [`& .${classes.fieldInputContainer}`]: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    [`${theme.breakpoints.down('xl')}`]: {},
  },

  [`& .${classes.buttonsContainer}`]: {
    marginTop: '3%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    gap: '10%',
    [`${theme.breakpoints.down('xl')}`]: {},
  },

  [`& .${classes.backButton}`]: {
    backgroundColor: '#ad19d2',

    [':hover']: {
      backgroundColor: '#ad19d2',
    },
    [`${theme.breakpoints.down('xl')}`]: {},
  },

  [`& .${classes.link}`]: {
    textDecoration: 'none',

    [`${theme.breakpoints.down('xl')}`]: {},
  },

  [`& .${classes.label}`]: {
    width: '25%',
    [`${theme.breakpoints.down('xl')}`]: {},
  },

  [`& .${classes.scrapeButton}`]: {
    backgroundColor: '#08a113',

    [':hover']: {
      backgroundColor: '#08a113',
    },

    [`${theme.breakpoints.down('xl')}`]: {},
  },

  [`& .${classes.scrapeContainer}`]: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    marginTop: '3%',

    [`${theme.breakpoints.down('xl')}`]: {},
  },
}));
