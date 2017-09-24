import STATE from './stateReducer';
import CASES from './casesReducer';

import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  STATE,
  CASES,
  form: formReducer
});

export default rootReducer;
