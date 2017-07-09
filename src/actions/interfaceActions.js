import {
  SHOW_NAV,
  HIDE_NAV,
} from './interfaceTypes';

export const showNav = () => ({ type: SHOW_NAV });

export const hideNav = () => ({ type: HIDE_NAV });
