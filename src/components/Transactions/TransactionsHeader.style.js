import styled from 'styled-components';

const prefix = 'TransactionsHeader';

export const classes = {
  container: `${prefix}-container`,
  header: `${prefix}-header`,
};

export const StyledTransactionsHeader = styled('div')({
  [`&.${classes.container}`]: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr) 0.5fr',
    textAlign: 'center',
    paddingLeft: '1%',
    paddingRight: '1%',
  },

  [`& .${classes.header}`]: {
    fontSize: 16,
    color: '#ffffff',
    width: '100%',
    paddingLeft: '1%',
    paddingRight: '2%',
  },
});
