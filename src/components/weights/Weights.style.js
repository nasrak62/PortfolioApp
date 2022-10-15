import { styled } from 'material-ui';
import { classObj } from 'utils/styles/breakpoints';

const prefix = 'Weights';

export const classes = classObj(
  prefix,
  'container',
  'header',
  'headerContainer',
  'linkContainer',
  'link',
  'chartsContainer',
  'chartContainer',
  'chartTitleContainer',
  'chart',
  'subContainer',
  'chartInner',
  'xAxis',
  'button',
);

export const StyledWeights = styled('div')(({ theme, height }) => ({
  [`&.${classes.container}`]: {
    width: '100%',
    height: '100%',
    color: '#ffffff',
    backgroundColor: 'rgba(0,2,34)',

    [`${theme.breakpoints.down('xl')}`]: {
      marginBottom: '4%',
      paddingBottom: '4%',
    },
  },

  [`& .${classes.subContainer}`]: {
    width: '100%',
    padding: '4% 2% 2% 2%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',

    [`${theme.breakpoints.down('xl')}`]: {
      padding: '1% 2%',
    },
  },

  [`& .${classes.headerContainer}`]: {
    width: '100%',
    textAlign: 'center',
  },

  [`& .${classes.header}`]: {
    color: '#ffffff',
  },

  [`& .${classes.linkContainer}`]: {
    width: '100%',
    textAlign: 'center',
    marginBottom: '3%',
    marginTop: '3%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: '2%',

    [`${theme.breakpoints.down('xl')}`]: {
      flexDirection: 'column',
      gap: '2%',
      alignItems: 'center',
      justifyContent: 'space-evenly',
    },
  },

  [`& .${classes.link}`]: {
    textDecoration: 'none',

    [`${theme.breakpoints.down('xl')}`]: {
      marginTop: '2%',
      width: '100%',
    },
  },

  [`& .${classes.chartsContainer}`]: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: height,
    overflowY: 'scroll',
    msOverflowStyle: 'none',
    scrollbarWidth: 'none',
    paddingBottom: '2%',

    [`${theme.breakpoints.down('xl')}`]: {
      paddingBottom: 0,
    },
  },

  [`& .${classes.chartContainer}`]: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',

    [`${theme.breakpoints.down('xl')}`]: {
      marginBottom: '10%',
      paddingBottom: '10%',
    },
  },

  [`& ::-webkit-scrollbar`]: {
    display: 'none',
    color: 'inherit',
    width: 2,
  },

  [`& .${classes.chartTitleContainer}`]: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    textAlign: 'center',
    margin: '2% 0',
  },

  [`& .${classes.chart}`]: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: '#ffffff',
    padding: '4% 2%',
    borderRadius: 10,
    height: '100%',
  },

  [`& .${classes.chartInner}`]: {
    backgroundColor: '#000000',
    color: '#ffffff',
    borderRadius: 5,
  },

  [`& .${classes.xAxis}`]: {
    color: '#ffffff',
  },

  [`& .${classes.button}`]: {
    [`${theme.breakpoints.down('xl')}`]: {
      width: '80%',
      minWidth: 200,
      margin: 'auto',
    },
  },
}));
