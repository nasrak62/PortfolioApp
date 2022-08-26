import { logger } from './logger';

export const STORAGE = {
  TOKEN: 'token',
  LOGGED_IN: 'loggedIn',
};

export const saveToMemory = (name, value) => {
  localStorage.setItem(name, JSON.stringify(value));
};

export const loadFromMemory = (name) => {
  try {
    const value = JSON.parse(localStorage.getItem(name));

    return value;
  } catch (e) {
    logger(e);
  }
};
