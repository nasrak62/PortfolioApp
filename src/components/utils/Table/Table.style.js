import styled from 'styled-components';
import { classObj } from 'utils/styles/breakpoints';

const prefix = 'Table';

export const classes = classObj(
  prefix,
  'container',
  'row',
  'column',
  'headColumn',
  'headContainer',
  'headRow',
);

export const StyledTable = styled('table')(() => ({
  [`&.${classes.container}`]: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(30,30,80)',
    color: '#ffffff',
    overflowY: 'scroll',
    tableLayout: 'fixed',
  },

  [`& .${classes.row}`]: {
    width: '100%',
  },

  [`& .${classes.headRow}`]: {
    width: '100%',
  },

  [`& .${classes.column}`]: {
    width: `${100 / 8}%`,
    textAlign: 'center',
  },

  [`& .${classes.headColumn}`]: {
    width: `${100 / 8}%`,
    textAlign: 'center',
    fontSize: '1.3em',
  },

  [`& .${classes.headContainer}`]: {},
}));
