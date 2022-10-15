import { styled } from 'material-ui';
import { classObj } from 'utils/styles/breakpoints';

const prefix = 'CategoriesGame';

export const classes = classObj(
  prefix,
  'container',
  'initGameButton',
  'initButtonContainer',
  'initContainer',
  'currentLetter',
  'letterContainer',
  'changeCategories',
);

export const StyledCategoriesGame = styled('div')(() => ({
  [`&.${classes.container}`]: {
    width: '100%',
    height: '100%',
    color: '#ffffff',
    backgroundColor: 'rgba(0,2,34)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },

  [`& .${classes.initGameButton}`]: {
    color: 'black',
    boxSizing: 'border-box',
    minWidth: 150,
    minHeight: 150,
    width: '10vw',
    height: '10vw',
    borderRadius: '100%',
    border: '5px red solid',
    backgroundColor: 'red',
    boxShadow: '5px 5px 7px rgba(100,100,100,1), 5px 5px 7px rgba(50,50,50,1)',

    '&:hover': {
      transform: 'scale(1.1)',
    },

    '&:active': {
      boxShadow: '2px 2px 2px rgba(50,50,50,1)',
    },
  },

  [`& .${classes.initButtonContainer}`]: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },

  [`& .${classes.initContainer}`]: {
    marginTop: '4%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    height: '100%',
  },

  [`& .${classes.currentLetter}`]: {
    color: '#ffffff',
  },

  [`& .${classes.letterContainer}`]: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },

  [`& .${classes.changeCategories}`]: {
    backgroundColor: '#222222',
    color: '#ffffff',
    borderRadius: '5px',
    border: '1px solid #222222',
    padding: '0% 2%',
    boxSizing: 'border-box',
    width: '15%',
    minWidth: 'fit-content',
    height: '20%',
  },
}));
