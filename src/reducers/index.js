
import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import interfaceReducer from './interfaceReducer';

const rootReducer = combineReducers({
  form,
  interface: interfaceReducer,
});

export default rootReducer;
