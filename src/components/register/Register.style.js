import { styled } from 'material-ui';
import { classObj } from 'utils/styles/breakpoints';

const prefix = 'Register';

export const classes = classObj(prefix, 'container');

export const StyledRegister = styled('div')(({ theme }) => ({
  [`&.${classes.container}`]: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: 'rgba(0,2,34)',

    [`${theme.breakpoints.down('sm')}`]: {
      paddingTop: '50%',
    },
  },
}));
