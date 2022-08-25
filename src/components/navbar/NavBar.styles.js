const prefix = 'NavBar';
import { AppBar, styled } from 'material-ui';

export const classes = {
  navContainer: `${prefix}-navContainer`,
  container: `${prefix}-container`,
  link: `${prefix}-link`,
};

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
      padding: cssOpenMenu ? '3% 2%' : '1%',
    },
  },

  [`& .${classes.link}`]: {
    color: 'white',
    textDecoration: 'none',
    width: 'fit-content',

    [`${theme.breakpoints.down('xl')}`]: {
      margin: '2%',
      padding: '2%',
    },
  },

  [`& .${classes.container}`]: {
    display: 'flex',
    flexDirection: 'row',
    columnGap: '8%',
    width: '50%',

    [`${theme.breakpoints.down('xl')}`]: {
      flexDirection: 'column',
      justifyContent: 'center',
      height: 'fit-content',
      width: 'fit-content',
    },
  },
}));
