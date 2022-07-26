import styled from 'styled-components';
import { classObj } from 'utils/styles/breakpoints';

const prefix = 'NewMeal';

export const classes = classObj(
  prefix,
  'container',
  'title',
  'searchContainer',
  'nameContainer',
  'nameLabel',
  'nameInput',
  'overviewContainer',
  'tableContainer',
  'overviewContainerTitle',
  'chartsContainer',
  'chartContainer',
  'button',
  'buttonContainer',
);

export const StyledNewMeal = styled('div')(() => ({
  [`&.${classes.container}`]: {
    width: '100%',
    height: '100%',
    backgroundImage: `linear-gradient(#b3acac,#000000)`,
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto',
    alignItems: 'center',
    paddingBottom: '10%',
    overflowY: 'scroll',
    overflowX: 'hidden',
    justifyContent: 'space-between',
  },

  [`& .${classes.title}`]: {
    width: '100%',
    margin: '3% auto',
  },

  [`& .${classes.searchContainer}`]: {
    display: 'flex',
    flexDirection: 'row',
    gap: '2%',
    width: '50%',
    margin: '2% 0',
  },

  [`& .${classes.nameContainer}`]: {
    display: 'flex',
    flexDirection: 'row',
    gap: '2%',
    width: '50%',
    margin: '2% 0',
  },

  [`& .${classes.nameLabel}`]: {
    width: '30%',
  },

  [`& .${classes.nameInput}`]: {
    width: '70%',
    padding: '2% 2%',
    borderRadius: 5,
    boxShadow: '2px 2px black; 2px 2px black',
  },

  [`& .${classes.overviewContainer}`]: {
    width: '70%',
    backgroundColor: '#bbbbbb',
    boxShadow: '2px 2px black; 2px 2px black',
    display: 'flex',
    borderRadius: 5,
    flexDirection: 'column',
    marginBottom: '5%',
  },

  [`& .${classes.tableContainer}`]: {
    width: '70%',
    backgroundColor: '#eeeeee',
    boxShadow: '2px 2px black; 2px 2px black',
    margin: '2% 0',
    borderRadius: 5,
  },

  [`& .${classes.overviewContainerTitle}`]: {
    margin: '2% auto',
  },

  [`& .${classes.chartsContainer}`]: {
    margin: '2% 0',
    width: '100%',
    backgroundColor: '#eeeeee',
  },

  [`& .${classes.chartContainer}`]: {
    width: '100%',
    backgroundColor: '#eeeeee',
  },

  [`& .${classes.button}`]: {
    backgroundColor: '#eeeeee',
    boxShadow: '2px 2px black; 2px 2px black',
    margin: '3% 0',
    borderRadius: 5,
    padding: '1% 3%',
    width: '30%',
  },

  [`& .${classes.buttonContainer}`]: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
}));
