import styled from 'styled-components';
import { motion } from 'framer-motion';

const prefix = 'TransactionsRow';

export const classes = {
  container: `${prefix}-container`,
  itemDate: `${prefix}-itemDate`,
  itemPrice: `${prefix}-itemPrice`,
  itemDescription: `${prefix}-itemDescription`,
  itemType: `${prefix}-itemType`,
  item: `${prefix}-item`,
  buttonContainer: `${prefix}-buttonContainer`,
  button: `${prefix}-button`,
  updateButton: `${prefix}-updateButton`,
  deleteButton: `${prefix}-deleteButton`,
  select: `${prefix}-select`,
  selectOption: `${prefix}-selectOption`,
};

export const StyledTransactionsRow = styled(motion.div)({
  [`&.${classes.container}`]: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr) 0.5fr',
    textAlign: 'center',
    paddingLeft: '1%',
    paddingRight: '1%',
    margin: '1%',
    borderRadius: 5,

    [`&:nth-child(odd)`]: {
      backgroundColor: '#0D7377',
    },

    [`&:nth-child(even)`]: {
      backgroundColor: '#0E185F',
    },
  },

  [`& .${classes.item}`]: {
    fontSize: 16,
    color: '#ffffff',
    paddingLeft: '1%',
    paddingRight: '2%',
    width: '100%',
    minWidth: 'min-content',
    backgroundColor: 'inherit',
    border: 'none',
    textAlign: 'center',
  },

  [`& .${classes.itemDate}`]: {},

  [`& .${classes.itemPrice}`]: {
    borderLeft: '1px solid white',
  },

  [`& .${classes.itemDescription}`]: {
    borderLeft: '1px solid white',
  },

  [`& .${classes.itemType}`]: {
    borderLeft: '1px solid white',
  },

  [`& .${classes.buttonContainer}`]: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: '4%',
    borderLeft: '1px solid #ffffff',
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
    background: 'inherit',
    color: '#ffffff',
    textAlign: 'center',
    appearance: 'none',
    border: 'none',
    borderLeft: '1px solid white',
  },
  [`& .${classes.selectOption}`]: {},
});
