import styled from 'styled-components';
const prefix = 'NavBar';

export const classes = {
  navContainer: `${prefix}-navContainer`,
  container: `${prefix}-container`,
  link: `${prefix}-link`,
};

export const StyledNavBar = styled('div')({
  [`&.${classes.navContainer}`]: {
    backgroundColor: '#001e32',
    display: 'flex',
    flexDirection: 'row',
    paddingTop: '3%',
    paddingBottom: '3%',
    paddingLeft: '2%',
    paddingRight: '2%',
    justifyContent: 'space-between',
    height: '4%',
    width: '100%',
    borderBottom: '1px solid white',
  },

  [`& .${classes.link}`]: {
    color: 'white',
    textDecoration: 'none',
  },

  [`& .${classes.container}`]: {
    display: 'flex',
    flexDirection: 'row',
    columnGap: '8%',
    width: '40%',
  },
});
