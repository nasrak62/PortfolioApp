import styled from 'styled-components';
import { classObj } from 'utils/styles/breakpoints';

const prefix = 'ChangeWeight';

export const classes = classObj(
  prefix,
  'container',
  'header',
  'titleContainer',
  'title',
  'errors',
  'done',
  'link',
  'options',
  'inputContainer',
  'innerInput',
  'label',
);

export const StyledChangeWeight = styled('div')({
  [`&.${classes.container}`]: {
    width: '100%',
    height: '100%',
    backgroundColor: `rgb(0,2,34)`,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '2%',
    marginTop: '2%',
  },

  [`& .${classes.titleContainer}`]: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    color: '#ffffff',
  },

  [`& .${classes.title}`]: {
    margin: '2% 0',
    color: '#ffffff',
  },

  [`& .${classes.label}`]: {
    margin: '2% 0',
    color: '#ffffff',
    width: '25%',
  },

  [`& .${classes.errors}`]: {
    margin: '2% 0',
    color: 'red',
    textAlign: 'center',
  },

  [`& .${classes.done}`]: {
    margin: '2% 0',
    color: 'green',
    textAlign: 'center',
  },

  [`& .${classes.link}`]: {
    textDecoration: 'none',
  },

  [`& .${classes.options}`]: {
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'space-evenly',
    width: '50%',
    marginTop: '2%',
  },

  [`& .${classes.inputContainer}`]: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '50%',
  },

  [`& .${classes.innerInput}`]: {
    textAlign: 'center',
    width: '75%',
  },
});
