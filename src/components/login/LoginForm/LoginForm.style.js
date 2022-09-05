import { styled } from 'material-ui';
import { classObj } from 'utils/styles/breakpoints';

const prefix = 'LoginForm';

export const classes = classObj(
  prefix,
  'container',
  'subContainer',
  'inputContainer',
  'formContainer',
  'title',
  'errors',
  'buttonContainer',
  'button',
  'label',
  'input',
);

export const StyledLoginForm = styled('div')(({ theme }) => ({
  [`&.${classes.subContainer}`]: {
    display: 'flex',
    flexDirection: 'column',
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: '#ffffff',

    [`${theme.breakpoints.down('sm')}`]: {
      width: '100%',
    },
  },

  [`& .${classes.inputContainer}`]: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'flex-start',
    marginBottom: '3%',
    gap: '10%',

    [`${theme.breakpoints.down('sm')}`]: {},
  },

  [`& .${classes.formContainer}`]: {
    width: '80%',
    margin: 'auto',

    [`${theme.breakpoints.down('sm')}`]: {
      width: '95%',
    },
  },

  [`& .${classes.title}`]: {
    margin: 'auto',
    marginTop: '4%',
    marginBottom: '4%',
  },

  [`& .${classes.errors}`]: {
    margin: 'auto',
    marginTop: '4%',
    marginBottom: '4%',
    fontSize: 16,
    color: 'red',
  },

  [`& .${classes.buttonContainer}`]: {
    margin: 'auto',
    marginTop: '4%',
    marginBottom: '4%',
    width: '100%',
  },

  [`& .${classes.button}`]: {
    padding: '3%',
    paddingLeft: '6%',
    paddingRight: '6%',
    borderRadius: 5,
    fontSize: 16,
    boxShadow: '1px 1px 1px 1px rgba(0,0,0,0.5)',
    border: '1px solid transparent',
    backgroundColor: 'rgba(180,60,150,0.5)',
    color: '#ffffff',

    [`&:hover`]: {
      backgroundColor: 'rgba(180,60,150,1)',
      transform: 'scale(1.1)',
    },
  },

  [`& .${classes.label}`]: {
    fontSize: 16,
    width: '20%',
    textAlign: 'left',
  },

  [`& .${classes.input}`]: {
    width: '60%',
    padding: '2%',
    color: '#ffffff',
    backgroundColor: 'rgba(120,20,80,0.5)',
    fontSize: 16,
  },
}));
