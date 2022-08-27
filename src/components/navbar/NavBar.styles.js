import { AppBar, styled } from 'material-ui';
import { classObj } from 'utils/styles/breakpoints';

const prefix = 'NavBar';

export const classes = classObj(
  prefix,
  'navContainer',
  'container',
  'link',
  'logo',
);

export const StyledNavBar = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== 'cssOpenMenu',
})(({ theme, cssOpenMenu }) => ({
  [`&.${classes.navContainer}`]: {
    backgroundColor: '#001e32',
    display: 'flex',
    flexDirection: 'row',
    paddingTop: '1%',
    paddingBottom: '2%',
    paddingLeft: '1%',
    paddingRight: '1%',
    justifyContent: 'space-between',
    height: '4%',
    width: cssOpenMenu ? '100%' : 'fit-content',
    borderBottom: '1px solid white',
    left: '0%',

    [`${theme.breakpoints.down('xl')}`]: {
      flexDirection: 'column',
      justifyContent: 'center',
      height: 'fit-content',
      width: 'fit-content',
      zIndex: 1,
      padding: cssOpenMenu ? '3% 4%' : 0,
      borderBottom: cssOpenMenu ? '1px solid white' : 'none',
    },
  },

  [`& .${classes.link}`]: {
    color: 'white',
    textDecoration: 'none',
    width: 'fit-content',

    [`${theme.breakpoints.down('xl')}`]: {
      margin: cssOpenMenu ? '2%' : 0,
      padding: cssOpenMenu ? '2%' : 0,
    },
  },

  [`& .${classes.container}`]: {
    display: 'flex',
    flexDirection: 'row',
    columnGap: '8%',
    width: '50%',
    margin: '1%',

    [`${theme.breakpoints.down('xl')}`]: {
      flexDirection: 'column',
      justifyContent: 'center',
      height: 'fit-content',
      width: 'fit-content',
    },
  },

  [`& .${classes.logo}`]: {
    width: '100%',
    maxWidth: 50,
  },
}));
