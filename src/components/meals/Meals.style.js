import { styled } from 'material-ui';
import { classObj } from 'utils/styles/breakpoints';

const prefix = 'Meal';

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
  'optionsContainer',
  'tableMealContainer',
  'link',
  'titleContainer',
);

export const StyledMeal = styled('div')(({ theme }) => ({
  [`&.${classes.container}`]: {
    width: '100%',
    height: '100%',
    color: '#ffffff',
    backgroundColor: 'rgba(0,2,34)',
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto',
    alignItems: 'center',
    padding: '4% 0% 10% 0%',
    overflowY: 'scroll',
    overflowX: 'hidden',
  },

  [`& .${classes.title}`]: {},

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

  [`& .${classes.optionsContainer}`]: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    padding: '1%',
  },

  [`& .${classes.tableContainer}`]: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },

  [`& .${classes.tableMealContainer}`]: {
    marginTop: '2%',
    width: '100%',
    borderRadius: 5,
    border: '1px solid black',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    padding: '5% 0',
    gap: '20%',
  },

  [`& .${classes.link}`]: {
    textDecoration: 'none',

    [`${theme.breakpoints.down('xl')}`]: {},
  },

  [`& .${classes.titleContainer}`]: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',

    [`${theme.breakpoints.down('xl')}`]: {},
  },
}));
