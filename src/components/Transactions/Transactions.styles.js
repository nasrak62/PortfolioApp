import styled from 'styled-components';
import { BREAK_POINTS } from '../../utils/styles/breakpoints';

const prefix = 'Transactions';

export const classes = {
  container: `${prefix}-container`,
  expensesContainer: `${prefix}-expensesContainer`,
  incomeContainer: `${prefix}-incomeContainer`,
  title: `${prefix}-title`,
  subTitle: `${prefix}-subTitle`,
  body: `${prefix}-body`,
  header: `${prefix}-header`,
  headerContainer: `${prefix}-headerContainer`,
  button: `${prefix}-button`,
  error: `${prefix}-error`,
  link: `${prefix}-link`,
  select: `${prefix}-select`,
  selectOption: `${prefix}-selectOption`,
  infoContainer: `${prefix}-infoContainer`,
  total: `${prefix}-total`,
};

export const StyledTransactions = styled('div')({
  [`&.${classes.container}`]: {
    width: '100%',
    padding: '2%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    backgroundImage: `linear-gradient(#001e32,#802047)`,
    height: '96%',
  },

  [`& .${classes.body}`]: {
    width: '100%',
    padding: '2%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'transparent',
    height: '96%',
    overflowY: 'scroll',
    overflowX: 'hidden',
    marginBottom: '2%',

    [`&::-webkit-scrollbar`]: {
      width: 2,
      color: '#ffffff',
    },

    [`@media (max-width: ${BREAK_POINTS.SM})`]: {
      flexDirection: 'column',
      justifyContent: 'flex-start',
      rowGap: '10%',
    },
  },

  [`& .${classes.header}`]: {
    marginBottom: '1%',
  },

  [`& .${classes.headerContainer}`]: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },

  [`& .${classes.expensesContainer}`]: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },

  [`& .${classes.title}`]: {
    color: '#ffffff',
    textAlign: 'center',
    fontWeight: 'bold',
  },

  [`& .${classes.subTitle}`]: {
    marginBottom: '5%',
  },

  [`& .${classes.button}`]: {
    margin: 'auto',
    padding: '2%',
    paddingLeft: '3%',
    paddingRight: '3%',
    fontSize: 16,
    borderRadius: 5,
    boxShadow:
      'inset 0px 3px 5px rgba(255,255,255,0.5), 0px 0px 10px rgba(0,0,0,0.15)',
    cursor: 'pointer',
    border: 'none',
    fontFamily: `'Comfortaa', cursive`,
    color: 'rgba(255,255,255,0.9)',
    background: 'rgb(50,0,120)',
    textDecoration: 'none',
  },

  [`& .${classes.link}`]: {
    textDecoration: 'none',
  },

  [`& .${classes.error}`]: {
    fontSize: 20,
    color: 'red',
    fontWeight: 'bold',
    marginTop: '1%',
  },

  [`& .${classes.select}`]: {
    backgroundColor: 'inherit',
    color: '#ffffff',
    border: '1px solid #ffffff',
    borderRadius: 5,
    width: '20%',
    textAlign: 'center',
  },

  [`& .${classes.selectOption}`]: {
    backgroundColor: '#001e32',
    color: '#ffffff',
    border: 'none',
    borderRadius: 5,
    textAlign: 'center',
  },

  [`& .${classes.infoContainer}`]: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1%',
    marginTop: '1%',
  },

  [`& .${classes.total}`]: {
    fontSize: 20,
    color: '#ffffff',
  },
});
