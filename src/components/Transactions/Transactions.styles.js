import { styled } from 'material-ui';
import { classObj } from '../../utils/styles/breakpoints';

const prefix = 'Transactions';

export const classes = classObj(
  prefix,
  'container',
  'expensesContainer',
  'incomeContainer',
  'title',
  'subTitle',
  'body',
  'header',
  'headerContainer',
  'button',
  'error',
  'link',
  'select',
  'selectOption',
  'infoContainer',
  'total',
  'infoSubContainer',
);

export const StyledTransactions = styled('div')(({ theme }) => ({
  [`&.${classes.container}`]: {
    width: '100%',
    padding: '2%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: 'rgba(0,2,34)',
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

    [`${theme.breakpoints.down('xl')}`]: {
      flexDirection: 'column',
      justifyContent: 'flex-start',
      rowGap: '10%',
      height: '100%',
    },
  },

  [`& .${classes.header}`]: {
    marginBottom: '1%',
  },

  [`& .${classes.headerContainer}`]: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',

    [`${theme.breakpoints.down('xl')}`]: {
      marginTop: '15%',
    },
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

    [`${theme.breakpoints.down('xl')}`]: {
      width: '33%',
    },
  },

  [`& .${classes.selectOption}`]: {
    backgroundColor: '#001e32',
    color: '#ffffff',
    border: 'none',
    borderRadius: 5,
    textAlign: 'center',

    [`${theme.breakpoints.down('xl')}`]: {
      width: '100%',
    },
  },

  [`& .${classes.infoContainer}`]: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1%',
    marginTop: '1%',

    [`${theme.breakpoints.down('xl')}`]: {
      flexDirection: 'column',
      gap: '4%',
      marginTop: '4%',
    },
  },

  [`& .${classes.total}`]: {
    fontSize: 20,
    color: '#ffffff',
  },

  [`& .${classes.infoSubContainer}`]: {
    [`${theme.breakpoints.down('xl')}`]: {
      display: 'flex',
      flexDirection: 'row',
      marginTop: '4%',
      gap: '4%',
      justifyContent: 'center',
    },
  },
}));
