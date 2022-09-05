import { styled } from 'material-ui';
import { classObj } from 'utils/styles/breakpoints';

const prefix = 'Login';

export const classes = classObj(prefix, 'container');

export const StyledLogin = styled('div')(({ theme }) => ({
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
