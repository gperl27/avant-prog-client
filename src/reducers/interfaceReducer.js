import {
  SHOW_NAV,
  HIDE_NAV,
} from '../actions/types';

const initialState = {
  sidebarIsShowing: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SHOW_NAV:
      return { ...state, sidebarIsShowing: true };
    case HIDE_NAV:
      return { ...state, sidebarIsShowing: false };
    default:
      return state;
  }
}
