import { styled, Card } from 'material-ui';
import { classObj } from 'utils/styles/breakpoints';

const prefix = 'TransactionCard';

export const classes = classObj(
  prefix,
  'container',
  'item',
  'itemPrice',
  'itemDate',
  'itemType',
  'buttonContainer',
  'button',
  'updateButton',
  'deleteButton',
  'select',
  'selectOption',
  'card',
  'cardContent',
  'cardActions',
  'cardDisplayContainer',
  'cardDisplayText',
);

export const StyledTransactionCard = styled(Card)({
  [`&.${classes.container}`]: {
    display: 'flex',
    textAlign: 'center',
    paddingLeft: '1%',
    paddingRight: '1%',
    margin: '1%',
    height: 'fit-content',
    borderRadius: 5,

    [`&:nth-child(odd)`]: {
      backgroundColor: 'rgba(0,0,100)',
    },

    [`&:nth-child(even)`]: {
      backgroundColor: 'rgba(0,0,50)',
    },
  },

  [`& .${classes.item}`]: {
    fontSize: 20,
    color: '#ffffff',
    padding: '2%',
    margin: '2%',
    width: '100%',
    backgroundColor: 'inherit',
    textAlign: 'center',
  },

  [`& .${classes.buttonContainer}`]: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: '4%',
  },

  [`& .${classes.button}`]: {
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
    color: 'rgba(255,255,255,0.5)',
    background: 'rgb(2,0,36)',
  },

  [`& .${classes.updateButton}`]: {
    background: 'rgb(2,150,0)',

    [`&:disabled`]: {
      opacity: 1,
      background: 'transparent',
      border: 'none',
      color: 'transparent',
      boxShadow: 'none',
    },
  },

  [`& .${classes.deleteButton}`]: {
    background: 'rgb(100,0,36)',
  },

  [`& .${classes.select}`]: {
    appearance: 'none',
    border: 'none',
    fontSize: 20,
    color: '#ffffff',
    padding: '2%',
    margin: '2%',
    width: '100%',
    minWidth: 'min-content',
    backgroundColor: 'inherit',
    textAlign: 'center',
  },
  [`& .${classes.selectOption}`]: {},

  [`& .${classes.card}`]: {
    height: 'fit-content',
    background: 'inherit',
    overflow: 'hidden',
    width: '100%',
  },

  [`& .${classes.cardContent}`]: {
    height: 'fit-content',
    width: '100%',
  },

  [`& .${classes.cardActions}`]: {
    height: 'fit-content',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },

  [`& .${classes.cardDisplayContainer}`]: {
    height: 'fit-content',
    width: '100%',
    display: 'flex',
    justifyContent: 'start',
    gap: '20%',
  },

  [`& .${classes.cardDisplayText}`]: {
    color: '#ffffff',
    width: '50%',
    display: 'flex',
  },
});
