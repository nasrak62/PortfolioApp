import styled from 'styled-components';
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
);

export const StyledWeights = styled('div')(({ height }) => ({
  [`&.${classes.container}`]: {
    width: '100%',
    height: '100%',
    backgroundImage: `linear-gradient(#0c8ee5,#008b44)`,
  },

  [`& .${classes.subContainer}`]: {
    width: '100%',
    padding: '1% 2%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
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
  },

  [`& .${classes.link}`]: {
    textDecoration: 'none',
    border: '1px solid #ffffff',
    borderRadius: 5,
    padding: '1%',
    paddingRight: '2%',
    paddingLeft: '2%',
    color: '#000000',
    backgroundColor: '#ffffff',
    boxShadow: '1px 1px 5px 2px #302c2c',
  },

  [`& .${classes.chartsContainer}`]: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: height,
    overflowY: 'scroll',
  },

  [`& .${classes.chartContainer}`]: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
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
  },

  [`& .${classes.xAxis}`]: {
    color: '#ffffff',
  },
}));
